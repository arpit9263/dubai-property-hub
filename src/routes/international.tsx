import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, Mail } from "lucide-react";
import heroPalm from "@/assets/hero-palm.jpg";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      { title: "International Properties — Archigram" },
      { name: "description", content: "Archigram is expanding internationally. Join the waitlist for our upcoming markets in London, Singapore and New York." },
      { property: "og:title", content: "International Properties — Archigram" },
      { property: "og:description", content: "Join the waitlist for Archigram's upcoming international markets." },
      { property: "og:image", content: heroPalm },
    ],
  }),
  component: International,
});

const markets = [
  { city: "London", status: "Q1 2027" },
  { city: "Singapore", status: "Q2 2027" },
  { city: "New York", status: "Q3 2027" },
  { city: "Riyadh", status: "Q4 2027" },
];

function International() {
  return (
    <>
      <PageHero
        eyebrow="International · Coming soon"
        title="A global address, on our terms."
        subtitle="Archigram launches in Dubai first. Verified inventory in additional markets is rolling out through 2027."
        image={heroPalm}
        video="/videos/luxury-villa.mp4"
      />

      <section className="container-edge pb-24">
        <div className="bg-card border border-border/40 p-10 md:p-14 mb-16 grid gap-8 md:grid-cols-[1fr_auto] items-center">
          <div>
            <Globe2 className="h-7 w-7 text-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">
              We're currently Dubai-only.
            </h2>
            <p className="text-foreground/70 leading-relaxed max-w-xl">
              Every Archigram listing is presently in the UAE. Toggle back to Domestic to explore our active inventory, or join the international waitlist below.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] whitespace-nowrap">
            <Mail className="h-4 w-4" /> Join waitlist
          </Link>
        </div>

        <p className="label-eyebrow mb-8">Upcoming markets</p>
        <div className="grid gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <div key={m.city} className="bg-background p-8">
              <p className="text-2xl font-display font-semibold mb-2">{m.city}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">{m.status}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}