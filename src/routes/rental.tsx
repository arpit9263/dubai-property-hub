import { createFileRoute } from "@tanstack/react-router";
import propRental from "@/assets/prop-rental.jpg";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/rental")({
  head: () => ({
    meta: [
      { title: "Rentals in Dubai — Archigram" },
      { name: "description", content: "Furnished and unfurnished rentals across Dubai's most desirable communities." },
      { property: "og:title", content: "Rentals in Dubai — Archigram" },
      { property: "og:description", content: "Furnished and unfurnished rentals across Dubai's most desirable communities." },
      { property: "og:image", content: propRental },
    ],
  }),
  component: () => (
    <CategoryPage
      category="rental"
      eyebrow="03 / Rental"
      title="Move in. Settle fast."
      subtitle="Furnished and chiller-free rentals — verified tenancies and transparent contracts."
      heroImage={propRental}
    />
  ),
});