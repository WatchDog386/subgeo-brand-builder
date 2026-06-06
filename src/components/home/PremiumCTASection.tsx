<<<<<<< HEAD
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function PremiumCTASection() {
  return (
    <section className="section-hero-match py-20 md:py-24 px-4 font-sans">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-sm p-12 md:p-16 text-center section-dark-nav bg-gray-900"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3), transparent 50%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-white/90 text-sm uppercase tracking-widest mb-4">Get in Touch</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Experience Subgeo?
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Visit any of our branches or get in touch to learn more about our services and
              community programs.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-sm hover:bg-gray-100 transition-all no-underline w-full sm:w-auto"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/branches"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-all no-underline w-full sm:w-auto"
              >
                Find a Branch <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
=======
import { Button } from "@/components/ui/button";

export function PremiumCTASection() {
  return (
    <div className="w-full relative bg-white py-12 md:py-16 font-sans overflow-hidden">
      
      {/* Main CTA Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="w-full bg-[#1a2c4e] rounded-none overflow-hidden relative shadow-2xl">
          
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
                className="rounded-none bg-[#e0292e] hover:bg-[#c42428] text-white h-[50px] w-full sm:w-auto px-8 font-semibold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Book a Service
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button 
                variant="outline"
                className="rounded-none border-[#e0292e] text-[#e0292e] hover:bg-[#e0292e] hover:text-white h-[50px] w-full sm:w-auto px-8 font-semibold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 bg-transparent"
              >
                Contact Support
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            <p className="text-gray-400 text-[13px] mt-8 font-sans tracking-wide">
              Fast response guaranteed, no commitment required.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
