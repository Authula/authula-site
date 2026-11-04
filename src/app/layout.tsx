import type { Metadata } from "next";
import Script from "next/script";

import { RootProvider } from "fumadocs-ui/provider/next";
import { Toaster } from "sonner";

import { ENV_CONFIG } from "@/constants/env-config";
import { monoFont, primaryFont } from "@/constants/fonts";

import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.authula.dev"),
  title: "Authula",
  description:
    "Authula is an open-source authentication solution that scales with you. Embed it as a library in your Go app, or run it as a standalone auth server with any tech stack.",
  applicationName: "Authula",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${primaryFont.className} ${monoFont.variable}`}
      suppressHydrationWarning
    >
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
