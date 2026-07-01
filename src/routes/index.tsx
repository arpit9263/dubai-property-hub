import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Home, Building2, Key, Mountain, TrendingUp } from "lucide-react";
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
import { ProcessSteps } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";
import { Reveal } from "@/components/section-reveal";
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
      <ProcessSteps />
      <WhyChooseUs />
      <RoiTeaser />
      <Testimonials />
      <Faq />
      <Newsletter />
      <CtaBand />
    </>
  );
}

type HeroTab = {
  key: string;
  label: string;
  icon: typeof Home;
  area: string;
  title: string;
  poster: string;
  video: string;
  href: "/residential" | "/commercial" | "/rental" | "/land" | "/investment";
  linkLabel: string;
  copy: string;
};

const HERO_VIDEO = "/videos/luxury-villa.mp4";

const heroTabs: HeroTab[] = [
  {
    key: "residential",
    label: "Residential",
    icon: Home,
    area: "Emirates Hills · Palm · Marina",
    title: "Luxury Villa\nAt The Skyline",
    poster: heroVilla,
    video: HERO_VIDEO,
    href: "/residential",
    linkLabel: "Explore residential",
    copy: "Villas, penthouses and apartments in Dubai's most exclusive addresses.",
  },
  {
    key: "commercial",
    label: "Commercial",
    icon: Building2,
    area: "Business Bay · DIFC",
    title: "Grade-A Floors,\nCanal Views",
    poster: propCommercial,
    video: HERO_VIDEO,
    href: "/commercial",
    linkLabel: "Explore commercial",
    copy: "Full-floor and boutique offices in Dubai's premier commercial districts.",
  },
  {
    key: "rental",
    label: "Rental",
    icon: Key,
    area: "Marina · Downtown · JVC",
    title: "Move In.\nSettle Fast.",
    poster: propRental,
    video: HERO_VIDEO,
    href: "/rental",
    linkLabel: "Explore rentals",
    copy: "Furnished and chiller-free residences with verified tenancies.",
  },
  {
    key: "land",
    label: "Land",
    icon: Mountain,
    area: "Al Marmoom · Dubai South",
    title: "Build The\nNext Skyline.",
    poster: propLand,
    video: HERO_VIDEO,
    href: "/land",
    linkLabel: "Explore land",
    copy: "Freehold plots — mapped, zoned and utility-ready for development.",
  },
  {
    key: "investment",
    label: "Invest",
    icon: TrendingUp,
    area: "Portfolio · Whole-tower · Off-plan",
    title: "Dubai Yields,\nModelled Honestly.",
    poster: heroMarina,
    video: HERO_VIDEO,
    href: "/investment",
    linkLabel: "Model your ROI",
    copy: "Income portfolios and pre-leased assets underwritten by our team.",
  },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  const { mode } = useMode();
  const slide = heroTabs[i];
  const next = () => setI((p) => (p + 1) % heroTabs.length);
  const prev = () => setI((p) => (p - 1 + heroTabs.length) % heroTabs.length);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020b14] px-4 py-6 md:px-8 md:py-10">
      <div className="absolute inset-0">
        <img src={heroVilla} alt="Luxury villa backdrop" className="h-full w-full object-cover opacity-35 blur-sm scale-110" />
        <div className="absolute inset-0 bg-[#020b14]/75" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-[1400px] items-center justify-center pt-20 md:min-h-[calc(100vh-80px)] md:pt-0">
        <div className="relative h-[760px] max-h-[calc(100vh-80px)] min-h-[620px] w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#051a31] shadow-[0_32px_90px_rgba(0,0,0,0.55)]">
          <video
            key={slide.key}
            className="absolute inset-0 h-full w-full object-cover animate-fade-in"
            src={slide.video}
            poster={slide.poster}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#03101f]/90 via-[#062b57]/45 to-[#03101f]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-[#00386b]/25" />

          <div className="pointer-events-none absolute left-10 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <p className="rotate-[-90deg] text-[12px] font-semibold uppercase tracking-[0.32em] text-white/80">
              {mode === "domestic" ? "Dubai · UAE" : "Global · Preview"}
            </p>
          </div>

          {/* Category tabs */}
          <div className="absolute left-6 right-6 top-[92px] z-20 flex flex-wrap gap-2 md:left-[220px] md:right-auto md:top-24">
            {heroTabs.map((t, idx) => (
              <button
                key={t.key}
                onClick={() => setI(idx)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${
                  idx === i
                    ? "border-[#f5a623] bg-[#f5a623] text-[#020b14]"
                    : "border-white/20 bg-white/5 text-white/85 hover:border-white/60 hover:text-white"
                }`}
              >
                <t.icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            ))}
          </div>

          <div className="absolute left-6 right-6 top-[38%] z-10 text-white md:left-[220px] md:right-auto md:top-[32%]">
            <div className="mb-12 flex items-start gap-1">
              <span className="text-4xl font-extrabold leading-none md:text-[38px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-sm font-semibold text-white/80">/{String(heroTabs.length).padStart(2, "0")}</span>
              <span className="ml-6 mt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f5a623]">{slide.area}</span>
            </div>

            <h1 key={slide.key} className="animate-fade-in max-w-[650px] text-[46px] font-extrabold leading-[0.95] tracking-[-0.06em] drop-shadow-xl sm:text-[64px] md:text-[78px] lg:text-[88px]">
              {slide.title.split("\n").map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>

            <p className="mt-7 max-w-[455px] text-[15px] font-medium leading-relaxed text-white/90 md:text-[17px]">
              {slide.copy}
            </p>

            <Link
              to={slide.href}
              className="group mt-10 inline-flex items-center gap-3 border-b-2 border-[#f5a623] pb-2 text-[13px] font-extrabold uppercase tracking-wide text-white transition-colors hover:text-[#f5a623]"
            >
              {slide.linkLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="absolute bottom-[25%] right-[12%] z-10 hidden overflow-hidden rounded-sm bg-white text-[#05101f] shadow-2xl md:flex">
            <button onClick={prev} aria-label="Previous" className="grid h-16 w-16 place-items-center border-r border-black/10 transition-colors hover:bg-[#f5a623]">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="grid h-16 w-16 place-items-center transition-colors hover:bg-[#f5a623]">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-5 md:flex">
            {heroTabs.map((s, idx) => (
              <button
                key={s.key}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-3 w-3 rounded-full transition-all ${idx === i ? "bg-white scale-110" : "bg-white/35 hover:bg-white/65"}`}
              />
            ))}
          </div>

          <div className="absolute bottom-10 left-8 z-10 flex items-center gap-6 text-white md:left-12">
            <span className="text-sm font-bold">𝕏</span>
            <span className="text-sm font-bold">f</span>
            <span className="text-sm font-bold">◎</span>
            <span className="text-sm font-bold">p</span>
          </div>

          <div className="absolute bottom-10 right-8 z-10 hidden text-[12px] font-extrabold uppercase tracking-wide text-white md:block">
            Call us: (+001) 1234 56 78 90
          </div>
        </div>
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
          <Reveal key={c.label} delay={idx * 0.06}>
            <Link to={c.to} className="group relative aspect-[3/4] overflow-hidden block bg-card border border-border/40 hover:border-primary/50 transition-colors">
              <img src={c.image} alt={c.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-1000 group-hover:opacity-90 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
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
          </Reveal>
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
