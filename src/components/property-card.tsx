import { Link } from "@tanstack/react-router";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatAed } from "@/data/properties";

export function PropertyCard({ property, index }: { property: Property; index?: number }) {
  return (
    <Link
      to="/properties/$id"
      params={{ id: property.id }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-card aspect-[4/5]">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {index !== undefined && (
          <div className="absolute top-4 left-4 text-xs tracking-[0.3em] text-foreground/70">
            {String(index + 1).padStart(2, "0")} / {String(index + 10).padStart(2, "0")}
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span className="text-[10px] uppercase tracking-[0.25em] bg-background/60 backdrop-blur-sm px-3 py-1.5 border border-border/40">
            {property.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-center gap-1.5 text-xs text-primary mb-2">
            <MapPin className="h-3 w-3" />
            <span className="tracking-wider">{property.area}, {property.city}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-tight">
            {property.title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-foreground/70 mb-4">
            {property.bedrooms !== undefined && property.bedrooms > 0 && (
              <span className="flex items-center gap-1"><Bed className="h-3 w-3" />{property.bedrooms}</span>
            )}
            {property.bathrooms !== undefined && (
              <span className="flex items-center gap-1"><Bath className="h-3 w-3" />{property.bathrooms}</span>
            )}
            <span className="flex items-center gap-1"><Maximize className="h-3 w-3" />{property.sqft.toLocaleString()} ft²</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-lg font-display font-semibold text-primary">
              {property.priceLabel ?? formatAed(property.price)}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60 group-hover:text-primary transition-colors">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}