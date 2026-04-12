import Image from "next/image";
import Link from "next/link";

import BorderIndicators from "@/components/shared/BorderIndicators";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import sponsorsData from "@/data/sponsors.json";
import { ENV_CONFIG } from "@/constants/env-config";
import { cn } from "@/lib/utils";

type SponsorEntry = {
  username: string;
  imageUrl?: string;
  linkUrl?: string;
};

type SponsorTierKey = "corporate" | "gold" | "silver" | "bronze";

type SponsorTierConfig = {
  title: string;
  icon: string;
  cardClassName: string;
  badgeClassName: string;
  avatarClassName: string;
  avatarLetterClassName: string;
  placeholderAvatarClassName: string;
  gridClassName: string;
  maxSlots: number;
  featured?: boolean;
};

type SponsorsJson = {
  tiers: Array<{
    key: SponsorTierKey;
    sponsors: SponsorEntry[];
  }>;
};

const tierConfig: Record<SponsorTierKey, SponsorTierConfig> = {
  corporate: {
    title: "Corporate",
    icon: "🏢",
    cardClassName:
      "border-sky-500/40 bg-linear-to-br from-sky-500/12 via-card/90 to-card",
    badgeClassName:
      "border-sky-500/25 bg-sky-500/10 text-sky-100 shadow-sm shadow-sky-500/10",
    avatarClassName:
      "h-28 w-28 md:h-30 md:w-30 border-sky-400/35 bg-sky-500/10",
    avatarLetterClassName: "text-4xl md:text-5xl text-sky-50",
    placeholderAvatarClassName:
      "h-28 w-28 md:h-30 md:w-30 border-sky-400/35 bg-sky-500/10 text-sky-50",
    gridClassName: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-4",
    maxSlots: 4,
    featured: true,
  },
  gold: {
    title: "Gold Sponsor",
    icon: "🥇",
    cardClassName:
      "border-amber-500/35 bg-linear-to-br from-amber-500/12 via-card/90 to-card",
    badgeClassName:
      "border-amber-500/20 bg-amber-500/10 text-amber-100 shadow-sm shadow-amber-500/10",
    avatarClassName:
      "h-20 w-20 md:h-24 md:w-24 border-amber-500/25 bg-amber-500/10",
    avatarLetterClassName: "text-3xl md:text-4xl text-amber-50",
    placeholderAvatarClassName:
      "h-20 w-20 md:h-24 md:w-24 border-amber-500/25 bg-amber-500/10 text-amber-50",
    gridClassName: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    maxSlots: 6,
  },
  silver: {
    title: "Silver Sponsor",
    icon: "🥈",
    cardClassName:
      "border-slate-400/25 bg-linear-to-br from-slate-400/10 via-card/90 to-card",
    badgeClassName:
      "border-slate-400/20 bg-slate-400/10 text-slate-100 shadow-sm shadow-slate-400/10",
    avatarClassName:
      "h-14 w-14 md:h-16 md:w-16 border-slate-300/25 bg-slate-400/10",
    avatarLetterClassName: "text-2xl md:text-3xl text-slate-50",
    placeholderAvatarClassName:
      "h-14 w-14 md:h-16 md:w-16 border-slate-300/25 bg-slate-400/10 text-slate-50",
    gridClassName: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-8",
    maxSlots: 8,
  },
  bronze: {
    title: "Bronze Sponsor",
    icon: "🥉",
    cardClassName:
      "border-amber-700/25 bg-linear-to-br from-amber-700/8 via-card/90 to-card",
    badgeClassName:
      "border-amber-700/20 bg-amber-700/10 text-amber-50 shadow-sm shadow-amber-700/10",
    avatarClassName:
      "h-10 w-10 md:h-12 md:w-12 border-amber-700/20 bg-amber-700/10",
    avatarLetterClassName: "text-lg md:text-xl text-amber-50",
    placeholderAvatarClassName:
      "h-10 w-10 md:h-12 md:w-12 border-amber-700/20 bg-amber-700/10 text-amber-50",
    gridClassName: "grid-cols-2 sm:grid-cols-5 lg:grid-cols-10",
    maxSlots: 10,
  },
};

const sponsorTiers = (sponsorsData as SponsorsJson).tiers;

function getInitials(username: string) {
  return username
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

type SponsorAvatarCardProps = {
  sponsor: SponsorEntry;
  avatarClassName: string;
  avatarLetterClassName: string;
};

function SponsorAvatarCard({
  sponsor,
  avatarClassName,
  avatarLetterClassName,
}: SponsorAvatarCardProps) {
  const avatar = (
    <div
      className={cn(
        `relative flex items-center justify-center overflow-hidden rounded-full border`,
        avatarClassName,
      )}
    >
      {sponsor.imageUrl ? (
        <Image
          src={sponsor.imageUrl}
          alt={sponsor.username}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 64px, 112px"
        />
      ) : null}

      {!sponsor.imageUrl ? (
        <div
          className={cn(
            `absolute inset-0 flex items-center justify-center bg-linear-to-br from-white/10 to-transparent font-bold backdrop-blur-[1px]`,
            avatarLetterClassName,
          )}
        >
          {getInitials(sponsor.username)}
        </div>
      ) : null}
    </div>
  );

  return sponsor.linkUrl ? (
    <Link href={sponsor.linkUrl} target="_blank" className="group block">
      <div className="transition-transform duration-200 group-hover:-translate-y-0.5">
        {avatar}
      </div>
    </Link>
  ) : (
    avatar
  );
}

type PlaceholderAvatarProps = {
  className: string;
};

function PlaceholderAvatar({ className }: PlaceholderAvatarProps) {
  return (
    <Link
      href={ENV_CONFIG.sponsorUsLink}
      target="_blank"
      className="group block"
      aria-label="Sponsor Authula on Polar"
    >
      <div
        className={cn(
          `relative flex items-center justify-center overflow-hidden rounded-full border border-dashed bg-linear-to-br from-white/10 to-transparent text-foreground/80 transition-transform duration-200 group-hover:-translate-y-0.5`,
          className,
        )}
      >
        <span className="text-xl md:text-2xl font-black leading-none">?</span>
      </div>
    </Link>
  );
}

type TierRowProps = {
  tier: SponsorsJson["tiers"][number];
  config: SponsorTierConfig;
};

function TierRow({ tier, config }: TierRowProps) {
  const renderedSponsors = tier.sponsors.slice(0, config.maxSlots);
  const placeholdersNeeded = Math.max(
    0,
    config.maxSlots - renderedSponsors.length,
  );

  return (
    <article
      className={cn(
        `relative w-full overflow-hidden rounded-3xl border p-5 md:p-6`,
        config.cardClassName,
      )}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
              <span className="text-xl md:text-2xl">{config.icon}</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {config.title}
              </h3>
              <Badge
                variant="outline"
                className={cn(`mt-2`, config.badgeClassName)}
              >
                {tier.sponsors.length} sponsors
              </Badge>
            </div>
          </div>

          {config.featured ? (
            <Badge
              variant="outline"
              className="border-sky-500/30 bg-sky-500/10 text-sky-100"
            >
              Featured
            </Badge>
          ) : null}
        </div>

        <div className={`grid gap-4 ${config.gridClassName}`}>
          {renderedSponsors.map((sponsor) => (
            <div
              key={sponsor.username}
              className="flex flex-col items-center gap-2 text-center"
            >
              <SponsorAvatarCard
                sponsor={sponsor}
                avatarClassName={config.avatarClassName}
                avatarLetterClassName={config.avatarLetterClassName}
              />
              <span className="max-w-full text-[10px] md:text-xs font-medium leading-tight text-muted-foreground">
                {sponsor.username}
              </span>
            </div>
          ))}

          {Array.from({
            length: placeholdersNeeded,
          }).map((_, index) => (
            <div
              key={`${tier.key}-placeholder-${index}`}
              className="flex flex-col items-center gap-2 text-center"
            >
              <PlaceholderAvatar
                className={config.placeholderAvatarClassName}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="relative border-b border-dashed border-sky-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 border-blue-500/30 text-blue-500"
            >
              Supporters
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Sponsors That Help <span className="text-blue-500">Power</span>{" "}
              Authula
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Thank you to every sponsor helping keep Authula moving forward.
              Your support means so much to us.
            </p>

            <div className="mt-8 flex flex-row items-center gap-3">
              <Button asChild variant="outline" className="border-blue-500/30">
                <Link href={ENV_CONFIG.sponsorUsLink} target="_blank">
                  Sponsor Us
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {sponsorTiers.map((tier) => {
              const config = tierConfig[tier.key];
              return <TierRow key={tier.key} tier={tier} config={config} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
