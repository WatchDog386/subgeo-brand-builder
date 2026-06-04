import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const steps = [
  {
    number: "01",
    title: "Maintenance",
    description: "Regular maintenance keeps your home's systems running well all year long. We'll help you gain efficiency and save money.",
  },
  {
    number: "02",
    title: "Repair",
    description: "When something breaks down, our team will get to you fast. We'll find the problem and fix it to get you back to normal.",
  },
  {
    number: "03",
    title: "Replacement",
    description: "When it's time to replace something in your home, we'll help you get a top quality product that matches your specific needs.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-shell py-16 md:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <RevealOnScroll direction="left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">The Subgeo Way</h2>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#e1e6ee]" />
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={step.number} className="grid grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="relative">
                    <div
                      className={`h-16 w-16 flex items-center justify-center text-white font-bold ${index === 0 ? "bg-accent" : "bg-white text-gray-300 border border-[#e1e6ee]"}`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${index === 0 ? "text-primary" : "text-gray-400"}`}>
                      {step.title}
                    </div>
                    <p className={`mt-2 text-sm leading-relaxed ${index === 0 ? "text-gray-600" : "text-gray-400"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}