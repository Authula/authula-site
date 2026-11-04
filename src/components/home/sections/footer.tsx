import Image from "next/image";
import Link from "next/link";

import { ArrowUp } from "lucide-react";

import { footerBrand, footerColumns } from "@/data/home";

const footerLinkClassName =
  "inline-flex min-h-11 w-fit items-center rounded-[6px] text-[13px] leading-relaxed text-home-muted transition-colors hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg-deep focus-visible:outline-none md:min-h-9";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

// Resolve once at module scope so the render path stays pure.
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative border-t border-home-line bg-home-bg-deep text-home-text">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-home-accent/40 to-transparent"
      />

      <div className="home-container py-16 md:py-20">
        <div className="home-content flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Authula home"
              className="inline-flex rounded-[8px] focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-4 focus-visible:ring-offset-home-bg-deep focus-visible:outline-none"
            >
              <Image src="/app-logo.png" alt="Authula" width={90} height={36} />
            </Link>

            <p className="mt-5 max-w-[34ch] text-pretty text-[15px] leading-[1.7] text-home-muted">
              {footerBrand.description}
            </p>

            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] text-home-muted-strong">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-home-accent" />
              {footerBrand.license}
            </p>
          </div>

          <nav aria-label="Footer" className="w-full lg:max-w-[640px]">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-home-code-comment uppercase">
                    {column.title}
                  </p>

                  <ul className="mt-3 flex flex-col gap-1">
                    {column.links.map((link) => {
                      const external = link.external ?? isExternalHref(link.href);

                      return (
                        <li key={link.label}>
                          {external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className={footerLinkClassName}
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link href={link.href} className={footerLinkClassName}>
                              {link.label}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="home-content mt-12 flex flex-col gap-4 border-t border-home-line pt-6 text-[13px] text-home-muted md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© {currentYear} Authula</span>
            <span aria-hidden="true" className="text-home-line-strong">
              ·
            </span>
            <span>{footerBrand.license}</span>
            <span aria-hidden="true" className="text-home-line-strong">
              ·
            </span>
            <span>{footerBrand.builtWith}</span>
          </p>

          <Link
            href={footerBrand.backToTop.href}
            className="group inline-flex min-h-11 w-fit items-center gap-2 rounded-[6px] text-home-muted-strong transition-colors hover:text-home-text focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-home-bg-deep focus-visible:outline-none"
          >
            {footerBrand.backToTop.label}
            <ArrowUp
              className="size-3.5 transition-transform group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
