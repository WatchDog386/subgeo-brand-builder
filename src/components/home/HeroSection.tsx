import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import backImg from "@/assets/back.png";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#f0fdf7] section-hero-match is-hero">
      <Navbar />

      <div className="container-x relative min-h-[calc(82vh-96px)] py-8 lg:py-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 w-full">
          {/* Left Content */}
          <div className="lg:col-span-6 max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#0f172a]">
              <span className="block whitespace-nowrap">Subgeo Holding Company</span>
              <span className="block">Limited, diverse services</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-black max-w-md font-medium">
              Plumbing, industrial works, clinic pharmacy, salon, and barber shop services.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-[#28b463] text-white font-medium shadow-md hover:bg-[#1f9a4f] transition-colors no-underline"
              >
                Contact
              </a>
              <a 
                href="/contact" 
                className="text-black font-medium hover:underline"
              >
                Services
              </a>
            </div>
          </div>

          {/* Right Content - Africa Map */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[470px] lg:h-[620px]">
              {/* Map Image Background */}
              <img 
                src={backImg} 
                alt="Africa Map" 
                className="absolute inset-0 w-full h-full object-contain opacity-70 ml-auto"
              />

              {/* Map Markers */}
              {/* Lagos, Nigeria - Dark marker */}
              <div className="absolute top-[45%] left-[38%] w-10 h-10 bg-[#0f172a] rounded-full shadow-lg flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-[#28b463] rounded-full" />
              </div>
              
              {/* Nairobi, Kenya - White marker */}
              <div className="absolute top-[55%] left-[65%] w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#28b463] rounded-full" />
              </div>
              
              {/* Cairo, Egypt - White marker */}
              <div className="absolute top-[20%] left-[60%] w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#28b463] rounded-full" />
              </div>
              
              {/* Cape Town, South Africa - White marker */}
              <div className="absolute top-[75%] left-[55%] w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#28b463] rounded-full" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges - Bottom Section */}
      <div className="container-x pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <div className="text-sm text-black mb-4 font-semibold">
              Plumbing, industrial works, clinic pharmacy, salon, and barber shop services
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="px-3 py-2 bg-black rounded-full text-white text-xs font-semibold">Plumbing</div>
              <div className="px-3 py-2 bg-black rounded-full text-white text-xs font-semibold">Industrial Works</div>
              <div className="px-3 py-2 bg-black rounded-full text-white text-xs font-semibold">Clinic Pharmacy</div>
              <div className="px-3 py-2 bg-black rounded-full text-white text-xs font-semibold">Salon & Barber Shop</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}