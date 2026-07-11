import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

export function ImpactStatsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1550px] mx-auto px-4 md:px-8">
        
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* Left: Green Box */}
          <RevealOnScroll direction="right" className="w-full md:w-[50%] lg:w-[55%] flex">
            <div className="bg-[#00b853] text-white p-8 md:p-10 lg:p-14 xl:p-16 h-full flex flex-col justify-center w-full z-10 lg:-mr-10">
              <h2 className="font-display font-medium text-[28px] md:text-[34px] xl:text-[40px] leading-[1.1] mb-5">
                Empowering Communities<br/>
                Across Kenya
              </h2>
              
              <p className="text-[13px] md:text-[14px] xl:text-[15px] leading-[1.6] mb-8 font-normal lg:pr-16 text-white/95">
                At Subgeo Holding Limited, we want our customers to feel
                confident in the <strong className="font-bold text-white">quality and reliability</strong> of every service we offer.
                From exceptional healthcare and relaxing beauty treatments to
                dependable industrial works, we are committed to enriching
                your everyday experiences!
              </p>
              
              <div className="mt-auto">
                <button className="bg-white text-[#00b853] font-bold text-[12px] tracking-wider py-3.5 px-6 inline-flex items-center hover:bg-gray-100 transition-colors">
                  DISCOVER MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Image */}
          <RevealOnScroll direction="left" className="w-full md:w-[50%] lg:w-[45%] flex">
            <div className="w-full h-[300px] md:h-full bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/800x600/06392b/00b853?text=Subgeo+Impact')" }} />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
