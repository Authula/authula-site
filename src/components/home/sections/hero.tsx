import Link from "next/link";
import { Suspense } from "react";

import { ArrowRight, Star } from "lucide-react";

import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroContent, heroProofs } from "@/data/home";
import { getGitHubRepoStars } from "@/services/server";

const compactNumber = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const fullNumber = new Intl.NumberFormat("en");

const highlight = "Native to Go.";

function ProofPanel() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-home-line bg-home-panel/80 shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]"
      />

      <ul className="relative divide-y divide-home-line">
        {heroProofs.map((proof) => {
          const Icon = proof.icon;

          return (
            <li key={proof.title} className="flex gap-3.5 p-4 sm:p-5">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-[9px] border border-home-line bg-white/[0.02] text-home-accent-bright">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-home-text">{proof.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-home-muted">{proof.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

async function HeroStarBadge() {
  const stars = await getGitHubRepoStars();

  if (stars === null) {
    return null;
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-[6px] border border-home-line bg-white/[0.03] px-1.5 py-0.5 text-xs tabular-nums text-home-muted-strong">
      <Star className="size-3 text-home-accent-bright" aria-hidden="true" />
      <span className="sr-only">{fullNumber.format(stars)} stars</span>
      <span aria-hidden="true">{compactNumber.format(stars)}</span>
    </span>
  );
}

export function Hero() {
  const headline = heroContent.title[0];
  const highlightStart = headline.indexOf(highlight);
  const headlineBefore = highlightStart === -1 ? headline : headline.slice(0, highlightStart);
  const headlineAfter =
    highlightStart === -1 ? "" : headline.slice(highlightStart + highlight.length);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-3.5rem)] scroll-mt-24 flex-col justify-center overflow-hidden bg-home-bg py-16 md:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="home-grid-lines absolute inset-0" />
        <div className="absolute inset-x-0 -top-32 h-[560px] bg-[radial-gradient(ellipse_50%_60%_at_50%_25%,rgba(59,130,246,0.16),transparent_70%)]" />
      </div>

      <div className="home-container">
        <div className="home-content grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
          <div className="min-w-0">
            <div className="home-hero-in home-hero-in-1 flex flex-col gap-6">
              <Badge
                variant="outline"
                className="w-fit gap-2 border-home-line bg-white/[0.02] px-3 py-1 text-xs font-normal text-home-muted-strong"
              >
                <span className="size-1.5 rounded-full bg-home-accent-bright" aria-hidden="true" />
                {heroContent.badge}
              </Badge>

              <h1
                id="hero-title"
                className="text-balance text-[clamp(2.35rem,3.8vw,3rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-home-text"
              >
                <span className="block xl:whitespace-nowrap">
                  {headlineBefore}
                  {highlightStart !== -1 ? (
                    <span className="text-home-accent-bright">{highlight}</span>
                  ) : null}
                  {headlineAfter}
                </span>{" "}
                <span className="block">{heroContent.title[1]}</span>
              </h1>
            </div>

            <p className="home-hero-in home-hero-in-2 mt-6 max-w-[58ch] text-pretty text-[15px] leading-[1.7] text-home-muted md:text-base">
              {heroContent.description}
            </p>

            <div className="home-hero-in home-hero-in-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-11 w-full rounded-[10px] border-0 bg-linear-to-r from-blue-700 to-sky-700 px-5 text-sm font-medium text-white shadow-[0_10px_30px_-14px_rgba(37,99,235,0.8)] transition-[filter,transform] hover:from-blue-800 hover:to-sky-800 active:translate-y-px focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg sm:w-auto"
              >
                <Link href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 w-full rounded-[10px] border-home-line bg-transparent px-4 text-sm font-medium text-home-muted-strong hover:border-home-accent-line hover:bg-white/[0.03] hover:text-home-text active:translate-y-px focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg sm:w-auto"
              >
                <a
                  href={heroContent.secondaryCta.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View on GitHub"
                >
                  <span aria-hidden="true" className="flex items-center">
                    <GitHubIcon className="size-4" />
                  </span>
                  <span>{heroContent.secondaryCta.label}</span>
                  <Suspense
                    fallback={<span aria-hidden="true" className="inline-flex h-5 min-w-[44px]" />}
                  >
                    <HeroStarBadge />
                  </Suspense>
                </a>
              </Button>
            </div>
          </div>

          <div className="home-hero-in home-hero-in-3 min-w-0">
            <ProofPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
