import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import serviceImg from "@/assets/service.png";
import backImg from "@/assets/back.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden">
      <img
        src={backImg}
        alt="Hero background"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-[1320px] items-center justify-center px-4 pt-16 pb-12 md:pt-[4.5rem] md:pb-[3.5rem]">
        <div className="w-full">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 md:gap-4">
            <span className="justify-self-end font-display text-white font-black leading-[0.85] tracking-[-0.05em] text-[clamp(38px,7.2vw,124px)]">
              subgeo
            </span>

            <span className="block w-[clamp(180px,30vw,420px)]">
              <motion.img
                src={serviceImg}
                alt="Premium"
                className="h-[clamp(92px,15vw,214px)] w-full rounded-full object-cover"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
            </span>

            <span className="justify-self-start font-display text-white font-black leading-[0.85] tracking-[-0.05em] text-[clamp(38px,7.2vw,124px)]">
              holdings
            </span>
          </div>

          <div className="mt-1 text-center font-display text-white font-black leading-[0.84] tracking-[-0.05em] text-[clamp(32px,6.2vw,94px)]">
            limited
          </div>
        </div>
      </div>
    </section>
  );
}