import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import backImg from "@/assets/back.png";

export function StorySection() {
  const cards = [
    {
      title: "Pharmacy Care",
      discount: "10% Off",
    },
    {
      title: "Beauty Treatment",
      discount: "15% Off",
    },
    {
      title: "Plumbing Services",
      discount: "Ksh 2k Off",
    },
  ];

  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[350px] md:min-h-[400px] overflow-hidden bg-[#b91c2a]">
        {/* Background Image with Red Overlay */}
        <div className="absolute inset-0">
          <img
            src={backImg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#b91c2a]/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#a01825]/90 via-[#b91c2a]/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative container-x pt-10 md:pt-14 pb-24 md:pb-28">
          <RevealOnScroll direction="up">
            <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-white text-center">
              Providing Reliable Services For Over
              <br />
              <span>35 Years</span>
            </h2>
          </RevealOnScroll>

          {/* Description Box */}
          <RevealOnScroll direction="up" delay={150}>
            <div className="mt-6 md:mt-8 max-w-xl mx-auto md:bg-black/30 md:backdrop-blur-sm p-0 md:p-6 rounded-sm text-center">
              <p className="text-white/90 text-[13px] leading-relaxed">
                Subgeo Holding Limited is Kenya's trusted partner for integrated pharmacy, beauty, and industrial solutions. Over the years, our dedicated teams have worked tirelessly to deliver outstanding value and reliability to the diverse communities we serve.
              </p>
              <div className="mt-5 flex justify-center">
                <button className="bg-white text-[#b91c2a] px-8 py-3.5 text-sm font-bold tracking-widest hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  ABOUT US
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Coupon Cards Section */}
      <div className="relative -mt-16 md:-mt-20 pb-16 md:pb-24">
        <div className="container-x">
          <div className="relative z-10 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 max-w-sm md:max-w-none mx-auto">
            {cards.map((card, index) => (
              <div key={index} className="relative bg-white shadow-2xl">
                {/* Top scalloped edge */}
                <div
                  className="absolute top-0 left-0 right-0 h-3 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(circle at 10px 0, transparent 8px, white 8px) repeat-x",
                    backgroundSize: "20px 12px",
                  }}
                />

                <div className="px-6 pt-8 pb-6 md:px-8 md:pt-10 md:pb-8 text-center">
                  <h3 className="text-xl md:text-[1.7rem] font-bold md:font-extrabold text-[#1a2c4e] md:text-[#1e3a5f] leading-tight">
                    {card.title}
                  </h3>

                  {/* Arrow Ribbon */}
                  <div className="mt-4 md:mt-6 -mx-2 md:-mx-4 flex justify-center">
                    <div className="relative">
                      <div
                        className="bg-[#1a2c4e] md:bg-[#2b4a6b] text-white py-2.5 px-10 md:py-4 md:px-8 flex items-center justify-center font-display"
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)",
                        }}
                      >
                        <span className="text-xl md:text-3xl font-bold pr-2">
                          {card.discount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button className="w-[85%] md:w-full mt-6 bg-[#e0292e] md:bg-[#d4202e] hover:bg-[#b91c2a] text-white h-11 md:h-12 font-bold text-sm tracking-wider transition-colors inline-flex items-center justify-center gap-2">
                    BOOK NOW
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Disclaimer */}
                  <p className="mt-4 text-[11px] text-gray-500 text-center leading-relaxed italic">
                    *Valid for one-time-only installations and new client
                    discount. Not to be used with any other offer.
                  </p>
                </div>

                {/* Bottom scalloped edge */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-3 translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(circle at 10px 100%, transparent 8px, white 8px) repeat-x",
                    backgroundSize: "20px 12px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}