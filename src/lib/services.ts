import { Bug, Rat, Hexagon, SprayCan, Worm, Building2, Home, Shell, Snail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  warranty?: boolean;
  details: string[];
  ideal: string[];
};

export const services: Service[] = [
  {
    slug: "general-pest",
    title: "General Pest Control",
    icon: Bug,
    blurb: "Comprehensive treatment for cockroaches, ants, spiders & common household pests.",
    details: [
      "Our general pest control service covers the most common household pests in a single visit: cockroaches, ants, spiders, silverfish and lizards.",
      "We combine residual spray on cracks and crevices with targeted gel-bait, so you get fast knockdown and long-lasting protection.",
      "Treatments are odourless within 30 minutes and safe for kids and pets after a short ventilation period.",
    ],
    ideal: ["Apartments and villas", "Offices and showrooms", "Restaurants and cafes"],
  },
  {
    slug: "anti-termite",
    title: "Anti Termite Treatment",
    icon: Hexagon,
    blurb: "Pre & post-construction anti-termite treatment with deep soil injection — 5-year warranty.",
    warranty: true,
    details: [
      "We perform both pre-construction (PCT) and post-construction (PoCT) anti-termite treatment using deep soil injection at plinth and perimeter level.",
      "This is the only treatment we offer with a written 5-year warranty — if termites reappear within the warranty period, we re-treat the affected area at no additional cost.",
      "We use only CIB-approved termiticides that bond with soil to form a long-lasting chemical barrier.",
    ],
    ideal: ["New construction", "Existing buildings with wooden furniture", "Warehouses and godowns"],
  },
  {
    slug: "rodent",
    title: "Rodent Control",
    icon: Rat,
    blurb: "Tamper-proof bait stations and exclusion to seal entry points permanently.",
    details: [
      "Our rodent program combines tamper-proof bait stations placed in strategic locations with physical exclusion — sealing pipe entries, vents and gaps.",
      "We map activity on the first visit and adjust placements on follow-ups to break the cycle, not just trap individual rats.",
    ],
    ideal: ["Restaurants and kitchens", "Warehouses", "Independent houses"],
  },
  {
    slug: "snake",
    title: "Snake Control",
    icon: Worm,
    blurb: "Safe snake catching, relocation & repellent perimeter treatment by trained handlers.",
    details: [
      "Trained handlers respond to safely catch and relocate snakes to a forest area in coordination with the local forest department.",
      "We follow up with perimeter repellent treatment and recommendations to reduce attractants (rodents, water, debris).",
    ],
    ideal: ["Farmhouses and bungalows", "Industrial campuses", "Resorts and hotels"],
  },
  {
    slug: "cockroach",
    title: "Cockroach Control",
    icon: Bug,
    blurb: "Gel-bait & residual spray treatment that targets nests, not just visible roaches.",
    details: [
      "Cockroaches you see are less than 10% of the colony. We use German gel-bait that workers carry back to the nest, eliminating the colony at the source.",
      "Most kitchens are roach-free within 14 days and stay that way for 6+ months with a single application.",
    ],
    ideal: ["Kitchens", "Pantries and food storage", "Hotels and restaurants"],
  },
  {
    slug: "ant",
    title: "Ant Control",
    icon: Shell,
    blurb: "Targeted bait & barrier treatment that eliminates colonies at the source.",
    details: [
      "We identify the ant species first, then choose between sweet, protein or oil-based bait to match their current foraging preference.",
      "Followed by perimeter barrier spray to stop new colonies from invading.",
    ],
    ideal: ["Homes", "Offices", "Gardens and patios"],
  },
  {
    slug: "mites",
    title: "Mites Control",
    icon: Snail,
    blurb: "Specialized treatment for dust mites, bed mites & spider mites in mattresses & fabrics.",
    details: [
      "Targeted treatment for dust mites, bed mites and spider mites in mattresses, sofas, curtains and carpets.",
      "Hot-fogging combined with anti-allergen residual treatment dramatically reduces allergens and skin reactions.",
    ],
    ideal: ["Homes with allergy sufferers", "Hotels and homestays", "Hospitals and clinics"],
  },
  {
    slug: "industrial",
    title: "Industrial Pest Control",
    icon: Building2,
    blurb: "Tailored protection programs for factories, warehouses & food-processing units.",
    details: [
      "Customised IPM (Integrated Pest Management) programs for factories, warehouses and food-processing units.",
      "Includes monitoring logs, treatment records and audit-ready compliance documentation for FSSAI, ISO and customer audits.",
    ],
    ideal: ["Factories and plants", "FMCG warehouses", "Food processing units"],
  },
  {
    slug: "residential",
    title: "Residential Pest Control",
    icon: Home,
    blurb: "Family-safe, pet-friendly pest management for homes, apartments & villas.",
    details: [
      "End-to-end pest management for homes — single visits or annual maintenance contracts (AMC) with quarterly visits at preferential pricing.",
      "Family-safe, pet-friendly formulations and flexible scheduling around your day.",
    ],
    ideal: ["Apartments", "Independent houses", "Villas and farmhouses"],
  },
  {
    slug: "sanitization",
    title: "Sanitization & Disinfection",
    icon: SprayCan,
    blurb: "Hospital-grade ULV fogging for homes, offices, schools and clinics.",
    details: [
      "Hospital-grade ULV (Ultra Low Volume) cold fogging that eliminates 99.9% of viruses, bacteria and fungi on surfaces and in the air.",
      "Includes treatment certificate suitable for compliance and audit records.",
    ],
    ideal: ["Schools and coaching centres", "Clinics and hospitals", "Offices and event venues"],
  },
];
