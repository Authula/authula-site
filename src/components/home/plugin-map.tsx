import { Boxes, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const leftPlugins = ["Auth method", "Token issuer", "Session store", "Data adapter"] as const;
const rightPlugins = ["Request guard", "Access policy", "Custom route"] as const;

const chipClassName =
  "flex w-full items-center justify-center rounded-[10px] border border-home-line bg-home-panel px-2.5 py-2 text-center text-xs leading-snug text-home-muted-strong xl:w-auto";

export function PluginMap({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-home-line bg-home-panel shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="home-grid-lines pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 border-b border-home-line pb-4 text-xs tracking-[0.14em] uppercase">
          <span className="text-home-muted">Plugins</span>
          <span className="text-home-accent-bright">Compiled into the binary</span>
        </div>

        <div className="relative isolate mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-center xl:gap-3">
          <ul className="relative z-10 order-2 grid grid-cols-2 gap-2 xl:order-1 xl:flex xl:flex-col xl:items-end">
            {leftPlugins.map((plugin) => (
              <li key={plugin} className={chipClassName}>
                {plugin}
              </li>
            ))}
          </ul>

          <div className="relative order-1 flex justify-center xl:order-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-home-line xl:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-home-line/60 xl:block"
            />

            <div className="relative z-10 w-full max-w-[230px] rounded-[14px] border border-home-accent-line bg-home-panel-raised px-4 py-4 text-center shadow-[0_24px_80px_-32px_rgba(3,7,16,0.9)] xl:w-[176px]">
              <div className="flex items-center justify-center gap-2">
                <Boxes className="size-4 text-home-accent-bright" aria-hidden="true" />
                <span className="text-sm font-semibold text-home-text">Authula core</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-home-muted">
                Shared services, hooks and migrations
              </p>
            </div>
          </div>

          <ul className="relative z-10 order-3 grid grid-cols-2 gap-2 xl:flex xl:flex-col xl:items-start">
            {rightPlugins.map((plugin) => (
              <li key={plugin} className={chipClassName}>
                {plugin}
              </li>
            ))}
            <li className="flex w-full items-center justify-center gap-1.5 rounded-[10px] border border-dashed border-home-accent-line bg-home-accent-soft px-2.5 py-2 text-center text-xs leading-snug text-home-accent-bright xl:w-auto">
              <Plus className="size-3.5" aria-hidden="true" />
              Your plugin
            </li>
          </ul>
        </div>

        <p className="mt-6 border-t border-home-line pt-4 text-xs leading-relaxed text-home-muted">
          Plugins register their routes, hooks and migrations with the core. Add your own without
          forking it.
        </p>
      </div>
    </div>
  );
}
