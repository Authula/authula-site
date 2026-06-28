import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/components/shared/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          text: "Docs",
          url: "/docs",
        },
        {
          text: "Contact Us",
          url: "/contact-us",
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
