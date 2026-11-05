import Link from "next/link";

import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { integrationGroups, integrationsCopy } from "@/data/integrations";

import { IntegrationTile } from "../integration-tile";
import { Reveal } from "../reveal";
import { SectionHeader } from "../section-header";
import { SectionShell } from "../section-shell";

export function IntegrationsSection() {
  return (
    <SectionShell id="integrations" ariaLabelledBy="integrations-heading">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.16em] text-home-muted uppercase">
            {integrationsCopy.eyebrow}
          </p>
          <SectionHeader
            id="integrations-heading"
            title={integrationsCopy.title}
            description={integrationsCopy.description}
            className="mt-3"
          />

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-11 rounded-[10px] border-0 bg-linear-to-r from-blue-700 to-sky-700 px-5 text-sm font-medium text-white shadow-[0_10px_30px_-14px_rgba(37,99,235,0.8)] transition-[filter,transform] hover:from-blue-800 hover:to-sky-800 active:translate-y-px focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel"
            >
              <Link href={integrationsCopy.primaryCta.href}>
                <BookOpen className="size-4" aria-hidden="true" />
                {integrationsCopy.primaryCta.label}
              </Link>
            </Button>

            <Button
              asChild
              className="h-11 rounded-[10px] border border-home-line bg-transparent px-5 text-sm font-medium text-home-muted-strong transition-colors hover:border-home-accent-line hover:bg-home-panel-hover hover:text-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel focus-visible:outline-none"
            >
              <Link href={integrationsCopy.secondaryCta.href}>
                {integrationsCopy.secondaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_55%_45%,rgba(59,130,246,0.08),transparent_70%)]"
            />

            <div className="relative">
              {integrationGroups.map((group) => (
                <div
                  key={group.id}
                  className={
                    group.id === "custom" ? "mt-6 border-t border-home-line pt-5" : undefined
                  }
                >
                  <h3
                    id={`${group.id}-providers`}
                    className="font-mono text-[11px] tracking-[0.14em] text-home-code-comment uppercase"
                  >
                    {group.label}
                  </h3>

                  <ul
                    aria-labelledby={`${group.id}-providers`}
                    className="mt-3 grid grid-cols-3 gap-2.5 sm:gap-3"
                  >
                    {group.providers.map((provider) => (
                      <IntegrationTile key={provider.id} provider={provider} />
                    ))}
                  </ul>
                </div>
              ))}

              <p className="mt-6 max-w-[44ch] text-xs leading-relaxed text-home-muted">
                {integrationsCopy.caption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
