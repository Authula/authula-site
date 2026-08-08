import Link from "next/link";

import { ENV_CONFIG } from "@/constants/env-config";

export default function AnnouncementBanner() {
  return (
    <div
      className="relative bg-linear-to-r from-blue-500/10 to-sky-500/10 border-b border-blue-500/20 backdrop-blur-sm"
      role="status"
      aria-live="polite"
    >
      <div className="p-2">
        <div className="relative flex flex-col sm:flex-row items-center justify-center text-center min-h-10 gap-1 sm:gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 font-medium text-blue-700 dark:text-blue-300">
            <span className="block text-base">
              Loved by hundreds of developers.
              <Link
                href={ENV_CONFIG.sponsorUsLink}
                className="text-base underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                ❤️ Support Us
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
