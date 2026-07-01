import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Home, Menu, X, Globe, MapPin } from "lucide-react";
import { useMode } from "@/components/mode-context";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/properties", label: "Projects" },
  { to: "/investment", label: "Invest" },
  { to: "/international", label: "Global" },
  { to: "/contact", label: "Contacts" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggle } = useMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pointer-events-none transition-all duration-500 ${
        scrolled ? "px-3 pt-3 md:px-6 md:pt-4" : "px-4 pt-4 md:px-8 md:pt-8"
      }`}
    >
      <div
        className={`pointer-events-auto mx-auto flex w-full max-w-[1400px] items-center justify-between text-white transition-all duration-500 ${
          scrolled
            ? "h-16 rounded-2xl border border-white/10 bg-[#03101f]/85 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-8"
            : "h-20 px-5 md:px-12"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 text-white">
          <Home className="h-5 w-5 stroke-[2.4]" />
          <span className="text-lg font-extrabold tracking-[-0.02em] md:text-xl">ARCHIGRAM</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] font-bold uppercase tracking-[-0.01em] text-white/90 transition-colors hover:text-[#f5a623]"
              activeProps={{ className: "text-[#f5a623]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggle}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 transition hover:border-[#f5a623] hover:text-[#f5a623]"
            aria-label="Toggle domestic or international mode"
          >
            {mode === "domestic" ? <MapPin className="h-3.5 w-3.5" /> : <Globe className="h-3.5 w-3.5" />}
            {mode === "domestic" ? "Domestic" : "International"}
            <span className="ml-1 hidden text-white/40 group-hover:text-[#f5a623] lg:inline">⇄</span>
          </button>
          <div className="flex items-center gap-1 text-[11px] font-bold uppercase text-white/80">
            ENG <ChevronDown className="h-3.5 w-3.5" />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-[calc(100%-2rem)] max-w-[1400px] overflow-hidden rounded-3xl border border-white/10 bg-[#031b35]/95 p-5 text-white shadow-2xl backdrop-blur-xl pointer-events-auto md:hidden">
          <button
            type="button"
            onClick={toggle}
            className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
          >
            {mode === "domestic" ? <MapPin className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
            Switch to {mode === "domestic" ? "International" : "Domestic"}
          </button>
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-3 text-sm font-bold uppercase tracking-wide text-white/85 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
