import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/components/shared/layout.shared";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
