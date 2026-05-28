import { PremiumSection } from "@/components/premium/PremiumLayout";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

export function ValuesMissionSection() {
  return (
    <PremiumSection
      variant="default"
      className="bg-[#dfe1e3]"
      title={
        <>
          Our Values <span className="bg-gradient-premium bg-clip-text text-transparent">& Mission</span>
        </>
      }
      subtitle="Guiding principles that shape how we deliver care and service"
    >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <RevealOnScroll direction="left">
          <div className="bg-[#dfe1e3] border border-gray-200 rounded-sm p-8 h-full shadow-sm">
            <h4 className="text-gray-900 font-semibold mb-3">Core Values</h4>
            <ul className="text-gray-700 leading-relaxed list-disc ml-5">
              <li>Compassionate service</li>
              <li>Clinical excellence</li>
              <li>Community partnership</li>
              <li>Consistency and accountability</li>
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="bg-[#dfe1e3] border border-gray-200 rounded-sm p-8 h-full shadow-sm">
            <h4 className="text-gray-900 font-semibold mb-3">Our Mission</h4>
            <p className="text-gray-700 leading-relaxed">
              To make professional healthcare and wellbeing services accessible, affordable and
              consistently excellent for the communities we serve — every day, in every branch.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </PremiumSection>
  );
}
