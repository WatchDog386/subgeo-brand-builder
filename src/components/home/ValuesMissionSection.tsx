import { PhoneCall, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import bgImg from "@/assets/back.png";

const cards = [
  {
    tag: "Marin County",
    title: "Marin County Plumbing, Heating & Air Conditioning",
    body: "We are fully licensed and trained Marin County plumbing contractors who can handle even the messiest and most disruptive plumbing problems.",
  },
  {
    tag: "Sonoma County",
    title: "Best HVAC Services At Sonoma Country",
    body: "If your HVAC system is beyond repair, it is best to replace it rather than fixing it. We provide cooling, heating, boiler, and furnace replacement in Sonoma County.",
  },
];

export function ValuesMissionSection() {
  return (
    <section className="relative py-16 md:py-20 text-white">
      <img src={bgImg} alt="Serving counties" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/90" />

      <div className="container-x relative z-10">
        <RevealOnScroll direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Serving Marin & Sonoma Counties
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Good plumbing, heating, and air conditioning systems are vital to every North California home. Subgeo Services is proud to be the expert plumbing company you can count on.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold">(415) 942-6565</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/70 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Santa Rafael
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold">(707) 452-3464</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/70 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Santa Rosa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <RevealOnScroll key={card.title} delay={0.08}>
              <div className="card-elevated text-primary p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{card.tag}</div>
                <h3 className="mt-3 text-xl font-bold">{card.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{card.body}</p>
                <div className="mt-5">
                  <Button className="btn-primary h-10 px-5 text-[11px]">Book Now</Button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}