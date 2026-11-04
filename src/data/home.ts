import {
  Activity,
  Box,
  Boxes,
  Braces,
  Building2,
  Code2,
  Container,
  Cookie,
  Database,
  Gauge,
  GitBranch,
  Globe,
  Key,
  KeyRound,
  Layers,
  Link as LinkIcon,
  LockKeyhole,
  Mail,
  MailCheck,
  Network,
  Plug,
  Radio,
  Server,
  Settings2,
  ShieldCheck,
  Terminal,
  Users,
  Webhook,
  type LucideIcon,
} from "lucide-react";

import { CONSTANTS } from "@/constants/constants";

export type HomeLink = {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
};

export type SectionCopy = {
  readonly title: string;
  readonly description: string;
};

export type HeroProof = {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
};

export type ComparisonRow = {
  readonly label: string;
  readonly value: string;
};

export type DeploymentMode = {
  readonly id: "library" | "standalone";
  readonly label: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly comparison: readonly ComparisonRow[];
  readonly link: HomeLink;
  readonly icon: LucideIcon;
};

export type Capability = {
  readonly name: string;
  readonly description: string;
  readonly icon: LucideIcon;
};

export type CapabilityGroup = {
  readonly id: string;
  readonly title: string;
  readonly icon: LucideIcon;
  readonly items: readonly Capability[];
};

export type CapabilityFlowStep = {
  readonly label: string;
  readonly description: string;
};

export type ArchitectureOutcome = {
  readonly id: "users" | "data" | "providers";
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
};

export type ArchitectureFlowStep = {
  readonly id: "clients" | "authula" | "infrastructure";
  readonly label: string;
  readonly description: string;
};

export type DeveloperExperienceFeature = {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
};

export type DeveloperLifecycleStep = {
  readonly title: string;
  readonly description: string;
};

export type ProductionPillar = {
  readonly id: "data" | "observability";
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
  readonly icon: LucideIcon;
};

export type DeploymentTarget = {
  readonly id: "binary" | "container" | "kubernetes";
  readonly name: string;
  readonly description: string;
  readonly icon: LucideIcon;
};

export type FooterColumn = {
  readonly title: string;
  readonly links: readonly HomeLink[];
};

export type CommunityDestination = {
  readonly id: "github" | "discord" | "docs";
  readonly name: string;
  readonly cta: string;
  readonly href: string;
  readonly external: boolean;
  readonly icon: "github" | "discord" | "docs";
  readonly showStars?: boolean;
};

export type PluginExplainer = {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
};

export type PluginLifecycleStep = {
  readonly label: string;
  readonly description: string;
};

export type GetStartedStep = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly command?: string;
  readonly language?: string;
  readonly link?: HomeLink;
};

export type GetStartedPath = {
  readonly label: string;
  readonly description: string;
  readonly href: string;
};

export const heroContent = {
  badge: "Open source · Apache 2.0",
  title: ["The Auth Platform Native to Go.", "Built for Any Stack."],
  description:
    "An open-source authentication platform you can embed in Go, or run as a standalone auth server.",
  primaryCta: { label: "Get Started", href: "/docs", external: false },
  secondaryCta: {
    label: "View on GitHub",
    href: CONSTANTS.githubRepoUrl,
    external: true,
  },
} as const;

export const heroProofs: readonly HeroProof[] = [
  {
    title: "Embed in Go",
    description: "Mount the handler in your own service and keep auth in process.",
    icon: Code2,
  },
  {
    title: "Run standalone",
    description: "Start one auth service for every app and language.",
    icon: Server,
  },
  {
    title: "Your data stays in your database",
    description: "Authula uses the database, email and providers you already run.",
    icon: Database,
  },
];

export const sectionCopy = {
  deployment: {
    title: "Embed it. Or run it standalone.",
    description:
      "The same authentication core, delivered two ways. Start with the model that fits your stack and keep your options open.",
  },
  architecture: {
    title: "One auth layer. Your infrastructure.",
    description:
      "Authula handles the authentication flow. Your users, data and providers stay under your control.",
  },
  capabilities: {
    title: "Everything you need. Nothing you don't.",
    description: "Enable the capabilities your product needs and leave the rest out of the build.",
  },
  plugins: {
    title: "Extend the core without forking it.",
    description:
      "A small Go interface gives plugins routes, hooks, migrations and shared services. Add what you need and keep the core untouched.",
  },
  developerExperience: {
    title: "Feels like Go.",
    description:
      "No runtime, no generated client, no new mental model. The APIs feel like the rest of your Go code.",
  },
  production: {
    title: "Built for production, not a demo.",
    description:
      "Data, observability and deployment surfaces you can reason about—without a second control plane.",
  },
  getStarted: {
    title: "From install to authenticated.",
    description:
      "Install the module, choose a deployment path and start the service. The docs cover the rest.",
  },
  community: {
    title: "Built in the open.",
    description:
      "Authula is Apache-2.0 and developed in public. Ask questions, report what breaks, or bring a plugin idea.",
  },
} satisfies Record<string, SectionCopy>;

export const deploymentModes: readonly DeploymentMode[] = [
  {
    id: "library",
    label: "Library mode",
    description: "Authula lives inside your Go application.",
    highlights: [
      "Auth runs in the same process as your app",
      "No extra network hop for auth checks",
      "Configure with typed Go options",
      "Call core and plugin services directly from Go",
      "Add or remove plugins when you build",
    ],
    comparison: [
      { label: "Where it runs", value: "Inside your Go process" },
      { label: "How you configure it", value: "In Go, with typed options" },
      { label: "How you deploy it", value: "Ship it with your app" },
      { label: "Best for", value: "Teams that already run a Go API" },
    ],
    link: {
      label: "Read the library guide",
      href: "/docs/guides/library-mode",
    },
    icon: Code2,
  },
  {
    id: "standalone",
    label: "Standalone mode",
    description: "Authula runs as its own authentication service.",
    highlights: [
      "One service for every frontend and backend",
      "Update auth without redeploying your apps",
      "Scale auth on its own",
      "Keep auth code out of your application",
      "Configure with a file and environment variables",
    ],
    comparison: [
      { label: "Where it runs", value: "As its own service" },
      {
        label: "How you configure it",
        value: "A config file and environment variables",
      },
      { label: "How you deploy it", value: "The official container image" },
      { label: "Best for", value: "Apps in any language that need one auth service" },
    ],
    link: {
      label: "Read the installation guide",
      href: "/docs/get-started/installation",
    },
    icon: Terminal,
  },
];

export const deploymentFooterLine = "Both modes share the same plugins, routes and APIs.";

export const capabilityFlow: {
  readonly title: string;
  readonly steps: readonly CapabilityFlowStep[];
} = {
  title: "A complete sign-in flow",
  steps: [
    {
      label: "Create account",
      description: "The user signs up with an email and password, or an OAuth provider.",
    },
    {
      label: "Verify email",
      description: "Authula sends a link and confirms the address before sign-in.",
    },
    {
      label: "Session issued",
      description: "The user gets a session cookie and a refresh token.",
    },
    {
      label: "Load current user",
      description: "Your app reads the signed-in user and claims from the request.",
    },
  ],
};

export const capabilityGroups: readonly CapabilityGroup[] = [
  {
    id: "sign-in",
    title: "Sign-in",
    icon: KeyRound,
    items: [
      {
        name: "Email & password",
        description: "Argon2 hashing, verification, reset and email-change flows.",
        icon: Mail,
      },
      {
        name: "OAuth2",
        description: "GitHub, Google and Discord, with an extensible provider API.",
        icon: Globe,
      },
      {
        name: "Magic links",
        description: "Passwordless sign-in with expiring email links.",
        icon: LinkIcon,
      },
      {
        name: "Email verification & reset",
        description: "Expiring tokens and transactional email templates.",
        icon: MailCheck,
      },
    ],
  },
  {
    id: "sessions-and-tokens",
    title: "Sessions & tokens",
    icon: Cookie,
    items: [
      {
        name: "Cookie sessions",
        description: "HTTP-only cookies, sliding renewal and automatic cleanup.",
        icon: Cookie,
      },
      {
        name: "JWT + JWKS",
        description: "Key rotation, refresh tokens and a public JWKS endpoint.",
        icon: Braces,
      },
      {
        name: "Bearer auth",
        description: "Validate JWT access tokens from the Authorization header.",
        icon: Key,
      },
      {
        name: "API keys",
        description: "Scoped, expiring keys with per-key rate limits.",
        icon: KeyRound,
      },
    ],
  },
  {
    id: "security-and-access",
    title: "Security & access",
    icon: ShieldCheck,
    items: [
      {
        name: "TOTP & backup codes",
        description: "Authenticator-app 2FA with recovery codes and trusted devices.",
        icon: LockKeyhole,
      },
      {
        name: "CSRF",
        description: "Double-submit cookie protection on state-changing requests.",
        icon: ShieldCheck,
      },
      {
        name: "Rate limiting",
        description: "Per-route rules with memory, Redis or database storage.",
        icon: Gauge,
      },
      {
        name: "RBAC",
        description: "Roles, permissions and weighted role hierarchy.",
        icon: Users,
      },
      {
        name: "Admin operations",
        description: "User, account and session management with audit trails.",
        icon: Settings2,
      },
    ],
  },
  {
    id: "platform",
    title: "Platform",
    icon: Layers,
    items: [
      {
        name: "Organizations & teams",
        description: "Multi-tenant orgs, members, teams and invitations.",
        icon: Building2,
      },
      {
        name: "Secondary storage",
        description: "Redis, database or in-memory storage for high-churn data.",
        icon: Database,
      },
      {
        name: "Event bus",
        description: "GoChannel, Redis, Kafka, NATS, RabbitMQ, PostgreSQL or SQLite.",
        icon: Radio,
      },
      {
        name: "Custom routes & webhooks",
        description: "Register routes or trigger async work from hooks.",
        icon: Webhook,
      },
    ],
  },
];

export const architectureOutcomes: readonly ArchitectureOutcome[] = [
  {
    id: "users",
    title: "Your users",
    description: "Accounts, sessions and profiles stay in your database, under your schema.",
    icon: Users,
  },
  {
    id: "data",
    title: "Your data",
    description: "Authula reads and writes through the database you already run and back up.",
    icon: Database,
  },
  {
    id: "providers",
    title: "Your providers",
    description: "Email, OAuth and storage connect with credentials you control.",
    icon: Globe,
  },
];

export const architectureFlow: readonly ArchitectureFlowStep[] = [
  {
    id: "clients",
    label: "Clients",
    description: "Web, mobile or backend apps",
  },
  {
    id: "authula",
    label: "Authula",
    description: "Sign-in, sessions and access checks",
  },
  {
    id: "infrastructure",
    label: "Your infrastructure",
    description: "Your database, email and OAuth providers",
  },
];

export const architectureCaption =
  "Library mode runs Authula inside your Go process. Standalone mode runs the same core as its own service.";

export const architectureLink: HomeLink = {
  label: "Read the architecture overview",
  href: "/docs/introduction/architecture",
};

export const pluginExplainers: readonly PluginExplainer[] = [
  {
    title: "Runs in process",
    description: "Plugins start with the core and share its database, logger and event bus.",
    icon: Plug,
  },
  {
    title: "Shared services",
    description: "Plugins offer capabilities to each other and to your application.",
    icon: Network,
  },
  {
    title: "Dependencies stay explicit",
    description: "Declare what a plugin needs and Authula starts things in the right order.",
    icon: GitBranch,
  },
  {
    title: "Your endpoints",
    description: "A plugin can add routes, middleware and background work.",
    icon: Webhook,
  },
];

export const pluginLifecycleSteps: readonly PluginLifecycleStep[] = [
  {
    label: "Implement the interface",
    description: "Write a Go type that matches the plugin interface.",
  },
  {
    label: "Declare dependencies",
    description: "List the plugins and migrations your plugin needs.",
  },
  {
    label: "Register the plugin",
    description: "Add it to the plugin list when you build Authula.",
  },
  {
    label: "Authula connects it",
    description: "Routes, hooks and migrations are wired into the core.",
  },
];

export const pluginGuide: HomeLink = {
  label: "Read the plugin guide",
  href: "/docs/guides/server-plugins",
};

export const developerExperienceFeatures: readonly DeveloperExperienceFeature[] = [
  {
    title: "Typed user context",
    description: "Read the signed-in user and claims without type assertions.",
    icon: Braces,
  },
  {
    title: "Middleware that composes",
    description: "Protect routes with middleware that fits your existing handler chain.",
    icon: Layers,
  },
  {
    title: "Direct Go APIs",
    description: "Manage users and sessions from Go when HTTP is not the right tool.",
    icon: Plug,
  },
  {
    title: "Config in code",
    description: "Keep auth settings in Go and catch mistakes when you build.",
    icon: Settings2,
  },
];

export const developerLifecycle: readonly DeveloperLifecycleStep[] = [
  {
    title: "Request arrives",
    description: "A request hits a route protected by Authula.",
  },
  {
    title: "Session is checked",
    description: "Authula reads the cookie or bearer token and verifies it.",
  },
  {
    title: "Your handler runs",
    description: "The signed-in user and claims are ready in the request context.",
  },
  {
    title: "Response leaves",
    description: "Authula can refresh the session, add headers or record an event.",
  },
];

export const adapterChips: readonly string[] = ["net/http", "Chi", "Echo", "Fiber"];

export const productionPillars: readonly ProductionPillar[] = [
  {
    id: "data",
    title: "Data & state",
    description: "Point Authula at your database; migrations run on startup.",
    items: ["SQLite, PostgreSQL and MySQL", "Automatic core and plugin migrations"],
    icon: Database,
  },
  {
    id: "observability",
    title: "Observability",
    description: "Export traces and metrics to the collector you already run.",
    items: ["OpenTelemetry traces", "Metrics via OTLP", "Optional log export"],
    icon: Activity,
  },
];

export const deploymentTargets: readonly DeploymentTarget[] = [
  {
    id: "binary",
    name: "Binary",
    description: "Run Authula as a single Go binary on your own infrastructure.",
    icon: Box,
  },
  {
    id: "container",
    name: "Container",
    description: "Deploy the official container image with your config and environment.",
    icon: Container,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    description: "Scale auth alongside your services using the same container image.",
    icon: Boxes,
  },
];

export const productionClosingStatement = "Operate auth like the rest of your stack.";

export const getStartedSteps: readonly GetStartedStep[] = [
  {
    id: "install",
    title: "Install the module",
    description: "Add Authula to your Go module.",
    command: "go get github.com/Authula/authula",
    language: "shell",
  },
  {
    id: "choose",
    title: "Choose library or standalone",
    description: "Embed it in your Go app or run it as its own service.",
    link: {
      label: "Open the setup guide",
      href: "/docs/get-started/installation",
    },
  },
  {
    id: "run",
    title: "Start the service",
    description:
      "Start the binary or official image with your database and environment. Migrations run on startup.",
  },
];

export const getStartedPaths: readonly GetStartedPath[] = [
  {
    label: "Installation guide",
    description: "Set up Authula as a standalone service.",
    href: "/docs/get-started/installation",
  },
  {
    label: "Library mode",
    description: "Add Authula to an existing Go application.",
    href: "/docs/guides/library-mode",
  },
  {
    label: "Adapters",
    description: "Connect net/http, Chi, Echo or Fiber.",
    href: "/docs/integrations/adapters",
  },
];

export const getStartedCtas: readonly HomeLink[] = [
  { label: "Read the docs", href: "/docs" },
  {
    label: "Explore examples",
    href: "https://github.com/Authula/authula-playground",
    external: true,
  },
];

export const getStartedLicense = "Apache 2.0";

export const communityDestinations: readonly CommunityDestination[] = [
  {
    id: "github",
    name: "GitHub",
    cta: "Star on GitHub",
    href: CONSTANTS.githubRepoUrl,
    external: true,
    icon: "github",
    showStars: true,
  },
  {
    id: "discord",
    name: "Discord",
    cta: "Join Discord",
    href: CONSTANTS.discordInviteUrl,
    external: true,
    icon: "discord",
  },
  {
    id: "docs",
    name: "Docs",
    cta: "Browse documentation",
    href: "/docs",
    external: false,
    icon: "docs",
  },
];

export const releaseNotes = {
  label: "Release notes",
  placeholder: "you@example.com",
  button: "Subscribe",
  microcopy: "Occasional updates about releases. No noise.",
} as const;

export const communityContact: HomeLink = {
  label: "Contact us.",
  href: "/contact-us",
};

export const communityLicense = "Released under the Apache 2.0 License.";

export const footerBrand = {
  description: "Open-source authentication for Go. Embed it or run it standalone.",
  license: "Apache 2.0",
  builtWith: "Built with Go",
  backToTop: { label: "Back to top", href: "#top" },
} as const;

export const footerColumns: readonly FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Two ways to build", href: "/#two-ways" },
      { label: "Architecture", href: "/#architecture" },
      { label: "Capabilities", href: "/#features" },
      { label: "Plugins", href: "/#plugins" },
      { label: "Developers", href: "/#developers" },
      { label: "Production", href: "/#production" },
    ],
  },
  {
    title: "Documentation",
    links: [
      {
        label: "Get started",
        href: "/docs/get-started/installation",
      },
      { label: "Library mode", href: "/docs/guides/library-mode" },
      { label: "Configuration", href: "/docs/reference/config" },
      {
        label: "Plugin guide",
        href: "/docs/guides/server-plugins",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Changelog", href: "/changelog" },
      {
        label: "Playground",
        href: "https://github.com/Authula/authula-playground",
        external: true,
      },
      {
        label: "Comparison",
        href: "/docs/introduction/comparison",
      },
      { label: "Security", href: "/docs/concepts/security" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "GitHub",
        href: CONSTANTS.githubRepoUrl,
        external: true,
      },
      {
        label: "Discord",
        href: CONSTANTS.discordInviteUrl,
        external: true,
      },
      {
        label: "Issues",
        href: "https://github.com/Authula/authula/issues",
        external: true,
      },
      { label: "Contact", href: "/contact-us" },
    ],
  },
];
