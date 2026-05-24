import { Bug, Rat, Hexagon, SprayCan, Worm, Building2, Home, Shell, Snail, Sparkles } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: typeof Bug;
  blurb: string;
  details: string;
  process: string[];
  warranty?: string;
};

export const services: Service[] = [
  {
    slug: "general-pest",
    title: "General Pest Control",
    icon: Bug,
    blurb: "Comprehensive treatment for cockroaches, ants, spiders & common household pests.",
    details:
      "Our general pest control programme tackles the full spectrum of nuisance and disease-carrying pests in one visit — cockroaches, ants, spiders, silverfish, lizards and flies. We use a combination of gel-baits, residual sprays and crack-and-crevice treatment with eco-friendly, government-approved chemicals that are completely safe for families and pets.",
    process: ["On-site inspection & infestation mapping", "Targeted gel-bait & residual spray", "Sealing of entry points & cracks", "Follow-up visit within 30 days"],
  },
  {
    slug: "anti-termite",
    title: "Anti Termite Treatment",
    icon: Hexagon,
    blurb: "Pre & post-construction anti-termite treatment with deep soil injection.",
    details:
      "Termites cause more property damage than fire and floods combined. Our pre-construction and post-construction anti-termite treatment uses pressurised soil injection of certified termiticide, creating an impenetrable chemical barrier around the foundation and along all entry points.",
    process: ["Drilling pattern survey", "Pressurised soil injection", "Wood treatment & sealing", "Annual inspection through warranty period"],
    warranty: "5-Year Service Warranty",
  },
  {
    slug: "rodent",
    title: "Rodent Control",
    icon: Rat,
    blurb: "Tamper-proof bait stations and exclusion to seal entry points permanently.",
    details:
      "Rats and mice carry diseases, contaminate food and chew through wiring — a serious fire and health hazard. We use tamper-proof bait stations, snap-traps and full premises exclusion to seal every possible entry point, ensuring rodents are not just killed but permanently kept out.",
    process: ["Burrow & runway survey", "Strategic bait-station placement", "Entry-point sealing & exclusion", "Monthly monitoring (for AMC clients)"],
  },
  {
    slug: "snake",
    title: "Snake Control",
    icon: Worm,
    blurb: "Safe snake catching, relocation & repellent perimeter treatment by trained handlers.",
    details:
      "Our trained and certified snake handlers respond to emergency calls across Odisha for safe catching and release of snakes — venomous and non-venomous — back into the wild. We also offer perimeter snake-repellent treatment for homes, factories and farmhouses.",
    process: ["Emergency response & safe catching", "Species identification", "Release back into the wild", "Perimeter repellent treatment"],
  },
  {
    slug: "cockroach",
    title: "Cockroach Control",
    icon: Bug,
    blurb: "Gel-bait & residual spray treatment that targets nests, not just visible roaches.",
    details:
      "Cockroaches breed in hidden voids and only 10% of an infestation is ever visible. Our German-cockroach gel-bait programme uses a non-repellent active ingredient that the roaches carry back to the nest, eliminating the entire colony — not just the ones you see.",
    process: ["Hot-spot inspection (kitchen, drains, voids)", "Precision gel-bait dosing", "Residual spray on harborages", "30-day follow-up"],
  },
  {
    slug: "ant",
    title: "Ant Control",
    icon: Shell,
    blurb: "Targeted bait & barrier treatment that eliminates colonies at the source.",
    details:
      "Ant trails are a sign of a much bigger colony hidden inside walls or under floors. Generic spray kills the trail but never the queen. Our ant-bait programme uses slow-acting toxicants that worker ants carry back to feed the queen and brood — collapsing the colony permanently.",
    process: ["Trail tracking & nest location", "Bait-gel application", "Perimeter barrier treatment", "Re-inspection after 15 days"],
  },
  {
    slug: "mites",
    title: "Mites Control",
    icon: Snail,
    blurb: "Specialized treatment for dust mites, bed mites & spider mites in mattresses & fabrics.",
    details:
      "Dust and bed mites are a leading cause of asthma, eczema and allergic rhinitis. Our specialised mite treatment uses fabric-safe acaricides applied to mattresses, sofas, curtains and carpets, combined with high-temperature steam sanitization for deep elimination.",
    process: ["Allergen mapping", "Acaricide spray on fabrics", "Steam sanitization", "Mite-proof recommendations"],
  },
  {
    slug: "industrial",
    title: "Industrial Pest Control",
    icon: Building2,
    blurb: "Tailored protection programs for factories, warehouses & food-processing units.",
    details:
      "Industrial premises — especially food processing, pharma and warehousing — need audit-ready pest management. We design IPM (Integrated Pest Management) programmes that meet FSSAI, AIB and HACCP standards, with complete documentation, trend graphs and root-cause analysis.",
    process: ["Site risk audit", "Custom IPM plan", "Scheduled servicing & monitoring", "Digital reports for audits"],
  },
  {
    slug: "residential",
    title: "Residential Pest Control",
    icon: Home,
    blurb: "Family-safe, pet-friendly pest management for homes, apartments & villas.",
    details:
      "Your home should be the safest place on earth. Our residential programme uses only odourless, non-staining, child- and pet-safe chemicals to protect every room — from kitchen and bathrooms to bedrooms and balconies — with zero downtime.",
    process: ["Room-by-room inspection", "Family-safe treatment", "Same-day occupancy", "Quarterly AMC option"],
  },
  {
    slug: "sanitization",
    title: "Sanitization & Disinfection",
    icon: SprayCan,
    blurb: "Hospital-grade ULV fogging for homes, offices, schools and clinics.",
    details:
      "Our ULV cold fogging uses hospital-grade quaternary ammonium and hydrogen-peroxide disinfectants that eliminate 99.9% of bacteria, viruses and fungi — including SARS-CoV-2 — from every surface in the space, including hard-to-reach corners.",
    process: ["Pre-fog dust removal", "ULV cold fogging", "Touch-point wipe-down", "Certificate of disinfection"],
  },
];
