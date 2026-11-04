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
        <div className="mt-10 overflow-hidden rounded-[20px] border border-home-line bg-home-panel p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] md:mt-14 md:p-6">
          <div className="flex items-center justify-between gap-3 font-mono text-[11px] tracking-[0.14em] uppercase">
            <span className="text-home-muted">Sign-in flow</span>
            <span className="flex items-center gap-2 text-home-accent-bright">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-home-accent" />
              {capabilityFlow.steps.length} steps
            </span>
          </div>

          <h3 className="mt-2 text-lg font-semibold tracking-[-0.015em] text-home-text md:text-xl">
            {capabilityFlow.title}
          </h3>

          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {capabilityFlow.steps.map((step, index) => {
              const isLast = index === capabilityFlow.steps.length - 1;

              return (
                <li
                  key={step.label}
                  className="relative flex min-w-0 gap-3 rounded-[12px] border border-home-line bg-home-bg-deep/40 p-3.5 sm:flex-col sm:gap-2 sm:p-4"
                >
                  {isLast ? null : (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute top-[3.1rem] bottom-[-0.85rem] left-[1.7rem] w-px border-l border-dashed border-home-line-strong sm:hidden"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute top-[1.9rem] left-full hidden h-px w-4 border-t border-dashed border-home-line-strong lg:block"
                      />
                    </>
                  )}

                  <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-home-line bg-home-panel-raised font-mono text-[11px] text-home-muted-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 md:pt-0.5">
                    <span
                      className={
                        isLast
                          ? "font-mono text-[13px] text-home-accent-bright"
                          : "text-[14px] text-home-text"
                      }
                    >
                      {step.label}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] leading-relaxed break-words text-home-muted">
                      {step.meta}
                    </span>
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
              <div className="h-full rounded-[14px] border border-home-line bg-home-panel/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                <div className="flex items-center gap-2.5 border-b border-home-line pb-3">
                  <GroupIcon
                    className="size-4 shrink-0 text-home-accent-bright"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-semibold tracking-[-0.01em] text-home-text">
                    {group.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="ml-auto font-mono text-[10px] text-home-muted"
                  >
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="divide-y divide-home-line/70">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <li key={item.name} className="flex gap-3 py-2.5 last:pb-0.5">
                        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[8px] border border-home-line bg-white/[0.02] text-home-muted">
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
