import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import tataPower from "@/assets/clients/tata-power.png";
import swosti from "@/assets/clients/swosti.png";
import deepak from "@/assets/clients/deepak-fertilizers.jpg";
import sbi from "@/assets/clients/sbi.jpg";
import dcb from "@/assets/clients/dcb-bank.png";
import hdfc from "@/assets/clients/hdfc.png";
import iocl from "@/assets/clients/iocl.png";
import tpsodl from "@/assets/clients/tpsodl.jpg";

const clients: { name: string; logo: string }[] = [
  { name: "Tata Power", logo: tataPower },
  { name: "Swosti Resorts", logo: swosti },
  { name: "Deepak Fertilizers", logo: deepak },
  { name: "SBI", logo: sbi },
  { name: "DCB Bank", logo: dcb },
  { name: "HDFC Bank", logo: hdfc },
  { name: "IOCL", logo: iocl },
  { name: "TPSODL", logo: tpsodl },
];

export const ClientsMarquee = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="py-14 border-y border-border overflow-hidden">
      <div className="container mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by leading brands & institutions
        </p>
      </div>
      <div className="relative group">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <Button
          variant="glass"
          size="icon"
          aria-label="Scroll left"
          onClick={() => scrollBy("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 shadow-soft"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="glass"
          size="icon"
          aria-label="Scroll right"
          onClick={() => scrollBy("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 shadow-soft"
        >
          <ChevronRight />
        </Button>

        <div
          ref={scrollerRef}
          className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {clients.map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 w-32 snap-start group/item">
              <div className="h-24 w-24 rounded-full bg-white border border-border shadow-soft grid place-items-center p-3 group-hover/item:scale-110 group-hover/item:shadow-elegant transition-all">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-muted-foreground group-hover/item:text-primary transition-colors text-center leading-tight">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
