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
          <h2 className="font-display text-[40px] md:text-[52px] leading-[1.04] text-primary text-center lg:text-left">
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
      </div>
    </section>
  );
}