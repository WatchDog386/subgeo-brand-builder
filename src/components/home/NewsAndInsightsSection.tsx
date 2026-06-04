import { CheckCircle2, Megaphone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import teamImg from "@/assets/beauty.jpg"; // Ensure this asset is the photo of the team

const jobs = [
  "Licensed Pharmacist",
  "Beauty Therapist",
  "Industrial Plumber",
  "Customer Service Rep",
  "Store Manager",
  "Maintenance Technician",
];

export function NewsAndInsightsSection() {
  return (
    <section className="section-shell py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-x max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Visual Collage */}
        <RevealOnScroll direction="left">
          <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 h-[550px] flex items-center justify-center">
            
            {/* 1. Main Team Image */}
            <div className="absolute top-0 left-0 z-10 w-[68%] h-[78%] shadow-2xl">
              <img
                src={teamImg}
                alt="Team members"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. "Love What You Do" Sign */}
            <div className="absolute bottom-0 right-[5%] z-20 w-[52%] h-[58%] bg-white p-3 shadow-2xl border border-gray-100 transform rotate-[-1deg]">
              <div className="w-full h-full bg-[#f8f9fa] border-2 border-gray-200 flex flex-col items-center justify-center p-5 text-center font-sans">
                <h3 className="text-[3.5rem] font-black text-[#dc2626] leading-none mb-1">LOVE</h3>
                <p className="text-xl font-bold text-black tracking-tight mb-1">WHAT YOU DO</p>
                <h3 className="text-3xl font-black text-[#dc2626] mb-1">AND</h3>
                <p className="text-xl font-bold text-black tracking-tight mb-1">DO WHAT YOU</p>
                <h3 className="text-[3.5rem] font-black text-[#dc2626] leading-none">LOVE</h3>
              </div>
            </div>

            {/* 3. Megaphone Graphic */}
            <div className="absolute top-[5%] right-[10%] z-30 transform -rotate-12 drop-shadow-2xl">
               <div className="relative">
                 {/* White body of megaphone */}
                 <Megaphone className="w-36 h-36 text-white fill-white stroke-gray-200" strokeWidth={1.5} />
                 {/* Red/Orange cone tip */}
                 <div className="absolute top-[45%] left-[50%] w-10 h-10 bg-[#ff4500] rounded-full shadow-inner transform -translate-x-1/2 -translate-y-1/2"></div>
               </div>
            </div>

            {/* 4. "We're Hiring" Badge */}
            <div className="absolute bottom-[18%] left-[-5%] z-40 bg-[#dc2626] text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl">
              <Megaphone className="w-3.5 h-3.5 fill-white text-white" />
              We're Hiring
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
              <h3 className="text-[#dc2626] font-bold text-xl mb-8">Job Listings</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
                {jobs.map((job) => (
                  <div key={job} className="flex items-center gap-3 text-[15px] text-[#334155] font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[#1e3a5f] flex-shrink-0" />
                    {job}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Button className="bg-[#dc2626] hover:bg-[#b91c25] text-white font-bold uppercase tracking-widest text-sm px-10 py-6 rounded-none transition-colors flex items-center gap-3 h-auto shadow-lg hover:shadow-xl">
                Apply Now <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}