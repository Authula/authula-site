import { ArchitectureMap } from "@/components/home/architecture-map";
import { SectionFrame } from "@/components/home/frame-corners";
import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { SectionShell } from "@/components/home/section-shell";
import { sectionCopy } from "@/data/home";

export function Architecture() {
  return (
    <SectionShell
      id="architecture"
      ariaLabelledBy="architecture-title"
      tone="accent"
      contained={false}
      className="overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -inset-y-20 home-grid-lines opacity-70 md:-inset-y-28 lg:-inset-y-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 h-80 bg-[radial-gradient(ellipse_55%_100%_at_50%_0%,rgba(59,130,246,0.1),transparent_72%)] md:-top-28 lg:-top-32"
      />

      <div className="home-container relative">
        <SectionFrame>
          <div className="home-content">
            <Reveal>
              <SectionHeader
                id="architecture-title"
                title={sectionCopy.architecture.title}
                description={sectionCopy.architecture.description}
              />
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="home-content mt-10 md:mt-14">
              <ArchitectureMap />
            </div>
          </Reveal>
        </SectionFrame>
      </div>
    </SectionShell>
  );
}
