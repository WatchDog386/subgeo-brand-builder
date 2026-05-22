import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { PremiumHero } from "@/components/premium/PremiumLayout";
import serviceImg from "@/assets/service.png";
import backImg from "@/assets/back.png";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#111827]">
      <div className="absolute inset-x-0 top-0 h-[140px] bg-[#111827]" />
      <Navbar />
      
      <PremiumHero
        backgroundImage={backImg}
        title={
          <>
            <div className="hero-magazine-structure">
              <div className="hero-line-top">
                <span className="hero-left">subgeo</span>
                <span className="hero-image-slot">
                  <motion.img
                    src={serviceImg}
                    alt="Premium"
                    className="hero-pill-image relative z-10"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </span>
                <span className="hero-right">holdings</span>
              </div>

              <div className="hero-line-bottom">limited</div>
            </div>
          </>
        }
        subtitle={undefined}
        background="dark"
        layout="magazine"
        fullscreen={true}
        className="hero-cta-center"
        showDots={false}
      />
    </div>
  );
}