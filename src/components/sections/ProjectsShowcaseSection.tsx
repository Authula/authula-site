import MarqueeShowcase from "../shadcn-space/marquee/marquee-02";
import BorderIndicators from "../shared/BorderIndicators";

export default function ProjectsShowcaseSection() {
  return (
    <div className="border-b border-dashed border-sky-950">
      <div className="custom-container relative p-6! border-x border-dashed border-sky-950">
        <BorderIndicators />
        <MarqueeShowcase />
      </div>
    </div>
  );
}
