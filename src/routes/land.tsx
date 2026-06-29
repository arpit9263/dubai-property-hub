import { createFileRoute } from "@tanstack/react-router";
import propLand from "@/assets/prop-land.jpg";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/land")({
  head: () => ({
    meta: [
      { title: "Land for Sale in Dubai — Archigram" },
      { name: "description", content: "Freehold development plots and industrial land across Dubai — mapped, zoned, and utility-ready." },
      { property: "og:title", content: "Land for Sale in Dubai — Archigram" },
      { property: "og:description", content: "Freehold development plots and industrial land across Dubai — mapped, zoned, and utility-ready." },
      { property: "og:image", content: propLand },
    ],
  }),
  component: () => (
    <CategoryPage
      category="land"
      eyebrow="04 / Land"
      title="Build the next skyline."
      subtitle="Freehold development plots with full utility connections — explore each on the interactive map."
      heroImage={propLand}
      showMap
    />
  ),
});