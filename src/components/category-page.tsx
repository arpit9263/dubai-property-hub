import type { PropertyCategory } from "@/data/properties";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { PageHero } from "@/components/page-hero";
import { MapView } from "@/components/map-view";
import { useMode } from "@/components/mode-context";
import { Link } from "@tanstack/react-router";

type Props = {
  category: PropertyCategory;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  showMap?: boolean;
};

export function CategoryPage({ category, eyebrow, title, subtitle, heroImage, showMap }: Props) {
  const items = properties.filter((p) => p.category === category);
  const { mode } = useMode();

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={heroImage} />

      {mode === "international" && (
        <div className="container-edge -mt-4 mb-10">
          <div className="bg-primary/10 border border-primary/30 p-4 text-sm text-primary text-center">
            International mode is currently limited — showing Dubai listings only.{" "}
            <Link to="/international" className="underline">Learn more</Link>
          </div>
        </div>
      )}

      {showMap && (
        <section className="container-edge pb-16">
          <MapView
            markers={items.map((p) => ({
              id: p.id,
              position: p.coords,
              title: p.title,
              subtitle: p.area,
              href: `/properties/${p.id}`,
            }))}
          />
        </section>
      )}

      <section className="container-edge pb-32">
        {items.length === 0 ? (
          <p className="text-foreground/60">No properties available right now.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p, idx) => (
              <PropertyCard key={p.id} property={p} index={idx} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}