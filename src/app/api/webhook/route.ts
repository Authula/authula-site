import { z } from "zod";

import { resend } from "@/lib/resend";
import { ENV_CONFIG } from "@/constants/env-config";

const resendWebhookSchema = z.object({
  type: z.string(),
  data: z.object({
    email: z.string().email(),
  }),
});

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

    const result = resendWebhookSchema.safeParse(verifiedPayload);
    if (!result.success) {
      return Response.json(
        { success: false, message: "Invalid payload structure" },
        { status: 400 },
      );
    }

    const { type: eventType, data } = result.data;
    const discordMessage = `**Resend Event:** \`${eventType}\`\n**Email:** ${data.email}`;

    await fetch(ENV_CONFIG.discord.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: discordMessage }),
    });

    return Response.json({
      success: true,
      message: "Successfully processed webhook.",
    });
  } catch (error) {
    console.error("Secure webhook route error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
