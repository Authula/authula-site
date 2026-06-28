import { Resend } from "resend";

import { ENV_CONFIG } from "@/constants/env-config";

export const resend = new Resend(ENV_CONFIG.resend.apiKey);
