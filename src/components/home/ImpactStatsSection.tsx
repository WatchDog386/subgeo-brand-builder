import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import backImg from "@/assets/back.png";

export function ImpactStatsSection() {
  return (
    <section className="relative bg-[#b81f25] text-white py-16 md:py-20 overflow-hidden">
      <img
        src={backImg}
        alt="Service fleet"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#b81f25] via-[#c22328] to-[#223a5c]/20" />
      <div className="container-x relative z-10">
        <RevealOnScroll direction="up">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Providing Reliable Services For Over 35 Years
            </h2>
            <p className="mt-4 text-white/90 leading-relaxed">
              Subgeo Services is Marin and Sonoma County's top choice for quality plumbing, heating, and air conditioning services. Since 1986, our local company has helped many homeowners achieve a more functional, reliable, and comfortable home.
            </p>
            <div className="mt-6">
              <Button className="bg-white text-primary h-11 px-6">About Us</Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}