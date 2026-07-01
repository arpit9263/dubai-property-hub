import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroMarina from "@/assets/hero-marina.jpg";
import { PageHero } from "@/components/page-hero";
import { RoiCalculator } from "@/components/roi-calculator";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "High-ROI Investment Properties in Dubai — Archigram" },
      { name: "description", content: "Income-generating Dubai property portfolios with double-digit gross yields. Model returns with our high-ROI calculator." },
      { property: "og:title", content: "High-ROI Investment Properties in Dubai — Archigram" },
      { property: "og:description", content: "Income-generating Dubai property with double-digit gross yields." },
      { property: "og:image", content: heroMarina },
    ],
  }),
  component: InvestmentPage,
});

function InvestmentPage() {
  const items = properties.filter((p) => p.category === "investment");

  return (
    <>
      <PageHero
        eyebrow="05 / Investment"
        title="Dubai yields, modelled honestly."
        subtitle="Diversified income portfolios, single-asset opportunities and pre-leased commercial — all underwritten by our in-house team."
        image={heroMarina}
        video="/videos/luxury-villa.mp4"
      />

      <section className="container-edge pb-24">
        <div className="grid gap-4 md:grid-cols-3 mb-20">
          <Stat label="Average gross yield" value="7.8%" />
          <Stat label="Off-plan appreciation" value="12%/yr" />
          <Stat label="Average exit horizon" value="5 years" />
        </div>

        <div className="bg-card border border-border/40 p-8 md:p-12 mb-24">
          <RoiCalculator initialPrice={5000000} initialYield={8} initialAppreciation={7} />
        </div>

        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight">Open opportunities</h2>
          <Link to="/contact" className="text-xs uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
            Request prospectus <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => (
            <PropertyCard key={p.id} property={p} index={idx} />
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card border border-border/40 p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mb-3">{label}</p>
      <p className="text-4xl font-display font-semibold text-primary">{value}</p>
    </div>
  );
}