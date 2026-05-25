import tataPower from "@/assets/clients/tata-power.png";
import swosti from "@/assets/clients/swosti.png";
import deepak from "@/assets/clients/deepak.jpg";
import sbi from "@/assets/clients/sbi.jpg";
import dcb from "@/assets/clients/dcb.png";
import hdfc from "@/assets/clients/hdfc.png";
import iocl from "@/assets/clients/iocl.png";
import tpsodl from "@/assets/clients/tpsodl.jpg";

const clients = [
  { name: "Tata Power", logo: tataPower },
  { name: "Swosti Resorts", logo: swosti },
  { name: "Deepak Fertilizers", logo: deepak },
  { name: "SBI", logo: sbi },
  { name: "DCB Bank", logo: dcb },
  { name: "HDFC Bank", logo: hdfc },
  { name: "IOCL", logo: iocl },
  { name: "TPSODL", logo: tpsodl },
];

export const ClientsMarquee = () => (
  <section className="py-14 border-y border-border bg-card overflow-hidden">
    <div className="container mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted by leading brands & institutions
      </p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent z-10" />
      <div className="flex gap-10 md:gap-14 items-stretch animate-marquee-fast">
        {[...clients, ...clients].map((c, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-32 md:w-40 flex flex-col items-center justify-end gap-2 group"
          >
            <div className="h-16 md:h-20 w-full grid place-items-center opacity-90 group-hover:opacity-100 transition-opacity">
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                className="max-h-14 md:max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-xs md:text-sm font-semibold text-muted-foreground text-center whitespace-nowrap group-hover:text-primary transition-colors">
              {c.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
