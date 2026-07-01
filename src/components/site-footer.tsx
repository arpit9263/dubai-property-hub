import { Link } from "@tanstack/react-router";
import { Home, Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useMode } from "@/components/mode-context";

export function SiteFooter() {
  const { mode, toggle } = useMode();

  return (
    <footer className="relative overflow-hidden bg-[#020b14] text-white border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,oklch(0.78_0.11_75/0.12),transparent_55%)] pointer-events-none" />

      <div className="relative container-edge pt-24 pb-10">
        {/* CTA row */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-end pb-16 border-b border-white/10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#f5a623] mb-5">Let's build your address</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[0.98] max-w-2xl">
              Ready to find your next Dubai landmark?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#f5a623] text-[#020b14] px-6 py-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-white transition-colors"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/properties"
              className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
            >
              Browse portfolio
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Home className="h-5 w-5 stroke-[2.4] text-[#f5a623]" />
              <span className="text-lg font-extrabold tracking-[-0.02em]">ARCHIGRAM</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-8">
              Dubai's verification-first luxury real estate platform. Curated inventory, audited yields, and end-to-end structuring for buyers and investors.
            </p>
            <button
              onClick={toggle}
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold hover:border-[#f5a623] hover:text-[#f5a623] transition"
            >
              <Globe className="h-3.5 w-3.5" />
              Mode · {mode === "domestic" ? "Domestic (UAE)" : "International"}
            </button>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-[#f5a623] mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/residential", l: "Residential" },
                { to: "/commercial", l: "Commercial" },
                { to: "/rental", l: "Rental" },
                { to: "/land", l: "Land" },
                { to: "/investment", l: "Investment" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-white/70 hover:text-[#f5a623] transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-[#f5a623] mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-[#f5a623]">About</Link></li>
              <li><Link to="/properties" className="text-white/70 hover:text-[#f5a623]">Portfolio</Link></li>
              <li><Link to="/international" className="text-white/70 hover:text-[#f5a623]">Global</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-[#f5a623]">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-[#f5a623] mb-5">Reach us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/75">
                <MapPin className="h-4 w-4 mt-0.5 text-[#f5a623] shrink-0" />
                Level 28, Sheikh Zayed Road,<br />Downtown Dubai, UAE
              </li>
              <li className="flex items-center gap-3 text-white/75">
                <Phone className="h-4 w-4 text-[#f5a623] shrink-0" />
                <a href="tel:+9714800ARCH" className="hover:text-[#f5a623]">+971 4 800 ARCH</a>
              </li>
              <li className="flex items-center gap-3 text-white/75">
                <Mail className="h-4 w-4 text-[#f5a623] shrink-0" />
                <a href="mailto:hello@archigram.ae" className="hover:text-[#f5a623]">hello@archigram.ae</a>
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center border border-white/15 text-white/70 hover:border-[#f5a623] hover:text-[#f5a623] transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Archigram Real Estate LLC · RERA Licensed · All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#f5a623]">Privacy</a>
            <a href="#" className="hover:text-[#f5a623]">Terms</a>
            <a href="#" className="hover:text-[#f5a623]">Cookies</a>
            <span className="text-[#f5a623]/70">Dubai · UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}