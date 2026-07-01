import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { properties, type PropertyCategory } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import { ModeNotice } from "@/components/mode-notice";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "All Properties — Archigram Dubai" },
      { name: "description", content: "Browse every verified Archigram property in Dubai — residential, commercial, rental, land and investment." },
      { property: "og:title", content: "All Properties — Archigram Dubai" },
      { property: "og:description", content: "Browse every verified Archigram property in Dubai." },
    ],
  }),
  component: PropertiesPage,
});

const tabs: Array<{ value: PropertyCategory | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "rental", label: "Rental" },
  { value: "land", label: "Land" },
  { value: "investment", label: "Investment" },
];

function PropertiesPage() {
  const [filter, setFilter] = useState<PropertyCategory | "all">("all");
  const items = filter === "all" ? properties : properties.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every Archigram listing."
        subtitle="Filter by category, compare and shortlist. Every listing verified by our acquisitions team."
        video="/videos/luxury-villa.mp4"
      />
      <ModeNotice />

      <section className="container-edge pb-32">
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border/30 pb-6">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setFilter(t.value)}
              className={cn(
                "px-4 py-2 text-[11px] uppercase tracking-[0.25em] transition-all border",
                filter === t.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/40 text-foreground/70 hover:border-primary hover:text-primary"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-8">
          {items.length} {items.length === 1 ? "property" : "properties"}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => (
            <PropertyCard key={p.id} property={p} index={idx} />
          ))}
        </div>
      </section>
    </>
  );
}