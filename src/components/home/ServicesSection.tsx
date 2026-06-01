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
];

export function ServicesSection() {
  return (
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
      </div>
    </section>
  );
}