import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  title: string;
  description?: string;
  id: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  id,
  align = "left",
  action,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", centered && "items-center")}>
        <h2
          id={id}
          className="text-balance text-[clamp(2rem,3.4vw,3rem)] leading-[1.08] font-semibold tracking-[-0.025em] text-home-text"
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-[65ch] text-pretty text-[15px] leading-[1.7] text-home-muted md:text-base",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
