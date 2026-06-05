import { Button } from "@/components/ui/button";

export function PremiumCTASection() {
  return (
    <div className="w-full relative bg-white py-12 md:py-16 font-sans overflow-hidden">
      
      {/* Main CTA Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="w-full bg-gradient-to-br from-[#1a0f44] via-[#12072b] to-[#0e0421] rounded-none overflow-hidden relative shadow-2xl">
          
          {/* --- SVG Isometric Background Elements --- */}
          
          {/* Dashed lines network */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="70%" x2="40%" y2="85%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
            <line x1="30%" y1="90%" x2="80%" y2="10%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
            <line x1="70%" y1="20%" x2="100%" y2="40%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
            <line x1="10%" y1="30%" x2="60%" y2="10%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
          </svg>

          {/* Left Floating Diamond (Translucent + Solid) */}
          <div className="absolute -left-10 top-[25%] md:top-[15%] w-[340px] h-[340px] pointer-events-none opacity-80">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="leftPlaneGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9681e8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#9681e8" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <polygon points="100,50 180,95 100,140 20,95" fill="url(#leftPlaneGrad)" stroke="#a493e6" strokeWidth="0.5" strokeOpacity="0.5"/>
              <polygon points="60,110 100,132 140,110 100,88" fill="#5835b0" transform="translate(0, 40)"/>
            </svg>
          </div>

          {/* Right Top Isometric 3D Box */}
          <div className="absolute right-[12%] top-[10%] w-32 h-32 pointer-events-none drop-shadow-xl hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,25 75,37 50,49 25,37" fill="#8f73d6" />
              <polygon points="25,37 50,49 50,65 25,53" fill="#2d1668" />
              <polygon points="50,49 75,37 75,53 50,65" fill="#502fa6" />
            </svg>
          </div>

          {/* Right Bottom Purple Diamond Plane */}
          <div className="absolute right-[-4%] bottom-[5%] md:bottom-[10%] w-[260px] h-[260px] pointer-events-none drop-shadow-2xl">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="rightPlaneGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#673fcc" />
                  <stop offset="100%" stopColor="#432393" />
                </linearGradient>
              </defs>
              <polygon points="100,60 160,95 100,130 40,95" fill="url(#rightPlaneGrad)" />
            </svg>
          </div>

          {/* --- Content --- */}
          <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center">
            
            <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-white mb-5 max-w-4xl">
              Ready to experience Subgeo?
            </h2>
            
            <p className="text-[#b2a4db] text-base md:text-lg mb-12 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide">
              Reach out to our specialists and discover how our integrated services can elevate your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mx-auto">
              <Button 
                className="bg-[#d5fb46] hover:bg-[#cbf13e] text-[#110825] transition-colors rounded px-8 py-3 h-12 text-sm font-semibold uppercase tracking-wide w-full sm:w-auto shadow-[0_0_20px_rgba(213,251,70,0.1)]"
              >
                Book a Service
              </Button>
              <Button 
                className="bg-[#29175a] hover:bg-[#34206c] text-[#d5fb46] transition-colors rounded px-8 py-3 h-12 text-sm font-semibold uppercase tracking-wide w-full sm:w-auto shadow-none"
              >
                Contact Support
              </Button>
            </div>

            <p className="text-[#6d5b9d] text-[13px] mt-8 font-sans tracking-wide">
              Fast response guaranteed, no commitment required.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}