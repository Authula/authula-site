import { HomeLayout } from "fumadocs-ui/layouts/home";

import { Footer } from "@/components/home/sections/footer";
import { baseOptions } from "@/components/shared/layout.shared";

export default function Layout({ children }: { children: React.ReactNode }) {
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
        <div
          id="main-content"
          tabIndex={-1}
          className="flex scroll-mt-24 flex-col flex-1 bg-home-bg text-home-text outline-none focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg"
        >
          {children}
        </div>
      </HomeLayout>
      <Footer />
    </>
  );
}
