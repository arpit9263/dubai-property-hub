import { Reveal } from "@/components/section-reveal";

const steps = [
  { n: "01", title: "Discovery", body: "Share your goals — yield, lifestyle, or capital appreciation. We shortlist inventory within 48 hours." },
  { n: "02", title: "Verification", body: "Title deeds, Oqood, RERA licences and on-ground visits — every listing triple-checked before you view." },
  { n: "03", title: "Structuring", body: "Financing, entity setup, escrow and Golden Visa — coordinated by our in-house legal & finance team." },
  { n: "04", title: "Ownership", body: "Handover, property management, tenanting, and quarterly performance reports for investors." },
];

export function ProcessSteps() {
  return (
    <section className="container-edge py-24 md:py-32 border-t border-border/30">
      <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
        <div>
          <p className="label-eyebrow mb-4">05 / Process</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-2xl leading-[1.05]">
            From first call to keys, in four moves.
          </h2>
        </div>
      </div>
      <div className="grid gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="bg-background p-8 md:p-10 h-full group hover:bg-card transition-colors">
              <p className="text-5xl font-display font-semibold text-primary/40 group-hover:text-primary transition-colors mb-8">
                {s.n}
              </p>
              <h3 className="text-xl font-display font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}