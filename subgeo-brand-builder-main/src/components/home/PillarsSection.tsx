import { Building2, Users, HeartPulse, ShieldCheck } from "lucide-react";
import { PremiumSection } from "@/components/premium/PremiumLayout";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const pillars = [
  {
    icon: Building2,
    title: "One Company",
    description: "A single Kenyan group standing behind every branch we operate.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Built around the people of Umoja and the neighbourhoods we serve.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Led",
    description: "Clinical rigour at the core of everything Subgeo offers.",
  },
  {
    icon: ShieldCheck,
    title: "One Standard",
    description: "Same professionalism in pharmacy, clinic, lab, beauty and barber.",
  },
];

export function PillarsSection() {
  return (
    <PremiumSection
      variant="default"
      className="hero-magazine-inner !py-28 md:!py-36 bg-[#dfe1e3] font-sans"
      title={
        <>
          Who We Are <span className="bg-gradient-premium bg-clip-text text-transparent">& What We Stand For</span>
        </>
      }
      subtitle="A Kenyan group serving everyday health and lifestyle needs with unwavering professionalism and excellence."
    >
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {pillars.map((pillar, index) => (
            <RevealOnScroll key={pillar.title} delay={index * 0.08}>
              <div className="flex flex-col items-center text-center px-6">
                <div className="mb-4">
                  <pillar.icon className="w-14 h-14 md:w-16 md:h-16 text-[#22c55e]" />
                </div>

                <h3 className="text-sm md:text-base font-normal text-[var(--hero-foreground)] mb-2">{pillar.title}</h3>

                <p className="text-[var(--hero-foreground)]/80 text-xs md:text-sm max-w-[36ch]">{pillar.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
