import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Building2 } from "lucide-react";
import { useMode } from "./mode-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/investment", label: "Investment" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useMode();

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/30">
      <div className="container-edge flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Building2 className="h-5 w-5 text-primary" />
          <span className="font-display font-bold tracking-wider text-foreground">
            ARCHIGRAM
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center rounded-full border border-border/50 p-1 text-[10px] uppercase tracking-[0.18em]">
            <button
              onClick={() => setMode("domestic")}
              className={cn(
                "px-3 py-1 rounded-full transition-all",
                mode === "domestic" ? "bg-primary text-primary-foreground" : "text-foreground/60"
              )}
            >
              Domestic
            </button>
            <button
              onClick={() => setMode("international")}
              className={cn(
                "px-3 py-1 rounded-full transition-all",
                mode === "international" ? "bg-primary text-primary-foreground" : "text-foreground/60"
              )}
            >
              International
            </button>
          </div>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md">
          <nav className="container-edge flex flex-col py-6 gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-border/30">
              <button
                onClick={() => setMode("domestic")}
                className={cn(
                  "flex-1 px-3 py-2 text-[10px] uppercase tracking-[0.18em] rounded-full border",
                  mode === "domestic" ? "bg-primary text-primary-foreground border-primary" : "border-border/50 text-foreground/60"
                )}
              >
                Domestic
              </button>
              <button
                onClick={() => setMode("international")}
                className={cn(
                  "flex-1 px-3 py-2 text-[10px] uppercase tracking-[0.18em] rounded-full border",
                  mode === "international" ? "bg-primary text-primary-foreground border-primary" : "border-border/50 text-foreground/60"
                )}
              >
                International
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}