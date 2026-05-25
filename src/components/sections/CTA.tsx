import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

export const CTA = () => (
  <section className="container py-20">
    <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-10 md:p-16 text-center">
      <div aria-hidden className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float-slow" />
      <div aria-hidden className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl animate-float-slow" />
      <div className="relative max-w-3xl mx-auto text-primary-foreground">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold mb-5">
          <ShieldCheck className="h-3.5 w-3.5" /> Free Quote & On-Site Visit
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
          Ready for a pest-free, sanitised space?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Get a free, no-obligation quote in under 2 minutes. Same-day appointments available across Odisha.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="glass" size="lg">
            <Link to="/quote">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 text-primary-foreground bg-white/10 hover:bg-white/20">
            <a href={`tel:${config.phone}`}><Phone className="h-4 w-4" /> Call {config.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
