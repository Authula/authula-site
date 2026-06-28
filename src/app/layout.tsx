import type { Metadata } from "next";
import Script from "next/script";

import { RootProvider } from "fumadocs-ui/provider/next";

import "./global.css";
import { ENV_CONFIG } from "@/constants/env-config";
import { primaryFont } from "@/constants/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Authula",
  description:
    "Authula is an open-source authentication solution that scales with you. Embed it as a library in your Go app, or run it as a standalone auth server with any tech stack.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={primaryFont.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            enabled: true,
            enableSystem: false,
            defaultTheme: "dark",
            forcedTheme: "dark",
          }}
        >
          {children}
          <Toaster />
        </RootProvider>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={ENV_CONFIG.umami.websiteId}
      />
    </html>
  );
}
