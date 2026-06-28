import Image from "next/image";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { CONSTANTS } from "@/constants/constants";
import Link from "next/link";

function LogoImage() {
  return (
    <div className="h-full w-full flex flex-row items-center justify-start">
      <Link href="/">
        <Image src="/app-logo.png" alt="App Logo" width={100} height={100} />
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
