import { Check } from "lucide-react";

import BorderIndicators from "@/components/shared/BorderIndicators";

const features = [
  {
    title: "Standard Library Compatible",
    desc: "Works directly with net/http and http.ServeMux.",
  },
  {
    title: "Type-Safe Context",
    desc: "Retrieve user data and claims with full type safety.",
  },
  {
    title: "Zero Dependencies",
    desc: "Minimal external dependencies to keep your binary small.",
  },
  {
    title: "Extensible Hooks",
    desc: "Hook into any stage of the auth pipeline with Go functions.",
  },
];

export default function DeveloperExperienceSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950 bg-blue-500/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="py-12 md:py-16">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built Natively in Go
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              No complex frameworks or adapters needed. Authula works with the
              standard library and integrates seamlessly into your existing Go
              stack.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-xl border border-sky-500/30 hover:border-sky-500/60 bg-sky-950/20 transition-colors">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
