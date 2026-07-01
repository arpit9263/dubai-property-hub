import type { PropertyCategory } from "@/data/properties";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { PageHero } from "@/components/page-hero";
import { MapView } from "@/components/map-view";
import { ModeNotice } from "@/components/mode-notice";

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

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={heroImage} video="/videos/luxury-villa.mp4" />
      <ModeNotice />

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