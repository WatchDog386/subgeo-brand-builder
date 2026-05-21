import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/corporate-hero.jpg";
import { PremiumButton } from "@/components/premium/PremiumLayout";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

export function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[10%] w-[28rem] h-[28rem] rounded-full bg-[#244f86]/10 blur-3xl" />
        <div className="absolute bottom-10 left-[-8rem] w-72 h-72 rounded-full bg-[#f36a2c]/10 blur-3xl" />
        <div className="absolute top-20 left-[52%] w-[32rem] h-px bg-[#f36a2c]/30 rotate-[-56deg] origin-left" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="max-w-xl">
              <p className="text-[#244f86] font-semibold tracking-tight text-sm md:text-base mb-2 uppercase">OUR PURPOSE</p>
              <h2 className="font-hero text-4xl md:text-6xl leading-tight tracking-tight text-[#111827] mb-4">
                Professional <span className="text-[#f36a2c]">Healthcare</span> Delivered Well
              </h2>

              <p className="mt-4 text-lg md:text-lg text-slate-700 leading-relaxed max-w-prose">
                We exist to make professional healthcare and self-care accessible, affordable and consistently excellent across every Subgeo branch, every day.
              </p>

              <p className="mt-4 text-lg md:text-lg text-slate-700 leading-relaxed max-w-prose">
                Since founding Subgeo, we have stayed focused on one goal: bringing clinical expertise and genuine care closer to the communities we serve.
              </p>

              <div className="mt-8">
                <Link to="/about" className="no-underline inline-flex">
                  <PremiumButton variant="primary" size="lg">
                    Read Our Full Story
                    <ArrowRight className="w-4 h-4" />
                  </PremiumButton>
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.15}>
            <div className="relative pl-0 lg:pl-6">
              <div className="absolute -top-6 left-[12%] hidden md:block h-24 w-24 rounded-full bg-[#244f86] opacity-90" />
              <div className="absolute top-24 -right-10 hidden md:block h-64 w-64 rounded-full bg-[#9bc0f2] opacity-90" />

              <div className="relative mx-auto max-w-[640px]">
                <img
                  src={heroImg}
                  alt="Subgeo purpose visual"
                  className="h-[340px] md:h-[520px] w-full object-cover rounded-lg shadow-xl"
                />

                <div className="absolute left-6 bottom-6 bg-white/80 backdrop-blur-sm rounded-md px-4 py-2">
                  <p className="text-lg md:text-2xl font-semibold text-slate-800">Purpose built for communities</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
