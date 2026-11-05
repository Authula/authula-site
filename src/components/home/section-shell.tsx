import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SectionTone = "default" | "panel";

export type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
  contained?: boolean;
  ariaLabelledBy?: string;
};

// Page rhythm: a strict A/B alternation of default and panel tones, ending with
// the footer on bg-home-bg-deep as a deliberate terminal bookend.
const sectionTones: Record<string, SectionTone> = {
  "two-ways": "panel",
  architecture: "default",
  features: "panel",
  plugins: "default",
  integrations: "panel",
  developers: "default",
  production: "panel",
  "get-started": "default",
  community: "panel",
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-home-bg text-home-text",
  panel: "border-y border-home-line bg-home-panel text-home-text",
};

export function SectionShell({
  id,
  className,
  children,
  containerClassName,
  contained = true,
  ariaLabelledBy,
}: SectionShellProps) {
  const tone = id ? (sectionTones[id] ?? "default") : "default";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("relative scroll-mt-24 py-20 md:py-28 lg:py-32", toneClasses[tone], className)}
    >
      <div className={cn(contained && "home-container", containerClassName)}>{children}</div>
    </section>
  );
}
