import type { ReactNode } from "react";

import {
  Activity,
  ChevronDown,
  Database,
  Globe,
  Layers,
  Mail,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type ZoneProps = {
  index: string;
  title: string;
  className?: string;
  children: ReactNode;
};

type ClientNode = {
  label: string;
  icon: LucideIcon;
};

type AuthulaLayer = {
  title: string;
  tag: string;
  meta: string;
  entry?: boolean;
};

type InfrastructureNode = {
  label: string;
  meta: string;
  icon: LucideIcon;
};

const clientNodes: readonly ClientNode[] = [
  { label: "Web app", icon: Globe },
  { label: "Mobile app", icon: Smartphone },
  { label: "Backend service", icon: Server },
];

const authulaLayers: readonly AuthulaLayer[] = [
  {
    title: "HTTP handler",
    tag: "entry",
    meta: "net/http + Chi",
    entry: true,
  },
  {
    title: "Core services",
    tag: "core",
    meta: "users · sessions · verification",
  },
  {
    title: "Plugin runtime",
    tag: "runtime",
    meta: "hooks · registry · event bus",
  },
];

const infrastructureNodes: readonly InfrastructureNode[] = [
  {
    label: "PostgreSQL / MySQL / SQLite",
    meta: "database",
    icon: Database,
  },
  {
    label: "Redis / secondary storage",
    meta: "cache",
    icon: Layers,
  },
  {
    label: "SMTP",
    meta: "email",
    icon: Mail,
  },
  {
    label: "GitHub / Google / Discord",
    meta: "oauth",
    icon: Globe,
  },
  {
    label: "OTLP collector",
    meta: "telemetry",
    icon: Activity,
  },
];

const architectureCaption =
  "Library mode keeps Authula inside your Go process. Standalone mode exposes the same core over HTTP.";

function Zone({ index, title, className, children }: ZoneProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col rounded-[16px] border border-home-line bg-home-panel/80 p-3.5 sm:p-4",
        className,
      )}
    >
      <div className="flex items-baseline gap-2 border-b border-home-line pb-2.5">
        <span className="font-mono text-[10px] text-home-code-comment">{index}</span>
        <h3 className="font-mono text-[10px] tracking-[0.16em] text-home-muted-strong uppercase">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function HorizontalFlow() {
  return (
    <div
      className="hidden items-center justify-center text-home-accent/60 xl:flex"
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 12" className="h-3 w-full" fill="none" preserveAspectRatio="none">
        <line
          x1="0"
          y1="6"
          x2="40"
          y2="6"
          className="home-dash-flow"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M39 2.5 45 6 39 9.5"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function VerticalFlow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center md:hidden" aria-hidden="true">
      <span className="h-4 border-l border-dashed border-home-line-strong" />
      <span className="my-1 inline-flex items-center gap-1 rounded-full border border-home-line bg-home-panel px-2 py-0.5 font-mono text-[9px] tracking-[0.1em] text-home-code-comment uppercase">
        <ChevronDown className="size-2.5" aria-hidden="true" />
        {label}
      </span>
      <span className="h-4 border-l border-dashed border-home-line-strong" />
    </div>
  );
}

function PathRow({ label }: { label: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-[8px] border border-home-line bg-home-bg-deep/70 px-2.5 py-1.5">
      <span className="size-1.5 shrink-0 rounded-full bg-home-accent" aria-hidden="true" />
      <span className="truncate font-mono text-[10px] leading-relaxed text-home-muted-strong">
        {label}
      </span>
    </div>
  );
}

export function ArchitectureMap() {
  return (
    <div>
      <div
        role="img"
        aria-label="Authula architecture: clients connect either in-process through the library or over HTTP in standalone mode to the Authula HTTP handler. The handler runs core services for users, sessions and verification plus the plugin runtime, and connects to your own databases, Redis, SMTP, OAuth providers and OTLP collector."
        className="relative overflow-hidden rounded-[20px] border border-home-line bg-home-panel/70 p-4 shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9),inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-5 xl:p-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-56 w-[70%] -translate-x-1/2 rounded-full bg-home-accent/[0.07] blur-3xl"
        />

        <div className="relative grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,0.9fr)_2.75rem_minmax(0,1.3fr)_2.75rem_minmax(0,1fr)] xl:items-stretch">
          <Zone index="01" title="Clients">
            <div className="flex flex-1 flex-col justify-center gap-2 pt-3">
              {clientNodes.map((node) => {
                const Icon = node.icon;

                return (
                  <div
                    key={node.label}
                    className="flex min-w-0 items-center gap-2.5 rounded-[10px] border border-home-line bg-home-panel-raised px-3 py-2"
                  >
                    <Icon className="size-3.5 shrink-0 text-home-muted" aria-hidden="true" />
                    <span className="truncate text-[13px] text-home-muted-strong">
                      {node.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-auto border-t border-home-line pt-2.5 font-mono text-[9px] tracking-[0.1em] text-home-code-comment uppercase">
              Library or HTTP
            </p>
          </Zone>

          <VerticalFlow label="request" />
          <HorizontalFlow />

          <Zone
            index="02"
            title="Authula"
            className="border-home-line-strong bg-home-panel-raised shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
          >
            <div className="mt-3 grid gap-1.5">
              <PathRow label="Library: in-process" />
              <PathRow label="Standalone: HTTP" />
            </div>

            <div className="mt-3 flex flex-1 flex-col justify-center gap-2">
              {authulaLayers.map((layer) => (
                <div
                  key={layer.title}
                  className={cn(
                    "rounded-[10px] border px-3 py-2.5",
                    layer.entry
                      ? "border-home-accent-line bg-home-accent-soft"
                      : "border-home-line bg-home-bg-deep/50",
                  )}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={cn(
                        "text-[13px] font-medium",
                        layer.entry ? "text-home-accent-bright" : "text-home-text",
                      )}
                    >
                      {layer.title}
                    </span>
                    <span className="shrink-0 font-mono text-[9px] text-home-code-comment">
                      {layer.tag}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[10px] leading-relaxed text-home-muted">
                    {layer.meta}
                  </p>
                </div>
              ))}
            </div>
          </Zone>

          <VerticalFlow label="storage · mail · oauth" />
          <HorizontalFlow />

          <Zone index="03" title="Your infrastructure" className="md:col-span-2 xl:col-span-1">
            <div className="mt-3 grid flex-1 content-center gap-2 md:grid-cols-2 xl:grid-cols-1">
              {infrastructureNodes.map((node, index) => {
                const Icon = node.icon;

                return (
                  <div
                    key={node.label}
                    className={cn(
                      "flex min-w-0 items-start gap-2 rounded-[10px] border border-home-line bg-home-panel-raised px-2.5 py-2",
                      index === infrastructureNodes.length - 1 && "md:col-span-2 xl:col-span-1",
                    )}
                  >
                    <Icon className="mt-0.5 size-3.5 shrink-0 text-home-muted" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-[12px] leading-snug text-home-muted-strong">
                        {node.label}
                      </p>
                      <p className="mt-0.5 font-mono text-[9px] tracking-[0.1em] text-home-code-comment uppercase">
                        {node.meta}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Zone>
        </div>
      </div>

      <p className="mt-4 max-w-[70ch] text-[13px] leading-relaxed text-pretty text-home-muted">
        {architectureCaption}
      </p>

      <p className="sr-only">
        Web, mobile and backend clients reach Authula in two ways. In library mode, auth.Handler()
        runs inside the Go process. In standalone mode, clients call the Authula server over HTTP.
        The HTTP handler, built on net/http and Chi, routes requests to core services for users,
        sessions and verification and to the plugin runtime with hooks, the registry and the event
        bus. Authula then uses your infrastructure: PostgreSQL, MySQL or SQLite for data, Redis or
        secondary storage for high-churn state, SMTP for email, GitHub, Google or Discord for OAuth,
        and an OTLP collector for telemetry.
      </p>
    </div>
  );
}
