import { Link } from "@tanstack/react-router";
import { MapPin, Bed, Bath, Maximize, ArrowUpRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Property } from "@/data/properties";
import { formatAed } from "@/data/properties";

export function PropertyCard({ property, index }: { property: Property; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index ?? 0) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to="/properties/$id"
        params={{ id: property.id }}
        className="group block h-full"
      >
        <article className="relative overflow-hidden bg-card border border-border/40 group-hover:border-primary/50 transition-colors">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

            {index !== undefined && (
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] text-white/80">
                {String(index + 1).padStart(2, "0")}
              </div>
            )}

            <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
              <span className="text-[10px] uppercase tracking-[0.25em] bg-black/40 text-white backdrop-blur-md px-3 py-1.5 border border-white/15">
                {property.category}
              </span>
              {property.yieldPct !== undefined && property.yieldPct > 0 && (
                <span className="text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground px-3 py-1.5 font-semibold">
                  {property.yieldPct}% yield
                </span>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-primary mb-2">
                <MapPin className="h-3 w-3" />
                <span>{property.area}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground leading-tight">
                {property.title}
              </h3>
            </div>
          </div>

          <div className="p-6 border-t border-border/40">
            <div className="flex items-center gap-5 text-xs text-foreground/60 mb-5">
              {property.bedrooms !== undefined && property.bedrooms > 0 && (
                <span className="flex items-center gap-1.5"><Bed className="h-3.5 w-3.5" />{property.bedrooms}</span>
              )}
              {property.bathrooms !== undefined && (
                <span className="flex items-center gap-1.5"><Bath className="h-3.5 w-3.5" />{property.bathrooms}</span>
              )}
              <span className="flex items-center gap-1.5"><Maximize className="h-3.5 w-3.5" />{property.sqft.toLocaleString()} ft²</span>
              <span className="ml-auto flex items-center gap-1 text-primary/80">
                <BadgeCheck className="h-3.5 w-3.5" /> Verified
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-1">Asking</p>
                <p className="text-lg font-display font-semibold text-primary">
                  {property.priceLabel ?? formatAed(property.price)}
                </p>
              </div>
              <span className="grid h-11 w-11 place-items-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}