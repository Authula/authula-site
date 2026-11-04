"use server";

import { headers } from "next/headers";

import z from "zod";

import { ENV_CONFIG } from "@/constants/env-config";
import { ratelimit } from "@/lib/ratelimit";
import { resend } from "@/lib/resend";

const validateDataSchema = z.object({
  email: z.email(),
  message: z.string().nonempty(),
});

export type ContactUsResult = { success: boolean; message: string };

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function contactUs(email: string, message: string): Promise<ContactUsResult> {
  try {
    const validationResult = validateDataSchema.safeParse({
      email,
      message,
    });
    if (!validationResult.success) {
      return { success: false, message: validationResult.error.message };
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
        message: "Too many requests. Please try again later.",
      };
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ENV_CONFIG.contactEmail,
      replyTo: email,
      subject: "New Website Contact Form Submission",
      html: `
              <h3>New Message Received</h3>
              <p><strong>From:</strong> ${escapeHtml(email)}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px; border-radius: 4px;">${escapeHtml(message)}</p>
            `,
    });

    return { success: true, message: "Successfully sent email." };
  } catch (error) {
    console.error("Failed to send contact message:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
