import Image from "next/image";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { CONSTANTS } from "@/constants/constants";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: CONSTANTS.githubRepoUrl,
    nav: {
      enabled: true,
      // Fumadocs wraps `nav.title` in the home <Link>, so the image must not be
      // nested inside another link. Using `title` also avoids the unnamed,
      // empty focus stop that `nav.children` produced.
      title: (
        <Image
          src="/app-logo.png"
          alt="Authula"
          width={125}
          height={50}
          loading="eager"
          className="h-auto w-[125px]"
        />
      ),
    },
    themeSwitch: {
      enabled: false,
    },
  };
}
