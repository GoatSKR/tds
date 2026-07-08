import blog1 from "@/assets/blogs/reliable-pest-control-services-near-you.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  body: string[];
  image?: string;
};

export const blogs: BlogPost[] = [
  {
    slug: "reliable-pest-control-services-near-you",
    title: "Reliable Pest Control Services Near You: Why Choose Trushna Disinfecting Services",
    category: "Pest Control",
    date: "Jul 07, 2026",
    read: "5 min",
    excerpt: "Looking for reliable pest control near you? Trushna Disinfecting Services delivers expert pest control services with eco-friendly, family-safe treatments.",
    image: blog1,
    body: [
      "When you're dealing with a pest infestation, finding reliable pest control near you shouldn't feel like a gamble. Trushna Disinfecting Services is Odisha's trusted name for professional pest control services, helping homeowners and businesses eliminate pests and maintain a safe, healthy environment.",
      "Expertise you can rely on — With years of experience in the industry, our skilled technicians know how to handle everything from common household pests like ants, cockroaches and rodents to more stubborn, large-scale infestations.",
      "Comprehensive pest control services — Every property is different, so we tailor our approach to your specific situation. Our pest control services cover inspection and assessment, targeted treatment and elimination, preventive measures, and scheduled follow-up visits to make sure the problem doesn't return.",
      "Eco-friendly, family-safe treatments — We prioritise CIB-approved, water-based formulations that minimise impact on your home, your family and the surrounding environment, without compromising on results.",
      "Convenient and accessible — When you search for \"pest control near me,\" you want a team that shows up on time and gets it right the first time. Serving homes and businesses across Odisha, we offer flexible scheduling and prompt service wherever you're located.",
      "Customer satisfaction first — From your first call to the final follow-up, our friendly, professional team is focused on delivering lasting results and answering every question along the way.",
      "Don't let pests take over your home or business. Contact Trushna Disinfecting Services today and experience the difference of working with a trusted, local pest control provider — reliable pest control near you is just a call away.",
    ],
  },
  /*
  {
    slug: "5-signs-termite-problem",
    title: "5 Signs You Have a Termite Problem (and What to Do)",
    category: "Termites",
    date: "Apr 12, 2026",
    read: "5 min",
    excerpt: "Hollow-sounding wood, mud tubes, discarded wings — here's how to spot termites before they cause real damage.",
    body: [
      "Termites cause billions in property damage every year, and the worst part is that you usually don't notice them until significant damage is already done. The good news: they leave behind specific signs.",
      "1. Mud tubes on walls or foundations — pencil-thin tunnels that subterranean termites build for moisture protection.",
      "2. Hollow-sounding wood when tapped — termites eat wood from the inside out.",
      "3. Discarded wings near windowsills and doors after a swarm.",
      "4. Frass — small piles of wood-coloured pellets near wooden structures.",
      "5. Tight-fitting doors and windows that suddenly stick due to moisture from termite activity.",
      "If you spot any of these, book an inspection immediately. Our anti-termite treatment comes with a 5-year warranty and uses deep soil injection that creates a long-lasting barrier around your property.",
    ],
  },
  {
    slug: "are-pest-chemicals-safe",
    title: "Are Pest Control Chemicals Safe for Kids and Pets?",
    category: "Safety",
    date: "Mar 28, 2026",
    read: "4 min",
    excerpt: "We break down the modern, water-based formulations TDS uses — and why they're approved for indoor family use.",
    body: [
      "Modern professional pest control has come a long way from the harsh sprays of the past. At TDS we use only Central Insecticide Board (CIB) approved, water-based formulations.",
      "Most treatments are odourless within 30 minutes, and surfaces can be wiped down and used normally after a short ventilation period.",
      "For gel-bait cockroach treatments, there's no spraying at all — tiny dots of bait are placed in cracks and crevices where children and pets cannot reach.",
      "Always tell your technician about pets (especially fish, birds, and reptiles) and we'll choose the right formulation for your home.",
    ],
  },
  {
    slug: "skipping-annual-disinfection",
    title: "The Real Cost of Skipping Annual Disinfection",
    category: "Disinfection",
    date: "Mar 09, 2026",
    read: "6 min",
    excerpt: "From sick days to insurance claims, we calculate what neglecting workplace sanitization actually costs your business.",
    body: [
      "Workplace illness is one of the biggest hidden costs in operations. A single flu outbreak can take out 20–30% of a team for a week.",
      "Our hospital-grade ULV fogging eliminates 99.9% of common pathogens on surfaces and in the air, including high-touch points your cleaning crew can miss.",
      "Annual AMC plans average less than the cost of one sick week, and we provide a treatment certificate suitable for compliance and audit records.",
    ],
  },
  {
    slug: "mosquito-proofing-monsoon",
    title: "Mosquito-Proofing Your Home Before Monsoon",
    category: "Seasonal",
    date: "Feb 21, 2026",
    read: "5 min",
    excerpt: "Dengue cases spike every July. Here's our 7-step pre-monsoon checklist to keep your family protected.",
    body: [
      "1. Empty all standing water in pots, coolers and drains weekly.",
      "2. Install mesh screens on windows facing greenery.",
      "3. Schedule a perimeter mosquito treatment in late June.",
      "4. Use larvicides in water storage tanks.",
      "5. Trim overgrown vegetation within 3 metres of the house.",
      "6. Clear roof gutters of debris.",
      "7. Book a residual barrier spray every 30 days during peak season.",
    ],
  },
  {
    slug: "bed-bugs-101",
    title: "Bed Bugs 101: Detection, Treatment & Prevention",
    category: "Bed Bugs",
    date: "Feb 02, 2026",
    read: "7 min",
    excerpt: "Bed bugs are back, and they're tougher than ever. Learn what works — and what's a waste of money.",
    body: [
      "Bed bugs hitch rides on luggage, second-hand furniture and even shopping bags. The first sign is usually small red bites in a line on exposed skin.",
      "DIY sprays rarely work — bed bugs hide deep in mattress seams, headboards and skirting boards.",
      "Our two-visit treatment combines heat, residual insecticide and crack-and-crevice application, with a follow-up after 14 days to break the lifecycle.",
    ],
  },
  {
    slug: "why-cockroaches-come-back",
    title: "Why Cockroaches Always Come Back (And How to Stop Them)",
    category: "Cockroaches",
    date: "Jan 18, 2026",
    read: "5 min",
    excerpt: "Spray-and-pray treatments only kill what you see. Here's how professional gel-baiting eliminates the colony.",
    body: [
      "Cockroaches you see are less than 10% of the colony. Spraying drives the rest deeper into walls.",
      "Our gel-bait treatment targets the colony at its source — workers carry the bait back to the nest, and the active ingredient spreads through grooming and faeces.",
      "Most kitchens are roach-free within 14 days and stay that way for 6+ months with a single application.",
    ],
  },
  */
];