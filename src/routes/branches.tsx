import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { branches } from "@/lib/branches";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Subgeo Divisions — Expert Pharmacy, Beauty & Industrial Services" },
      {
        name: "description",
        content: "Explore the specialized divisions that make up the Subgeo group.",
      },
      { property: "og:title", content: "Subgeo Expertise & Divisions" },
      { property: "og:description", content: "Distinct divisions aligned under a single standard of excellence." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-36 md:pt-48 pb-16 md:pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gray-50/50 -z-10 rounded-bl-[100px]" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-[#223a5c] opacity-5 -z-10" />

        <div className="container-x text-center relative z-10">
          <Reveal>
            <div className="font-bold text-[11px] uppercase tracking-widest text-[#e0292e] mb-4">
              Our Expertise
            </div>
            <h1 className="mx-auto font-display font-bold text-5xl md:text-7xl leading-[1.05] text-[#223a5c] tracking-tight max-w-5xl">
              Specialized divisions. <br className="hidden md:block" />One standard of excellence.
            </h1>
            <div className="w-20 h-1 bg-[#e0292e] mx-auto mt-8 mb-6" />
            <p className="mx-auto text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              From advanced industrial infrastructure to expert healthcare and premium beauty, discover how Subgeo's distinct divisions are tailored to deliver superior service across Kenya.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-x space-y-32">
          {branches.map((b, i) => {
            const isEven = i % 2 !== 0;
            return (
              <Reveal key={b.slug} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                  {/* Image Block */}
                  <div className={`relative aspect-[4/3] lg:aspect-square overflow-hidden bg-gray-100 group ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                    <div className="absolute inset-0 bg-[#223a5c]/0 group-hover:bg-[#223a5c]/10 transition-colors duration-500 z-10" />
                    <img
                      src={b.image}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 shadow-xl z-20">
                      <span className="font-bold text-[11px] uppercase tracking-widest text-[#223a5c]">{b.category}</span>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={`${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                    <h2 className="font-display font-bold text-4xl lg:text-5xl text-[#223a5c] mb-4">
                      {b.name}
                    </h2>
                    <p className="text-xl text-[#e0292e] font-display font-semibold mb-6">
                      {b.tagline}
                    </p>
                    <p className="text-[16px] text-gray-600 leading-relaxed mb-8">
                      {b.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {b.services.slice(0, 4).map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#e0292e] shrink-0 mt-0.5" />
                          <span className="text-[14px] text-gray-700 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/${b.slug}` as any}
                      className="inline-flex items-center justify-center bg-[#223a5c] text-white px-8 py-4 font-bold text-[12px] uppercase tracking-widest hover:bg-[#1a2c4e] transition-colors gap-3 group rounded-sm"
                    >
                      Explore {b.category} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container-x">
          <div className="bg-[#1a2c4e] px-10 py-16 md:px-20 relative overflow-hidden">
            {/* Background ambient red glow */}
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#e0292e] opacity-10 blur-3xl pointer-events-none" />
            
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
              <div className="md:w-1/2">
                <div className="font-bold text-[11px] uppercase tracking-widest text-[#e0292e] mb-3">Service Promise</div>
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
                  Distinct services,<br />Consistent excellence.
                </h2>
              </div>
              <p className="md:w-1/2 text-gray-300 text-[15px] leading-relaxed border-l-0 md:border-l border-white/10 md:pl-10">
                From precision industrial installations to clinical healthcare consultations and premium beauty regimes, every Subgeo division is built on rigorous standards, offering a dependable and sophisticated experience across all our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
