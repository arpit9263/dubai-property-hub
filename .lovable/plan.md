# Dubai Luxury Real Estate Platform

A multi-page real estate website inspired by the uploaded ARCHIGRAM reference — deep navy backgrounds, large editorial serif/sans display type, cinematic hero imagery, and warm amber accents. Currently scoped to Dubai with Domestic / International modes.

## Design System

- **Palette**: Deep navy `#0A1628` background, midnight `#0F1E36` cards, warm amber `#D4A574` accent, ivory `#F5F1EA` text, muted slate for secondary.
- **Typography**: Display headings in a strong sans (Space Grotesk / Archivo), body in Inter/DM Sans. Tight tracking on display, generous line-height on body.
- **Vibe**: Cinematic, editorial, luxury. Generous negative space, large hero imagery, numeric chapter markers ("01 / 06"), thin uppercase tracked labels, soft amber glow on CTAs.
- All tokens in `src/styles.css` using oklch. No hardcoded colors in components.

## Site Structure (TanStack Start routes)

```
/                  Home — hero carousel, mode toggle, featured, why choose us
/properties        Listings with filters (Residential/Commercial/Rental/Land/Investment)
/properties/$id    Property detail — gallery, specs, 360° view, ROI calc, map
/investment        Investment overview + high-ROI calculator
/commercial        Commercial listings
/rental            Rental listings
/residential       Residential listings
/land              Land with interactive map
/international     International properties (locked teaser — "Coming soon outside Dubai")
/about             Why choose us, trust pillars
/contact           Contact form + office map
```

## Key Features

1. **Domestic / International toggle** in header (International shows Dubai-only notice + coming soon teaser).
2. **Category sections**: Land (with map), Investment, Commercial, Rental, Residential — each as a dedicated route + home preview cards.
3. **High-ROI Calculator** (`/investment` + property detail): inputs for purchase price, down payment, rental yield %, appreciation %, holding years → outputs projected ROI, cash-on-cash, total return. Pure client-side math.
4. **Why Choose Us** section: Safe Investment, Authorized Seller & Buyer, Document Verification, Genuine Properties — icon cards on home + about.
5. **360° Location View**: on property detail, if `panoramaUrl` exists, show "View 360°" button opening a Pannellum-based panorama viewer in a modal. Graceful fallback when unavailable.
6. **Interactive Map**: Leaflet + OpenStreetMap for land/property locations (no API key needed).
7. **Property data**: seeded TypeScript dataset of ~12 Dubai properties (Downtown, Palm, Marina, Business Bay, etc.) with images, coords, optional panorama URLs.

## Technical Details

- Stack: TanStack Start (existing template), Tailwind v4, shadcn, framer-motion for hero/scroll motion.
- New deps: `leaflet` + `react-leaflet` (map), `pannellum-react` or lightweight `@photo-sphere-viewer/core` (360°), `framer-motion`.
- Hero images: generate 4–6 cinematic Dubai property shots via image generation, store in `src/assets/`.
- All data static in `src/data/properties.ts` — no backend needed for v1.
- SEO: per-route `head()` with unique titles/descriptions; sitemap + robots.
- Forms: contact form uses local state + toast confirmation (no backend yet).

- User accounts / saved properties (can add later with Lovable Cloud)
- Real MLS data / agent dashboards
- Actual international listings beyond the teaser
- Payment / booking flow

After approval I'll generate hero imagery, build the design tokens, then ship the routes.