import Link from "next/link";

import { MessageCircle, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { ShineBorder } from "@/components/ui/shine-border";
import { CONSTANTS } from "@/constants/constants";
import BorderIndicators from "../shared/BorderIndicators";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative border-t border-dashed border-sky-950 bg-blue-500/5"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators hasTopIndicators={false} />

        <div className="relative max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center overflow-hidden border border-sky-950/50">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
          <ShineBorder
            shineColor={["#3b82f6", "#0ea5e9"]}
            className="pointer-events-none!"
          />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Open Source &{" "}
              <span className="text-blue-500">Community Driven</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Authula is seeking community collaboration and open-source
              contributions. Your involvement—sharing code, offering feedback,
              and support will help shape the future of authentication. Join us
              on this journey to build the most flexible, configurable, and more
              secure authentication solution for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-10">
              <div className="flex flex-col items-center p-4 rounded-lg bg-muted/30 border-2 border-sky-950/30">
                <Star className="h-6 w-6 text-yellow-500 mb-2" />
                <span className="font-bold text-xl">100%</span>
                <span className="text-xs text-muted-foreground">
                  Open Source
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-muted/30 border-2 border-sky-950/30">
                <MessageCircle className="h-6 w-6 text-blue-500 mb-2" />
                <span className="font-bold text-xl">Discord</span>
                <span className="text-xs text-muted-foreground">
                  Community Support
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-muted/30 border-2 border-sky-950/30">
                <GitHubIcon className="h-6 w-6 text-white mb-2" />
                <span className="font-bold text-xl">GitHub</span>
                <span className="text-xs text-muted-foreground">
                  Pull Requests Welcome
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Button
                size="lg"
                className="h-12 px-8 text-base bg-linear-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 border-0 text-white w-full sm:w-auto"
                asChild
              >
                <Link
                  href={CONSTANTS.githubRepoUrl}
                  target="_blank"
                  className="flex flex-row gap-2 items-center justify-center"
                >
                  <GitHubIcon className="h-5 w-5" />
                  <span>Star on GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base w-full sm:w-auto border-sky-950/50 hover:bg-sky-950/10"
              >
                <Link href={CONSTANTS.discordInviteUrl} target="_blank">
                  Join Discord
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Released under the Apache 2.0 License
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
