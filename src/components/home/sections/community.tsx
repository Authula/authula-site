import Link from "next/link";

import { ArrowRight, ArrowUpRight, BookOpen, Star } from "lucide-react";

import { ReleaseNotesForm } from "@/components/home/release-notes-form";
import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import DiscordIcon from "@/components/shared/icons/DiscordIcon";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import {
  communityContact,
  communityDestinations,
  communityLicense,
  sectionCopy,
} from "@/data/home";
import { getGitHubRepoStars } from "@/services/server";

type DestinationIconName = "github" | "discord" | "docs";

const cardClassName =
  "group flex min-w-0 items-center gap-4 rounded-[14px] border border-home-line bg-home-bg/40 p-4 transition-all hover:border-home-accent-line hover:bg-home-panel-hover focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised focus-visible:outline-none active:translate-y-px";

function DestinationIcon({ icon }: { icon: DestinationIconName }) {
  if (icon === "github") {
    return <GitHubIcon className="size-5" />;
  }

  if (icon === "discord") {
    return <DiscordIcon className="size-5" />;
  }

  return <BookOpen className="size-5" aria-hidden="true" />;
}

export async function Community() {
  const stars = await getGitHubRepoStars();
  const starCount =
    stars === null
      ? null
      : `${new Intl.NumberFormat("en-US").format(stars)} ${stars === 1 ? "star" : "stars"}`;

  return (
    <SectionShell id="community" ariaLabelledBy="community-heading" tone="panel" rails>
      <div className="home-content">
        <div className="overflow-hidden rounded-[20px] border border-home-line bg-home-panel-raised shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9)]">
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="flex flex-col gap-8 border-b border-home-line p-6 md:p-10 lg:border-r lg:border-b-0">
              <Reveal>
                <SectionHeader
                  id="community-heading"
                  title={sectionCopy.community.title}
                  description={sectionCopy.community.description}
                />
              </Reveal>

              <Reveal delay={0.08}>
                <ReleaseNotesForm />
              </Reveal>

              <Reveal delay={0.12}>
                <div className="flex flex-col gap-3 border-t border-home-line pt-6 text-[13px] leading-relaxed text-home-muted">
                  <p>
                    Need to talk?{" "}
                    <Link
                      href={communityContact.href}
                      className="font-medium text-home-accent-bright underline-offset-4 transition-colors hover:text-home-text hover:underline focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised focus-visible:outline-none"
                    >
                      {communityContact.label}
                    </Link>
                  </p>
                  <p>{communityLicense}</p>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col p-6 md:p-10 lg:justify-center">
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-home-code-comment uppercase">
                    Where to find us
                  </p>

                  {communityDestinations.map((destination) => {
                    const showStars = destination.showStars && starCount !== null;
                    const body = (
                      <>
                        <span
                          aria-hidden="true"
                          className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-home-line bg-home-panel text-home-muted-strong transition-colors group-hover:border-home-accent-line group-hover:text-home-accent-bright"
                        >
                          <DestinationIcon icon={destination.icon} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold text-home-text">
                              {destination.name}
                            </span>
                            {showStars ? (
                              <span className="inline-flex items-center gap-1 rounded-full border border-home-accent-line bg-home-accent-soft px-2 py-0.5 font-mono text-[10px] text-home-accent-bright">
                                <Star className="size-3 fill-current" aria-hidden="true" />
                                {starCount}
                              </span>
                            ) : null}
                          </span>

                          <span className="mt-1 flex items-center gap-1 text-[13px] text-home-muted transition-colors group-hover:text-home-muted-strong">
                            {destination.cta}
                            <ArrowRight
                              className="size-3.5 transition-transform group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </span>
                        </span>

                        {destination.external ? (
                          <ArrowUpRight
                            className="size-4 shrink-0 text-home-code-comment transition-colors group-hover:text-home-accent-bright"
                            aria-hidden="true"
                          />
                        ) : null}
                      </>
                    );

                    return destination.external ? (
                      <a
                        key={destination.id}
                        href={destination.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cardClassName}
                      >
                        {body}
                      </a>
                    ) : (
                      <Link key={destination.id} href={destination.href} className={cardClassName}>
                        {body}
                      </Link>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
