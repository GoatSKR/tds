import { Link, useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { services } from "@/lib/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;

  return (
    <PageLayout>
      <section className="container max-w-4xl py-16">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>
        <div className="flex items-start gap-5 mb-8">
          <div className="h-16 w-16 rounded-2xl gradient-accent grid place-items-center shrink-0">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">{service.title}</h1>
            <p className="text-muted-foreground mt-2 text-lg">{service.blurb}</p>
          </div>
        </div>

        {service.warranty && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-accent text-white text-sm font-semibold shadow-soft mb-8">
            <ShieldCheck className="h-4 w-4" /> 5-Year Service Warranty included
          </div>
        )}

        <div className="space-y-5 text-foreground/90 leading-relaxed text-lg">
          {service.details.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-card border border-border">
          <h3 className="font-display font-bold text-primary mb-4">Ideal for</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.ideal.map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 p-8 rounded-3xl gradient-hero text-primary-foreground text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">Free Quote & On-site Visit</h2>
          <p className="opacity-90 mb-6">Get a custom estimate within 4 hours — anywhere in Odisha.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="glass" size="lg"><Link to="/quote">Get Free Quote</Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-primary-foreground bg-white/10 hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetail;