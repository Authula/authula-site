import ContactUsForm from "@/components/sections/ContactUsForm";
import BorderIndicators from "@/components/shared/BorderIndicators";

export default function ContactSection() {
  return (
    <section className="relative border-b border-dashed bg-blue-500/5">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Have a question?
              </h2>
              <p className="text-muted-foreground mt-1">
                Drop us an email and we&apos;ll get back to you.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-sky-950/50 bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
