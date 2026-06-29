import { Link } from "@tanstack/react-router";
import { Building2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container-edge py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-display font-bold tracking-wider">ARCHIGRAM</span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Dubai's verified marketplace for luxury residences, commercial spaces, and high-ROI investments.
            </p>
          </div>

          <div>
            <h4 className="label-eyebrow mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/residential" className="text-foreground/70 hover:text-primary">Residential</Link></li>
              <li><Link to="/commercial" className="text-foreground/70 hover:text-primary">Commercial</Link></li>
              <li><Link to="/rental" className="text-foreground/70 hover:text-primary">Rental</Link></li>
              <li><Link to="/land" className="text-foreground/70 hover:text-primary">Land</Link></li>
              <li><Link to="/investment" className="text-foreground/70 hover:text-primary">Investment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary">About</Link></li>
              <li><Link to="/international" className="text-foreground/70 hover:text-primary">International</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow mb-4">Connect</h4>
            <p className="text-sm text-foreground/70 mb-2">Sheikh Zayed Road</p>
            <p className="text-sm text-foreground/70 mb-4">Downtown Dubai, UAE</p>
            <p className="text-sm text-primary mb-4">+971 4 800 ARCH</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-foreground/50 hover:text-primary"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="text-foreground/50 hover:text-primary"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="text-foreground/50 hover:text-primary"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="text-foreground/50 hover:text-primary"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Archigram. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Dubai · UAE</p>
        </div>
      </div>
    </footer>
  );
}