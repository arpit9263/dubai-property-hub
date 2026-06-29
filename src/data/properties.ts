import heroVilla from "@/assets/hero-villa.jpg";
import heroMarina from "@/assets/hero-marina.jpg";
import heroPenthouse from "@/assets/hero-penthouse.jpg";
import heroPalm from "@/assets/hero-palm.jpg";
import propCommercial from "@/assets/prop-commercial.jpg";
import propLand from "@/assets/prop-land.jpg";
import propResidential from "@/assets/prop-residential.jpg";
import propRental from "@/assets/prop-rental.jpg";

export type PropertyCategory = "residential" | "commercial" | "rental" | "land" | "investment";

export type Property = {
  id: string;
  title: string;
  area: string;
  city: string;
  category: PropertyCategory;
  price: number;            // AED
  priceLabel?: string;      // optional override e.g. "AED 12,500 / mo"
  bedrooms?: number;
  bathrooms?: number;
  sqft: number;
  image: string;
  gallery?: string[];
  description: string;
  features: string[];
  coords: [number, number]; // [lat, lng]
  panoramaUrl?: string;     // equirectangular jpg for 360
  yieldPct?: number;        // estimated annual rental yield
  appreciationPct?: number; // estimated annual appreciation
  featured?: boolean;
};

// Sample equirectangular panorama (Pannellum public demo)
const SAMPLE_PANO = "https://pannellum.org/images/cerro-toco-0.jpg";

export const properties: Property[] = [
  {
    id: "luxury-villa-skyline",
    title: "Luxury Villa at the Skyline",
    area: "Emirates Hills",
    city: "Dubai",
    category: "residential",
    price: 28500000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 12400,
    image: heroVilla,
    gallery: [heroVilla, heroPenthouse, heroPalm],
    description:
      "Set against an uninterrupted Dubai skyline, this six-bedroom villa pairs cinematic glass facades with a private infinity pool, home cinema, and a chauffeur suite.",
    features: ["Infinity pool", "Smart home", "Private cinema", "Driver suite", "8-car garage"],
    coords: [25.0657, 55.1713],
    panoramaUrl: SAMPLE_PANO,
    yieldPct: 6.2,
    appreciationPct: 8,
    featured: true,
  },
  {
    id: "marina-sky-residence",
    title: "Marina Sky Residence",
    area: "Dubai Marina",
    city: "Dubai",
    category: "residential",
    price: 8900000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 3200,
    image: heroMarina,
    description: "A wraparound 47th-floor residence facing the Marina, with private elevator access and yacht concierge.",
    features: ["Private elevator", "Yacht concierge", "Floor-to-ceiling glass", "Spa bathroom"],
    coords: [25.0805, 55.1403],
    panoramaUrl: SAMPLE_PANO,
    yieldPct: 7.1,
    appreciationPct: 6,
    featured: true,
  },
  {
    id: "downtown-penthouse",
    title: "Downtown Penthouse",
    area: "Downtown Dubai",
    city: "Dubai",
    category: "residential",
    price: 15200000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4800,
    image: heroPenthouse,
    description: "Burj Khalifa views, double-height ceilings, and a rooftop terrace with private plunge pool.",
    features: ["Burj view", "Rooftop terrace", "Plunge pool", "Designer kitchen"],
    coords: [25.1972, 55.2744],
    yieldPct: 6.8,
    appreciationPct: 7,
    featured: true,
  },
  {
    id: "palm-beachfront-mansion",
    title: "Palm Beachfront Mansion",
    area: "Palm Jumeirah",
    city: "Dubai",
    category: "residential",
    price: 42000000,
    bedrooms: 7,
    bathrooms: 9,
    sqft: 15800,
    image: heroPalm,
    description: "Beachfront mansion on the Palm with private beach, jet-ski dock, and staff quarters.",
    features: ["Private beach", "Jet-ski dock", "Staff quarters", "Wellness suite"],
    coords: [25.1124, 55.139],
    panoramaUrl: SAMPLE_PANO,
    yieldPct: 5.5,
    appreciationPct: 9,
  },
  {
    id: "business-bay-tower-office",
    title: "Business Bay Grade-A Office",
    area: "Business Bay",
    city: "Dubai",
    category: "commercial",
    price: 18500000,
    sqft: 8200,
    image: propCommercial,
    description: "Full-floor Grade-A office overlooking the canal. Triple-zone HVAC, fiber-ready, and helipad access.",
    features: ["Full floor", "Canal view", "Helipad access", "LEED Gold"],
    coords: [25.187, 55.279],
    yieldPct: 8.4,
    appreciationPct: 5,
    featured: true,
  },
  {
    id: "difc-boutique-office",
    title: "DIFC Boutique Office",
    area: "DIFC",
    city: "Dubai",
    category: "commercial",
    price: 6200000,
    sqft: 2400,
    image: propCommercial,
    description: "Boutique floor inside Dubai International Financial Centre with private terrace.",
    features: ["DIFC license-ready", "Private terrace", "Concierge"],
    coords: [25.211, 55.281],
    yieldPct: 9.1,
    appreciationPct: 4,
  },
  {
    id: "marina-rental-2br",
    title: "Marina 2BR Furnished",
    area: "Dubai Marina",
    city: "Dubai",
    category: "rental",
    price: 185000,
    priceLabel: "AED 185,000 / yr",
    bedrooms: 2,
    bathrooms: 3,
    sqft: 1400,
    image: propRental,
    description: "Fully furnished marina view 2BR with chiller-free, ready to move in.",
    features: ["Furnished", "Chiller free", "Marina view", "Pool access"],
    coords: [25.083, 55.139],
    panoramaUrl: SAMPLE_PANO,
    yieldPct: 7.8,
    appreciationPct: 0,
    featured: true,
  },
  {
    id: "jvc-rental-studio",
    title: "JVC Modern Studio",
    area: "Jumeirah Village Circle",
    city: "Dubai",
    category: "rental",
    price: 62000,
    priceLabel: "AED 62,000 / yr",
    bedrooms: 0,
    bathrooms: 1,
    sqft: 520,
    image: propRental,
    description: "Smart-home studio in JVC, ideal for young professionals.",
    features: ["Smart home", "Gym", "Co-working lounge"],
    coords: [25.054, 55.215],
    yieldPct: 8.5,
    appreciationPct: 0,
  },
  {
    id: "al-marmoom-land",
    title: "Al Marmoom Development Plot",
    area: "Al Marmoom",
    city: "Dubai",
    category: "land",
    price: 9500000,
    sqft: 48000,
    image: propLand,
    description: "Freehold development plot zoned for low-rise residential. Roads, water, power to plot.",
    features: ["Freehold", "Zoned G+2", "Utilities to plot", "Wide frontage"],
    coords: [24.92, 55.42],
    yieldPct: 0,
    appreciationPct: 12,
    featured: true,
  },
  {
    id: "dubai-south-land",
    title: "Dubai South Logistics Land",
    area: "Dubai South",
    city: "Dubai",
    category: "land",
    price: 22000000,
    sqft: 120000,
    image: propLand,
    description: "Industrial-zoned plot adjacent to Al Maktoum International, ideal for logistics hubs.",
    features: ["Industrial zoning", "Airport adjacent", "Highway frontage"],
    coords: [24.896, 55.161],
    yieldPct: 0,
    appreciationPct: 14,
  },
  {
    id: "investment-portfolio-marina",
    title: "Marina Income Portfolio",
    area: "Dubai Marina",
    city: "Dubai",
    category: "investment",
    price: 32000000,
    sqft: 14000,
    image: heroMarina,
    description: "Six-unit pre-leased portfolio delivering double-digit gross yield with managed tenancies.",
    features: ["Pre-leased", "Managed", "Diversified mix", "Audited financials"],
    coords: [25.077, 55.135],
    yieldPct: 11.2,
    appreciationPct: 6,
    featured: true,
  },
  {
    id: "investment-bb-canal",
    title: "Business Bay Canal Tower",
    area: "Business Bay",
    city: "Dubai",
    category: "investment",
    price: 58000000,
    sqft: 32000,
    image: propCommercial,
    description: "Whole-tower investment opportunity with 92% occupancy and 10-year tenancy ladder.",
    features: ["Whole tower", "Long leases", "Strong tenant mix"],
    coords: [25.188, 55.265],
    yieldPct: 9.6,
    appreciationPct: 5,
  },
];

export function formatAed(value: number) {
  return new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 }).format(value);
}

export const propResidentialImg = propResidential; // re-export to silence unused warning