import { Button } from "@/components/ui/button";
import { Box, Wrench } from "lucide-react";

export function PremiumCTASection() {
  return (
    <div className="w-full font-sans">
      {/* --- CTA Banner Section --- */}
      <section className="bg-[#2b3242] text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Ready to experience Subgeo?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md">
            Reach out to our specialists or browse our catalog today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white h-10 px-6 rounded-sm text-sm font-medium">
              Book a Service
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white text-gray-800 hover:bg-gray-100 h-10 px-6 rounded-sm text-sm font-medium"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* --- Cards Section --- */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Build better products */}
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 flex flex-col items-start hover:shadow-md transition-shadow duration-300">
            <div className="mb-4 text-blue-400">
              <Box size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-blue-500 font-bold text-lg mb-3">
              Premium Services
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              Whether you need top-tier health supplies, a peaceful beauty session, 
              or massive industrial installations, Subgeo gets it done perfectly.
            </p>
            <Button 
              variant="outline" 
              className="text-blue-500 border-blue-200 bg-blue-50 hover:bg-blue-100 h-8 px-4 text-xs uppercase tracking-wider rounded-sm"
            >
              Learn More
            </Button>
          </div>

          {/* Card 2: Earn more trust */}
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 flex flex-col items-start hover:shadow-md transition-shadow duration-300">
            <div className="mb-4 text-blue-400">
              <Wrench size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-blue-500 font-bold text-lg mb-3">
              Trusted Professionals
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              Every specialized division is run by licensed experts. Your reliable 
              partner across multiple industries in Kenya.
            </p>
            <Button 
              variant="outline" 
              className="text-blue-500 border-blue-200 bg-blue-50 hover:bg-blue-100 h-8 px-4 text-xs uppercase tracking-wider rounded-sm"
            >
              Learn More
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}