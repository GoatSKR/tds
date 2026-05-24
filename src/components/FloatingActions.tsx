import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const FloatingActions = () => {
  const waMsg = encodeURIComponent(
    "Hi TDS, I'd like to know more about your pest control & disinfection services."
  );
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative h-14 w-14 rounded-full grid place-items-center text-white shadow-elegant transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: "#25D366" }} />
        <MessageCircle className="h-6 w-6 relative" />
      </a>
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label="Call now"
        className="group relative h-14 w-14 rounded-full gradient-accent grid place-items-center text-white shadow-elegant transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
        <Phone className="h-6 w-6 relative" />
      </a>
    </div>
  );
};