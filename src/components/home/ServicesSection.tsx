import { Check, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import { Link } from "@tanstack/react-router";
import houseImg from "@/assets/hero.jpeg";
import serviceImg from "@/assets/service.jpeg";

const benefits = [
  "Prompt, Efficient Services Every Time",
  "Fully Stocked Trucks",
  "Extensive Industry Experience",
  "We Finish Most Jobs In One Visit.",
];

export function ServicesSection() {
  return (
    <section className="section-shell py-16 md:py-24 bg-white">
      <div className="container-x max-w-5xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ───────── LEFT: Image Composition ───────── */}
        <RevealOnScroll direction="left">
          <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 pb-16 lg:pr-12">
            {/* Light blue decorative square behind */}
            <div className="absolute bottom-16 -left-6 lg:-left-8 w-[200px] h-[200px] bg-[#d5e0e7] z-0" />

            {/* Main house image - sharp corners */}
            <img
              src={houseImg}
              alt="Eichler home exterior"
              className="relative z-10 w-full aspect-[5/4] object-cover"
            />

            {/* "HELPING SINCE 1986" badge */}
            <div className="absolute bottom-[10%] -left-4 lg:left-2 z-30 bg-[#e0292e] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest border-[4px] border-white max-w-fit whitespace-nowrap">
              Helping Since 2012
            </div>

            {/* Technician image */ }
            {/* UPDATED: Increased width (w-[60%]), reduced height (aspect-[4/3]), and added a thick white border to cleanly block the first image */}
            <div className="absolute -bottom-8 -right-4 lg:-right-16 z-20 w-[65%] sm:w-[60%] shadow-2xl">
              <img
                src={serviceImg}
                alt="Technician at work"
                className="w-full aspect-[4/3] object-cover border-[10px] border-white"
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* ───────── RIGHT: Content ───────── */}
        <RevealOnScroll direction="right">
          {/* Heading */}
          <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-primary">
            Elevating Lifestyles <br/> Across Kenya
          </h2>

          {/* Paragraph */}
          <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
            Subgeo Holding Limited is Kenya's premier choice for comprehensive
            pharmacy, beauty, and industrial services. Since our founding, our 
            dedicated company has helped countless clients achieve better health, 
            beauty, and functional infrastructure.
          </p>

          {/* Stats Card + Benefits Row */}
          <div className="mt-8 lg:mt-10">
            <div className="flex flex-col sm:flex-row gap-8 items-stretch mb-6 lg:mb-8">
              {/* 14+ Years Of Service card */}
              <div className="bg-[#f7f8f9] px-9 py-8 text-center flex flex-col justify-center min-w-[160px]">
                <div className="text-[4rem] font-bold text-[#e0292e] leading-none tracking-tighter">
                  14+
                </div>
                <div className="mt-3 text-[13px] text-[#4a5568] font-bold leading-tight">
                  Years Of
                  <br />
                  Service
                </div>
              </div>

              {/* Benefits checklist */}
              <div className="space-y-4 flex-1 py-2 flex flex-col justify-center">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[12px] lg:text-[14px] text-[#4a5568] font-bold"
                  >
                    <span className="h-[22px] w-[22px] rounded-full border-[1.5px] border-[#6b7280] flex items-center justify-center text-[#6b7280] flex-shrink-0 bg-transparent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Learn More Button - outside the flex row */}
            <div className="pt-2 lg:pt-0">
              <Link to="/about">
                <button className="bg-[#e0292e] hover:bg-[#c42428] text-white w-full lg:w-auto px-8 py-4 lg:py-3.5 text-[13px] font-bold uppercase tracking-widest flex lg:inline-flex items-center justify-center gap-2 transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}