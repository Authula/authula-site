import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/components/shared/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[10px] focus:border focus:border-home-accent-line focus:bg-home-panel focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-home-text focus:ring-2 focus:ring-home-accent-bright focus:ring-offset-2 focus:ring-offset-home-bg focus:outline-none"
      >
        Skip to content
      </a>
      <HomeLayout
        {...baseOptions()}
        links={[
          {
            text: "Docs",
            url: "/docs",
          },
          {
            text: "Changelog",
            url: "/changelog",
          },
          {
            text: "Contact",
            url: "/contact-us",
          },
        ]}
      >
        {children}
      </HomeLayout>
    </>
  );
}
