import { Layers } from "lucide-react";

type ModeCardProps = {
  label: string;
  target: string;
};

function ModeCard({ label, target }: ModeCardProps) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5 rounded-[12px] border border-home-line bg-home-panel-raised/70 p-2.5">
      <span className="truncate font-mono text-[11px] tracking-[0.04em] text-home-muted-strong">
        {label}
      </span>
      <span className="truncate text-xs text-home-muted">{target}</span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative w-full">
      <p className="sr-only">
        Two deployment paths share the same Authula core. Library mode runs in-process inside your
        Go service. Standalone mode runs the Authula server, reached over HTTP. Both use the same
        plugins, sessions and providers.
      </p>

      <div
        role="img"
        aria-label="Diagram of the two Authula deployment paths converging on a shared core: in-process library mode and standalone mode over HTTP."
        className="relative overflow-hidden rounded-[20px] border border-home-line bg-home-panel/80 shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]"
        />

        <div
          aria-hidden="true"
          className="relative flex items-center gap-3 border-b border-home-line px-4 py-2.5"
        >
          <span className="flex shrink-0 items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-home-line-strong" />
            <span className="size-1.5 rounded-full bg-home-line-strong" />
            <span className="size-1.5 rounded-full bg-home-accent/70" />
          </span>
          <span className="truncate font-mono text-xs tracking-[0.04em] text-home-muted">
            Same core. Two deployment models.
          </span>
        </div>

        <div aria-hidden="true" className="relative flex flex-col gap-2 p-3 sm:p-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <ModeCard label="Library mode" target="Your Go service" />
            <ModeCard label="Standalone mode" target="Authula server" />
          </div>

          <div className="relative hidden h-6 w-full sm:block">
            <svg
              viewBox="0 0 100 24"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              <path
                d="M25 0 C25 10 50 8 50 22"
                fill="none"
                stroke="rgba(125,150,185,0.4)"
                strokeWidth="1"
                strokeDasharray="3 4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M75 0 C75 10 50 8 50 22"
                fill="none"
                stroke="rgba(125,150,185,0.4)"
                strokeWidth="1"
                strokeDasharray="3 4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-home-accent-bright" />
          </div>

          <div className="flex h-3 items-center justify-center sm:hidden">
            <span className="h-full w-px bg-home-line-strong" />
          </div>

          <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[14px] border border-home-accent-line bg-home-panel-raised px-4 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-home-accent/10 blur-2xl" />
            <div className="relative flex flex-col items-center gap-0.5">
              <span className="flex items-center gap-2 font-mono text-xs font-medium text-home-text">
                <Layers className="size-3.5 text-home-accent-bright" aria-hidden="true" />
                Authula core
              </span>
              <span className="font-mono text-[11px] text-home-muted">one core · two paths</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
