import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BorderIndicators from "@/components/shared/BorderIndicators";

import {
  Puzzle,
  Zap,
  Radio,
  Webhook,
  Shield,
  Key,
  Mail,
  Globe,
  Fingerprint,
  Cookie,
  Blocks,
  Timer,
} from "lucide-react";

const builtInPlugins = [
  { name: "Email/Password", icon: Mail, color: "text-amber-500" },
  { name: "OAuth2", icon: Globe, color: "text-green-500" },
  { name: "CSRF", icon: Cookie, color: "text-purple-500" },
  { name: "JWT", icon: Fingerprint, color: "text-yellow-500" },
  { name: "Bearer", icon: Key, color: "text-cyan-500" },
  { name: "Rate Limit", icon: Timer, color: "text-cyan-500" },
];

const capabilities = [
  {
    icon: Blocks,
    title: "Modular Composition",
    description:
      "Mix and match plugins to build exactly the auth system you need.",
  },
  {
    icon: Zap,
    title: "Hook System",
    description:
      "Inject custom logic at request, before/after, and response stages.",
  },
  {
    icon: Puzzle,
    title: "Service Registry",
    description:
      "Discover and use services from other plugins without tight coupling.",
  },
  {
    icon: Radio,
    title: "Custom Routes",
    description: "Add new endpoints directly from your plugins.",
  },
];

export default function PluginSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        {/* Header */}
        <div className="mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-blue-500/30 text-blue-500"
          >
            Extensible Architecture
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Plugin System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Compose authentication flows, extend functionality, and integrate
            business logic without forking the core. Build exactly what you
            need.
          </p>
        </div>

        {/* Built-in Plugins */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Built-in Plugins
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {builtInPlugins.map((plugin) => {
              const Icon = plugin.icon;
              return (
                <div
                  key={plugin.name}
                  className="group relative overflow-hidden rounded-lg border-2 bg-card p-4 hover:border-blue-500/30 transition-all text-center"
                >
                  <Icon className={`h-6 w-6 ${plugin.color} mx-auto mb-2`} />
                  <p className="text-sm font-medium">{plugin.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {capabilities.map((capability, i) => {
            const Icon = capability.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border-2 bg-card p-6 hover:border-blue-500/30 transition-all"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon size={60} />
                </div>
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold mb-2">{capability.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Build Custom Plugins in{" "}
              <span className="text-blue-500">Minutes</span>
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                  <Puzzle className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Simple Interface</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement metadata, config, init/close, routes, hooks, and
                    migrations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                  <Zap className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Request Hooks</h4>
                  <p className="text-sm text-muted-foreground">
                    OnRequest, Before, After, OnResponse stages for precise
                    control.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                  <Webhook className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Access APIs</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the Service Registry to obtain services from other
                    plugins safely. No coupling, pure interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-blue-500/20 hover:bg-blue-500/5"
              >
                <Link href="/docs/guides/server-plugins">
                  Learn Plugin Development
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Composition Example */}
          <div className="relative">
            <div className="p-6 rounded-xl border-2 bg-card border-blue-500/20 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="h-max w-max p-2 rounded-lg bg-blue-500/15 flex items-center justify-center">
                  <Puzzle className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    How Plugins Work
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Plugins are isolated modules that register themselves with
                    the core system. Each plugin can expose routes, hooks, and
                    services, and can depend on or interact with other plugins
                    through a safe registry.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-max w-max p-2 rounded-lg bg-green-500/15 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Lifecycle & Extensibility
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Plugins implement flexible interfaces each with their own
                    capabilities and can register hooks for request/response
                    stages. This allows you to extend or override authentication
                    logic at any point.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-max w-max p-2 rounded-lg bg-purple-500/15 flex items-center justify-center">
                  <Blocks className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Safe Service Registry
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Plugins can publish and consume services via a registry,
                    enabling powerful integrations without tight coupling. This
                    keeps your codebase modular and maintainable.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-max w-max p-2 rounded-lg bg-amber-500/15 flex items-center justify-center">
                  <Radio className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Custom Endpoints & Logic
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Easily add new API endpoints, business logic, or
                    integrations by creating your own plugin. No need to fork or
                    modify the core—just compose what you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
