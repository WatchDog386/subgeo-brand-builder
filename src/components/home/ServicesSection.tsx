<<<<<<< HEAD
import { Pill, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const serviceFeatures = [
  {
    title: "Subgeo for Health Brands",
    description:
      "We help health-focused businesses deliver trusted care, faster service, and better client experiences.",
    icon: Pill,
    iconBg: "bg-[#eaf4ff]",
  },
  {
    title: "Subgeo for Entrepreneurs",
    description:
      "From early-stage setups to growing teams, we support operators with practical, scalable service solutions.",
    icon: HeartPulse,
    iconBg: "bg-[#eaf4ff]",
  },
  {
    title: "Subgeo for Organizations",
    description: "We support institutions with dependable service systems built for consistency, quality, and compliance.",
    icon: Sparkles,
    iconBg: "bg-[#eaf4ff]",
  },
=======
import { Check, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import houseImg from "@/assets/hero.jpeg";
import techImg from "@/assets/subgeo.jpeg";

const benefits = [
  "Prompt, Efficient Services Every Time",
  "Fully Stocked Trucks",
  "Extensive Industry Experience",
  "We Finish Most Jobs In One Visit.",
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
];

export function ServicesSection() {
  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden bg-[#f4f6f8] py-14 md:py-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-44 -top-8 h-[620px] w-[620px] opacity-60">
          <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[...Array(14)].map((_, i) => (
              <circle
                key={i}
                cx="350"
                cy="350"
                r={330 - i * 18}
                stroke="#d9dee4"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3 6"
                opacity={0.5 - i * 0.03}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container-x relative z-10">
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="mb-10 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[#0f172a] md:mb-14 md:text-3xl lg:text-4xl">
            See how Subgeo can help your specific business
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceFeatures.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 0.1}>
              <div className="group rounded-sm border border-[#e2e8f0] bg-white p-8 transition-all duration-300 hover:border-[#d4dbe3] hover:shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
                <div className={`mb-7 flex h-16 w-16 items-center justify-center rounded-full ${feature.iconBg}`}>
                  <feature.icon className="h-7 w-7 text-[#3b82f6]" />
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-[#0f172a]">
                  {feature.title}
                </h3>

                <p className="mb-7 text-base font-medium leading-relaxed text-[#475467]">
                  {feature.description}
                </p>

                <button type="button" className="group/btn inline-flex items-center gap-2.5 text-[15px] font-bold text-[#28b463]">
                  <span>Learn More</span>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#28b463] transition-colors duration-200 group-hover/btn:bg-[#28b463]">
                    <ArrowRight className="h-3 w-3 text-[#28b463] transition-colors group-hover/btn:text-white" />
                  </div>
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
=======
    <section className="section-shell py-16 md:py-24 bg-white">
      <div className="container-x max-w-5xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ───────── LEFT: Image Composition ───────── */}
        <RevealOnScroll direction="left">
          <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 pb-12 lg:pr-10">
            {/* Light blue decorative square behind */}
            <div className="absolute bottom-16 -left-6 lg:-left-8 w-[200px] h-[200px] bg-[#d5e0e7] z-0" />

            {/* Main house image - sharp corners */}
            <img
              src={houseImg}
              alt="Eichler home exterior"
              className="relative z-10 w-full aspect-[5/4] object-cover"
            />

            {/* "HELPING SINCE 1986" badge */}
            <div className="absolute bottom-[20%] left-6 z-30 bg-[#e0292e] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest border-[3px] border-white max-w-fit whitespace-nowrap">
              Helping Since 1986
            </div>

            {/* Technician image */ }
            <div className="absolute -bottom-8 -right-8 lg:-right-12 z-20 w-[45%]">
              <img
                src={techImg}
                alt="Technician at work"
                className="w-full aspect-[3/4] object-contain bg-white shadow-xl"
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
              <button className="bg-[#e0292e] hover:bg-[#c42428] text-white w-full lg:w-auto px-8 py-4 lg:py-3.5 text-[13px] font-bold uppercase tracking-widest flex lg:inline-flex items-center justify-center gap-2 transition-colors">
                Learn More
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </RevealOnScroll>
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
      </div>
    </section>
  );
}