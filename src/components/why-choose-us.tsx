import { ShieldCheck, BadgeCheck, FileCheck2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/section-reveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Safe Investment",
    body: "Escrow-protected transactions and audited project trust accounts. Every dirham you commit is ring-fenced.",
  },
  {
    icon: BadgeCheck,
    title: "Authorized Seller & Buyer",
    body: "Only RERA-registered brokers and KYC-verified buyers transact through Archigram.",
  },
  {
    icon: FileCheck2,
    title: "Proper Document Verification",
    body: "Title deeds, NOCs, and Oqood contracts triple-checked by our in-house legal team before listing.",
  },
  {
    icon: Sparkles,
    title: "Genuine Properties",
    body: "On-ground inspections and recent imagery for every listing. What you see is what you visit.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 container-edge">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="label-eyebrow mb-4">04 / Why Archigram</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-2xl">
            Built on verification, not promises.
          </h2>
        </div>
        <p className="text-foreground/60 max-w-sm text-sm leading-relaxed">
          Dubai's property market moves fast. We slow down to verify so you can move with conviction.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden bg-card border border-border/40 p-8 hover:border-primary/60 transition-colors">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid h-12 w-12 place-items-center bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}