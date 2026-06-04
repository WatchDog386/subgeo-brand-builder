import { Phone, MapPin, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import bgImg from "@/assets/back.png";

const cards = [
  {
    tag: "NAIROBI",
    title: "Subgeo Headquarters in Nairobi",
    body: "Located in the heart of the capital, our primary operations manage distribution, pharmacy services, and large-scale industrial projects with maximum efficiency.",
  },
  {
    tag: "MOMBASA",
    title: "Subgeo Coast Operations",
    body: "Our coastal branches deliver specialized beauty treatments, comprehensive healthcare support, and robust industrial services to our growing community.",
  },
];

export function ValuesMissionSection() {
  return (
    <section className="relative bg-white">
      {/* ─ Dark hero section ─ */}
      <div className="relative bg-[#1a2c4e] overflow-hidden">
        {/* Background image with a dark overlay to keep it sharp but dark */}
        <img
          src={bgImg}
          alt="Serving counties"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2c4e]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-40 md:pt-20 md:pb-48">
          <RevealOnScroll direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left heading */}
              <div>
                <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-white">
                  Serving Kenya Nationwide
                </h2>
              </div>

              {/* Right: description + phones */}
              <div>
                <p className="text-white/70 text-[13px] leading-relaxed mb-10 max-w-md">
                  Reliable services, from health to infrastructure, are vital to our communities. Subgeo Holding Limited is proud to be the expert partner you can count on across the region.
                </p>

                {/* Phone numbers side by side */}
                <div className="flex flex-wrap gap-8">
                  {/* Phone 1 */}
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="h-5 w-5 text-red-600 fill-red-600" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base md:text-lg tracking-wide">
                        (415) 942-6565
                      </div>
                      <div className="text-white/50 text-[10px] uppercase tracking-widest flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Nairobi HQ
                      </div>
                    </div>
                  </div>

                  {/* Phone 2 */}
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="h-5 w-5 text-red-600 fill-red-600" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base md:text-lg tracking-wide">
                        (707) 452-3464
                      </div>
                      <div className="text-white/50 text-[10px] uppercase tracking-widest flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Mombasa Branch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── White cards section (overlaps dark section) ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 -mt-24 md:-mt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={index * 0.1}>
              {/* h-full ensures both cards are exactly the same size */}
              <div className="bg-white rounded-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-10 h-full flex flex-col border border-gray-100">
                {/* Tag pill */}
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider w-fit">
                  <MapPin className="h-3.5 w-3.5 fill-red-600 text-red-600" />
                  {card.tag}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl md:text-[22px] font-bold text-[#1a2c4e] leading-snug">
                  {card.title}
                </h3>

                {/* Body */}
                <p className="mt-4 text-gray-500 leading-relaxed text-sm flex-grow">
                  {card.body}
                </p>

                {/* Book Now button */}
                <div className="mt-8">
                  <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 rounded-[2px] transition-colors">
                    Book Now
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}