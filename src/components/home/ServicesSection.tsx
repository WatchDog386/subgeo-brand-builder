import { Check, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import houseImg from "@/assets/plumbing.png";
import techImg from "@/assets/why.png";

const benefits = [
  "Prompt, Efficient Services Every Time",
  "Fully Stocked Trucks",
  "Extensive Industry Experience",
  "We Finish Most Jobs In One Visit.",
];

export function ServicesSection() {
  return (
    <section className="section-shell py-16 md:py-24 bg-white">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ───────── LEFT: Image Composition ───────── */}
        <RevealOnScroll direction="left">
          <div className="relative w-full max-w-[480px] mx-auto lg:mx-0 pb-16 lg:pr-10">
            {/* Light blue decorative square behind */}
            <div className="absolute bottom-24 -left-6 lg:-left-8 w-[200px] h-[200px] bg-[#d5e0e7] z-0" />

            {/* Main house image - sharp corners */}
            <img
              src={houseImg}
              alt="Eichler home exterior"
              className="relative z-10 w-[82%] aspect-[4/5] object-cover rounded-none"
            />

            {/* "HELPING SINCE 1986" badge */}
            <div className="absolute bottom-[20%] left-6 z-30 bg-[#e0292e] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest border-[3px] border-white max-w-fit whitespace-nowrap">
              Helping Since 1986
            </div>

            {/* Technician image */ }
            <div className="absolute -bottom-8 right-0 z-20 w-[55%]">
              <img
                src={techImg}
                alt="Technician at work"
                className="w-full aspect-[3/4] object-cover object-center rounded-none border-[5px] border-white bg-white shadow-xl"
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
          <div className="mt-10 flex flex-col sm:flex-row gap-8 items-stretch">
            {/* 35 Years Of Experience card */}
            <div className="bg-[#f7f8f9] px-9 py-8 text-center flex flex-col justify-center min-w-[160px]">
              <div className="text-[4rem] font-bold text-[#e0292e] leading-none tracking-tighter">
                35
              </div>
              <div className="mt-3 text-[13px] text-[#4a5568] font-bold leading-tight">
                Years Of
                <br />
                Experience
              </div>
            </div>

            {/* Benefits checklist */}
            <div className="space-y-4 flex-1 py-2 flex flex-col justify-center">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[14px] text-[#4a5568] font-bold"
                >
                  <span className="h-[22px] w-[22px] rounded-full border-[1.5px] border-[#6b7280] flex items-center justify-center text-[#6b7280] flex-shrink-0 bg-transparent">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
              
              {/* Learn More Button - moved under benefits list */}
              <div className="pt-4">
                <button className="bg-[#e0292e] hover:bg-[#c42428] text-white px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest inline-flex items-center gap-2 transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}