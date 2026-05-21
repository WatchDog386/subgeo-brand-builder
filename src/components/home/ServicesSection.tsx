import { Pill, HeartPulse, Sparkles, Heart, Wrench } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import serviceImg from "@/assets/service.png";

const serviceFeatures = [
  {
    title: "Pharmacy Services",
    description:
      "Professional pharmaceutical care with quality-assured medications and expert consultation.",
    icon: Pill,
    accent: "bg-[#f36a2c]",
  },
  {
    title: "Medical Clinic",
    description:
      "Comprehensive clinical care from qualified healthcare professionals with modern diagnostics.",
    icon: HeartPulse,
    accent: "bg-[#244f86]",
  },
  {
    title: "Diagnostics Lab",
    description: "Advanced laboratory services with same-day reporting and clinical accuracy.",
    icon: Sparkles,
    accent: "bg-[#111827]",
  },
  {
    title: "Wellness & Beauty",
    description: "Holistic wellness and professional beauty services in a premium environment.",
    icon: Heart,
    accent: "bg-[#f56daf]",
  },
  {
    title: "Industrial Works & Trades",
    description:
      "Professional maintenance, plumbing, fitting, and commercial works delivered reliably.",
    icon: Wrench,
    accent: "bg-[#67a7ff]",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#dfe1e3] overflow-hidden relative font-sans text-[#111111]">
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <RevealOnScroll direction="right" delay={0.1}>
            <div className="relative overflow-hidden w-full px-4 md:px-8 lg:px-16">
                <img
                  src={serviceImg}
                  alt="Service"
                  className="relative z-30 h-[340px] md:h-[480px] w-full object-cover shadow-2xl"
                  style={{ filter: "grayscale(100%) contrast(120%)" }}
                />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left">
            <div className="w-full flex justify-center">
                <div className="max-w-xl text-center px-6 lg:px-0">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#111827]">
                  Professional Services Designed Around Subgeo Communities
                </h2>

                <p className="mt-4 text-sm md:text-base text-[#444444] max-w-lg leading-relaxed mx-auto">
                  From pharmacy and clinic care to diagnostics, wellness, and industrial support,
                  Subgeo delivers trusted services with consistent quality across every branch.
                </p>
                <div className="mt-6 flex justify-center">
                  <button className="bg-[#f36a2c] text-white px-5 py-3 rounded-md font-semibold">Explore Services</button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <h3 className="font-display text-3xl md:text-5xl text-[#111827] tracking-tight">
                Service Features
              </h3>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                A focused set of services designed to keep patients, clients, and communities moving
                with confidence.
              </p>
            </div>
          </div>

          <div className="container-x">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {serviceFeatures.map((feature, index) => (
                <RevealOnScroll key={feature.title} delay={index * 0.05}>
                  <div
                    className={`group h-full rounded-[24px] border border-black/10 bg-white/70 p-6 shadow-[0_14px_34px_rgba(17,24,39,0.07)] backdrop-blur-sm transition-all duration-300 hover:border-[#f36a2c]/30 hover:shadow-[0_20px_48px_rgba(243,106,44,0.14)] ${
                      index >= 3 ? "lg:col-span-1 lg:mx-auto" : ""
                    }`}
                  >
                    <div className={`h-12 w-12 rounded-2xl ${feature.accent} text-white flex items-center justify-center mb-4`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg md:text-xl font-medium text-[#111827] leading-tight">
                      {feature.title}
                    </h4>
                    <p className="mt-3 text-sm md:text-[15px] text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
