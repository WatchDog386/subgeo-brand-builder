import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const logos = ["Mitsubishi Electric", "Pro Plumber", "Diamond Contractor", "Rheem"];

export function PillarsSection() {
  return (
    <section className="section-slab py-16 md:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <RevealOnScroll direction="left">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">Subgeo Services, Inc.</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We’ve worked with some of the best companies in the world. They have a huge customer base who rely on them, so they trusted us and we’ve kept our promise.
          </p>
        </RevealOnScroll>
        <RevealOnScroll direction="right">
          <div className="grid grid-cols-2 gap-4">
            {logos.map((logo) => (
              <div key={logo} className="card-outline p-6 text-center text-sm font-semibold text-gray-600">
                {logo}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}