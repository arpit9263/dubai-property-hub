import { createFileRoute } from "@tanstack/react-router";
import propResidential from "@/assets/prop-residential.jpg";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Properties in Dubai — Archigram" },
      { name: "description", content: "Apartments, villas and penthouses across Dubai's most exclusive neighbourhoods." },
      { property: "og:title", content: "Residential Properties in Dubai — Archigram" },
      { property: "og:description", content: "Apartments, villas and penthouses across Dubai's most exclusive neighbourhoods." },
      { property: "og:image", content: propResidential },
    ],
  }),
  component: () => (
    <CategoryPage
      category="residential"
      eyebrow="01 / Residential"
      title="Live above the skyline."
      subtitle="Hand-curated villas, penthouses and apartments across Emirates Hills, the Palm, Marina and Downtown."
      heroImage={propResidential}
    />
  ),
});