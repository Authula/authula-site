"use server";

import { headers } from "next/headers";

import z from "zod";

import { resend } from "@/lib/resend";
import { ratelimit } from "@/lib/ratelimit";
import { ENV_CONFIG } from "@/constants/env-config";

const validateDataSchema = z.object({
  email: z.email(),
});

export type SubscribeResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function subscribeToMailingList(
  email: string,
): Promise<SubscribeResult> {
  try {
    const validationResult = validateDataSchema.safeParse({
      email,
    });
    if (!validationResult.success) {
      return { success: false, error: validationResult.error.message };
    }

    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headersList.get("x-real-ip") ??
      "unknown";

    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return {
        success: false,
        error: "Too many requests. Please try again later.",
      };
    }

    await resend.contacts.create({
      email,
      segments: [
        {
          id: ENV_CONFIG.resend.segmentId,
        },
      ],
    });
    return {
      success: true,
      message: "Successfully subscribed to mailing list.",
    };
  } catch (error) {
    console.error("Failed to subscribe to mailing list:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
