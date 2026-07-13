import { CheckCircle, Megaphone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import { Link } from "@tanstack/react-router";
import salonImg from "@/assets/salon.jpeg";
import plumberImg from "@/assets/plumber.jpeg";
import salon2Img from "@/assets/salon2.jpeg";
import pharm2mg from "@/assets/pharm2.jpeg";
import industryImg from "@/assets/industry.jpeg";
import serviceImg from "@/assets/service.jpeg";
const branchesData = [
  {
    title: "Subgeo Pharmacy",
    desc: "Our flagship retail pharmacy stocks a full range of prescription, over-the-counter, and wellness essentials for your family.",
    image: pharm2mg,
    badge: "HEALTH"
  },
  {
    title: "Beauty Salon",
    desc: "Premium grooming, expert hair styling, and rejuvenating skincare treatments tailored to bring out your best self.",
    image: salon2Img,
    badge: "BEAUTY"
  },
  {
    title: "Industrial Work & Plumbing",
    desc: "Professional plumbing, structural maintenance, and comprehensive industrial solutions for a seamlessly running facility.",
    image: industryImg,
    badge: "SERVICES"
  }
];

export function NewsAndInsightsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#fafbfc] relative overflow-hidden">
      <div className="container-x max-w-[1200px] mx-auto relative z-10">

        {/* TOP ADS BANNERS ROW */}
        <RevealOnScroll direction="down">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mb-16">
            <div className="w-full md:w-1/2 overflow-hidden shadow-md group">
               <div className="relative w-full aspect-[2/1] bg-gray-100 overflow-hidden border border-gray-200">
                  <img src={serviceImg} alt="Subgeo Company" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 flex flex-col justify-center px-8 bg-gradient-to-r from-white via-white/80 to-transparent">
                     <h4 className="font-sans text-[clamp(18px,2vw,28px)] leading-[1.1] font-medium text-primary mb-1">Providing Kenyans</h4>
                     <h3 className="font-sans text-[clamp(22px,3vw,36px)] leading-[1.1] tracking-tighter font-[900] text-primary mb-2">With Reliable and Quality Services</h3>
                     <p className="text-xs lg:text-[13px] text-gray-600 mt-2 max-w-[85%] lg:max-w-[75%] leading-relaxed font-sans">As a premier holding company based in Kenya, Subgeo Holding Limited delivers comprehensive, high-quality services and infrastructure solutions tailored to drive progress, reliability, and innovation across the region.</p>
                     
                     <div className="mt-4 bg-red-600 text-white font-bold w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-[10px] leading-none uppercase">up to</span>
                        <span className="text-xl leading-none mt-0.5">10%</span>
                        <span className="text-[10px] leading-none uppercase mt-0.5">OFF</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full md:w-1/2 overflow-hidden shadow-md group">
               <div className="relative w-full aspect-[2/1] bg-[#1a0f0d] overflow-hidden border border-[#2d1b17]">
                  <div className="absolute inset-0 mix-blend-overlay opacity-30">
                     <img src={plumberImg} alt="Ad right background" className="w-full h-full object-cover"/>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center px-8 text-white z-10">
                      <h4 className="font-sans text-[clamp(18px,2vw,28px)] leading-[1.1] font-medium text-white mb-1">SINCE 2012.</h4>
                      <h3 className="font-sans text-[clamp(22px,3vw,36px)] leading-[1.1] tracking-tighter font-[900] text-red-500 mb-2">A DECADE OF CARE.</h3>
                      <p className="text-xs lg:text-sm text-gray-300 max-w-[60%] border-t border-red-500 pt-4 mt-2">Whether it's medicine, wellness, or everyday health needs, we've been here for your family—then, now, and always.</p>
                  </div>
                  <div className="absolute right-[-10%] top-0 h-full w-[50%] bg-gradient-to-l from-yellow-900 to-transparent z-0 skew-x-[-20deg]"></div>
                  
                  {/* Decorative badge placeholder right side */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] rounded-full border-[1.5px] border-yellow-500/30 flex items-center justify-center z-20 overflow-hidden p-1.5">
                      <div className="w-full h-full border-[1.5px] border-yellow-600 rounded-full flex flex-col items-center justify-center bg-transparent">
                         <span className="text-3xl lg:text-4xl font-serif text-yellow-500 font-bold">14</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="text-[11px] text-gray-500 mb-8 mt-[-30px] font-mono">[elfsight_popup id="1"]</div>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up">
          <h2 className="text-[#0d173d] font-sans font-[900] tracking-tight text-[clamp(24px,3vw,28px)] mb-3">
            Explore Our Branches
          </h2>
          <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed max-w-2xl mb-8">
            Providing comprehensive care across different divisions. Discover the dedicated services we offer to support your health, beauty, and operational needs.
          </p>
          
          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {branchesData.map((branch, index) => {
            return (
              <RevealOnScroll key={branch.title} direction="up" delay={index * 0.1}>
                <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] px-6 pt-8 pb-8 relative flex flex-col h-full border border-gray-100/60 hover:-translate-y-1 transition-transform duration-300">
                  
                  {/* Badge */}
                  <div className="absolute -top-4 left-6 bg-white border border-[#dc2626] px-[10px] py-[6px] flex flex-col items-center justify-center min-w-[50px]">
                    <span className="text-[#dc2626] font-[800] text-[10px] uppercase tracking-widest leading-none mt-0.5">
                      {branch.badge}
                    </span>
                  </div>

                  <div className="flex gap-5 mb-5 items-start">
                    <div className="w-[45%] h-[120px] bg-gray-100 overflow-hidden relative shadow-sm border border-gray-100">
                       <img src={branch.image} alt={branch.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[55%]">
                       <h3 className="font-sans font-[900] tracking-tight text-[#111827] text-[14px] lg:text-[15px] leading-tight">
                         {branch.title}
                       </h3>
                    </div>
                  </div>

                  <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow pr-4">
                    {branch.desc}
                  </p>

                  <div className="flex justify-center w-full mt-auto pt-4 border-t border-gray-100">
                    <Link to={branch.title === "Subgeo Pharmacy" ? "/pharmacy" : branch.title === "Beauty Salon" ? "/beauty" : "/subgeo-industrial"}>
                      <button className="border border-[#dc2626] text-[#dc2626] rounded-full px-8 py-[6px] text-[12px] font-semibold hover:bg-red-50 transition-colors flex items-center gap-1">
                        Visit now <ChevronRight className="w-3.5 h-3.5 ml-1" strokeWidth={2.5} />
                      </button>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}