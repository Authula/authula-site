import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const cornerPositions = [
  "left-0 top-0",
  "left-full top-0",
  "left-0 top-full",
  "left-full top-full",
] as const;

function StarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      data-frame-star=""
      className={cn(
        "pointer-events-none absolute size-2.5 -translate-x-1/2 -translate-y-1/2 text-home-accent-bright",
        className,
      )}
    >
      <path d="M12 0c.74 6.48 5.52 11.26 12 12-6.48.74-11.26 5.52-12 12C11.26 17.52 6.48 12.74 0 12 6.48 11.26 11.26 6.48 12 0Z" />
    </svg>
  );
}

export type FrameCornersProps = {
  className?: string;
};

/**
 * Four-point star markers centred on the four corners of the nearest
 * `relative` ancestor. Only rendered at xl, matching the dashed frame rails.
 */
export function FrameCorners({ className }: FrameCornersProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 hidden xl:block", className)}
    >
      {cornerPositions.map((position) => (
        <StarMark key={position} className={position} />
      ))}
    </div>
  );
}

export type SectionFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Dashed frame offset 24px outside the content column at xl. Below xl it is a
 * plain wrapper, so there is no half-finished rail or horizontal overflow.
 */
export function SectionFrame({ children, className }: SectionFrameProps) {
  return (
    <div
      data-section-frame=""
      className={cn(
        "relative xl:-mx-6 xl:border-x xl:border-dashed xl:border-home-line xl:px-6",
        className,
      )}
    >
      <FrameCorners />
      {children}
    </div>
  );
}
