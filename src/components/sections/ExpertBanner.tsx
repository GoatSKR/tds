import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import banner from "@/assets/tds-business-card.jpg";

export const ExpertBanner = () => (
  <section className="container py-20">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border bg-card"
    >
      <div className="grid lg:grid-cols-2 items-center">
        <div className="p-8 md:p-12 order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Pest Control Expert</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            One team. <span className="text-gradient">Every pest.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            From general pest control and anti-termite treatment to snake handling and industrial sanitization — TDS covers every corner of your home or business.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["General Pest", "Anti Termite", "Rodent", "Snake", "Cockroach", "Ant", "Mites", "Industrial", "Residential", "Sanitization"].map((t) => (
              <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10">{t}</span>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <Link to="/quote">Book an Inspection <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 bg-gradient-to-br from-secondary/10 to-primary/5">
          <img
            src={banner}
            alt="TDS pest control expert services overview"
            className="w-full h-full object-contain p-6 md:p-8"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  </section>
);