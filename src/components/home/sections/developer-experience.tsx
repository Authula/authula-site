import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { CodeBlock } from "@/components/home/code-block";
import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import { adapterChips, developerExperienceFeatures, sectionCopy } from "@/data/home";
import { homeSnippets } from "@/data/home-snippets";
import { cn } from "@/lib/utils";

export function DeveloperExperienceSection() {
  return (
    <SectionShell id="developers" ariaLabelledBy="developers-heading">
      <Reveal>
        <SectionHeader
          id="developers-heading"
          title={sectionCopy.developerExperience.title}
          description={sectionCopy.developerExperience.description}
        />
      </Reveal>

      <div className="mt-12 grid gap-10 md:mt-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-12 xl:gap-16">
        <Reveal delay={0.06} className="min-w-0">
          <div className="flex items-center justify-between gap-4 pb-4">
            <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-home-code-comment uppercase">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-home-accent" />
              Request lifecycle
            </span>
            <span className="hidden truncate font-mono text-[11px] text-home-code-comment sm:inline">
              hooks.go
            </span>
          </div>

          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 -top-6 -z-10 h-20 rounded-full bg-home-accent-soft blur-3xl"
            />
            <CodeBlock
              code={homeSnippets.hookExample}
              language="go"
              filename="hooks.go"
              className="[&_.home-code-body]:max-h-[22rem] [&_.home-code-body]:overflow-y-auto [&_.home-code-body]:overscroll-contain"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <div className="flex items-baseline justify-between gap-4 border-b border-home-line pb-3 font-mono text-[11px] tracking-[0.16em] text-home-code-comment uppercase">
            <span>In practice</span>
            <span className="text-home-accent-bright/80">
              {String(developerExperienceFeatures.length).padStart(2, "0")}
            </span>
          </div>

          <ul className="flex flex-col">
            {developerExperienceFeatures.map((feature) => (
              <li key={feature.title} className="border-b border-home-line py-4">
                <div className="flex gap-3">
                  <feature.icon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-home-accent-bright"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[13.5px] font-semibold text-home-text">{feature.title}</h3>
                    <p className="mt-1 text-[13px] leading-[1.55] text-home-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[11px] tracking-[0.16em] text-home-code-comment uppercase">
              Adapters
            </span>
            {adapterChips.map((adapter, index) => (
              <span
                key={adapter}
                className={cn(
                  "inline-flex h-7 items-center rounded-[10px] border px-2.5 font-mono text-[11px]",
                  index === 0
                    ? "border-home-accent-line bg-home-accent-soft text-home-accent-bright"
                    : "border-home-line bg-white/[0.02] text-home-muted",
                )}
              >
                {adapter}
              </span>
            ))}
          </div>

          <Link
            href="/docs/integrations/adapters"
            className="group mt-6 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-home-accent-bright transition-colors hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg focus-visible:outline-none"
          >
            Read the integration guide
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </SectionShell>
  );
}
