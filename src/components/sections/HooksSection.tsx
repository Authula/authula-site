import { Server, Zap, Check, Radio } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import BorderIndicators from "@/components/shared/BorderIndicators";

const executionStages = [
  {
    id: "onrequest",
    stage: "OnRequest",
    description: "First hook for every request",
    color: "text-blue-500",
  },
  {
    id: "before",
    stage: "Before",
    description: "Before route matching & handling",
    color: "text-cyan-500",
  },
  {
    id: "after",
    stage: "After",
    description: "After handling, before response",
    color: "text-amber-500",
  },
  {
    id: "onresponse",
    stage: "OnResponse",
    description: "Final stage after response",
    color: "text-green-500",
  },
];

const hookCapabilities = [
  {
    id: "ordering",
    title: "Deterministic Ordering",
    icon: Radio,
    description: "Hooks execute in guaranteed order: by stage, then order.",
  },
  {
    id: "errors",
    title: "Error Handling",
    icon: Zap,
    description:
      "Hook errors are logged without stopping other hooks. Full control.",
  },
  {
    id: "control",
    title: "Flow Control",
    icon: Check,
    description: "Set handled flag to skip remaining hooks at the same stage.",
  },
  {
    id: "filtering",
    title: "Plugin Filtering",
    icon: Server,
    description:
      "Hooks execute selectively based on route metadata configuration.",
  },
];

export default function HooksSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950 bg-blue-500/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-blue-500/30 text-blue-500"
          >
            Advanced Customisation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sophisticated Hooks System
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Inject custom logic at any stage of the request lifecycle. Hooks
            execute in deterministic order with powerful error handling and flow
            control.
          </p>
        </div>

        {/* Execution Pipeline */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Hook Execution Stages
          </h3>
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch md:items-center justify-between">
            {executionStages.map((stage) => (
              <div key={stage.id} className="flex-1 flex flex-col items-center">
                <div
                  className={`md:w-full max-w-60 p-4 rounded-lg border-2 bg-card border-blue-500/20 hover:border-blue-500/40 transition-colors text-center flex flex-col h-full`}
                >
                  <p className={`font-bold text-lg mb-2 ${stage.color}`}>
                    {stage.stage}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
                <div className="hidden md:block h-6 w-0.5 bg-linear-to-b from-blue-500/50 to-transparent mt-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Hook Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {hookCapabilities.map((capability) => (
            <div
              key={capability.id}
              className="group relative overflow-hidden rounded-lg border-2 bg-card p-6 hover:border-blue-500/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <capability.icon size={60} />
              </div>
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                <capability.icon className="h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">{capability.title}</h4>
              <p className="text-sm text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Precise Control Over{" "}
              <span className="text-blue-500">Request Flow</span>
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-500">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Plugin-Local Ordering</h4>
                  <p className="text-sm text-muted-foreground">
                    Order values are local to each plugin. No global conflicts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-500">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Consistent Execution</h4>
                  <p className="text-sm text-muted-foreground">
                    Same hook order for every request. Predictable behavior.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-500">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Resilient Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Errors logged, not thrown. Hooks never crash your app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="relative">
            <div className="p-6 rounded-lg border-2 border-blue-500/20 bg-card/50 backdrop-blur-sm">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-4">
                Example Hook Flow
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-blue-500 shrink-0">→</span>
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      OnRequest
                    </span>{" "}
                    stage executes
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-cyan-500 shrink-0">→</span>
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Before
                    </span>{" "}
                    hooks execute
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-amber-500 shrink-0">→</span>
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Route handler
                    </span>{" "}
                    processes request
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-orange-500 shrink-0">→</span>
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">After</span>{" "}
                    hooks execute
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-500 shrink-0">→</span>
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      OnResponse
                    </span>{" "}
                    stage finalises
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
