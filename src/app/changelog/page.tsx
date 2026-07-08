import Link from "next/link";

import { changelogSource } from "@/lib/changelog";
import { Separator } from "@/components/ui/separator";

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

export default function ChangelogPage() {
  const pages = changelogSource.getPages();
  const sorted = pages.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return (
    <main className="custom-container">
      <div className="w-full">
        <h1 className="text-4xl font-bold">Changelog</h1>
        <Separator className="my-10" />
        <div className="relative">
          <div className="absolute left-2.75 top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-8">
            {sorted.map((page) => (
              <div key={page.url} className="relative pl-10">
                <div className="absolute left-1.25 top-1.5 w-3.25 h-3.25 rounded-full bg-primary border-[3px] border-background" />
                <Link href={page.url} className="block group">
                  <div className="flex items-center gap-3 mb-1">
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
                  <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {page.data.title}
                  </h2>
                  {page.data.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {page.data.description}
                    </p>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
