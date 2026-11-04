import Image from "next/image";
import Link from "next/link";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { CONSTANTS } from "@/constants/constants";

function LogoImage() {
  return (
    <div className="h-full w-full flex flex-row items-center justify-start">
      <Link href="/">
        <Image src="/app-logo.png" alt="Authula" width={125} height={50} loading="eager" />
      </Link>
    </div>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: CONSTANTS.githubRepoUrl,
    nav: {
      enabled: true,
      children: <LogoImage />,
    },
    themeSwitch: {
      enabled: false,
    },
  };
}
