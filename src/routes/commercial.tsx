import { createFileRoute } from "@tanstack/react-router";
import propCommercial from "@/assets/prop-commercial.jpg";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Spaces in Dubai — Archigram" },
      { name: "description", content: "Grade-A offices, retail and full-floor commercial assets across Business Bay, DIFC and Downtown." },
      { property: "og:title", content: "Commercial Spaces in Dubai — Archigram" },
      { property: "og:description", content: "Grade-A offices, retail and full-floor commercial assets across Business Bay, DIFC and Downtown." },
      { property: "og:image", content: propCommercial },
    ],
  }),
  component: () => (
    <CategoryPage
      category="commercial"
      eyebrow="02 / Commercial"
      title="Where business takes its address."
      subtitle="Grade-A floors, boutique offices and full-tower opportunities in Dubai's premier commercial districts."
      heroImage={propCommercial}
    />
  ),
});