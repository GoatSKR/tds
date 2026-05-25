import { Phone, MessageCircle } from "lucide-react";
import { config } from "@/lib/config";

export const FloatingActions = () => {
  const waHref = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group h-14 w-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <MessageCircle className="relative h-6 w-6 fill-current" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={`tel:${config.phone}`}
        aria-label="Call us"
        className="relative group h-14 w-14 rounded-full grid place-items-center gradient-accent text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-accent opacity-50 animate-ping" style={{ animationDelay: "0.8s" }} />
        <Phone className="relative h-5 w-5" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call now
        </span>
      </a>
    </div>
  );
};