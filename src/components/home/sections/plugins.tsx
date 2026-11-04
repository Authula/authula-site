import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { pluginExplainers, pluginGuide, pluginLifecycleSteps, sectionCopy } from "@/data/home";

import { PluginMap } from "../plugin-map";
import { Reveal } from "../reveal";
import { SectionHeader } from "../section-header";
import { SectionShell } from "../section-shell";

const labelClassName = "text-xs font-medium tracking-[0.14em] text-home-muted uppercase";

export function PluginsSection() {
  return (
    <SectionShell id="plugins" ariaLabelledBy="plugins-heading">
      <Reveal>
        <SectionHeader
          id="plugins-heading"
          title={sectionCopy.plugins.title}
          description={sectionCopy.plugins.description}
        />
      </Reveal>

      <div className="mt-10 grid items-start gap-10 md:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
        <div className="flex min-w-0 flex-col gap-6">
          <Reveal>
            <PluginMap />
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className={labelClassName}>How a plugin connects</h3>
              <ol className="mt-3 flex flex-col gap-3">
                {pluginLifecycleSteps.map((step, index) => (
                  <li key={step.label} className="flex gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-home-line bg-white/[0.02] text-xs text-home-muted-strong">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-home-text">{step.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-home-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex min-w-0 flex-col gap-8">
            <ul className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              {pluginExplainers.map((explainer) => {
                const Icon = explainer.icon;

                return (
                  <li key={explainer.title} className="flex gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-home-line bg-white/[0.02] text-home-accent-bright">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[13px] font-semibold text-home-text">
                        {explainer.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-home-muted">
                        {explainer.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div>
              <Button
                asChild
                className="h-11 rounded-[10px] border border-home-line bg-transparent px-5 text-sm font-medium text-home-muted-strong transition-colors hover:border-home-accent-line hover:bg-home-panel-hover hover:text-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg focus-visible:outline-none"
              >
                <Link href={pluginGuide.href}>
                  {pluginGuide.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
