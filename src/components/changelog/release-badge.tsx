import { AlertTriangle, Sparkles, TrendingUp, Wrench, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export const releaseTypeOrder = ["feature", "improvement", "fix", "breaking"] as const;

export type ReleaseType = (typeof releaseTypeOrder)[number];

export type ReleaseTypeMeta = {
  label: string;
  icon: LucideIcon;
  className: string;
  dotClassName: string;
};

export const releaseTypeMeta: Record<ReleaseType, ReleaseTypeMeta> = {
  feature: {
    label: "Feature",
    icon: Sparkles,
    className: "border-home-accent-line bg-home-accent-soft text-home-accent-bright",
    dotClassName: "bg-home-accent-bright",
  },
  improvement: {
    label: "Improvement",
    icon: TrendingUp,
    className: "border-home-accent-line bg-home-accent-soft text-home-accent-bright",
    dotClassName: "bg-home-accent-bright",
  },
  fix: {
    label: "Fix",
    icon: Wrench,
    className: "border-home-line bg-white/[0.03] text-home-muted-strong",
    dotClassName: "bg-home-muted-strong",
  },
  breaking: {
    label: "Breaking",
    icon: AlertTriangle,
    className: "border-red-500/30 bg-red-500/10 text-red-400",
    dotClassName: "bg-red-400",
  },
};

export function getReleaseTypeMeta(type?: string): ReleaseTypeMeta | undefined {
  if (!type || !Object.hasOwn(releaseTypeMeta, type)) {
    return undefined;
  }

  return releaseTypeMeta[type as ReleaseType];
}

export function ReleaseTypeBadge({ type, className }: { type?: string; className?: string }) {
  const meta = getReleaseTypeMeta(type);

  if (!meta) {
    return null;
  }

  const Icon = meta.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-xs tracking-[0.08em] uppercase",
        meta.className,
        className,
      )}
    >
      <Icon className="size-3 shrink-0" aria-hidden="true" />
      {meta.label}
    </span>
  );
}
