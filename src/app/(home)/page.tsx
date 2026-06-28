import ArchitectureSection from "@/components/sections/ArchitectureSection";
import CommunitySection from "@/components/sections/CommunitySection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ConfigurationSection from "@/components/sections/ConfigurationSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import DeveloperExperienceSection from "@/components/sections/DeveloperExperienceSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/sections/Footer";
import WaitlistSection from "@/components/sections/WaitlistSection";
import HeroSection from "@/components/sections/HeroSection";
import HooksSection from "@/components/sections/HooksSection";
import PluginSection from "@/components/sections/PluginSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import AnnouncementBanner from "@/components/shared/AnnouncementBanner";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <AnnouncementBanner />
      <HeroSection />
      <ArchitectureSection />
      <ConfigurationSection />
      <FeaturesSection />
      <ComparisonSection />
      <HooksSection />
      <PluginSection />
      <DeveloperExperienceSection />
      <SponsorsSection />
      <CommunitySection />
      <WaitlistSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
