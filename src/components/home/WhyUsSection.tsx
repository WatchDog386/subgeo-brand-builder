<<<<<<< HEAD
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
=======
import { useState, useRef, useEffect, useCallback } from "react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const steps = [
  {
    number: "01",
    title: "Quality Products",
    description:
      "From licensed pharmaceuticals to premium beauty products and durable hardware, we never compromise on quality.",
  },
  {
    number: "02",
    title: "Certified Experts",
    description:
      "Our dedicated teams consist of pharmacists, therapists, and engineers who ensure the highest standards.",
  },
  {
    number: "03",
    title: "Complete Reliability",
    description:
      "Across all our branches, our priority is providing dependable service you can always rely on.",
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
  },
];

export function WhyUsSection() {
<<<<<<< HEAD
  return (
    <section className="relative overflow-hidden py-10 md:py-12 bg-[#ececec] text-[#1f2937]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#efefef_0%,#e5e5e5_100%)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(31,41,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="container-x relative z-10">
        {/* Top Header Section */}
        <div className="mb-6 md:mb-8 max-w-4xl">
          <RevealOnScroll direction="up">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#101828]">
              Why Choose Subgeo
            </h2>
            <p className="mt-4 font-sans text-base md:text-lg text-[#525f6b] font-medium leading-[1.75] max-w-2xl">
              Local expertise, consistent clinical standards, and community-first service — all under one trusted Kenyan brand.
            </p>
          </RevealOnScroll>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch mb-10 md:mb-12">
          {/* Left Column: Image Area */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left">
              <div className="relative bg-[#f4f4f4] border border-[#d6d6d6] w-full max-w-[520px] mx-auto lg:mx-0 min-h-[360px] lg:min-h-[460px] py-5 lg:py-0 px-8 flex items-center justify-center overflow-hidden shadow-[0_18px_40px_rgba(16,24,40,0.06)]">
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
          <div className="lg:col-span-7 lg:pt-3">
            <RevealOnScroll direction="right">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.02em] text-[#101828] mb-4">
                Reliability you can count on
              </h3>

              <p className="font-sans text-base md:text-lg text-[#525f6b] leading-[1.8] mb-7 max-w-xl">
                We provide the gift of modern, frictionless, and painless service. Integrate with Subgeo once and let us handle the technical complexity while you focus on your community.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Community teams who know local needs and neighbourhoods.",
                  "One standard of safety, quality, and professionalism.",
                  "Integrated branches that make access easier for families.",
                  "Measured outcomes with follow-up care and accountability.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 border border-[#d9d9d9] bg-[#f7f7f7] px-3 py-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-[#e9edf2] flex items-center justify-center border border-[#d0d7e1]">
                        <div className="w-2 h-2 bg-[#22c13f]" />
                      </div>
                    </div>
                    <span className="font-sans text-[14px] md:text-[15px] font-semibold text-[#101828] leading-[1.5]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/branches"
                  className="inline-flex h-[54px] items-center justify-center bg-[#22c13f] px-8 font-sans text-[15px] font-bold uppercase tracking-wide text-white no-underline shadow-sm transition-all hover:bg-[#1fb13a]"
                >
                  Explore Branches
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-[54px] items-center justify-center border border-[#cfd5de] bg-white px-8 font-sans text-[15px] font-bold uppercase tracking-wide text-[#1f2937] no-underline transition-all hover:bg-[#f5f7fa]"
                >
                  Contact Us
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 pt-2">
          {reasons.map((reason, index) => (
            <RevealOnScroll key={reason.title} delay={index * 0.1}>
              <div className="group h-full border border-[#d5dae2] bg-[#f8f9fb] p-5 shadow-[0_10px_28px_rgba(16,24,40,0.04)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(16,24,40,0.08)]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#eef2f7] text-[#1f2937] border border-[#d0d7e1] transition-colors duration-300 group-hover:bg-[#22c13f] group-hover:text-white">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-sans text-lg font-bold text-[#101828]">{reason.title}</h4>
                </div>
                <p className="font-sans text-[14px] md:text-[15px] leading-[1.75] text-[#525f6b]">
                  {reason.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
=======
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const container = timelineRef.current;
      const rect = container.getBoundingClientRect();
      const stepElements = container.querySelectorAll("[data-step-index]");

      if (stepElements.length === 0) return;

      // We want the action to happen when the element is around the center of the screen
      const triggerPoint = window.innerHeight * 0.6; 
      
      // Calculate how far the trigger point has travelled down the container
      const scrolledPast = triggerPoint - rect.top;
      
      // The line starts 80px above and ends 40px below
      const lineStartOffset = -80;
      const lineEndOffset = rect.height + 40;
      const totalLineHeight = lineEndOffset - lineStartOffset;

      // Calculate fill percentage
      const percentage = ((scrolledPast - lineStartOffset) / totalLineHeight) * 100;
      setFillHeight(Math.min(100, Math.max(0, percentage)));

      // Calculate active index
      let newActiveIndex = 0;
      stepElements.forEach((el, index) => {
        const elRect = el.getBoundingClientRect();
        // If trigger point has passed the middle of this element's number box (roughly top + 40)
        if (triggerPoint >= elRect.top + 40) {
          newActiveIndex = index;
        }
      });

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    const resizeObserver = new ResizeObserver(handleScroll);
    if (timelineRef.current) {
      resizeObserver.observe(timelineRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="section-shell py-20 md:py-28 bg-white">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Title */}
        <RevealOnScroll direction="left">
          <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-primary text-center lg:text-left">
            The Subgeo
            <br className="hidden lg:block"/> Way
          </h2>
        </RevealOnScroll>

        {/* Right: Timeline */}
        <RevealOnScroll direction="right">
          <div className="relative" ref={timelineRef}>
            {/* Vertical line - THICKER AND CENTERED (Mobile) or LEFT (Desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[38px] top-[-80px] bottom-[-40px] w-[4px]">
              {/* Base background line (light gray) */}
              <div className="absolute inset-0 bg-[#e2e8f0]" />

              {/* Progressive dark navy fill */}
              <div
                className="absolute top-0 left-0 w-full bg-[#1a2c4e] transition-all duration-500 ease-out"
                style={{
                  height: `${fillHeight}%`,
                }}
              />
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={step.number}
                    data-step-index={index}
                    className="flex flex-col lg:grid lg:grid-cols-[80px_1fr] gap-6 lg:gap-10 items-center lg:items-start group text-center lg:text-left"
                  >
                    {/* Number box - FLAT, NO SHADOW IN ACTIVE */}
                    <div className="relative z-10 mx-auto lg:mx-0">
                      <div
                        className={`h-[80px] w-[80px] flex items-center justify-center font-display font-bold text-[34px] transition-all duration-300 ${
                          isActive
                            ? "bg-[#e0292e] text-white"
                            : "bg-white text-[#cbd5e1] group-hover:text-[#94a3b8]"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <div
                        className={`text-[26px] md:text-[32px] font-bold font-display leading-[1.1] transition-colors duration-300 ${
                          isActive ? "text-[#1a2c4e]" : "text-[#cbd5e1]"
                        }`}
                      >
                        {step.title}
                      </div>
                      <p
                        className={`mt-3 text-[14px] leading-[1.7] font-medium transition-colors duration-300 mx-auto lg:mx-0 lg:max-w-[90%] ${
                          isActive ? "text-[#64748b]" : "text-[#f1f5f9]"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
      </div>
    </section>
  );
}