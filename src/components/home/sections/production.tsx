import { Check } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import {
  deploymentTargets,
  productionClosingStatement,
  productionPillars,
  sectionCopy,
} from "@/data/home";

export function ProductionSection() {
  return (
    <SectionShell id="production" contained={false} ariaLabelledBy="production-heading">
      <span id="comparison" aria-hidden="true" className="sr-only scroll-mt-24" />

      <div className="home-container">
        <Reveal>
          <SectionHeader
            id="production-heading"
            title={sectionCopy.production.title}
            description={sectionCopy.production.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          {productionPillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 0.06} className="h-full">
              <div className="h-full rounded-[16px] border border-home-line bg-home-panel-raised/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] md:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-home-accent-line bg-home-accent-soft text-home-accent-bright">
                    <pillar.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-home-text">{pillar.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-home-muted">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 divide-y divide-home-line border-t border-home-line">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 py-3">
                      <Check
                        aria-hidden="true"
                        className="mt-[3px] size-3.5 shrink-0 text-home-accent-bright"
                      />
                      <span className="text-[13.5px] leading-relaxed text-home-muted-strong">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 md:mt-16">
            <h3 className="pb-4 font-mono text-xs tracking-[0.16em] text-home-muted-strong uppercase">
              Deployment
            </h3>

            <div className="grid overflow-hidden rounded-[14px] border border-home-line bg-home-panel-raised/70 md:grid-cols-3">
              {deploymentTargets.map((target) => (
                <div
                  key={target.id}
                  className="flex gap-3.5 border-t border-home-line p-5 first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 md:p-6"
                >
                  <target.icon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-home-accent-bright"
                  />
                  <div className="min-w-0">
                    <h4 className="text-[15px] font-semibold text-home-text">{target.name}</h4>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-home-muted">
                      {target.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16 md:mt-24">
        <div className="border-y border-home-line bg-home-bg-deep">
          <div className="home-container flex flex-col items-center gap-6 py-12 text-center md:py-16">
            <span aria-hidden="true" className="h-px w-12 bg-home-accent-line" />
            <p className="max-w-[30ch] text-balance text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-home-text">
              {productionClosingStatement}
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
