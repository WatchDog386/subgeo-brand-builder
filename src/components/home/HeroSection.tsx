import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import serviceImg from "@/assets/service.png";
import backImg from "@/assets/back.png";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#f2fbf3]">
      <Navbar />

      <div className="container-x relative min-h-[calc(100vh-72px)] py-28 lg:py-36 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 w-full">
          <div className="lg:col-span-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#072235]">
              Subgeo Plumbing
              <br />
              and Industrial Works
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              We provide reliable plumbing and industrial services across the region — quality workmanship, on time.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a href="/signup" className="inline-flex items-center px-5 py-3 rounded-md bg-[#28b463] text-white font-semibold shadow-md hover:bg-[#1f9a4f] no-underline">
                Create a free account
              </a>
              <a href="/contact" className="text-[#28b463] font-medium hover:underline">or Contact Sales</a>
            </div>

            <div className="mt-14 flex flex-col items-start">
              <div className="text-sm text-[#072235] font-medium mb-4">Trusted by over 200,000 businesses</div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <img src={serviceImg} alt="partner" className="h-8 object-contain" />
                <div className="h-8 w-[60px] bg-gray-200 rounded" />
                <div className="h-8 w-[60px] bg-gray-200 rounded" />
                <div className="h-8 w-[90px] bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-12 lg:mt-0 min-h-[520px] lg:min-h-[640px]">
            <div className="absolute inset-0 flex items-center justify-end">
              <img src={backImg} alt="map" className="w-full max-w-3xl opacity-80 object-contain translate-y-6" />
            </div>
            <div className="relative h-[560px] lg:h-[720px]" />
          </div>
        </div>
      </div>
    </div>
  );
}