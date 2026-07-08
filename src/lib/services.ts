import { Bug, Rat, Hexagon, SprayCan, Worm, Building2, Home, Shell, Snail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import generalPestImage from "@/assets/services/general-pest.jpg";
import termiteServiceImage from "@/assets/services/termiteService.jpg";
import termiteServiceImage2 from "@/assets/services/termiteService2.jpg";
import rodentControlImage from "@/assets/services/rodentConrol1.jpg";
import rodentControlImage2 from "@/assets/services/rodentControl2.jpg";
import snakeControlImage from "@/assets/services/snakeControl1.jpg";
import snakeControlImage2 from "@/assets/services/snakeControl2.jpg";
import cockroachControlImage from "@/assets/services/cockroachcontrol.jpg";
import cockroachControlImage2 from "@/assets/services/cockroachControl2.jpg";
import antControlImage from "@/assets/services/antControl1.jpg";
import antControlImage2 from "@/assets/services/antControl2.jpeg";
import mitesControlImage from "@/assets/services/mitesControl.jpg";
import residentialPestControlImage from "@/assets/services/residentPestControl.jpg";
import industrialPestControlImage from "@/assets/services/industrialPestControl.jpg";

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
  imagePosition?: string;
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
    metaDescription: "Comprehensive general pest control for cockroaches, ants, spiders & household pests. Eco-friendly, family-safe treatment with inspection & follow-up, Odisha.",
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
    metaDescription: "Professional pre & post-construction anti-termite treatment with deep soil injection — a protective barrier lasting up to 5 years. Written warranty, Odisha.",
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
    blurb: "Humane rodent removal with industrial-grade traps, sprinkler systems & an invisible repellent boundary.",
    image: rodentControlImage,
    image2: rodentControlImage2,
    metaDescription: "Humane rodent control with industrial-grade traps, sprinkler systems and repellent biscuits. Visible results within 24 hours, eco-friendly, Odisha.",
    details: [
      "Rodents like rats and mice can cause serious damage to your property and pose significant health risks to your family or employees. At Trushna Disinfecting Services, we provide comprehensive rodent control solutions that go beyond traditional pest control methods. Our innovative approach combines industrial-grade traps, advanced sprinkler systems, and specially formulated repellents to effectively deter rodents while maintaining a humane, animal-friendly approach.",
      "Unlike conventional rat control and mouse control methods that rely on lethal measures, Trushna Disinfecting Services believes in creating an environment where rodents naturally avoid your property. Our rodent removal approach is both ethical and highly effective, ensuring that rodents are deterred rather than harmed.",
      "Whether you need rat control for residential homes, mouse control for commercial spaces, or rodent extermination for industrial facilities, our team conducts thorough inspections to identify entry points, nesting areas, and activity patterns, then implements a multi-layered approach for complete rodent removal and prevention.",
    ],
    process: [
      { title: "Industrial-Grade Traps & Monitoring", description: "We install strategically placed industrial traps throughout your property to monitor rodent activity, safely capturing rodents without harm and tracking infestation levels." },
      { title: "Advanced Sprinkler Systems", description: "Specialized sprinkler systems create barriers that discourage rodents from entering treated areas, working alongside our other methods to boost effectiveness." },
      { title: "Specially Formulated Repellent Biscuits", description: "Repellent biscuits — harmless to rodents but highly effective at repelling them — are strategically placed around your property to form a protective barrier." },
      { title: "The Invisible Boundary", description: "Together, these methods create an invisible deterrent zone around your property. Once rodents encounter it, they naturally avoid the area, eliminating the root cause of infestation." },
    ],
    benefits: [
      "Humane rodent removal — no killing or harm to animals",
      "Visible results within 24 hours",
      "Long-lasting, prevention-focused protection",
      "Eco-friendly, non-toxic solution safe for family and pets",
    ],
    ideal: ["Restaurants and kitchens", "Warehouses", "Independent houses"],
  },
  {
    slug: "snake",
    title: "Snake Control",
    icon: Worm,
    blurb: "Safe snake catching, relocation, exclusion & repellent perimeter treatment by trained handlers.",
    image: snakeControlImage,
    image2: snakeControlImage2,
    metaDescription: "Professional snake control and safe removal by trained handlers — humane catching, relocation, entry sealing & repellent treatment. 24/7, Odisha.",
    details: [
      "Encountering a snake on your property can be frightening and potentially dangerous. At Trushna Disinfecting Services, we provide professional snake control and safe snake removal services to protect your family, pets, and property. Our specially trained team of snake catchers has the expertise and experience to safely catch, handle, and relocate snakes using humane methods that ensure the safety of both humans and animals.",
      "Snakes can pose serious safety risks, particularly if you have children or pets at home. While many snakes are non-venomous and generally avoid human contact, an unexpected encounter can lead to panic and potential injury. Professional snake control is essential for ensuring the safety of your property and peace of mind for your family.",
      "Our snake removal services go beyond simple snake catching. We provide comprehensive solutions that address the root causes of snake presence and prevent future invasions through advanced exclusion techniques and specialized repellent treatments.",
    ],
    process: [
      { title: "Professional Snake Catching", description: "Trained handlers use specialized equipment — snake hooks, bags and containment systems — to safely capture snakes without causing harm or stress to the animal, then relocate them to an appropriate habitat." },
      { title: "Strategic Exclusion & Sealing", description: "We inspect your property to locate cracks, gaps and openings snakes use to gain entry, and seal them with durable materials to prevent future intrusions." },
      { title: "Specialized Repellent Treatment", description: "Eco-friendly, pet-safe snake repellents are applied around your property perimeter, creating a deterrent boundary that discourages snakes from entering." },
      { title: "Habitat Modification", description: "We recommend clearing debris, trimming vegetation and removing rodent food sources to make your property less attractive to snakes." },
    ],
    benefits: [
      "Safe, zero-injury capture by trained, experienced handlers",
      "Humane relocation instead of harming the animal",
      "Entry-point sealing and repellent treatment prevent recurrence",
      "24/7 availability for snake emergencies",
    ],
    ideal: ["Farmhouses and bungalows", "Industrial campuses", "Resorts and hotels"],
  },
  {
    slug: "cockroach",
    title: "Cockroach Control",
    icon: Bug,
    blurb: "Patented gel, residual spray & targeted baits that break the reproductive cycle at the source.",
    image: cockroachControlImage,
    image2: cockroachControlImage2,
    metaDescription: "Advanced cockroach control using patented gels, residual sprays & targeted baits that break the reproductive cycle. Pet-safe, eco-friendly, across Odisha.",
    details: [
      "Cockroaches are among the most stubborn and persistent household pests, capable of spreading diseases, triggering allergies, and contaminating food. At Trushna Disinfecting Services, we provide comprehensive cockroach control and elimination services using specialized patented gels, advanced sprays, and targeted baits. Our proven treatment approach not only eliminates existing colonies but also breaks the reproductive cycle to prevent future infestations.",
      "Cockroaches reproduce at an alarming rate and can quickly infest an entire property — a single female can produce hundreds of offspring, making DIY removal ineffective. These pests hide in cracks, crevices, and dark spaces, making them difficult to locate and treat with standard methods.",
      "Whether you need cockroach removal for residential homes, extermination for commercial kitchens, or treatment for multi-unit buildings, our specialists address the complete problem — eliminating existing colonies while preventing new generations from emerging.",
    ],
    process: [
      { title: "Identification & Colony Mapping", description: "We conduct thorough inspections to identify all cockroach activity, nesting sites and pathways, using advanced detection to locate colonies hidden in wall cavities, pipe chases and cabinets." },
      { title: "Patented Gel Treatment", description: "Our specialized patented gel is highly attractive to cockroaches, strategically placed where they congregate and breed, working within hours while remaining safe for families and pets." },
      { title: "Advanced Spray Application", description: "Professional-grade sprays on walls, baseboards and hiding spots deliver immediate knockdown and a residual barrier that keeps working for weeks." },
      { title: "Targeted Bait & Reproductive Cycle Control", description: "Baits attract cockroaches from hiding, targeting reproductive females and inhibiting egg hatching to break the birth chain across all life stages — adults, nymphs and eggs." },
    ],
    benefits: [
      "Access to specialized patented treatments unavailable to consumers",
      "Targets the reproductive cycle, not just visible roaches",
      "Complete elimination across all life stages",
      "Pet-safe, eco-friendly and long-lasting results",
    ],
    ideal: ["Kitchens", "Pantries and food storage", "Hotels and restaurants"],
  },
  {
    slug: "ant",
    title: "Ant Control",
    icon: Shell,
    blurb: "Colony-breaking killing liquids & targeted sprays that stop ant reproduction at the source.",
    image: antControlImage,
    image2: antControlImage2,
    metaDescription: "Professional ant control & extermination using killing liquids, targeted sprays and colony-breaking techniques. Carpenter, fire, sugar & pharaoh ants, Odisha.",
    details: [
      "Ants can quickly become a major nuisance in your home or business, contaminating food, damaging property, and creating an unsightly mess. At Trushna Disinfecting Services, we provide comprehensive ant control and ant elimination services using advanced killing liquids, targeted sprays, and colony-breaking techniques. Our professional ant removal approach not only eliminates existing ant colonies but also prevents future reproduction and reinfestation.",
      "Ant infestations are deceptively complex — a single colony can contain thousands of workers, multiple queens, and broods at various developmental stages. When you see ants in your kitchen or crawling across your floors, you're only seeing a fraction of the problem, since the colony itself may extend deep into walls, underground, or under foundations. DIY ant control and ant removal methods often fail because they don't address the root cause: the ant colony itself.",
      "Whether you need ant removal for residential homes, ant control for commercial restaurants, or ant extermination for industrial facilities, our specialists handle all types, including carpenter ant control, fire ant removal, sugar ant elimination and pharaoh ant control.",
    ],
    process: [
      { title: "Inspection & Colony Detection", description: "We identify the ant species, colony locations and ant trails. Accurate identification is crucial since different species require different treatment approaches." },
      { title: "Strategic Colony Breaking", description: "Specialized killing liquids and targeted sprays penetrate deep into ant colonies, eliminating worker ants, soldiers and reproductive queens to collapse the colony structure." },
      { title: "Targeted Spray Application", description: "Professional-grade sprays are applied to ant trails, entry points, cracks and infested zones, creating a protective barrier that eliminates ants on contact with lasting residual protection." },
      { title: "Reproduction Prevention", description: "Our treatments target reproductive queens and inhibit brood development, breaking the biological cycle that lets ant colonies expand and multiply, for long-term prevention." },
    ],
    benefits: [
      "Access to commercial-strength killing liquids unavailable to consumers",
      "Complete colony elimination, not just visible ants",
      "Prevents reproduction and future infestations",
      "Pet-safe and eco-conscious treatment options",
    ],
    ideal: ["Homes", "Offices", "Gardens and patios"],
  },
  {
    slug: "mites",
    title: "Mites Control",
    icon: Snail,
    blurb: "Hot-fogging & anti-allergen residual treatment for dust mites, bed mites & spider mites.",
    image: mitesControlImage,
    metaDescription: "Specialized mites control using hot-fogging & anti-allergen residual treatment for dust mites, bed mites and spider mites in mattresses and carpets, Odisha.",
    details: [
      "Mites are microscopic pests that can cause serious allergies, skin irritation, and respiratory issues for you and your family. At Trushna Disinfecting Services, we provide specialized mites control and elimination services using advanced hot-fogging technology combined with anti-allergen residual treatments. Our comprehensive mites removal approach targets dust mites, bed mites, and spider mites in mattresses, sofas, curtains, and carpets, dramatically reducing allergens and eliminating skin reactions.",
      "Dust mites thrive in warm, humid environments like mattresses, bedding, and upholstered furniture — a single mattress can harbor thousands of mites and millions of allergen particles. Bed mites and dust mites feed on dead skin cells, leaving behind fecal matter that triggers allergies, asthma, eczema, and other health issues. Spider mites, while less common indoors, can infest fabrics and cause similar allergic reactions.",
      "Eliminating mites through our specialized treatment dramatically reduces allergic reactions and rhinitis symptoms, asthma attacks and respiratory issues, eczema and skin irritation, sleep disturbances, and overall allergen exposure in your home — making it ideal for allergy sufferers, hotels, homestays, and healthcare settings alike.",
    ],
    process: [
      { title: "Inspection & Assessment", description: "We identify mite-infested areas, assess allergen levels in mattresses, bedding and upholstered furniture, and evaluate fabric types to determine the right treatment method." },
      { title: "Hot-Fogging Treatment", description: "Heated disinfectant vapor penetrates deep into mattress fibers and fabric layers, reaching mites at all life stages — adults, nymphs and eggs — and eliminating fecal matter and allergen particles." },
      { title: "Anti-Allergen Residual Treatment", description: "A hypoallergenic residual treatment neutralizes and encapsulates remaining allergens, creating a protective barrier that reduces allergen levels by up to 90% and lasts weeks to months." },
      { title: "Comprehensive Fabric Coverage", description: "We treat all common mite habitats — mattresses and bedding, sofas and upholstered furniture, curtains and drapes, and carpets and rugs." },
    ],
    benefits: [
      "Hot-fogging penetration that reaches mites hidden deep in fabrics",
      "Complete elimination of all mite life stages",
      "Up to 90% reduction in allergen levels with lasting protection",
      "Skin-safe, hypoallergenic treatment ideal for allergy sufferers",
    ],
    ideal: ["Homes with allergy sufferers", "Hotels and homestays", "Hospitals and clinics"],
  },
  {
    slug: "industrial",
    title: "Industrial Pest Control",
    icon: Building2,
    blurb: "Customized IPM programs for factories, warehouses & food-processing units, with FSSAI & ISO audit documentation.",
    image: industrialPestControlImage,
    metaDescription: "Industrial pest control with customized IPM programs for factories, warehouses and food-processing units. FSSAI & ISO compliant, audit-ready, Odisha.",
    details: [
      "Industrial facilities require specialized pest control solutions that go beyond standard residential or commercial treatments. At Trushna Disinfecting Services, we provide comprehensive industrial pest control and tailored protection programs specifically designed for factories, warehouses, and food-processing units. Our customized IPM (Integrated Pest Management) approach ensures complete pest prevention while maintaining strict compliance with FSSAI, ISO standards, and customer audit requirements.",
      "Pest infestations in industrial facilities can compromise product quality, damage inventory, contaminate food products, and create serious health and safety violations. Food-processing units face particularly stringent regulatory requirements, while warehouses and factories must maintain pest-free environments to protect materials and equipment. Industrial pest control requires specialized expertise, professional-grade solutions, and comprehensive documentation.",
      "With three years of successful experience managing industrial pest control tenders, we bring proven expertise in large-scale facility management, complex tender requirements, reliable service delivery across multiple locations, and budget-conscious solutions that seamlessly integrate with facility operations — serving food-processing plants, pharmaceutical manufacturing units, warehouses and distribution centers, chemical and textile factories, agricultural storage facilities, and cold storage and frozen food facilities.",
    ],
    process: [
      { title: "Comprehensive Site Assessment", description: "We identify pest species and infestation levels, analyze entry points and vulnerability zones, and evaluate sanitation and structural issues across your entire facility." },
      { title: "Multi-Layered Control Strategy", description: "We combine physical controls (barriers, traps, exclusion), biological controls where applicable, and compliant chemical treatments with sanitation management and continuous monitoring." },
      { title: "Food-Processing Protocols", description: "Specialized hygienic treatment methods for food-processing units ensure complete elimination of food-contaminating pests while meeting FSSAI regulations and a zero-tolerance pest policy." },
      { title: "Compliance & Audit Documentation", description: "We provide FSSAI compliance records, ISO 22000/9001 certification support, monitoring logs, treatment records, and audit-ready reports for regulatory inspections and customer audits." },
    ],
    benefits: [
      "Customized IPM programs matching facility-specific needs",
      "Regulatory compliance with FSSAI, ISO and industry standards",
      "Audit-ready documentation and monitoring logs",
      "Three years of proven tender and large-scale facility experience",
    ],
    ideal: ["Factories and plants", "FMCG warehouses", "Food processing units"],
  },
  {
    slug: "residential",
    title: "Residential Pest Control",
    icon: Home,
    blurb: "Family-safe, pet-friendly pest management for homes, apartments & villas — single visits or AMC.",
    image: residentialPestControlImage,
    imagePosition: "top",
    metaDescription: "Family-safe residential pest control for homes, apartments and villas. Pet-friendly, non-toxic formulations; single-visit or AMC plans, Odisha.",
    details: [
      "Pest infestations can disrupt your home comfort and threaten your family's health. At Trushna Disinfecting Services, we provide comprehensive residential pest control and family-safe pest management solutions for homes, apartments, and villas. Our pet-friendly pest control services use safe, non-toxic formulations that protect your loved ones while effectively eliminating household pests.",
      "DIY pest control methods are often ineffective and can expose your family and pets to harmful chemicals. Professional residential pest control ensures complete pest elimination while maintaining a safe, healthy home environment. Our expertise covers all common household pests including cockroaches, ants, spiders, rodents, and more — treating kitchens, bedrooms, bathrooms, living areas and outdoor perimeters.",
      "We serve single-family homes, apartments and flats, villas and gated communities, multi-story residential buildings, and heritage homes requiring sensitive treatment, with flexible evening and weekend scheduling around your family's routine.",
    ],
    process: [
      { title: "Comprehensive Home Inspection", description: "We identify pest types and infestation levels, locate entry points and breeding areas, and develop a customized pest management strategy for your home." },
      { title: "Pet-Friendly, Family-Safe Treatment", description: "Non-toxic, biodegradable and child-safe formulations deliver professional-grade effectiveness without exposing your family or pets to household toxins." },
      { title: "Targeted Room-by-Room Treatment", description: "We treat kitchen and dining areas, bedrooms, bathrooms, living rooms and furniture, plus outdoor perimeter and garden zones for complete coverage." },
      { title: "Single Visit or Annual Maintenance Contract", description: "Choose a one-time service for acute infestations, or an AMC with four quarterly visits at preferential pricing for year-round, proactive protection." },
    ],
    benefits: [
      "Family-safe and pet-friendly, non-toxic formulations",
      "Complete elimination using professional-grade products",
      "Preferential AMC pricing with quarterly preventive visits",
      "Flexible evening and weekend scheduling",
    ],
    ideal: ["Apartments", "Independent houses", "Villas and farmhouses"],
  },
  {
    slug: "sanitization",
    title: "Sanitization & Disinfection",
    icon: SprayCan,
    blurb: "Hospital-grade ULV cold fogging that eliminates 99.9% of viruses, bacteria and fungi.",
    metaDescription: "Professional sanitization & disinfection using hospital-grade ULV cold fogging. Eliminates 99.9% of viruses, bacteria & fungi, with compliance certificate.",
    details: [
      "In today's world, maintaining a clean and hygienic environment is more important than ever. At Trushna Disinfecting Services, we provide advanced sanitization and disinfection services using hospital-grade ULV (Ultra Low Volume) cold fogging technology. Our professional disinfection treatment eliminates 99.9% of viruses, bacteria, and fungi from both surfaces and the air, ensuring comprehensive protection for your home, office, school, or clinic.",
      "ULV fogging is an advanced sanitization technology that uses specialized equipment to disperse disinfectant in ultra-fine mist particles. Unlike traditional spraying methods, ULV cold fogging creates a fog that penetrates every corner, crevice, and hard-to-reach area of your space, with microscopic particles suspending in the air and settling on surfaces for complete coverage. Our hospital-grade disinfectant formulations are the same products used in medical facilities, hospitals, and clinics.",
      "Our sanitization and disinfection service effectively eliminates viruses (including influenza, COVID-19, and other respiratory viruses), bacteria (including E. coli, Salmonella, MRSA, and other harmful bacteria) and fungi (including mold, mildew, and fungal spores) — protecting residential homes, commercial offices, educational facilities and healthcare settings alike.",
    ],
    process: [
      { title: "Pre-Treatment Assessment", description: "We inspect your space and identify high-touch areas requiring special attention before treatment begins." },
      { title: "Equipment Setup", description: "ULV fogging equipment is positioned strategically throughout the space for maximum, even coverage." },
      { title: "Cold Fogging Application", description: "Hospital-grade disinfectant is dispersed in ultra-fine particles that reach every corner, crevice and hard-to-reach surface." },
      { title: "Air & Surface Treatment", description: "The fog penetrates the air and settles on all surfaces, eliminating airborne and surface pathogens alike." },
      { title: "Post-Treatment Ventilation", description: "We ensure proper aeration and safety checks after treatment, and provide a compliance-ready treatment certificate." },
    ],
    benefits: [
      "99.9% elimination rate for viruses, bacteria and fungi",
      "Hospital-grade disinfectants trusted by healthcare professionals",
      "Comprehensive coverage using advanced ULV technology",
      "Compliance-ready treatment certificate for audits and health inspections",
    ],
    ideal: ["Schools and coaching centres", "Clinics and hospitals", "Offices and event venues"],
  },
];
