import { ShieldCheck, Clock, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const plans = [
  {
    title: "Expert Guidance",
    icon: ShieldCheck,
    description: "Professional advice from pharmacists and trained professionals.",
  },
  {
    title: "Timely Delivery",
    icon: Clock,
    description: "Efficient services when you need them most across all branches.",
  },
  {
    title: "Value & Integrity",
    icon: DollarSign,
    description: "Transparent pricing without compromising on quality standards.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Our Commitment to Excellence
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Delivering quality and reliability across healthcare, beauty, and industrial services.
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