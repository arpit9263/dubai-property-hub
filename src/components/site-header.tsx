import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/properties", label: "Projects" },
  { to: "/investment", label: "Blog" },
  { to: "/contact", label: "Contacts" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-4 md:px-8 md:pt-8 pointer-events-none">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-5 text-white md:px-12 pointer-events-auto">
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

        <div className="hidden items-center gap-2 text-[11px] font-bold uppercase text-white md:flex">
          ENG <ChevronDown className="h-4 w-4" />
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
