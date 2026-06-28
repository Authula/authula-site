import { BookOpen, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BorderIndicators from "@/components/shared/BorderIndicators";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { CONSTANTS } from "@/constants/constants";
import DiscordIcon from "../shared/icons/DiscordIcon";

type LinkItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  externalLink?: boolean;
};
const linkItems: LinkItem[] = [
  {
    href: CONSTANTS.githubRepoUrl,
    label: "GitHub",
    icon: <GitHubIcon className="w-4 h-4" />,
    externalLink: true,
  },
  {
    href: CONSTANTS.discordInviteUrl,
    label: "Discord",
    icon: <DiscordIcon className="w-4 h-4" />,
    externalLink: true,
  },
  {
    href: "/docs",
    label: "Docs",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <Mail className="w-4 h-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-y border-dashed border-sky-950 text-gray-400">
      <div className="custom-container relative border-x border-dashed border-sky-950 p-4! md:p-6!">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/app-logo.png"
              alt="Authula Logo"
              width={100}
              height={100}
            />
          </div>

          <div className="flex items-center gap-6">
            {linkItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.externalLink ? "_blank" : undefined}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <hr className="mt-4 mb-2 border-t border-dashed border-sky-950" />

        <p className="text-sm text-center py-4">
          &copy; {new Date().getFullYear()} Authula | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
