import type { ReactNode } from "react";

import { SectionFrame } from "@/components/home/frame-corners";
import { cn } from "@/lib/utils";

export type SectionTone = "default" | "panel" | "accent";

export type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: SectionTone;
  rails?: boolean;
  containerClassName?: string;
  contained?: boolean;
  ariaLabelledBy?: string;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-home-bg text-home-text",
  panel: "border-y border-home-line bg-home-panel text-home-text",
  accent: "bg-home-bg-deep text-home-text",
};

export function SectionShell({
  id,
  className,
  children,
  tone = "default",
  rails = false,
  containerClassName,
  contained = true,
  ariaLabelledBy,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("relative scroll-mt-24 py-20 md:py-28 lg:py-32", toneClasses[tone], className)}
    >
      <div className={cn(contained && "home-container", containerClassName)}>
        {rails ? <SectionFrame>{children}</SectionFrame> : children}
      </div>
    </section>
  );
}
