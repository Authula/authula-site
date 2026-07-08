import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { changelogSource } from "@/lib/changelog";
import { getMDXComponents } from "@/mdx-components";

const typeColors: Record<string, string> = {
  feature: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  fix: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  breaking: "bg-red-500/15 text-red-400 border-red-500/30",
  improvement: "bg-blue-500/15 text-blue-400 border-blue-500/30",
};

function Badge({ type }: { type?: string }) {
  if (!type) return null;
  const color =
    typeColors[type] ?? "bg-zinc-500/15 text-zinc-400 border-zinc-500/30";
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${color}`}
    >
      {type}
    </span>
  );
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = changelogSource.getPage([params.slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <div className="custom-container">
      <div className="mx-auto flex gap-12">
        <article className="min-w-0 flex-1">
          <Breadcrumb className="mb-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/changelog">Changelog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{page.data.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-3 mb-2">
            <Badge type={page.data.type} />
            {page.data.version && (
              <span className="text-xs text-muted-foreground font-mono">
                {page.data.version}
              </span>
            )}
            <time className="text-xs text-muted-foreground ml-auto">
              {new Date(page.data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-[1.75em] font-semibold mb-8">
            {page.data.title}
          </h1>
          <div className="prose max-w-none">
            <MDX
              components={getMDXComponents({
                a: createRelativeLink(changelogSource, page),
              })}
            />
          </div>
        </article>
        {page.data.toc.length > 0 && (
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-24 space-y-2 text-sm">
              <p className="font-medium text-muted-foreground">On this page</p>
              <ul className="space-y-1.5">
                {page.data.toc.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
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
    title: page.data.title,
    description: page.data.description,
  };
}
