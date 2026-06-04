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
  },
];

export function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  const calculateFillHeight = useCallback((index: number) => {
    if (!timelineRef.current) return;

    const container = timelineRef.current;
    const containerRect = container.getBoundingClientRect();
    const stepElements = container.querySelectorAll("[data-step-index]");

    if (stepElements.length === 0) return;

    const activeElement = stepElements[index] as HTMLElement;
    const activeRect = activeElement.getBoundingClientRect();

    // Line extends 80px above first step and 40px below last step
    const lineStartOffset = -80;
    const lineEndOffset = containerRect.height + 40;
    const totalLineHeight = lineEndOffset - lineStartOffset;

    // Fill to the center of the active number box
    const numberBoxTop = activeRect.top - containerRect.top;
    const numberBoxHeight = 80;
    const fillTo = numberBoxTop + numberBoxHeight / 2 - lineStartOffset;
    const percentage = (fillTo / totalLineHeight) * 100;

    setFillHeight(Math.min(100, Math.max(0, percentage)));
  }, []);

  useEffect(() => {
    calculateFillHeight(activeIndex);
  }, [activeIndex, calculateFillHeight]);

  useEffect(() => {
    const handleResize = () => calculateFillHeight(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, calculateFillHeight]);

  return (
    <section className="section-shell py-20 md:py-28 bg-white">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Title */}
        <RevealOnScroll direction="left">
          <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-primary">
            The Subgeo
            <br />
            Way
          </h2>
        </RevealOnScroll>

        {/* Right: Timeline */}
        <RevealOnScroll direction="right">
          <div className="relative" ref={timelineRef}>
            {/* Vertical line - THICKER AND CENTERED */}
            <div className="absolute left-[38px] top-[-80px] bottom-[-40px] w-[4px]">
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
                    className="grid grid-cols-[80px_1fr] gap-10 items-start cursor-pointer group"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Number box - FLAT, NO SHADOW IN ACTIVE */}
                    <div className="relative z-10">
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
                        className={`mt-3 text-[14px] leading-[1.7] font-medium transition-colors duration-300 max-w-[90%] ${
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
      </div>
    </section>
  );
}