import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import whyImg from "@/assets/why.png";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality Service",
    description: "Reliable, professional service across every branch with care built into every interaction.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency response and support when your community needs it most.",
  },
  {
    icon: Zap,
    title: "Dynamic & Innovative",
    description: "Continuous improvement, modern tools, and a team that adapts to local needs.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-hero-match relative overflow-hidden py-12 md:py-16">
      <div className="container-x relative z-10">
        
        {/* Top Header Section */}
        <div className="mb-8 md:mb-12 max-w-4xl">
          <RevealOnScroll direction="up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-[#0f172a]">
              Why Choose Subgeo
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#475467] font-medium leading-relaxed max-w-2xl">
              Local expertise, consistent clinical standards, and community-first service — all under one trusted Kenyan brand.
            </p>
          </RevealOnScroll>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          
          {/* Left Column: Image Area - HEIGHT REDUCED */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left">
              {/* 
                Changed to h-auto so it hugs the image height tightly.
                Added w-full max-w-[400px] to keep it contained but shorter.
              */}
                  <div className="relative bg-[#f0fdf7] w-full max-w-[520px] mx-auto lg:mx-0 min-h-[420px] lg:min-h-[560px] py-6 lg:py-0 px-8 flex items-center justify-center overflow-hidden">
                <motion.img
                  src={whyImg}
                  alt="Why choose Subgeo"
                  className="w-full h-full object-contain object-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Features List & Details */}
          <div className="lg:col-span-7 lg:pt-10">
            <RevealOnScroll direction="right">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#0f172a] mb-6">
                Reliability you can count on
              </h3>
              
              <p className="text-base md:text-lg text-[#475467] leading-relaxed mb-10 max-w-xl">
                We provide the gift of modern, frictionless, and painless service. Integrate with Subgeo once and let us handle the technical complexity while you focus on your community.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                {[
                  "Community teams who know local needs and neighbourhoods.",
                  "One standard of safety, quality, and professionalism.",
                  "Integrated branches that make access easier for families.",
                  "Measured outcomes with follow-up care and accountability.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-[#f0fdf7] flex items-center justify-center border border-[#d1fae5]">
                         <div className="w-2 h-2 rounded-full bg-[#28b463]" />
                      </div>
                    </div>
                    <span className="text-[15px] font-semibold text-[#0f172a] leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/branches"
                  className="inline-flex h-[54px] items-center justify-center rounded-lg bg-[#28b463] px-8 text-[16px] font-bold text-white no-underline shadow-lg shadow-green-900/10 transition-all hover:bg-[#1f9a4f] hover:-translate-y-0.5"
                >
                  Explore Branches
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-[54px] items-center justify-center rounded-lg border border-[#e2e8f0] bg-white px-8 text-[16px] font-bold text-[#0f172a] no-underline transition-all hover:border-[#cbd5e1] hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#f1f5f9] pt-12">
          {reasons.map((reason, index) => (
            <RevealOnScroll key={reason.title} delay={index * 0.1}>
              <div className="group p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f8fafc] text-[#28b463] border border-[#f1f5f9] group-hover:bg-[#28b463] group-hover:text-white transition-colors duration-300">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0f172a]">{reason.title}</h4>
                </div>
                <p className="text-[15px] leading-relaxed text-[#475467]">
                  {reason.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}