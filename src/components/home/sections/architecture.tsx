import Link from "next/link";
import { Fragment } from "react";

import { ArrowRight, ChevronRight } from "lucide-react";

import { SectionFrame } from "@/components/home/frame-corners";
import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import {
  architectureCaption,
  architectureFlow,
  architectureLink,
  architectureOutcomes,
  sectionCopy,
} from "@/data/home";
import { cn } from "@/lib/utils";

export function Architecture() {
  return (
    <SectionShell
      id="architecture"
      ariaLabelledBy="architecture-title"
      tone="accent"
      contained={false}
      className="overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -inset-y-20 home-grid-lines opacity-70 md:-inset-y-28 lg:-inset-y-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 h-80 bg-[radial-gradient(ellipse_55%_100%_at_50%_0%,rgba(59,130,246,0.1),transparent_72%)] md:-top-28 lg:-top-32"
      />

      <div className="home-container relative">
        <SectionFrame>
          <div className="home-content">
            <Reveal>
              <SectionHeader
                id="architecture-title"
                title={sectionCopy.architecture.title}
                description={sectionCopy.architecture.description}
              />
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ul className="home-content mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {architectureOutcomes.map((outcome) => {
                const Icon = outcome.icon;

                return (
                  <li
                    key={outcome.id}
                    className="rounded-[16px] border border-home-line bg-home-panel/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                  >
                    <span className="flex size-8 items-center justify-center rounded-[9px] border border-home-line bg-white/[0.02] text-home-accent-bright">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-home-text">{outcome.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-home-muted">
                      {outcome.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="home-content mt-6 rounded-[20px] border border-home-line bg-home-panel/70 p-4 shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9),inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-5">
              <ol className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-3">
                {architectureFlow.map((step, index) => (
                  <Fragment key={step.id}>
                    {index > 0 ? (
                      <li aria-hidden="true" className="flex justify-center text-home-accent/70">
                        <ChevronRight className="size-4 rotate-90 sm:rotate-0" />
                      </li>
                    ) : null}
                    <li
                      className={cn(
                        "rounded-[12px] border px-4 py-3",
                        step.id === "authula"
                          ? "border-home-accent-line bg-home-accent-soft"
                          : "border-home-line bg-home-bg-deep/50",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[13px] font-medium",
                          step.id === "authula" ? "text-home-accent-bright" : "text-home-text",
                        )}
                      >
                        {step.label}
                      </span>
                      <p className="mt-1 text-xs leading-relaxed text-home-muted">
                        {step.description}
                      </p>
                    </li>
                  </Fragment>
                ))}
              </ol>

              <p className="mt-4 border-t border-home-line pt-4 text-[13px] leading-relaxed text-home-muted">
                {architectureCaption}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="home-content mt-5">
              <Link
                href={architectureLink.href}
                className="group inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-home-accent-bright transition-colors hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg-deep focus-visible:outline-none"
              >
                {architectureLink.label}
                <ArrowRight
                  className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </SectionFrame>
      </div>
    </SectionShell>
  );
}
