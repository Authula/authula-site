import type { Metadata } from "next";

import { ArrowUpRight, Bug, Mail, Users } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Footer } from "@/components/home/sections/footer";
import ContactUsForm from "@/components/sections/ContactUsForm";
import DiscordIcon from "@/components/shared/icons/DiscordIcon";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { Badge } from "@/components/ui/badge";
import { CONSTANTS } from "@/constants/constants";
import { ENV_CONFIG } from "@/constants/env-config";

export const metadata: Metadata = {
  title: "Contact — Authula",
  description:
    "Have a question, feedback, or want to contribute? Contact the Authula team and we'll get back to you.",
};

type SupportIconName = "issues" | "discord" | "repository";

const supportLinks = [
  {
    label: "GitHub Issues",
    description: "Report a bug or request a feature.",
    href: `${CONSTANTS.githubRepoUrl}/issues`,
    icon: "issues",
  },
  {
    label: "Discord",
    description: "Ask questions and talk with the community.",
    href: CONSTANTS.discordInviteUrl,
    icon: "discord",
  },
  {
    label: "GitHub Repository",
    description: "Read the source and follow development.",
    href: CONSTANTS.githubRepoUrl,
    icon: "repository",
  },
] as const satisfies readonly {
  label: string;
  description: string;
  href: string;
  icon: SupportIconName;
}[];

const linkRowClassName =
  "group flex min-w-0 items-center gap-3 transition-all focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised focus-visible:outline-none active:translate-y-px";

const standaloneRowClassName = `${linkRowClassName} rounded-[12px] border border-home-line bg-home-bg/40 p-3 hover:border-home-accent-line hover:bg-home-panel-hover`;

const listRowClassName = `${linkRowClassName} rounded-[8px] py-3.5`;

const iconSquareClassName =
  "flex size-9 shrink-0 items-center justify-center rounded-[9px] border border-home-line bg-home-panel text-home-muted-strong transition-colors group-hover:border-home-accent-line group-hover:text-home-accent-bright";

function SupportIcon({ icon }: { icon: SupportIconName }) {
  if (icon === "discord") {
    return <DiscordIcon className="size-4" />;
  }

  if (icon === "repository") {
    return <GitHubIcon className="size-4" />;
  }

  return <Bug className="size-4" aria-hidden="true" />;
}

export default function ContactUsPage() {
  return (
    <div
      id="main-content"
      tabIndex={-1}
      className="flex scroll-mt-24 flex-col flex-1 bg-home-bg text-home-text outline-none focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg"
    >
      <section
        id="top"
        aria-labelledby="contact-title"
        className="relative isolate overflow-hidden border-b border-home-line bg-home-bg pt-24 pb-14 md:pb-16"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 -top-32 h-[560px] bg-[radial-gradient(ellipse_50%_60%_at_50%_25%,rgba(59,130,246,0.16),transparent_70%)]" />
        </div>

        <div className="home-container">
          <div className="home-content">
            <Reveal>
              <Badge
                variant="outline"
                className="w-fit gap-2 border-home-line bg-white/[0.02] px-3 py-1 text-xs font-normal text-home-muted-strong"
              >
                <span className="size-1.5 rounded-full bg-home-accent-bright" aria-hidden="true" />
                Contact
              </Badge>

              <h1
                id="contact-title"
                className="mt-6 text-balance text-[clamp(2.35rem,3.8vw,3rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-home-text"
              >
                Contact us.
              </h1>

              <p className="mt-5 max-w-[58ch] text-pretty text-[15px] leading-[1.7] text-home-muted md:text-base">
                Have a question, feedback, or want to contribute? Send a message and we&apos;ll get
                back to you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-form-heading"
        className="border-b-0 bg-home-panel py-16 md:py-20"
      >
        <div className="home-container">
          <div className="home-content grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-8">
            <Reveal className="min-w-0">
              <div className="rounded-[20px] border border-home-line bg-home-panel-raised p-5 shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9),inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-6 md:p-8">
                <div className="border-b border-home-line pb-6">
                  <h2
                    id="contact-form-heading"
                    className="text-balance text-[clamp(1.5rem,2.2vw,1.75rem)] leading-[1.15] font-semibold tracking-[-0.025em] text-home-text"
                  >
                    Send a message
                  </h2>
                  <p className="mt-2 max-w-[52ch] text-pretty text-[13px] leading-relaxed text-home-muted">
                    Share as much context as you can. We read every message and reply by email.
                  </p>
                </div>

                <div className="mt-6">
                  <ContactUsForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex min-w-0 flex-col gap-4">
              <div className="rounded-[16px] border border-home-line bg-home-panel-raised p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className={iconSquareClassName}>
                    <Mail className="size-4" />
                  </span>
                  <h2 className="text-sm font-semibold text-home-text">Direct email</h2>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-home-muted">
                  Prefer email? Reach us directly.
                </p>

                <a
                  href={`mailto:${ENV_CONFIG.contactEmail}`}
                  className={`${standaloneRowClassName} mt-4`}
                >
                  <span aria-hidden="true" className={iconSquareClassName}>
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-medium text-home-text">Email us</span>
                    <span className="mt-0.5 block truncate text-[13px] text-home-muted transition-colors group-hover:text-home-muted-strong">
                      {ENV_CONFIG.contactEmail}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-home-code-comment transition-colors group-hover:text-home-accent-bright"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="rounded-[16px] border border-home-line bg-home-panel-raised p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className={iconSquareClassName}>
                    <Users className="size-4" />
                  </span>
                  <h2 className="text-sm font-semibold text-home-text">Community &amp; support</h2>
                </div>

                <ul className="mt-4 divide-y divide-home-line border-t border-home-line">
                  {supportLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={listRowClassName}
                      >
                        <span aria-hidden="true" className={iconSquareClassName}>
                          <SupportIcon icon={link.icon} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[13px] font-medium text-home-text">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-home-muted">
                            {link.description}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-home-code-comment transition-colors group-hover:text-home-accent-bright"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
