import { Bug, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

import ContactUsForm from "@/components/sections/ContactUsForm";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { CONSTANTS } from "@/constants/constants";
import { ENV_CONFIG } from "@/constants/env-config";

export default function ContactPage() {
  return (
    <main className="flex flex-col flex-1">
      <section className="relative flex-1 border-b border-dashed border-sky-950 bg-blue-500/5">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

        <div className="custom-container relative border-x border-dashed border-sky-950">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question, feedback, or want to contribute? We&apos;d love
                to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="rounded-xl border border-sky-950/50 bg-card/50 backdrop-blur-sm p-6 md:p-8">
                  <ContactUsForm />
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-xl border border-sky-950/50 bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Direct Email
                  </h3>
                  <a
                    href={`mailto:${ENV_CONFIG.contactEmail}`}
                    className="flex items-center gap-3 text-sm hover:text-blue-500 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                    {ENV_CONFIG.contactEmail}
                  </a>
                </div>

                <div className="rounded-xl border border-sky-950/50 bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Community & Support
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href={`${CONSTANTS.githubRepoUrl}/issues`}
                      target="_blank"
                      className="flex items-center gap-3 text-sm hover:text-blue-500 transition-colors"
                    >
                      <Bug className="h-4 w-4 text-blue-500 shrink-0" />
                      GitHub Issues
                    </Link>
                    <Link
                      href={CONSTANTS.discordInviteUrl}
                      target="_blank"
                      className="flex items-center gap-3 text-sm hover:text-blue-500 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4 text-blue-500 shrink-0" />
                      Discord Community
                    </Link>
                    <Link
                      href={CONSTANTS.githubRepoUrl}
                      target="_blank"
                      className="flex items-center gap-3 text-sm hover:text-blue-500 transition-colors"
                    >
                      <GitHubIcon className="h-4 w-4 text-blue-500 shrink-0" />
                      GitHub Repository
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
