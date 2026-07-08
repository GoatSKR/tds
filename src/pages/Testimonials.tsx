import { PageLayout } from "@/components/layout/PageLayout";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import patternBg from "@/assets/pattern-bg3.jpg";

const Testimonials = () => (
  <PageLayout>
    <section
      className="relative py-20 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${patternBg})` }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <div className="container relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Testimonials</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary-foreground">Real stories. Real protection.</h1>
        <p className="text-primary-foreground/80 mt-5 max-w-2xl mx-auto text-lg">
          2,500+ homes and businesses trust TDS to keep their spaces safe.
        </p>
      </div>
    </section>
    <TestimonialsSection all />
    <CTA />
  </PageLayout>
);

export default Testimonials;
