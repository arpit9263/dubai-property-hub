import { Quote } from "lucide-react";
import { Reveal } from "@/components/section-reveal";

const items = [
  {
    quote:
      "Archigram is the only Dubai broker who walked us through the SPA line-by-line. We closed a Palm villa in 21 days with zero surprises.",
    name: "Rohit Malhotra",
    role: "Buyer · Palm Jumeirah",
  },
  {
    quote:
      "Their yield modelling was within 0.3% of what our first year actually delivered. Rare precision in this market.",
    name: "Aisha Farouk",
    role: "Investor · Business Bay Portfolio",
  },
  {
    quote:
      "We saw the exact panorama of the plot before flying in. The listing matched reality — that never happens.",
    name: "Daniel Weiss",
    role: "Developer · Dubai South Land",
  },
];

export function Testimonials() {
  return (
    <section className="container-edge py-24 md:py-32 border-t border-border/30">
      <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="label-eyebrow mb-4">06 / Voices</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-2xl leading-[1.05]">
            Trusted by owners, investors, and developers.
          </h2>
        </div>
        <p className="text-foreground/60 max-w-sm text-sm leading-relaxed">
          Every closing is a promise kept. Here's what our clients tell us after the deal.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="h-full bg-card border border-border/40 p-8 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <Quote className="h-6 w-6 text-primary mb-6" />
              <blockquote className="text-foreground/85 leading-relaxed text-[15px] mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}