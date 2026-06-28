"use server";

import { headers } from "next/headers";

import z from "zod";

import { resend } from "@/lib/resend";
import { ratelimit } from "@/lib/ratelimit";
import { ENV_CONFIG } from "@/constants/env-config";

const validateDataSchema = z.object({
  email: z.email(),
  message: z.string().nonempty(),
});

export type ContactUsResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function contactUs(
  email: string,
  message: string,
): Promise<ContactUsResult> {
  try {
    const validationResult = validateDataSchema.safeParse({
      email,
      message,
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

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ENV_CONFIG.contactEmail,
      replyTo: email,
      subject: "New Website Contact Form Submission",
      html: `
              <h3>New Message Received</h3>
              <p><strong>From:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px; border-radius: 4px;">${message}</p>
            `,
    });

    return { success: true, message: "Successfully sent email." };
  } catch (error) {
    console.error("Failed to subscribe to mailing list:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
