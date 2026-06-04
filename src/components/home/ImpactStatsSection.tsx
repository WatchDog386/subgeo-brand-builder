import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
// Reverted to your original working image import to prevent build errors
import backImg from "@/assets/back.png"; 

export function ImpactStatsSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          
          {/* Left Side: Red Content Block */}
          <RevealOnScroll direction="right">
            <div className="bg-[#b81f25] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full relative z-10">
              <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-white mb-6">
                Empowering Communities Across Kenya
              </h2>
              <p className="text-white/90 text-[13px] md:text-sm leading-relaxed mb-8">
                At Subgeo Holding Limited, we want our customers to feel confident in the{" "}
                <span className="font-bold text-white">quality and reliability</span> of every service we offer. Whether you are seeking exceptional healthcare, relaxing beauty treatments, or dependable industrial works, we are committed to enriching your everyday experiences across the region!
              </p>
              <div className="mt-auto">
                <Button 
                  variant="outline" 
                  className="bg-white text-[#b81f25] hover:bg-gray-100 border-white font-semibold h-10 px-5 rounded-none text-[12px] tracking-wide"
                >
                  DISCOVER MORE &nbsp; &gt;
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Side: Image with Video Overlay */}
          <RevealOnScroll direction="left">
            <div className="relative h-[400px] md:h-[500px] lg:h-full min-h-[400px] bg-gray-200">
              <img
                src={backImg}
                alt="Service background"
                className="absolute inset-0 h-full w-full object-cover"
              />
              
              {/* Watch Video Button Overlay */}
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-center group cursor-pointer">
                <div className="bg-[#b81f25] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-xs md:text-sm mt-3 tracking-wider text-center drop-shadow-md">
                  WATCH<br />VIDEO
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Navigation Arrows (Bottom Right) */}
        <div className="flex justify-end gap-4 mt-8 pr-4 md:pr-8">
          <button 
            className="text-gray-300 hover:text-gray-500 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            className="text-[#b81f25] hover:text-red-700 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}