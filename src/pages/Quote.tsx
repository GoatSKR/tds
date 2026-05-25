import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";
import { services } from "@/lib/services";
import { z } from "zod";
import { submitToBackends } from "@/lib/config";

const OTHER = "__other__";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  phone: z.string().trim().regex(/^[+\d\s\-()]{7,20}$/, "Invalid phone"),
  treatment: z.string().min(1, "Select a treatment"),
  area: z.coerce.number().min(50, "Min 50 sqft").max(1000000, "Too large"),
  address: z.string().trim().min(3, "Address required").max(200),
  city: z.string().trim().min(2, "City required").max(80),
  date: z.string().min(1, "Pick a date"),
  otherService: z.string().trim().max(200).optional(),
});

const Quote = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", phone: "", treatment: "", area: "", address: "", city: "", date: "", otherService: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    if (form.treatment === OTHER && !form.otherService.trim()) {
      setErrors({ otherService: "Please describe the service you need" });
      return;
    }
    setErrors({});
    setLoading(true);
    const treatmentLabel =
      form.treatment === OTHER ? "Other" : services.find((s) => s.slug === form.treatment)?.title || form.treatment;
    await submitToBackends(
      {
        name: form.name,
        phone: form.phone,
        services: treatmentLabel,
        otherService: form.otherService,
        address: form.address,
        city: form.city,
        date: form.date,
        area: form.area,
      },
      "quote",
    );
    setLoading(false);
    toast({ title: "Quote requested!", description: "We'll call you within 4 hours with a free, custom estimate." });
    setForm({ name: "", phone: "", treatment: "", area: "", address: "", city: "", date: "", otherService: "" });
  };

  return (
    <PageLayout>
      <section className="container py-16 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full gradient-accent text-white text-xs font-bold mb-4 shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5" /> Free Quote & On-Site Visit
          </div>
          <h1 className="font-display text-5xl font-extrabold text-primary mb-5">
            Get your <span className="text-gradient">free quote</span> in 2 minutes.
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us about your space — we'll respond with a custom, no-obligation estimate within 4 hours. Available across Odisha.
          </p>

          <ul className="space-y-3">
            {[
              { Icon: ShieldCheck, t: "5-Year Warranty", d: "On our Anti-Termite Treatment" },
              { Icon: BadgeCheck, t: "ISO Certified Team", d: "Trained, background-verified technicians" },
              { Icon: Sparkles, t: "Eco-Friendly Chemicals", d: "Safe for kids & pets" },
            ].map(({Icon, t, d}) => (
              <li key={t} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl gradient-accent grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-primary">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="lg:col-span-3 p-8 rounded-3xl gradient-card border border-border shadow-elegant space-y-5">
          <h2 className="font-display text-2xl font-extrabold text-primary">Tell us about your space</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" maxLength={100} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" maxLength={20} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 99999 99999" />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <Label>Type of treatment</Label>
            <Select value={form.treatment} onValueChange={v => setForm({...form, treatment: v})}>
              <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
              <SelectContent>
                {services.map(s => <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>)}
                <SelectItem value={OTHER}>Other (specify below)</SelectItem>
              </SelectContent>
            </Select>
            {errors.treatment && <p className="text-xs text-destructive mt-1">{errors.treatment}</p>}
          </div>

          {form.treatment === OTHER && (
            <div>
              <Label htmlFor="otherService">Describe your service</Label>
              <Input
                id="otherService"
                maxLength={200}
                value={form.otherService}
                onChange={(e) => setForm({ ...form, otherService: e.target.value })}
                placeholder="e.g. Bee removal, wasp nest treatment…"
              />
              {errors.otherService && <p className="text-xs text-destructive mt-1">{errors.otherService}</p>}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="area">Approx area (sqft)</Label>
              <Input id="area" type="number" min={50} value={form.area} onChange={e => setForm({...form, area: e.target.value})} placeholder="e.g. 1200" />
              {errors.area && <p className="text-xs text-destructive mt-1">{errors.area}</p>}
            </div>
            <div>
              <Label htmlFor="date">Preferred date</Label>
              <Input id="date" type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
              {errors.date && <p className="text-xs text-destructive mt-1">{errors.date}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" maxLength={200} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Building, street, landmark" />
            {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" maxLength={80} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" />
            {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Get My Free Quote & Site Visit"}
          </Button>
        </form>
      </section>
    </PageLayout>
  );
};

export default Quote;
