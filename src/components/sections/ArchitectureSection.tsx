import { Check, Code2, Server } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BorderIndicators from "@/components/shared/BorderIndicators";

const libraryModeFeatures = [
  "Built-in Chi router for flexible request handling",
  "Complete programmatic access to APIs, plugins, and service registry",
  "Seamless integration with existing Go codebases",
  "Customise compilation and build process",
  "Unlock advanced capabilities unavailable in standalone mode",
];

const standaloneModeFeatures = [
  "Centralised auth service",
  "Works with any tech stack",
  "TOML-based configuration",
  "Scales independently",
  "Docker & K8s ready",
];

export default function ArchitectureSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950 bg-blue-500/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Two Ways to Build
          </h2>
          <p className="text-muted-foreground text-lg">
            Authula is designed to grow with your needs. Embed it as a library
            giving you full control via code, or deploy it via Docker as a
            centralised auth service for your entire backend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Library Mode */}
          <Card className="relative overflow-hidden border-2 border-primary/10 hover:border-blue-500/30 bg-background/60 backdrop-blur-sm transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Code2 size={120} />
            </div>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Library Mode</CardTitle>
              <CardDescription className="text-base">
                Import directly into your Go application giving you full control
                via code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {libraryModeFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Standalone Mode */}
          <Card className="relative overflow-hidden border-2 border-primary/10 bg-background/60 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Server size={120} />
            </div>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-sky-500" />
              </div>
              <CardTitle className="text-2xl">Standalone Mode</CardTitle>
              <CardDescription className="text-base">
                Run as a standalone service. Ideal for microservices and
                multi-language tech stacks.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {standaloneModeFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-sky-500 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
