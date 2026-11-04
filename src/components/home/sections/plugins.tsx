import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  pluginCodeSample,
  pluginExplainers,
  pluginGuide,
  pluginLifecycle,
  sectionCopy,
} from "@/data/home";
import { homeSnippets } from "@/data/home-snippets";

import { CodeBlock } from "../code-block";
import { PluginMap } from "../plugin-map";
import { Reveal } from "../reveal";
import { SectionHeader } from "../section-header";
import { SectionShell } from "../section-shell";

const labelClassName = "font-mono text-[11px] tracking-[0.14em] text-home-muted uppercase";

export function PluginsSection() {
  return (
    <SectionShell id="plugins" tone="panel" ariaLabelledBy="plugins-heading">
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
              <h3 className={labelClassName}>Plugin lifecycle</h3>
              <ol className="mt-3 grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:items-center">
                {pluginLifecycle.map((step, index) => (
                  <li key={step} className="flex min-w-0 items-center">
                    <span className="inline-flex w-full items-center gap-2 rounded-[10px] border border-home-line bg-white/[0.02] px-2 py-1.5 font-mono text-[11px] leading-snug text-home-muted-strong sm:w-auto">
                      <span aria-hidden="true" className="text-[10px] text-home-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </span>
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
              <h3 className={labelClassName}>The interface</h3>
              <CodeBlock
                className="mt-3"
                code={homeSnippets[pluginCodeSample.snippetKey]}
                language={pluginCodeSample.language}
                filename={pluginCodeSample.filename}
              />
            </div>

            <div>
              <Button
                asChild
                className="h-11 rounded-[10px] border border-home-line bg-transparent px-5 text-sm font-medium text-home-muted-strong transition-colors hover:border-home-accent-line hover:bg-home-panel-hover hover:text-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg focus-visible:outline-none"
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
