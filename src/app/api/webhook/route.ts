import { z } from "zod";
import { toCamelCaseKeys } from "es-toolkit";

import { resend } from "@/lib/resend";
import { ENV_CONFIG } from "@/constants/env-config";

const contactCreatedData = z.object({
  id: z.uuid(),
  email: z.email(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  unsubscribed: z.boolean(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

const emailDeliveredData = z.object({
  emailId: z.string().nonempty(),
  messageId: z.string().nonempty(),
  subject: z.string().nonempty(),
  from: z.string().nonempty(),
  to: z.string().array(),
  headers: z
    .object({
      name: z.string().nonempty(),
      value: z.string().nonempty(),
    })
    .array(),
  createdAt: z.iso.datetime(),
});

const resendWebhookSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("contact.created"),
    data: contactCreatedData,
  }),
  z.object({
    type: z.literal("email.delivered"),
    data: emailDeliveredData,
  }),
]);

export async function POST(request: Request) {
  try {
    const id = request.headers.get("svix-id");
    const timestamp = request.headers.get("svix-timestamp");
    const signature = request.headers.get("svix-signature");

    if (!id || !timestamp || !signature) {
      return Response.json(
        { success: false, message: "Missing security verification headers" },
        { status: 401 },
      );
    }

    const rawBody = await request.text();

    let verifiedPayload: any;
    try {
      verifiedPayload = resend.webhooks.verify({
        payload: rawBody,
        headers: { id, timestamp, signature },
        webhookSecret: ENV_CONFIG.resend.webhookSecret,
      });
    } catch {
      return Response.json(
        { success: false, message: "Invalid cryptographic signature" },
        { status: 401 },
      );
    }

    const validationResult = resendWebhookSchema.safeParse(
      toCamelCaseKeys(verifiedPayload),
    );
    if (!validationResult.success) {
      return Response.json(
        { success: false, message: validationResult.error.message },
        { status: 400 },
      );
    }

    const { type: eventType, data } = validationResult.data;

    let email = "";

    switch (eventType) {
      case "contact.created": {
        email = data.email;
        break;
      }
      case "email.delivered": {
        const foundReplyToHeader = data.headers.find(
          (header) => header.name.toLowerCase() === "reply-to",
        );
        if (foundReplyToHeader?.value) {
          email = foundReplyToHeader.value;
        }
        break;
      }
      default: {
        return Response.json(
          {
            success: false,
            message: "Encountered unknown Resend webhook payload type.",
          },
          { status: 500 },
        );
      }
    }

    const discordMessage = `**Resend Event:** \`${eventType}\`\n**Email:** ${email}`;
    await fetch(ENV_CONFIG.discord.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: discordMessage }),
    });

    return Response.json({
      success: true,
      message: "Successfully processed webhook.",
    });
  } catch (error: any) {
    console.error("Secure webhook route error:", error);
    return Response.json(
      {
        success: false,
        message: error.message ?? "Internal server error",
      },
      { status: 500 },
    );
  }
}
