import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import {
  deploymentFooterLine,
  deploymentModes,
  sectionCopy,
  type DeploymentMode,
} from "@/data/home";

function ModePanel({ mode }: { mode: DeploymentMode }) {
  const Icon = mode.icon;

  return (
    <article
      aria-labelledby={`${mode.id}-mode-title`}
      className="flex h-full min-w-0 flex-col rounded-[20px] border border-home-line bg-home-panel-raised p-5 shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9),inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-6 lg:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-home-accent-line bg-home-accent-soft text-home-accent-bright">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <h3
          id={`${mode.id}-mode-title`}
          className="text-sm font-semibold tracking-[-0.01em] text-home-text"
        >
          {mode.label}
        </h3>
      </div>

      <p className="mt-4 text-[17px] leading-snug text-pretty text-home-text md:text-lg">
        {mode.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {mode.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-home-muted"
          >
            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-home-accent-line bg-home-accent-soft text-home-accent-bright">
              <Check className="size-2.5" aria-hidden="true" />
            </span>
            <span className="min-w-0">{highlight}</span>
          </li>
        ))}
      </ul>

      <dl className="mt-5 divide-y divide-home-line rounded-[12px] border border-home-line bg-home-bg-deep/40">
        {mode.comparison.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-3 px-3.5 py-2.5"
          >
            <dt className="text-xs leading-relaxed text-home-muted">{row.label}</dt>
            <dd className="text-xs leading-relaxed text-home-muted-strong">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-6">
        <Link
          href={mode.link.href}
          className="group inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-home-accent-bright transition-colors duration-200 hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised focus-visible:outline-none"
        >
          {mode.link.label}
          <ArrowRight
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export function Deployment() {
  return (
    <SectionShell id="two-ways" ariaLabelledBy="two-ways-title">
      <div className="home-content">
        <Reveal>
          <SectionHeader
            id="two-ways-title"
            title={sectionCopy.deployment.title}
            description={sectionCopy.deployment.description}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 lg:grid-cols-2">
          {deploymentModes.map((mode, index) => (
            <Reveal key={mode.id} delay={0.1 + index * 0.08} className="h-full min-w-0">
              <ModePanel mode={mode} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28}>
          <p className="mt-10 border-t border-dashed border-home-line pt-6 text-center text-sm leading-relaxed text-home-muted">
            {deploymentFooterLine}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
