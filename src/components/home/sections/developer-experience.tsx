import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import {
  adapterChips,
  developerExperienceFeatures,
  developerLifecycle,
  sectionCopy,
} from "@/data/home";

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
          <div className="rounded-[20px] border border-home-line bg-home-panel-raised/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-home-line pb-3 text-xs tracking-[0.16em] uppercase">
              <span className="text-home-muted">Request lifecycle</span>
              <span className="text-home-accent-bright">
                {String(developerLifecycle.length).padStart(2, "0")} steps
              </span>
            </div>

            <ol className="mt-5 flex flex-col">
              {developerLifecycle.map((step, index) => {
                const isLast = index === developerLifecycle.length - 1;

                return (
                  <li
                    key={step.title}
                    className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-3 pb-5 last:pb-0"
                  >
                    {isLast ? null : (
                      <span
                        aria-hidden="true"
                        className="absolute top-8 bottom-0 left-4 w-px -translate-x-1/2 border-l border-dashed border-home-line"
                      />
                    )}

                    <span
                      aria-hidden="true"
                      className="relative z-10 flex size-8 items-center justify-center rounded-[10px] border border-home-line bg-home-bg text-xs text-home-accent-bright shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-[13px] font-semibold text-home-text">{step.title}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-home-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <div className="flex items-baseline justify-between gap-4 border-b border-home-line pb-3 text-xs tracking-[0.16em] text-home-muted uppercase">
            <span>In practice</span>
            <span className="text-home-accent-bright">
              {String(developerExperienceFeatures.length).padStart(2, "0")}
            </span>
          </div>

          <ul className="flex flex-col">
            {developerExperienceFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <li key={feature.title} className="border-b border-home-line py-4">
                  <div className="flex gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-home-accent-bright"
                    />
                    <div className="min-w-0">
                      <h3 className="text-[13.5px] font-semibold text-home-text">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-[1.55] text-home-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs tracking-[0.16em] text-home-muted uppercase">
              Adapters
            </span>
            {adapterChips.map((adapter) => (
              <span
                key={adapter}
                className="inline-flex h-8 items-center rounded-xl border border-home-line bg-white/2 px-2.5 text-xs text-home-muted-strong"
              >
                {adapter}
              </span>
            ))}
          </div>

          <Link
            href="/docs/integrations/adapters"
            className="group mt-6 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-home-accent-bright transition-colors hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg focus-visible:outline-none"
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
