import { Bug, Rat, Hexagon, SprayCan, Worm, Building2, Home, Shell, Snail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import generalPestImage from "@/assets/services/general-pest.jpg";
import termiteServiceImage from "@/assets/services/termiteService.jpg";
import termiteServiceImage2 from "@/assets/services/termiteService2.jpg";

export type ServiceProcessStep = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  warranty?: boolean;
  details: string[];
  ideal: string[];
  image?: string;
  image2?: string;
  metaDescription?: string;
  process?: ServiceProcessStep[];
  benefits?: string[];
};

export const services: Service[] = [
  {
    slug: "general-pest",
    title: "General Pest Control",
    icon: Bug,
    blurb: "Comprehensive treatment for cockroaches, ants, spiders & common household pests.",
    image: generalPestImage,
    metaDescription: "Comprehensive general pest control for cockroaches, ants, spiders & common household pests. Eco-friendly, family-safe treatment with inspection, targeted treatment & follow-up support across Odisha.",
    details: [
      "At Trushna Disinfecting Services, we understand that dealing with a pest infestation can be stressful and disruptive to your daily life. Our comprehensive general pest control services are designed to eliminate common household pests and restore peace of mind to your home or business. Whether you're dealing with cockroaches, ants, spiders, or other unwanted insects, our experienced team has the expertise and tools to tackle any pest problem effectively.",
      "Our general pest control services are tailored to meet your specific needs. We begin with a thorough inspection of your property to identify pest entry points, breeding grounds, and the extent of the infestation. This detailed assessment allows us to develop a customized treatment plan that targets the root cause of the problem, not just the visible pests.",
      "We utilize safe, eco-friendly pest control methods that are effective against common household pests while protecting your family and pets. Our trained technicians employ a combination of treatments, including targeted sprays, bait applications, and preventive measures, to ensure long-lasting results.",
    ],
    process: [
      { title: "Inspection & Assessment", description: "We conduct comprehensive inspections to identify all pest activity and potential entry points." },
      { title: "Targeted Treatment", description: "We apply effective pest control treatments to eliminate existing infestations quickly and efficiently." },
      { title: "Preventive Measures", description: "We implement preventive strategies to reduce the likelihood of future pest problems." },
      { title: "Follow-Up Support", description: "Our team provides follow-up visits to monitor the effectiveness of our treatments and make adjustments as needed." },
    ],
    benefits: [
      "Faster, more effective results than DIY pest control",
      "Expert knowledge of pest behaviour and biology",
      "Proper, safe use of professional-grade pest control chemicals",
      "Long-term prevention strategies, not just a quick fix",
    ],
    ideal: ["Apartments and villas", "Offices and showrooms", "Restaurants and cafes"],
  },
  {
    slug: "anti-termite",
    title: "Anti Termite Treatment",
    icon: Hexagon,
    blurb: "Pre & post-construction anti-termite treatment with deep soil injection — 5-year warranty.",
    warranty: true,
    image: termiteServiceImage,
    image2: termiteServiceImage2,
    metaDescription: "Professional pre & post-construction anti-termite treatment with deep soil injection creating a protective barrier that lasts up to 5 years. CIB-approved termiticides, written warranty, across Odisha.",
    details: [
      "Termites are one of the most destructive pests that can silently damage your property, causing structural weakness and costly repairs. At Trushna Disinfecting Services, we offer professional pre and post-construction anti-termite treatment services that provide long-lasting protection for your home or business. Our advanced deep soil injection technique creates a protective barrier that safeguards your property for up to 5 years, giving you complete peace of mind.",
      "Termites work quietly and continuously, consuming wood and cellulose materials in your property. A single termite colony can cause significant structural damage over time, potentially affecting the foundation, walls, and wooden structures. By the time you notice visible signs of termite damage, extensive harm may already have occurred. This is why professional anti-termite treatment is crucial for protecting your investment.",
      "Whether you're protecting a new construction or treating an existing property, our expertise and technology deliver effective anti-termite solutions. Our pre-construction treatments prevent infestations from the start, while post-construction treatments eliminate existing problems and safeguard your property.",
    ],
    process: [
      { title: "Identification & Inspection", description: "Our expert technicians conduct a thorough inspection to identify termite colonies, entry points, and affected areas, including hidden spots like wall cavities, foundation cracks and underground spaces." },
      { title: "Strategic Drilling", description: "Once colony locations are identified, we carefully drill small, precise holes through walls, foundations and other vulnerable areas where termites are active or likely to enter." },
      { title: "Deep Soil Injection", description: "We inject a powerful, semi-solid liquid preventive directly into the soil and wall cavities, creating a continuous chemical barrier that eliminates existing colonies and blocks new ones." },
      { title: "Precise Sealing", description: "All drill holes are carefully sealed with high-quality sealants, keeping your property intact while the chemical barrier continues working beneath the surface." },
      { title: "Long-Lasting Protection", description: "Unlike surface sprays that need frequent reapplication, our deep soil injection creates a persistent barrier that lasts up to 5 years." },
    ],
    benefits: [
      "Longer-lasting effectiveness — up to 5 years, versus sprays needing annual reapplication",
      "Deeper penetration into areas surface sprays cannot effectively treat",
      "Preventive power against both existing and future termite invasions",
      "Comprehensive coverage around your property's perimeter and vulnerable areas",
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
