import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import techImg from "@/assets/plumbing.png";

export function StorySection() {
  return (
    <section className="section-slab py-16 md:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 items-stretch">
        <RevealOnScroll direction="left">
          <div className="bg-primary text-white p-10 flex flex-col justify-between min-h-[360px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Empowering Homeowners In Santa Rafael & Santa Rosa
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed">
                At Subgeo Services, we want our customers to feel confident in one of life’s biggest investments: your home. We provide videos on how to care for your home and smart home upgrades.
              </p>
            </div>
            <div className="mt-6">
              <Button className="bg-white text-primary h-11 px-6">View More Videos</Button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="relative bg-white p-6 flex items-center justify-center">
            <img
              src={techImg}
              alt="Technician at work"
              className="w-full h-[360px] object-cover shadow-lg"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-white text-accent flex items-center justify-center">
                <Play className="h-4 w-4" />
              </span>
              Watch Video
            </div>
            <div className="absolute bottom-4 right-6 flex items-center gap-3 text-gray-300">
              <span className="w-10 h-px bg-gray-300" />
              <span className="w-10 h-px bg-accent" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}