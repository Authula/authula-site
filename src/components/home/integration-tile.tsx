import Link from "next/link";

import type { IntegrationProvider } from "@/data/integrations";

const framePath =
  "M75.43,79.22H4.57c-2.09,0-3.79-1.7-3.79-3.79V12.9c0-1,.4-1.98,1.11-2.68L10.22,1.89c.71-.71,1.68-1.11,2.68-1.11h62.54c2.09,0,3.79,1.7,3.79,3.79v70.87c0,2.09-1.7,3.79-3.79,3.79ZM12.9,1.78c-.73,0-1.45.3-1.97.82L2.59,10.92c-.52.52-.82,1.24-.82,1.97v62.54c0,1.54,1.25,2.79,2.79,2.79h70.87c1.54,0,2.79-1.25,2.79-2.79V4.57c0-1.54-1.25-2.79-2.79-2.79H12.9Z";

export function IntegrationTile({ provider }: { provider: IntegrationProvider }) {
  const Icon = provider.icon;

  return (
    <li className="relative flex size-20 items-center justify-center sm:size-24">
      <Link
        href={provider.href}
        title={provider.name}
        aria-label={provider.ariaLabel ?? `${provider.name} OAuth2 provider documentation`}
        className="group relative flex size-20 items-center justify-center rounded-[2px] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel focus-visible:outline-none sm:size-24"
      >
        <svg
          viewBox="0 0 80 80"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 size-full text-home-line transition-colors duration-200 group-hover:text-home-accent-line"
        >
          <path
            d={framePath}
            fill="currentColor"
            fillOpacity={0.04}
            stroke="currentColor"
            strokeWidth={0.75}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {provider.logo ? (
          <img
            src={provider.logo}
            alt=""
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="relative z-10 size-10 object-contain opacity-75 brightness-0 invert transition-[opacity,transform] duration-200 group-hover:scale-105 group-hover:opacity-100 sm:size-11"
          />
        ) : Icon ? (
          <Icon
            aria-hidden="true"
            className="relative z-10 size-8 text-home-muted-strong transition-colors group-hover:text-home-text"
          />
        ) : null}
      </Link>
    </li>
  );
}
