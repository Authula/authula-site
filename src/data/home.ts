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
  Settings2,
  ShieldCheck,
  Terminal,
  Users,
  Webhook,
  type LucideIcon,
} from "lucide-react";

import type { SnippetKey } from "@/data/home-snippets";

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

export type HomeCodeSample = {
  readonly filename?: string;
  readonly language: "go" | "toml" | "bash" | "text";
  readonly snippetKey: SnippetKey;
};

export type DeploymentMode = {
  readonly id: "library" | "standalone";
  readonly label: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly link: HomeLink;
  readonly codeSample: HomeCodeSample;
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

export type DeveloperExperienceFeature = {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
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

export type GetStartedStep = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly command?: string;
  readonly language?: string;
  readonly link?: HomeLink;
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
      "A small Go interface gives plugins routes, hooks, migrations and a shared service registry. Compose what you need and keep the core untouched.",
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
      "Mount auth.Handler() on net/http or your router",
      "Configure in Go with typed options",
      "Call core and plugin APIs directly",
      "Customise plugins at compile time",
      "Keep auth in the same process as your app",
    ],
    link: {
      label: "Read the library guide",
      href: "/docs/guides/library-mode",
    },
    codeSample: {
      filename: "main.go",
      language: "go",
      snippetKey: "libraryMain",
    },
    icon: Code2,
  },
  {
    id: "standalone",
    label: "Standalone mode",
    description: "Authula runs as its own authentication service.",
    highlights: [
      "One service for every frontend and backend",
      "Configure with config.toml and environment variables",
      "Deploy the official container image",
      "Scale auth independently from your apps",
      "Keep application code out of the auth layer",
    ],
    link: {
      label: "Read the installation guide",
      href: "/docs/get-started/installation",
    },
    codeSample: {
      filename: "config.toml",
      language: "toml",
      snippetKey: "standaloneToml",
    },
    icon: Terminal,
  },
];

export const deploymentFooterLine = "Both modes share the same plugins, routes and APIs.";

export const capabilityFlow = {
  title: "A complete sign-in flow",
  steps: [
    {
      label: "Sign up",
      meta: "POST /api/auth/email-password/sign-up",
    },
    {
      label: "Verify email",
      meta: "GET /api/auth/email-password/verify-email",
    },
    {
      label: "Session",
      meta: "Set-Cookie: authula.session_token",
    },
    {
      label: "Get the current user",
      meta: "GET /api/auth/me",
    },
  ],
} as const;

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

export const pluginExplainers: readonly PluginExplainer[] = [
  {
    title: "Runs in process",
    description: "Plugins initialise with the database, logger, event bus and service registry.",
    icon: Plug,
  },
  {
    title: "Service registry",
    description: "Plugins publish and consume services through a shared registry.",
    icon: Network,
  },
  {
    title: "Dependencies stay explicit",
    description: "Declare plugin dependencies and migrations; Authula resolves the lifecycle.",
    icon: GitBranch,
  },
  {
    title: "Your endpoints",
    description: "Register routes and custom authentication middleware from a plugin.",
    icon: Webhook,
  },
];

export const pluginLifecycle: readonly string[] = [
  "Metadata",
  "Config",
  "Init",
  "Routes / Hooks / Migrations",
  "Close",
];

export const pluginGuide: HomeLink = {
  label: "Read the plugin guide",
  href: "/docs/guides/server-plugins",
};

export const pluginCodeSample: HomeCodeSample = {
  filename: "plugin.go",
  language: "go",
  snippetKey: "pluginInterface",
};

export const developerExperienceFeatures: readonly DeveloperExperienceFeature[] = [
  {
    title: "Typed request context",
    description: "Read the authenticated actor and claims without type assertions.",
    icon: Braces,
  },
  {
    title: "Real middleware",
    description: "Authentication and request-protection middleware ship as composable plugins.",
    icon: Layers,
  },
  {
    title: "Programmatic APIs",
    description: "Call auth.Api and plugin APIs directly in library mode.",
    icon: Plug,
  },
  {
    title: "Config in code",
    description: "Functional options and compile-time checks for library setups.",
    icon: Settings2,
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
    description: "Embed the handler in Go or run the service from a config file.",
    link: {
      label: "Open the setup guide",
      href: "/docs/get-started/installation",
    },
  },
  {
    id: "run",
    title: "Start the service",
    description: "Mount config.toml, pass your environment and start the official image.",
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
      { label: "Two ways to build", href: "#two-ways" },
      { label: "Architecture", href: "#architecture" },
      { label: "Capabilities", href: "#features" },
      { label: "Plugins", href: "#plugins" },
      { label: "Developers", href: "#developers" },
      { label: "Production", href: "#production" },
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
