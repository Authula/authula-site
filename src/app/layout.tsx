import type { Metadata } from "next";
import Script from "next/script";

import { RootProvider } from "fumadocs-ui/provider/next";

import { Toaster } from "@/components/ui/sonner";
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

// Mark the document as JS-capable as early as possible and reveal any content
// still waiting on an IntersectionObserver once the animation window has
// elapsed. `Reveal` sets `data-reveal-ready` after hydration; when it did, the
// scroll animations are working and must be left alone. Without this, a failed
// hydration or a missing IntersectionObserver would leave reveal sections
// invisible and their links focusable but hidden.
const revealFailsafeScript = `
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  function reveal() {
    var nodes = root.querySelectorAll('[data-reveal="out"]');
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      node.setAttribute("data-reveal", "in");
      // Motion writes opacity/transform inline; clear them so the CSS
      // visibility fallback is not defeated by the initial styles.
      node.style.opacity = "1";
      node.style.transform = "none";
    }
  }

  window.setTimeout(function () {
    // Hydration succeeded and motion's IntersectionObserver is driving reveals.
    if (root.dataset.revealReady === "true") {
      return;
    }
    reveal();
  }, 2500);
})();
`;

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${primaryFont.className} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Script id="reveal-failsafe" strategy="beforeInteractive">
          {revealFailsafeScript}
        </Script>
        <RootProvider
          theme={{
            enabled: true,
            enableSystem: false,
            defaultTheme: "dark",
            forcedTheme: "dark",
          }}
        >
          {children}
          <Toaster theme="dark" />
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
