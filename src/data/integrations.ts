import { Fingerprint, type LucideIcon } from "lucide-react";

export type IntegrationProvider = {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly logo?: string;
  readonly icon?: LucideIcon;
  readonly ariaLabel?: string;
};

export type IntegrationGroup = {
  readonly id: "built-in" | "custom";
  readonly label: string;
  readonly providers: readonly IntegrationProvider[];
};

export const integrationsCopy = {
  eyebrow: "Integrations",
  title: "OAuth2 providers, ready to connect.",
  description:
    "Discord, GitHub and Google are built in. Connect any OAuth2 or OIDC provider with your own endpoints and field mappings.",
  primaryCta: {
    label: "Read the OAuth2 docs",
    href: "/docs/plugins/oauth2",
  },
  secondaryCta: {
    label: "Custom provider setup",
    href: "/docs/plugins/oauth2#custom-providers",
  },
  caption:
    "Okta, Microsoft Entra ID, Auth0, Keycloak and GitLab use the custom provider config. Any provider with an authorization-code flow works the same way.",
} as const;

const customProviderHref = "/docs/plugins/oauth2#custom-providers";

export const integrationGroups: readonly IntegrationGroup[] = [
  {
    id: "built-in",
    label: "Built in",
    providers: [
      {
        id: "discord",
        name: "Discord",
        href: "/docs/plugins/oauth2/discord",
        logo: "/icons/providers/discord.svg",
      },
      {
        id: "github",
        name: "GitHub",
        href: "/docs/plugins/oauth2/github",
        logo: "/icons/providers/github.svg",
      },
      {
        id: "google",
        name: "Google",
        href: "/docs/plugins/oauth2/google",
        logo: "/icons/providers/google.svg",
      },
    ],
  },
  {
    id: "custom",
    label: "Custom OAuth2 / OIDC",
    providers: [
      {
        id: "okta",
        name: "Okta",
        href: customProviderHref,
        logo: "/icons/providers/okta.svg",
        ariaLabel: "Okta custom OAuth2 provider setup",
      },
      {
        id: "microsoft-entra-id",
        name: "Microsoft Entra ID",
        href: customProviderHref,
        logo: "/icons/providers/microsoft-entra.svg",
        ariaLabel: "Microsoft Entra ID custom OAuth2 provider setup",
      },
      {
        id: "auth0",
        name: "Auth0",
        href: customProviderHref,
        logo: "/icons/providers/auth0.svg",
        ariaLabel: "Auth0 custom OAuth2 provider setup",
      },
      {
        id: "keycloak",
        name: "Keycloak",
        href: customProviderHref,
        logo: "/icons/providers/keycloak.svg",
        ariaLabel: "Keycloak custom OAuth2 provider setup",
      },
      {
        id: "gitlab",
        name: "GitLab",
        href: customProviderHref,
        logo: "/icons/providers/gitlab.svg",
        ariaLabel: "GitLab custom OAuth2 provider setup",
      },
      {
        id: "any-oauth2-provider",
        name: "Any OAuth2 or OIDC provider",
        href: customProviderHref,
        icon: Fingerprint,
        ariaLabel: "Custom OAuth2 and OIDC provider setup",
      },
    ],
  },
];
