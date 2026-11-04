import { loader } from "fumadocs-core/source";
import { changelog } from "fumadocs-mdx:collections/server";

export const changelogSource = loader({
  baseUrl: "/changelog",
  source: changelog.toFumadocsSource(),
});

export type ChangelogPage = ReturnType<typeof changelogSource.getPages>[number];

const dateFormatters: Record<"short" | "long", Intl.DateTimeFormat> = {
  short: new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }),
  long: new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }),
};

function toReleaseDate(date: string | Date): Date {
  if (date instanceof Date) {
    return date;
  }

  // Frontmatter dates are calendar dates. Parsing them as UTC and formatting
  // them in UTC keeps the day from shifting for readers west of Greenwich.
  return new Date(/^\d{4}-\d{2}-\d{2}$/.test(date) ? `${date}T00:00:00Z` : date);
}

export function formatReleaseDate(date: string | Date, variant: "short" | "long"): string {
  return dateFormatters[variant].format(toReleaseDate(date));
}

export function getSortedChangelogPages(): ChangelogPage[] {
  return [...changelogSource.getPages()].sort((a, b) => {
    const dateDelta = toReleaseDate(b.data.date).getTime() - toReleaseDate(a.data.date).getTime();

    if (dateDelta !== 0) {
      return dateDelta;
    }

    // Keep same-day releases in a predictable order.
    return b.data.title.localeCompare(a.data.title) || a.url.localeCompare(b.url);
  });
}

export function getAdjacentReleases(page: ChangelogPage): {
  newer: ChangelogPage | undefined;
  older: ChangelogPage | undefined;
} {
  const sorted = getSortedChangelogPages();
  const index = sorted.findIndex((entry) => entry.url === page.url);

  if (index === -1) {
    return { newer: undefined, older: undefined };
  }

  return {
    newer: index > 0 ? sorted[index - 1] : undefined,
    older: index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
}
