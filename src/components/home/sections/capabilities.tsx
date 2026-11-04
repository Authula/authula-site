import { ChevronDown, ChevronRight } from "lucide-react";

import { capabilityFlow, capabilityGroups, sectionCopy } from "@/data/home";

import { Reveal } from "../reveal";
import { SectionHeader } from "../section-header";
import { SectionShell } from "../section-shell";

export function CapabilitiesSection() {
  return (
    <SectionShell id="features" ariaLabelledBy="capabilities-heading">
      <Reveal>
        <SectionHeader
          id="capabilities-heading"
          title={sectionCopy.capabilities.title}
          description={sectionCopy.capabilities.description}
        />
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-10 overflow-hidden rounded-[20px] border border-home-line bg-home-panel-raised p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] md:mt-14 md:p-6">
          <div className="flex items-center justify-between gap-3 text-xs tracking-[0.14em] uppercase">
            <span className="text-home-muted">Sign-in flow</span>
            <span className="flex items-center gap-2 text-home-accent-bright">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-home-accent" />
              {capabilityFlow.steps.length} steps
            </span>
          </div>

          <h3 className="mt-2 text-lg font-semibold tracking-[-0.015em] text-home-text md:text-xl">
            {capabilityFlow.title}
          </h3>

          <ol className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {capabilityFlow.steps.map((step, index) => {
              const isLast = index === capabilityFlow.steps.length - 1;

              return (
                <li
                  key={step.label}
                  className="relative flex min-w-0 gap-3 rounded-[12px] border border-home-line bg-home-bg-deep/40 p-3.5 sm:flex-col sm:gap-2 sm:p-4"
                >
                  {isLast ? null : (
                    <>
                      {/* Stacked layout: line from this step down to the next. */}
                      <span
                        aria-hidden="true"
                        className="absolute top-12 -bottom-3 left-7.5 w-px border-l border-dashed border-home-line-strong sm:hidden"
                      />

                      {/* Two-column layout: right arrow for the first and third steps. */}
                      {(index === 0 || index === 2) && (
                        <span
                          aria-hidden="true"
                          className="absolute top-1/2 -right-4 hidden h-px w-4 -translate-y-1/2 items-center justify-end border-t border-dashed border-home-line-strong sm:flex"
                        >
                          <ChevronRight className="-mr-1 size-3 text-home-accent/70" />
                        </span>
                      )}

                      {/* Two-column layout: the second step turns down to the next row. */}
                      {index === 1 && (
                        <>
                          <span
                            aria-hidden="true"
                            className="absolute top-full left-1/2 hidden h-4 -translate-x-1/2 flex-col items-center sm:flex lg:hidden"
                          >
                            <span className="h-2 border-l border-dashed border-home-line-strong" />
                            <ChevronDown className="-mt-1 size-3 text-home-accent/70" />
                          </span>
                          <span
                            aria-hidden="true"
                            className="absolute top-1/2 -right-4 hidden h-px w-4 -translate-y-1/2 items-center justify-end border-t border-dashed border-home-line-strong lg:flex"
                          >
                            <ChevronRight className="-mr-1 size-3 text-home-accent/70" />
                          </span>
                        </>
                      )}
                    </>
                  )}

                  <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-home-line bg-home-panel text-xs text-home-muted-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 sm:pt-0.5">
                    <span
                      className={
                        isLast
                          ? "text-[13px] font-medium text-home-accent-bright"
                          : "text-[14px] font-medium text-home-text"
                      }
                    >
                      {step.label}
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-home-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5">
        {capabilityGroups.map((group, groupIndex) => {
          const GroupIcon = group.icon;

          return (
            <Reveal key={group.id} delay={0.1 + groupIndex * 0.06} className="h-full">
              <div className="h-full rounded-[14px] border border-home-line bg-home-panel-raised/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                <div className="flex items-center gap-2.5 border-b border-home-line pb-3">
                  <GroupIcon
                    className="size-4 shrink-0 text-home-accent-bright"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-semibold tracking-[-0.01em] text-home-text">
                    {group.title}
                  </h3>
                </div>

                <ul className="divide-y divide-home-line/70">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <li key={item.name} className="flex gap-3 py-2.5 last:pb-0.5">
                        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-xl border border-home-line bg-white/2 text-home-muted">
                          <ItemIcon className="size-3.5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="text-[13px] font-medium text-home-text">
                            {item.name}
                          </span>
                          <p className="mt-1 text-xs leading-relaxed text-home-muted">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
