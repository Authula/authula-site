import type { Metadata } from "next";

import { Architecture } from "@/components/home/sections/architecture";
import { CapabilitiesSection } from "@/components/home/sections/capabilities";
import { Community } from "@/components/home/sections/community";
import { Deployment } from "@/components/home/sections/deployment";
import { DeveloperExperienceSection } from "@/components/home/sections/developer-experience";
import { Footer } from "@/components/home/sections/footer";
import { GetStarted } from "@/components/home/sections/get-started";
import { Hero } from "@/components/home/sections/hero";
import { IntegrationsSection } from "@/components/home/sections/integrations";
import { PluginsSection } from "@/components/home/sections/plugins";
import { ProductionSection } from "@/components/home/sections/production";

const title = "Authula — Authentication for Go, embedded or standalone";
const description =
  "An open-source authentication platform you can embed in Go or run as a standalone auth server. Composable plugins, typed APIs and your data staying in your database.";

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.authula.dev"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://www.authula.dev",
    siteName: "Authula",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function HomePage() {
  return (
    <>
      <div
        id="main-content"
        tabIndex={-1}
        className="flex scroll-mt-24 flex-col flex-1 bg-home-bg text-home-text outline-none focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg"
      >
        <Hero />
        <Deployment />
        <Architecture />
        <CapabilitiesSection />
        <PluginsSection />
        <IntegrationsSection />
        <DeveloperExperienceSection />
        <ProductionSection />
        <GetStarted />
        <Community />
        <Footer />
      </div>
    </>
  );
}
