import Link from "next/link";
import { Fragment } from "react";

import { ArrowRight, ArrowUpRight, BookOpen, Code2, Scale } from "lucide-react";

import { CodeBlock } from "@/components/home/code-block";
import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import { Button } from "@/components/ui/button";
import { getStartedCtas, getStartedLicense, getStartedSteps, sectionCopy } from "@/data/home";
import { homeSnippets } from "@/data/home-snippets";
import { cn } from "@/lib/utils";

const ctaStyles = [
  "border-0 bg-linear-to-r from-blue-600 to-sky-600 text-white hover:from-blue-500 hover:to-sky-500",
  "border border-home-line bg-transparent text-home-muted-strong hover:border-home-accent-line hover:bg-white/[0.02] hover:text-home-text",
] as const;

function CommandText({ value }: { value: string }) {
  const parts = value.split(/(?<=\/)/);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? <wbr /> : null}
        </Fragment>
      ))}
    </>
  );
}

function CtaIcon({ href }: { href: string }) {
  if (href === "/docs") {
    return <BookOpen className="size-4" aria-hidden="true" />;
  }

  return <Code2 className="size-4" aria-hidden="true" />;
}

export function GetStarted() {
  return (
    <SectionShell id="get-started" ariaLabelledBy="get-started-heading" tone="accent">
      <div className="home-content">
        <Reveal>
          <SectionHeader
            id="get-started-heading"
            title={sectionCopy.getStarted.title}
            description={sectionCopy.getStarted.description}
          />
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <Reveal delay={0.05} className="min-w-0">
            <ol className="flex min-w-0 flex-col">
              {getStartedSteps.map((step, index) => {
                const isLast = index === getStartedSteps.length - 1;

                return (
                  <li
                    key={step.id}
                    className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 pb-7 last:pb-0"
                  >
                    {!isLast ? (
                      <span
                        aria-hidden="true"
                        className="absolute top-10 bottom-0 left-4 w-px -translate-x-1/2 border-l border-dashed border-home-line"
                      />
                    ) : null}

                    <span
                      aria-hidden="true"
                      className="relative z-10 flex size-8 items-center justify-center rounded-[10px] border border-home-line bg-home-bg font-mono text-[11px] text-home-accent-bright shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-[-0.01em] text-home-text">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-home-muted">
                        {step.description}
                      </p>

                      {step.command ? (
                        <div className="mt-3 flex min-w-0 items-stretch overflow-hidden rounded-[10px] border border-home-line bg-home-code-bg">
                          <span className="flex shrink-0 items-center border-r border-home-line px-3 font-mono text-[10px] tracking-[0.12em] text-home-code-comment uppercase">
                            {step.language}
                          </span>
                          <div className="min-w-0 flex-1 overflow-x-auto px-3.5 py-2.5">
                            <code className="font-mono text-[12.5px] leading-5 whitespace-pre-wrap text-home-code-text">
                              <span className="text-home-code-comment select-none">$ </span>
                              <CommandText value={step.command} />
                            </code>
                          </div>
                        </div>
                      ) : null}

                      {step.link ? (
                        <Link
                          href={step.link.href}
                          className="group mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-home-accent-bright transition-colors hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg-deep focus-visible:outline-none"
                        >
                          {step.link.label}
                          <ArrowRight
                            className="size-3.5 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <div className="min-w-0">
              <div className="mb-3">
                <h3 className="text-lg font-semibold tracking-[-0.015em] text-home-text">
                  Run the image
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-home-muted">
                  Run the official image with your config file and environment.
                </p>
              </div>

              <CodeBlock
                code={homeSnippets.standaloneDocker}
                language="bash"
                filename="terminal"
                className="[&_.home-code-body]:max-h-[16rem] [&_.home-code-body]:overflow-y-auto [&_.home-code-body]:overscroll-contain"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-6 border-t border-home-line pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {getStartedCtas.map((cta, index) => {
                const content = (
                  <>
                    <CtaIcon href={cta.href} />
                    <span>{cta.label}</span>
                    {cta.external ? (
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    )}
                  </>
                );
                const className = cn(
                  "h-11 w-full gap-2 rounded-[10px] px-4 text-sm font-medium transition-all active:translate-y-px sm:w-auto",
                  ctaStyles[index] ?? ctaStyles[1],
                );

                return cta.external ? (
                  <Button key={cta.label} asChild className={className}>
                    <a href={cta.href} target="_blank" rel="noreferrer noopener">
                      {content}
                    </a>
                  </Button>
                ) : (
                  <Button key={cta.label} asChild className={className}>
                    <Link href={cta.href}>{content}</Link>
                  </Button>
                );
              })}
            </div>

            <p className="flex items-center gap-2 text-xs text-home-muted">
              <Scale className="size-3.5 text-home-code-comment" aria-hidden="true" />
              <span>Licensed under {getStartedLicense}.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
