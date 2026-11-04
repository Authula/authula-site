import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import {
  ReleaseTypeBadge,
  releaseTypeMeta,
  releaseTypeOrder,
} from "@/components/changelog/release-badge";
import { Reveal } from "@/components/home/reveal";
import { Badge } from "@/components/ui/badge";
import { formatReleaseDate, getSortedChangelogPages } from "@/lib/changelog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Changelog — Authula",
  description: "Product updates, fixes, and breaking changes shipped in Authula.",
};

const latestChipClassName =
  "inline-flex items-center rounded-full border border-home-accent-line bg-home-accent-soft px-2 py-0.5 font-mono text-xs tracking-[0.12em] text-home-accent-bright uppercase";

export default function ChangelogPage() {
  const releases = getSortedChangelogPages();
  const latestVersion = releases[0]?.data.version;
  const releaseLabel = releases.length === 1 ? "release" : "releases";

  return (
    <>
      <section
        id="top"
        aria-labelledby="changelog-title"
        className="relative isolate overflow-hidden border-b border-home-line bg-home-bg pt-24 pb-14 md:pb-16"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 -top-32 h-[560px] bg-[radial-gradient(ellipse_50%_60%_at_50%_25%,rgba(59,130,246,0.16),transparent_70%)]" />
        </div>

        <div className="home-container">
          <div className="home-content">
            <Reveal>
              <Badge
                variant="outline"
                className="w-fit gap-2 border-home-line bg-white/[0.02] px-3 py-1 text-xs font-normal text-home-muted-strong"
              >
                <span className="size-1.5 rounded-full bg-home-accent-bright" aria-hidden="true" />
                Changelog
              </Badge>

              <h1
                id="changelog-title"
                className="mt-6 text-balance text-[clamp(2.35rem,3.8vw,3rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-home-text"
              >
                Changelog<span className="text-home-accent-bright">.</span>
              </h1>

              <p className="mt-5 max-w-[58ch] text-pretty text-[15px] leading-[1.7] text-home-muted md:text-base">
                Every feature, fix, and breaking change shipped in Authula, newest first.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs tracking-[0.14em] text-home-muted uppercase">
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-home-accent-bright"
                  />
                  {releases.length} {releaseLabel}
                </span>

                {latestVersion ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-home-line bg-white/[0.02] px-2.5 py-1 tracking-normal text-home-muted-strong normal-case">
                    Latest
                    <span className="font-mono tracking-[0.08em] text-home-accent-bright uppercase">
                      {latestVersion}
                    </span>
                  </span>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="all-releases-heading"
        className="border-b border-home-line bg-home-panel py-16 md:py-20"
      >
        <div className="home-container">
          <div className="home-content">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2
                    id="all-releases-heading"
                    className="font-mono text-xs tracking-[0.14em] text-home-code-comment uppercase"
                  >
                    All releases
                  </h2>
                  <p className="mt-1.5 text-[13px] text-home-muted">
                    {releases.length} {releaseLabel} in the ledger
                  </p>
                </div>

                {releases.length > 0 ? (
                  <ul
                    aria-label="Release types"
                    className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.14em] text-home-code-comment uppercase"
                  >
                    {releaseTypeOrder.map((type) => (
                      <li key={type} className="inline-flex items-center gap-1.5">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "size-1.5 rounded-full",
                            releaseTypeMeta[type].dotClassName,
                          )}
                        />
                        {releaseTypeMeta[type].label}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>

            <div className="mt-6 md:mt-8">
              {releases.length === 0 ? (
                <Reveal>
                  <div className="rounded-[20px] border border-home-line bg-home-panel-raised p-8 text-center shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9),inset_0_1px_0_rgba(255,255,255,0.035)] md:p-12">
                    <p className="font-mono text-xs tracking-[0.14em] text-home-code-comment uppercase">
                      No releases yet
                    </p>
                    <p className="mx-auto mt-3 max-w-[44ch] text-pretty text-[15px] leading-[1.7] text-home-muted">
                      Release notes will appear here as they ship. In the meantime, read the docs to
                      get started.
                    </p>
                    <Link
                      href="/docs"
                      className="group mt-6 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-home-accent-bright transition-colors hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised focus-visible:outline-none"
                    >
                      Read the docs
                      <ArrowRight
                        className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </Reveal>
              ) : (
                <ol className="divide-y divide-home-line overflow-hidden rounded-[20px] border border-home-line bg-home-panel-raised shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9),inset_0_1px_0_rgba(255,255,255,0.035)]">
                  {releases.map((release, index) => {
                    const isLatest = index === 0;

                    return (
                      <li key={release.url} className="relative">
                        <Reveal delay={Math.min(index, 6) * 0.04}>
                          <Link
                            href={release.url}
                            className="group relative grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-3 px-5 py-5 transition-colors hover:bg-home-panel-hover focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised focus-visible:outline-none sm:px-6 md:grid-cols-[10.5rem_minmax(0,1fr)_auto] md:items-start md:gap-x-6 md:py-6"
                          >
                            {isLatest ? (
                              <span
                                aria-hidden="true"
                                className="absolute inset-y-0 left-0 w-0.5 bg-home-accent/70"
                              />
                            ) : null}

                            <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5 md:col-start-1 md:row-start-1 md:flex-col md:items-start md:gap-y-1.5">
                              <time
                                dateTime={release.data.date}
                                className="font-mono text-xs tracking-[0.08em] text-home-muted-strong uppercase"
                              >
                                {formatReleaseDate(release.data.date, "short")}
                              </time>

                              {release.data.version ? (
                                <span className="inline-flex items-center rounded-[6px] border border-home-line bg-white/[0.03] px-2 py-0.5 font-mono text-xs tracking-[0.08em] whitespace-nowrap text-home-muted-strong">
                                  {release.data.version}
                                </span>
                              ) : null}

                              {isLatest ? (
                                <span className={latestChipClassName}>Latest</span>
                              ) : null}
                            </div>

                            <div className="col-span-2 min-w-0 md:col-span-1 md:col-start-2 md:row-start-1">
                              <ReleaseTypeBadge type={release.data.type} />

                              <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.015em] text-home-text transition-colors group-hover:text-home-accent-bright">
                                {release.data.title}
                              </h3>

                              {release.data.description ? (
                                <p className="mt-1.5 max-w-[62ch] text-[13px] leading-relaxed text-home-muted">
                                  {release.data.description}
                                </p>
                              ) : null}
                            </div>

                            <ArrowRight
                              aria-hidden="true"
                              className="col-start-2 row-start-1 size-4 self-center text-home-code-comment transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-home-accent-bright md:col-start-3 md:row-start-1 md:mt-1 md:self-start"
                            />
                          </Link>
                        </Reveal>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
