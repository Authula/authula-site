import {
  Check,
  X,
  Zap,
  Cpu,
  Box,
  Layers,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const comparisonData = [
  {
    feature: "Runtime Performance",
    us: "Blazing fast (Compiled)",
    others: "Runtime overhead",
    icon: Zap,
  },
  {
    feature: "Memory Footprint",
    us: "Minimal (Native binaries)",
    others: "Heavy runtime",
    icon: Cpu,
  },
  {
    feature: "Deployment",
    us: "Single static binary",
    others: "Complex package managers & runtime",
    icon: Box,
  },
  {
    feature: "Architecture",
    us: "Library + Standalone server",
    others: "Mostly framework-bound",
    icon: Layers,
  },
  {
    feature: "Type Safety",
    us: "Native built-in type safety",
    others: "Interpreted/Transpiled",
    icon: ShieldCheck,
  },
  {
    feature: "Concurrency",
    us: "Power of goroutines",
    others: "Single-threaded or limited concurrency",
    icon: Rocket,
  },
];

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative border-b border-dashed border-sky-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineered for Performance
          </h2>
          <p className="text-muted-foreground text-lg">
            Authula brings the power of Go to authentication. Experience
            unmatched speed, efficiency, and flexibility compared to other
            solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-sky-950 bg-background/50 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-3 border-b border-sky-950 bg-blue-500/10 p-4 md:p-6 font-bold text-sm md:text-lg tracking-tight">
            <div className="col-span-1">Feature</div>
            <div className="col-span-1 text-blue-500 flex items-center gap-2">
              Authula
            </div>
            <div className="col-span-1 text-muted-foreground">Others</div>
          </div>

          <div className="divide-y divide-sky-950/30">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 p-4 md:p-6 hover:bg-blue-500/5 transition-colors group"
              >
                <div className="col-span-1 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <span className="font-medium text-xs md:text-base">
                    {item.feature}
                  </span>
                </div>
                <div className="col-span-1 flex items-center gap-2 text-blue-400">
                  <Check className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                  <span className="text-[10px] md:text-sm font-medium">
                    {item.us}
                  </span>
                </div>
                <div className="col-span-1 flex items-center gap-2 text-muted-foreground/60">
                  <X className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                  <span className="text-[10px] md:text-sm">{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-xl border border-dashed border-sky-900 bg-blue-500/5">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-500" />
              Blazing Fast
            </h4>
            <p className="text-sm text-muted-foreground">
              Go's compiled nature means sub-millisecond response times for
              authentication flows, even under heavy load.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-sky-900 bg-blue-500/5">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-blue-500" />
              Memory Efficient
            </h4>
            <p className="text-sm text-muted-foreground">
              Run your entire auth service with just a few megabytes of RAM.
              Perfect for edge deployments and cost-saving.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-sky-900 bg-blue-500/5">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Layers className="h-4 w-4 text-blue-500" />
              Truly Flexible
            </h4>
            <p className="text-sm text-muted-foreground">
              Not just for Go apps. Use it standalone and connect it with any
              web frontend such as React, Vue, and more.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-sky-900 bg-blue-500/5">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Box className="h-4 w-4 text-blue-500" />
              Extensible Plugin System
            </h4>
            <p className="text-sm text-muted-foreground">
              Easily extend authentication flows with our plugin system—add
              custom logic, integrations, or providers with minimal effort.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-sky-900 bg-blue-500/5">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Rocket className="h-4 w-4 text-blue-500" />
              Microservices Ready
            </h4>
            <p className="text-sm text-muted-foreground">
              Built for distributed systems—deploy as a lightweight service in
              your microservices architecture. Easily configure separate
              instances with different auth flows or plugins.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-sky-900 bg-blue-500/5">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-500" />
              Security First
            </h4>
            <p className="text-sm text-muted-foreground">
              Built with Go's strong type safety and robust security features to
              keep your users and data protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
