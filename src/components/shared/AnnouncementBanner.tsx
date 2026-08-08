import Link from "next/link";

import { ENV_CONFIG } from "@/constants/env-config";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

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
            <span className="text-base flex flex-row flex-wrap justify-center items-center gap-2">
              Loved by hundreds of developers.
              <Link
                href={ENV_CONFIG.sponsorUsLink}
                className="inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-0.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-500/20 hover:border-blue-500/60 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>❤️ Support Us</span>
                <ArrowUpRight className="size-3" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
