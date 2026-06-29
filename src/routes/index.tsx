import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Phone } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import heroMarina from "@/assets/hero-marina.jpg";
import heroPenthouse from "@/assets/hero-penthouse.jpg";
import heroPalm from "@/assets/hero-palm.jpg";
import propCommercial from "@/assets/prop-commercial.jpg";
import propLand from "@/assets/prop-land.jpg";
import propResidential from "@/assets/prop-residential.jpg";
import propRental from "@/assets/prop-rental.jpg";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { WhyChooseUs } from "@/components/why-choose-us";
import { RoiCalculator } from "@/components/roi-calculator";
import { useMode } from "@/components/mode-context";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archigram — Luxury Real Estate in Dubai" },
      { name: "description", content: "Verified luxury residences, commercial spaces, rentals, land and high-ROI investments across Dubai." },
      { property: "og:title", content: "Archigram — Luxury Real Estate in Dubai" },
      { property: "og:description", content: "Verified luxury residences, commercial spaces, rentals, land and high-ROI investments across Dubai." },
      { property: "og:image", content: heroVilla },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroCarousel />
      <CategoriesStrip />
      <FeaturedSection />
      <WhyChooseUs />
      <RoiTeaser />
      <CtaBand />
    </>
  );
}

const slides = [
  { image: heroVilla, area: "Emirates Hills", title: "Luxury Villa\nAt The Skyline", id: "luxury-villa-skyline" },
  { image: heroMarina, area: "Dubai Marina", title: "Marina Sky\nResidence", id: "marina-sky-residence" },
  { image: heroPenthouse, area: "Downtown Dubai", title: "Downtown\nPenthouse", id: "downtown-penthouse" },
  { image: heroPalm, area: "Palm Jumeirah", title: "Beachfront\nMansion", id: "palm-beachfront-mansion" },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  const slide = slides[i];
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const { mode } = useMode();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {slides.map((s, idx) => (
        <img
          key={s.id}
          src={s.image}
          alt={s.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />

      {/* Vertical label */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <span className="text-vertical text-foreground/50">Archigram · Dubai · 2026</span>
      </div>

      <div className="relative w-full container-edge pb-24 md:pb-32 pt-32">
        <div className="flex items-center gap-4 mb-10 text-sm tracking-[0.3em] text-foreground/70">
          <span className="text-5xl font-display text-foreground">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-foreground/40">/ {String(slides.length).padStart(2, "0")}</span>
        </div>

        <p className="label-eyebrow mb-6">{slide.area} · {mode === "domestic" ? "Dubai" : "International"}</p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[0.95] whitespace-pre-line max-w-4xl">
          {slide.title}
        </h1>

        <p className="mt-8 max-w-md text-foreground/70 leading-relaxed">
          It is through our combined efforts that the greatest solutions shine through. Discover the new.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/properties/$id"
            params={{ id: slide.id }}
            className="group inline-flex items-center gap-3 px-6 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-[0.25em] transition-all"
          >
            View more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2 ml-auto">
            <button onClick={prev} aria-label="Previous" className="w-12 h-12 border border-border/40 text-foreground/70 hover:border-primary hover:text-primary flex items-center justify-center transition-all">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={next} aria-label="Next" className="w-12 h-12 border border-border/40 text-foreground/70 hover:border-primary hover:text-primary flex items-center justify-center transition-all">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 hidden md:flex items-center gap-2 text-xs text-foreground/60">
        <Phone className="h-3 w-3 text-primary" />
        Call us: +971 4 800 ARCH
      </div>
    </section>
  );
}

const categories = [
  { label: "Residential", to: "/residential" as const, image: propResidential },
  { label: "Commercial", to: "/commercial" as const, image: propCommercial },
  { label: "Rental", to: "/rental" as const, image: propRental },
  { label: "Land", to: "/land" as const, image: propLand },
  { label: "Investment", to: "/investment" as const, image: heroMarina },
];

function CategoriesStrip() {
  return (
    <section className="container-edge py-24 md:py-32">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
        <div>
          <p className="label-eyebrow mb-4">02 / Categories</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-2xl">
            Every move, considered.
          </h2>
        </div>
        <Link to="/properties" className="text-xs uppercase tracking-[0.25em] text-primary hover:text-foreground inline-flex items-center gap-2">
          All properties <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((c, idx) => (
          <Link to={c.to} key={c.label} className="group relative aspect-[3/4] overflow-hidden block bg-card">
            <img src={c.image} alt={c.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-1000 group-hover:opacity-90 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-between p-5">
              <span className="text-xs tracking-[0.3em] text-foreground/60">0{idx + 1}</span>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-2">{c.label}</h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary inline-flex items-center gap-1">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedSection() {
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="container-edge py-24 md:py-32 border-t border-border/30">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
        <div>
          <p className="label-eyebrow mb-4">03 / Featured</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-2xl">
            Hand-picked this month.
          </h2>
        </div>
        <p className="text-foreground/60 max-w-sm text-sm leading-relaxed">
          Curated by our acquisitions team across Dubai's most exclusive postcodes.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, idx) => (
          <PropertyCard key={p.id} property={p} index={idx} />
        ))}
      </div>
    </section>
  );
}

function RoiTeaser() {
  return (
    <section className="container-edge py-24 md:py-32 border-t border-border/30">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-4">
          <p className="label-eyebrow mb-4">05 / Returns</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight">
            Model your next return in seconds.
          </h2>
          <p className="mt-6 text-foreground/60 leading-relaxed">
            Project total ROI, cash-on-cash and appreciation across any holding period — calibrated on real Dubai yield data.
          </p>
          <Link to="/investment" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            Full investment view <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="lg:col-span-8 bg-card border border-border/40 p-8 md:p-12">
          <RoiCalculator />
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="container-edge py-24 md:py-32 border-t border-border/30">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-2xl leading-[1.05]">
          Ready to discover your next address?
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/properties" className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:opacity-90">
            Browse properties <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-4 border border-border/50 text-foreground hover:border-primary text-xs uppercase tracking-[0.25em]">
            Speak to an advisor
          </Link>
        </div>
      </div>
    </section>
  );
}
}
