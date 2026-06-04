import { Star } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const list = [
  { name: "Rachel Coston", date: "December 17, 2022 via Google" },
  { name: "Eric Ruiz", date: "December 27, 2022 via Google" },
  { name: "Barbara Powers", date: "December 9, 2022 via Google" },
];

export function TestimonialsSection() {
  return (
    <section className="section-slab py-16 md:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12">
        <RevealOnScroll direction="left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Our Clients Speaks<br />Highly Of Us
          </h2>
          <div className="mt-8 space-y-4">
            {list.map((item) => (
              <div key={item.name} className="card-outline p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary font-semibold">
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="flex items-center gap-3 text-gray-500">
            <span className="text-2xl font-bold text-primary">Google</span>
            <span className="text-xs uppercase tracking-[0.2em]">4.9 Stars & 500 Reviews</span>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold text-primary">Very Polite, I Liked His Demeanor.</h3>
            <div className="mt-3 flex items-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Chris arrived within the time slot I was given. He did a thorough exam within our heating system, infrared pictures were taken, changed our heater filters, and made recommendations on how we could improve our heating system.
            </p>
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Read More
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}