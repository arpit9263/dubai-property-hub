import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Check } from "lucide-react";
import { properties, formatAed } from "@/data/properties";
import { PanoramaViewer } from "@/components/panorama-viewer";
import { MapView } from "@/components/map-view";
import { RoiCalculator } from "@/components/roi-calculator";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.id === params.id);
    if (!property) throw notFound();
    return property;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — Archigram Dubai` },
            { name: "description", content: loaderData.description },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.description },
            { property: "og:image", content: loaderData.image },
          ],
        }
      : { meta: [{ title: "Property — Archigram" }] },
  notFoundComponent: () => (
    <div className="container-edge py-32 text-center">
      <h1 className="text-3xl font-display font-semibold mb-4">Property not found</h1>
      <Link to="/properties" className="text-primary">← Back to properties</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-edge py-32 text-center">
      <h1 className="text-2xl font-display mb-4">Something went wrong</h1>
      <p className="text-foreground/60">{error.message}</p>
    </div>
  ),
  component: PropertyDetail,
});

function PropertyDetail() {
  const property = Route.useLoaderData();

  return (
    <article className="pt-24">
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={property.image} alt={property.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 container-edge pb-12">
          <Link to="/properties" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-primary mb-6">
            <ArrowLeft className="h-3 w-3" /> All properties
          </Link>
          <p className="label-eyebrow mb-3">{property.category}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[0.95] max-w-3xl">
            {property.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-primary">
            <MapPin className="h-4 w-4" />
            {property.area}, {property.city}
          </div>
        </div>
      </div>

      <section className="container-edge py-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex flex-wrap gap-8 pb-8 border-b border-border/30">
            {property.bedrooms !== undefined && property.bedrooms > 0 && (
              <Spec icon={<Bed className="h-5 w-5" />} label="Bedrooms" value={String(property.bedrooms)} />
            )}
            {property.bathrooms !== undefined && (
              <Spec icon={<Bath className="h-5 w-5" />} label="Bathrooms" value={String(property.bathrooms)} />
            )}
            <Spec icon={<Maximize className="h-5 w-5" />} label="Size" value={`${property.sqft.toLocaleString()} ft²`} />
            {property.yieldPct !== undefined && property.yieldPct > 0 && (
              <Spec label="Yield" value={`${property.yieldPct}%`} />
            )}
          </div>

          <div>
            <p className="label-eyebrow mb-4">Overview</p>
            <p className="text-lg leading-relaxed text-foreground/80">{property.description}</p>
          </div>

          <div>
            <p className="label-eyebrow mb-6">Features</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {property.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow mb-6">Location</p>
            <MapView
              markers={[{ id: property.id, position: property.coords, title: property.title, subtitle: property.area }]}
              center={property.coords}
              zoom={14}
              height="420px"
            />
            <div className="mt-4">
              <PanoramaViewer url={property.panoramaUrl} title={`${property.title} — ${property.area}`} />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-card border border-border/40 p-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">Asking price</p>
              <p className="text-3xl font-display font-semibold text-primary">
                {property.priceLabel ?? formatAed(property.price)}
              </p>
            </div>
            <div className="space-y-3 pt-6 border-t border-border/30">
              <Link to="/contact" className="block text-center w-full px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:opacity-90">
                Request viewing
              </Link>
              <a href="tel:+9714800ARCH" className="block text-center w-full px-6 py-3 border border-border/50 text-foreground hover:border-primary text-xs uppercase tracking-[0.25em]">
                Call advisor
              </a>
            </div>
            <div className="pt-6 border-t border-border/30 text-xs text-foreground/60 space-y-2">
              <p>✓ RERA-verified listing</p>
              <p>✓ Documents pre-checked</p>
              <p>✓ On-ground inspection</p>
            </div>
          </div>
        </aside>
      </section>

      {property.yieldPct !== undefined && property.yieldPct > 0 && (
        <section className="container-edge py-16 border-t border-border/30">
          <div className="mb-10">
            <p className="label-eyebrow mb-3">Model the return</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight">Project your ROI</h2>
          </div>
          <div className="bg-card border border-border/40 p-8 md:p-12">
            <RoiCalculator
              initialPrice={property.price}
              initialYield={property.yieldPct}
              initialAppreciation={property.appreciationPct ?? 6}
            />
          </div>
        </section>
      )}
    </article>
  );
}

function Spec({ icon, label, value }: { icon?: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
        {icon}
        {label}
      </div>
      <p className="text-2xl font-display font-semibold">{value}</p>
    </div>
  );
}