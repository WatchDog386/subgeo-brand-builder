import { ShieldCheck, Clock, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const plans = [
  {
    title: "Preventive Care",
    icon: ShieldCheck,
    description: "Annual inspections and tune-ups to keep systems efficient.",
  },
  {
    title: "Priority Response",
    icon: Clock,
    description: "Fast scheduling and on-call technicians when it matters.",
  },
  {
    title: "Transparent Pricing",
    icon: DollarSign,
    description: "Upfront estimates with zero surprises or hidden fees.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Service Plans Built For Peace of Mind
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Flexible options that keep your home comfortable year-round.
          </p>
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <RevealOnScroll key={plan.title} delay={0.08}>
              <div className="card-elevated p-6">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <plan.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary">{plan.title}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}