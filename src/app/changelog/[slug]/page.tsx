import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { createRelativeLink } from "fumadocs-ui/mdx";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { ReleaseTypeBadge } from "@/components/changelog/release-badge";
import { Reveal } from "@/components/home/reveal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  changelogSource,
  formatReleaseDate,
  getAdjacentReleases,
  type ChangelogPage,
} from "@/lib/changelog";
import { cn } from "@/lib/utils";
import { getMDXComponents } from "@/mdx-components";

const metaLabelClassName = "font-mono text-xs tracking-[0.14em] text-home-code-comment uppercase";

const versionChipClassName =
  "inline-flex items-center rounded-[6px] border border-home-line bg-white/[0.03] px-2 py-0.5 font-mono text-xs tracking-[0.08em] whitespace-nowrap text-home-muted-strong";

function ReleaseNavCard({
  release,
  label,
  direction,
  className,
}: {
  release: ChangelogPage;
  label: string;
  direction: "newer" | "older";
  className?: string;
}) {
  const Icon = direction === "newer" ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={release.url}
      className={cn(
        "group flex h-full flex-col gap-2 rounded-[14px] border border-home-line bg-home-panel-raised/70 p-4 transition-colors hover:border-home-accent-line hover:bg-home-panel-hover focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg focus-visible:outline-none",
        className,
      )}
    >
      <span className={metaLabelClassName}>{label}</span>

      <span className="flex items-start justify-between gap-3">
        <span className="text-sm font-medium text-home-text transition-colors group-hover:text-home-accent-bright">
          {release.data.title}
        </span>
        <Icon
          aria-hidden="true"
          className={cn(
            "mt-0.5 size-3.5 shrink-0 text-home-code-comment transition-all duration-200 group-hover:text-home-accent-bright",
            direction === "newer" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5",
          )}
        />
      </span>

      {release.data.version ? (
        <span className="font-mono text-xs tracking-[0.08em] text-home-muted">
          {release.data.version}
        </span>
      ) : null}
    </Link>
  );
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = changelogSource.getPage([params.slug]);
  if (!page) notFound();

  const MDX = page.data.body;
  const { newer, older } = getAdjacentReleases(page);

  return (
    <>
      <section
        id="top"
        aria-labelledby="release-title"
        className="relative isolate overflow-hidden border-b border-home-line bg-home-bg pt-24 pb-14 md:pb-16"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 -top-32 h-[560px] bg-[radial-gradient(ellipse_50%_60%_at_50%_25%,rgba(59,130,246,0.16),transparent_70%)]" />
        </div>

        <div className="home-container">
          <div className="home-content">
            <Reveal>
              <Breadcrumb>
                <BreadcrumbList className="font-mono text-xs tracking-[0.14em] text-home-muted uppercase">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      asChild
                      className="rounded-[4px] transition-colors hover:text-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg focus-visible:outline-none"
                    >
                      <Link href="/changelog">Changelog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-home-line-strong" />
                  <BreadcrumbItem className="min-w-0">
                    <BreadcrumbPage className="inline-block max-w-full truncate font-mono text-xs font-normal tracking-[0.14em] text-home-muted-strong uppercase">
                      {page.data.title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                <ReleaseTypeBadge type={page.data.type} />

                {page.data.version ? (
                  <span className={versionChipClassName}>{page.data.version}</span>
                ) : null}

                <time
                  dateTime={page.data.date}
                  className="font-mono text-xs tracking-[0.08em] text-home-muted uppercase"
                >
                  {formatReleaseDate(page.data.date, "long")}
                </time>
              </div>

              <h1
                id="release-title"
                className="mt-5 text-balance text-[clamp(2.35rem,3.8vw,3rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-home-text"
              >
                {page.data.title}
              </h1>

              {page.data.description ? (
                <p className="mt-5 max-w-[58ch] text-pretty text-[15px] leading-[1.7] text-home-muted md:text-base">
                  {page.data.description}
                </p>
              ) : null}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-home-line bg-home-bg py-16 md:py-20">
        <div className="home-container">
          <div className="home-content grid items-start gap-12 xl:grid-cols-[minmax(0,1fr)_16rem]">
            <article
              aria-labelledby="release-title"
              className="changelog-prose prose min-w-0 max-w-[72ch]"
            >
              <MDX
                components={getMDXComponents({
                  a: createRelativeLink(changelogSource, page),
                })}
              />

              <nav
                aria-label="Release navigation"
                className="not-prose mt-14 grid gap-3 border-t border-home-line pt-8 sm:grid-cols-2"
              >
                {newer ? (
                  <ReleaseNavCard release={newer} label="Newer release" direction="newer" />
                ) : null}

                {older ? (
                  <ReleaseNavCard
                    release={older}
                    label="Older release"
                    direction="older"
                    className={cn(!newer && "sm:col-start-2")}
                  />
                ) : null}
              </nav>
            </article>

            <aside className="hidden xl:block">
              <div className="sticky top-24 flex flex-col gap-4">
                <div className="rounded-[16px] border border-home-line bg-home-panel-raised p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                  <p className="flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-home-code-comment uppercase">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-home-accent" />
                    Release
                  </p>

                  <dl className="mt-4 divide-y divide-home-line border-t border-home-line">
                    <div className="flex items-center justify-between gap-3 py-2.5">
                      <dt className={metaLabelClassName}>Version</dt>
                      <dd className="font-mono text-xs text-home-muted-strong">
                        {page.data.version ?? "—"}
                      </dd>
                    </div>

                    <div className="flex items-start justify-between gap-3 py-2.5">
                      <dt className={metaLabelClassName}>Date</dt>
                      <dd className="text-right font-mono text-xs text-home-muted-strong">
                        {formatReleaseDate(page.data.date, "long")}
                      </dd>
                    </div>

                    <div className="flex items-center justify-between gap-3 py-2.5">
                      <dt className={metaLabelClassName}>Type</dt>
                      <dd>
                        {page.data.type ? (
                          <ReleaseTypeBadge type={page.data.type} />
                        ) : (
                          <span className="font-mono text-xs text-home-muted">—</span>
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>

                {page.data.toc.length > 0 ? (
                  <nav
                    aria-labelledby="release-toc-heading"
                    className="rounded-[16px] border border-home-line bg-home-panel-raised p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                  >
                    <h2
                      id="release-toc-heading"
                      className="font-mono text-xs tracking-[0.14em] text-home-code-comment uppercase"
                    >
                      On this page
                    </h2>

                    <ul className="mt-3 flex flex-col gap-0.5 border-t border-home-line pt-3">
                      {page.data.toc.map((item) => (
                        <li key={item.url}>
                          <a
                            href={item.url}
                            className={cn(
                              "flex rounded-[6px] py-1 text-[13px] leading-relaxed text-home-muted transition-colors hover:text-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised focus-visible:outline-none",
                              item.depth > 2 && "pl-3",
                            )}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}

                <Link
                  href="/changelog"
                  className="group inline-flex items-center gap-1.5 self-start rounded-sm px-1 py-1 font-mono text-xs tracking-[0.14em] text-home-muted uppercase transition-colors hover:text-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg focus-visible:outline-none"
                >
                  <ArrowLeft
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
                  />
                  All releases
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return changelogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = changelogSource.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: `${page.data.title} — Changelog`,
    description: page.data.description ?? "Release notes and updates for Authula.",
  };
}
