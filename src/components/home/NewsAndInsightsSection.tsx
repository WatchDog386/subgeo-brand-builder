import { CheckCircle, Megaphone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import salonImg from "@/assets/salon.jpeg";
import plumberImg from "@/assets/plumber.jpeg";
import salon2Img from "@/assets/salon2.jpeg";

const jobs = [
  "Licensed Pharmacist",
  "Pharmacy Analyst & Assistant",
  "Senior Beauty Therapist",
  "Specialised Hair Stylist",
  "Lead Industrial Plumber",
  "Maintenance Project Manager",
];

export function NewsAndInsightsSection() {
  return (
    <section className="section-shell py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-x max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Visual Collage */}
        <RevealOnScroll direction="left">
          <div className="relative w-full max-w-[700px] mx-auto lg:mx-0 h-[450px] md:h-[550px] flex items-center justify-center">
            
            {/* 1. Top Right Image */}
            <div className="absolute top-[0%] right-[0%] z-10 w-[60%] h-[55%]">
              <img
                src={salonImg}
                alt="Team members"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>

            {/* 2. Bottom Left Image */}
            <div className="absolute bottom-[0%] left-[5%] z-20 w-[60%] h-[55%]">
              <img
                src={plumberImg}
                alt="Love What You Do"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
            
            {/* 3. Center Overlapping Image */}
            <div className="absolute top-[25%] left-[25%] z-30 w-[45%] h-[45%]">
              <img
                src={salon2Img}
                alt="Salon service"
                className="w-full h-full object-cover shadow-2xl ring-1 ring-black/5"
              />
            </div>

            {/* 4. "We're Hiring" Badge */}
            <div className="absolute bottom-[15%] right-[5%] z-40 bg-[#dc2626] text-white px-6 py-3 font-bold text-sm tracking-widest flex items-center gap-3 shadow-xl transform rotate-2">
              <Megaphone className="w-5 h-5 fill-white text-white" />
              WE'RE HIRING
            </div>

          </div>
        </RevealOnScroll>

        {/* Right Side: Content */}
        <RevealOnScroll direction="right">
          <div className="pl-0 lg:pl-8">
            <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-primary">
              Careers At Subgeo<br className="hidden md:block"/> Holding Limited
            </h2>
            
            <p className="mt-6 text-gray-500 text-[13px] md:text-sm leading-relaxed max-w-lg">
              Apprentice to advanced job positions available. Work for a company that cares about its community.
            </p>

            <div className="mt-12">
              <h3 className="text-[#dc2626] font-bold text-xl inline-block mb-8">Job Listings</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {jobs.map((job) => (
                  <div key={job} className="flex items-start gap-2 text-[14px] md:text-[15px] text-[#475569] font-bold">
                    <CheckCircle className="h-5 w-5 text-[#64748b] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    {job}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Button className="bg-[#dc2626] hover:bg-[#b91c25] text-white font-bold tracking-wider text-sm px-8 py-6 rounded-none transition-colors flex items-center gap-2 h-auto shadow-md">
                APPLY NOW <ChevronRight className="w-4 h-4 ml-1" strokeWidth={3} />
              </Button>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}