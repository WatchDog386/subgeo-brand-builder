<<<<<<< HEAD
import { StatsDisplay } from "@/components/premium/PremiumLayout";

const stats = [
  { number: "3", label: "Specialised Branches" },
  { number: "10K+", label: "Community Clients" },
  { number: "20+", label: "Healthcare Professionals" },
  { number: "365", label: "Days Operating Yearly" },
];

export function ImpactStatsSection() {
  return (
    <section className="section-hero-match py-8 md:py-10 overflow-hidden relative text-gray-900">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4 text-gray-600">BY THE NUMBERS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900 whitespace-nowrap">
            Impact in Kenyan Communities
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Growing reach, consistent standards, and real lives improved every day.
          </p>
        </div>

        <div className="mt-4 md:mt-5">
          <StatsDisplay stats={stats} className="text-gray-900" />
=======
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import heroImg from "@/assets/hero.jpeg"; 

export function ImpactStatsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1550px] mx-auto px-4 md:px-8">
        
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* Left: Red Box */}
          <RevealOnScroll direction="right" className="w-full md:w-[50%] lg:w-[55%] flex">
            <div className="bg-[#e31837] text-white p-8 md:p-10 lg:p-14 xl:p-16 h-full flex flex-col justify-center w-full z-10 lg:-mr-10">
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
                <button className="bg-white text-[#e31837] font-bold text-[12px] tracking-wider py-3.5 px-6 inline-flex items-center hover:bg-gray-100 transition-colors">
                  DISCOVER MORE
                  <svg className="w-4 h-4 ml-3 text-[#e31837]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Image and Controls */}
          <RevealOnScroll direction="left" className="w-full md:w-[50%] lg:w-[45%] flex flex-col pt-0 md:pt-10">
            <div className="h-full w-full flex flex-col">
              
              {/* Image Container */}
              <div className="relative w-full h-[300px] md:h-full min-h-[350px] lg:min-h-[420px] border-[12px] border-white bg-gray-100 shadow-sm z-20">
                <img
                  src={heroImg}
                  alt="Service professional"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Watch Video Red Play Box (Bottom Left, overlapping border) */}
                <div className="absolute left-[-12px] bottom-[-12px] w-[130px] h-[150px] bg-[#e31837] flex flex-col items-center justify-center cursor-pointer group z-10">
                  <div className="bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="w-[16px] h-[16px] ml-1 bg-[#e31837]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }}></div>
                  </div>
                  <span className="text-white font-bold text-[11px] mt-4 tracking-widest text-center">
                    WATCH<br/>VIDEO
                  </span>
                </div>
              </div>
              
              {/* Navigation Arrows Row below the image */}
              <div className="flex justify-end gap-4 items-center bg-white py-4 pr-2">
                {/* Left Arrow (Gray) */}
                <button aria-label="Previous slide" className="flex items-center group relative w-20 hover:opacity-80 transition-opacity">
                  <div className="absolute left-0 top-1/2 -mt-[5px] border-y-[5px] border-y-transparent border-r-[8px] border-r-gray-300"></div>
                  <div className="w-full h-[2px] bg-gray-300 ml-1"></div>
                </button>
                
                {/* Right Arrow (Red) */}
                <button aria-label="Next slide" className="flex items-center group relative w-20 hover:opacity-80 transition-opacity">
                  <div className="w-full h-[2px] bg-[#e31837] mr-1"></div>
                  <div className="absolute right-0 top-1/2 -mt-[5px] border-y-[5px] border-y-transparent border-l-[8px] border-l-[#e31837]"></div>
                </button>
              </div>

            </div>
          </RevealOnScroll>
          
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
