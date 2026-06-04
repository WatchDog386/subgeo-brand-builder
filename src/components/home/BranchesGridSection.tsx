import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const coupons = [
  { title: "Any Installation", value: "$200 Off" },
  { title: "Any Repair", value: "$35 Off" },
  { title: "Indoor Air Quality Bundle", value: "5% Off" },
];

export function BranchesGridSection() {
  return (
    <section className="section-shell py-16 md:py-20">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <RevealOnScroll key={coupon.title} delay={0.08}>
              <div className="card-elevated overflow-hidden">
                <div className="h-4 bg-accent" />
                <div className="p-6">
                  <div className="text-xl font-bold text-primary">{coupon.title}</div>
                  <div className="mt-4 bg-primary text-white text-lg font-bold text-center py-2">
                    {coupon.value}
                  </div>
                  <div className="mt-4">
                    <Button className="btn-primary h-10 px-5 text-[11px] w-full">Book Now</Button>
                  </div>
                  <div className="mt-3 text-[10px] text-gray-400 leading-relaxed">
                    *Valid for one-time-only installations and new client discount. Not to be used with any other offer.
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}