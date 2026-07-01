import { createFileRoute } from "@tanstack/react-router";
import heroVilla from "@/assets/hero-villa.jpg";
import { PageHero } from "@/components/page-hero";
import { WhyChooseUs } from "@/components/why-choose-us";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Archigram — Dubai Real Estate" },
      { name: "description", content: "Archigram is Dubai's verified real estate marketplace, combining rigorous legal checks with curated inventory." },
      { property: "og:title", content: "About Archigram — Dubai Real Estate" },
      { property: "og:description", content: "Dubai's verified real estate marketplace." },
      { property: "og:image", content: heroVilla },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for buyers who refuse to gamble."
        subtitle="We launched Archigram because Dubai deserves a property marketplace where verification comes before velocity. Every listing, every party, every document — checked."
        image={heroVilla}
        video="/videos/luxury-villa.mp4"
      />

      <section className="container-edge pb-24 grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <p className="label-eyebrow mb-4">Our story</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-6">
            From RERA-licensed brokers to a verification-first platform.
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Archigram was founded in 2024 by a team of Dubai-licensed brokers, lawyers, and former Land Department officers. We saw too many buyers entering Dubai's market with incomplete information — and too many sellers losing trust through opaque processes.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            So we built the platform we wished existed: every listing inspected, every counterparty verified, every contract reviewed. No grey areas.
          </p>
        </div>
        <div className="grid gap-px bg-border/30">
          {[
            ["+1,200", "Verified listings"],
            ["AED 8B+", "Underwritten transactions"],
            ["42", "In-house legal hours per listing"],
            ["100%", "RERA-registered counterparties"],
          ].map(([v, l]) => (
            <div key={l} className="bg-background p-8 grid grid-cols-2 items-center gap-4">
              <p className="text-3xl md:text-4xl font-display font-semibold text-primary">{v}</p>
              <p className="text-sm text-foreground/70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}