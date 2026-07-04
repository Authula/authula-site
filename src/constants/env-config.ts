export const ENV_CONFIG = {
  resend: {
    apiKey: process.env.RESEND_API_KEY as string,
    segmentId: process.env.RESEND_SEGMENT_ID as string,
  },
  upstash: {
    url: process.env.UPSTASH_REDIS_REST_URL as string,
    token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
  },
  umami: {
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID as string,
  },
  sponsorUsLink: process.env.NEXT_PUBLIC_SPONSOR_US_LINK as string,
  productHuntLink: process.env.NEXT_PUBLIC_PRODUCT_HUNT_LINK as string,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL as string,
};
