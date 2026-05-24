import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock, ChevronDown, X } from "lucide-react";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";
import { siteConfig, submitToBackends } from "@/lib/config";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().regex(/^[+\d\s\-()]{7,20}$/, "Invalid phone number"),
  address: z.string().trim().min(5, "Address required").max(255),
  city: z.string().trim().min(2, "City required").max(80),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
  services: z.array(z.string()).min(1, "Please select at least one service").max(10),
  otherService: z.string().trim().max(200).optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    message: string;
    services: string[];
    otherService: string;
  }>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    message: "",
    services: [],
    otherService: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const toggleService = (slug: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(slug) ? f.services.filter((s) => s !== slug) : [...f.services, slug],
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const serviceLabels = form.services
        .map((slug) => (slug === "other" ? `Other: ${form.otherService}` : services.find((s) => s.slug === slug)?.title))
        .filter(Boolean)
        .join(", ");
      await submitToBackends({
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        services: serviceLabels,
        otherService: form.otherService,
        message: form.message,
        source: "Contact Form",
      });
      toast({ title: "Message sent!", description: "We'll get back to you within 4 hours." });
      setForm({ name: "", email: "", phone: "", address: "", city: "", message: "", services: [], otherService: "" });
    } catch {
      toast({ title: "Could not send", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const showOther = form.services.includes("other");

  return (
    <PageLayout>
      <section className="container py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Get in touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary mb-5">
            Let's keep your space <span className="text-gradient">spotless.</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Reach out for free quotes, on-site visits, AMC plans or any questions. We respond within 4 hours and serve {siteConfig.serviceArea.toLowerCase()}.
          </p>

          <div className="space-y-5">
            {[
              { Icon: Phone, label: "Phone", val: siteConfig.phone },
              { Icon: Mail, label: "Email", val: siteConfig.email },
              { Icon: MapPin, label: "Office address", val: `${siteConfig.address.line2}, ${siteConfig.address.city} – ${siteConfig.address.pincode}, ${siteConfig.address.state}` },
              { Icon: Clock, label: "Hours", val: "Mon–Sat, 8 AM – 8 PM" },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                <div className="h-11 w-11 rounded-xl gradient-accent grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="font-semibold text-primary">{val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-border aspect-[16/9] bg-muted">
            {siteConfig.address.mapsEmbed ? (
              <iframe
                src={siteConfig.address.mapsEmbed}
                title="TDS office location"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <a
                href={siteConfig.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full grid place-items-center text-sm text-muted-foreground hover:text-primary"
              >
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> View on Google Maps</span>
              </a>
            )}
          </div>
        </div>

        <form onSubmit={submit} className="p-8 rounded-3xl gradient-card border border-border shadow-elegant space-y-5 h-fit">
          <h2 className="font-display text-2xl font-extrabold text-primary mb-2">Send us a message</h2>

          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" maxLength={100} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" maxLength={255} value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" maxLength={20} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 99999 99999" />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" maxLength={255} value={form.address} onChange={e => setForm({...form, address: e.target.value})} placeholder="Street, locality" />
              {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" maxLength={80} value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder="City" />
              {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
            </div>
          </div>

          <div>
            <Label>Services interested in</Label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "mt-2 flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-left ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring",
                  )}
                >
                  <span className="flex flex-wrap gap-1.5">
                    {form.services.length === 0 ? (
                      <span className="text-muted-foreground">Select one or more services</span>
                    ) : (
                      form.services.map((slug) => {
                        const label = slug === "other" ? "Other" : services.find((x) => x.slug === slug)?.title;
                        return (
                          <span
                            key={slug}
                            className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium"
                          >
                            {label}
                            <X
                              className="h-3 w-3 cursor-pointer hover:text-destructive"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleService(slug);
                              }}
                            />
                          </span>
                        );
                      })
                    )}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50 shrink-0 ml-2" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-2 max-h-72 overflow-auto" align="start">
                {services.map((s) => {
                  const checked = form.services.includes(s.slug);
                  return (
                    <label
                      key={s.slug}
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      <Checkbox checked={checked} onCheckedChange={() => toggleService(s.slug)} />
                      <span>{s.title}</span>
                    </label>
                  );
                })}
                <label className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent cursor-pointer border-t mt-1 pt-2">
                  <Checkbox checked={form.services.includes("other")} onCheckedChange={() => toggleService("other")} />
                  <span>Other (specify below)</span>
                </label>
              </PopoverContent>
            </Popover>
            {errors.services && <p className="text-xs text-destructive mt-1">{errors.services}</p>}

            {showOther && (
              <Input
                className="mt-2"
                maxLength={200}
                value={form.otherService}
                onChange={(e) => setForm({ ...form, otherService: e.target.value })}
                placeholder="Please specify the service you need"
              />
            )}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} maxLength={1000} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="How can we help?" />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </section>
    </PageLayout>
  );
};

export default Contact;
