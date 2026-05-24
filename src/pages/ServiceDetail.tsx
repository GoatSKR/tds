import { Link, useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { services } from "@/lib/services";
import { CTA } from "@/components/sections/CTA";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;

  return (
    <PageLayout>
      <section className="container py-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-2xl gradient-accent grid place-items-center shadow-elegant">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-semibold">TDS Service</p>
                <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            {service.warranty && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 text-primary text-sm font-bold mb-6">
                <ShieldCheck className="h-4 w-4" /> {service.warranty}
              </div>
            )}

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.details}</p>

            <h2 className="font-display text-2xl font-extrabold text-primary mb-5">Our 4-step process</h2>
            <ol className="space-y-4 mb-10">
              {service.process.map((step, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="h-8 w-8 shrink-0 rounded-full gradient-accent text-white grid place-items-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-foreground/90 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 p-6 rounded-3xl gradient-card border border-border shadow-elegant">
              <h3 className="font-display text-xl font-extrabold text-primary mb-3">Book {service.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Free quote and on-site visit. Our team will reach you within 4 hours.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full mb-3">
                <Link to="/quote">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link to="/contact">Talk to an Expert</Link>
              </Button>

              <div className="mt-6 pt-6 border-t border-border space-y-2 text-sm">
                {["ISO 9001:2015 certified team", "Eco-friendly, pet-safe chemicals", "Same-day service available", "Serving across Odisha"].map((b) => (
                  <div key={b} className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-extrabold text-primary mb-6">Other services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group p-5 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all"
              >
                <s.icon className="h-6 w-6 text-accent mb-3" />
                <h4 className="font-bold text-primary group-hover:text-accent transition-colors">{s.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </PageLayout>
  );
};

export default ServiceDetail;