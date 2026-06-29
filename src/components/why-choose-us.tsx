import { ShieldCheck, BadgeCheck, FileCheck2, Sparkles } from "lucide-react";

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

      <div className="grid gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.title} className="bg-background p-8 hover:bg-card transition-colors group">
            <p.icon className="h-7 w-7 text-primary mb-6" />
            <h3 className="text-lg font-display font-semibold mb-3">{p.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}