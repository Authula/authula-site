import { ChevronDown } from "lucide-react";

export type ModeDiagramProps = {
  mode: "library" | "standalone";
};

const nodeClasses =
  "flex min-w-0 items-center justify-between gap-2 rounded-[10px] border border-home-line bg-home-panel-raised px-3 py-2";

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="relative flex h-7 w-full items-center justify-center" aria-hidden="true">
      <span className="h-4 w-px bg-home-line-strong" />
      <ChevronDown className="-mt-0.5 size-2.5 text-home-accent/70" />
      {label ? (
        <span className="absolute top-1/2 left-1/2 ml-3 -translate-y-1/2 font-mono text-[9px] tracking-[0.12em] text-home-code-comment uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}

const clientLabels = ["Web app", "Mobile", "Backend"] as const;

function LibraryDiagram() {
  return (
    <div className="flex h-full min-h-[15rem] flex-col rounded-[14px] border border-dashed border-home-line bg-home-bg-deep/60 p-3.5 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] tracking-[0.16em] text-home-code-comment uppercase">
          Your Go app
        </span>
        <span className="font-mono text-[9px] text-home-code-comment">process</span>
      </div>

      <div className="mt-3 flex flex-1 flex-col justify-center">
        <div className={nodeClasses}>
          <span className="font-mono text-[12px] text-home-muted-strong">net/http</span>
          <span className="font-mono text-[9px] tracking-[0.1em] text-home-code-comment uppercase">
            server
          </span>
        </div>

        <FlowArrow label="mount" />

        <div className="flex min-w-0 items-center justify-between gap-2 rounded-[10px] border border-home-accent-line bg-home-accent-soft px-3 py-2">
          <span className="font-mono text-[12px] text-home-accent-bright">auth.Handler()</span>
          <span className="font-mono text-[9px] text-home-muted">http.Handler</span>
        </div>

        <FlowArrow />

        <div className="rounded-[10px] border border-home-line-strong bg-home-panel px-3 py-2.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[11px] font-medium text-home-text">Authula core</span>
            <span className="font-mono text-[9px] text-home-code-comment">in-process</span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-[10px] text-home-muted">
            <span>plugins</span>
            <span aria-hidden="true">·</span>
            <span>sessions</span>
            <span aria-hidden="true">·</span>
            <span>providers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StandaloneDiagram() {
  return (
    <div className="flex h-full min-h-[15rem] flex-col rounded-[14px] border border-home-line bg-home-bg-deep/60 p-3.5 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] tracking-[0.16em] text-home-code-comment uppercase">
          Clients
        </span>
        <span className="font-mono text-[9px] text-home-code-comment">your apps</span>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {clientLabels.map((client) => (
          <span
            key={client}
            className="truncate rounded-[8px] border border-home-line bg-home-panel-raised px-1.5 py-1.5 text-center font-mono text-[10px] text-home-muted-strong"
          >
            {client}
          </span>
        ))}
      </div>

      <FlowArrow label="HTTP" />

      <div className="flex min-w-0 items-center justify-between gap-2 rounded-[10px] border border-home-accent-line bg-home-accent-soft px-3 py-2">
        <span className="font-mono text-[12px] text-home-accent-bright">Authula server</span>
        <span className="font-mono text-[9px] text-home-muted">auth.Handler()</span>
      </div>

      <FlowArrow />

      <div className="flex flex-1 flex-col justify-end">
        <div className="rounded-[10px] border border-home-line bg-home-panel-raised px-3 py-2.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[11px] font-medium text-home-text">Your infrastructure</span>
            <span className="font-mono text-[9px] text-home-code-comment">your stack</span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-[10px] text-home-muted">
            <span>database</span>
            <span aria-hidden="true">·</span>
            <span>cache</span>
            <span aria-hidden="true">·</span>
            <span>email</span>
            <span aria-hidden="true">·</span>
            <span>oauth</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ModeDiagram({ mode }: ModeDiagramProps) {
  const isLibrary = mode === "library";
  const label = isLibrary
    ? "Library mode diagram: net/http mounts auth.Handler(), which runs the in-process Authula core with plugins, sessions and providers."
    : "Standalone mode diagram: web, mobile and backend clients reach the Authula server over HTTP, which connects to your database, Redis, SMTP and OAuth providers.";

  return (
    <div role="img" aria-label={label} className="h-[16.5rem] w-full">
      {isLibrary ? <LibraryDiagram /> : <StandaloneDiagram />}
    </div>
  );
}
