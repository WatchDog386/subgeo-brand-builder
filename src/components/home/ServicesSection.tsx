import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import houseImg from "@/assets/plumbing.png";
import techImg from "@/assets/why.png";

const benefits = [
  "Prompt, efficient services every time",
  "Fully stocked trucks",
  "Extensive industry experience",
  "We finish most jobs in one visit",
];

export function ServicesSection() {
  return (
    <section className="section-shell py-16 md:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <RevealOnScroll direction="left">
          <div className="relative">
            <img
              src={houseImg}
              alt="Home exterior"
              className="w-full h-[360px] md:h-[420px] object-cover rounded-md shadow-lg"
            />
            <img
              src={techImg}
              alt="Technician"
              className="absolute -bottom-6 -right-6 w-[180px] h-[180px] object-cover rounded-md shadow-lg border-4 border-white"
            />
            <div className="absolute -bottom-6 left-6 bg-accent text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
              Helping Since 1986
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Preserving Eichler Homes In Santa Rosa
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Subgeo Services is Marin and Sonoma County's top choice for quality plumbing, heating, and air conditioning services. Since 1986, our local company has helped many homeowners achieve a more functional, reliable, and comfortable home.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-6 items-start">
            <div className="card-outline p-6 text-center">
              <div className="text-4xl font-bold text-accent">35</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                Years Of Experience
              </div>
            </div>
            <div className="space-y-3">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="h-5 w-5 rounded-full border border-gray-200 flex items-center justify-center text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Button className="btn-primary h-11 px-6">Learn More</Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}