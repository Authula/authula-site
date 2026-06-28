import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import { ENV_CONFIG } from "@/constants/env-config";

const redis = new Redis({
  url: ENV_CONFIG.upstash.url,
  token: ENV_CONFIG.upstash.token,
});

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "60s"),
});
