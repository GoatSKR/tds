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
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />
      <div className="flex gap-16 items-center animate-marquee">
        {[...clients, ...clients].map((c, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-20 w-36 grid place-items-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
            title={c.name}
          >
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              className="max-h-16 max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
