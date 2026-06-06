<<<<<<< HEAD
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
=======
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

/* ─── Inline SVG logos ─── */

const MitsubishiLogo = () => (
  <svg viewBox="0 0 220 70" className="w-full h-auto max-w-[180px]">
    {/* Three-diamond mark */}
    <g transform="translate(8, 8)">
      {/* Top diamond */}
      <polygon points="22,0 44,22 22,22" fill="#E60012" />
      {/* Bottom-left diamond */}
      <polygon points="0,22 22,22 22,44" fill="#E60012" />
      {/* Bottom-right diamond */}
      <polygon points="22,22 44,22 22,44" fill="#E60012" />
    </g>
    {/* Text */}
    <text x="62" y="30" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="17" fill="#1a1a1a" letterSpacing="0.5">MITSUBISHI</text>
    <text x="62" y="50" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="17" fill="#1a1a1a" letterSpacing="0.5">ELECTRIC</text>
  </svg>
);

const ProPlumberLogo = () => (
  <svg viewBox="0 0 200 70" className="w-full h-auto max-w-[160px]">
    {/* PRO text with wrench as O */}
    <text x="10" y="38" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="30" fill="#1a1a1a" letterSpacing="1">
      PR
    </text>
    {/* Wrench icon replacing O */}
    <g transform="translate(82, 6)">
      <circle cx="14" cy="14" r="13" fill="none" stroke="#1a1a1a" strokeWidth="3" />
      <rect x="12" y="14" width="18" height="5" rx="1" fill="#1a1a1a" transform="rotate(-30, 14, 14)" />
    </g>
    {/* PLUMBER text */}
    <text x="10" y="60" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#1a1a1a" letterSpacing="4">PLUMBER</text>
  </svg>
);

const DiamondContractorLogo = () => (
  <svg viewBox="0 0 220 70" className="w-full h-auto max-w-[190px]">
    {/* DIAMOND text */}
    <text x="8" y="34" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="16" fill="#1a1a1a" letterSpacing="1.5">DIAMOND</text>
    {/* CONTRACTOR text in red/orange */}
    <text x="8" y="52" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#C0392B" letterSpacing="2">CONTRACTOR</text>
    {/* Diamond icon — stacked rhombus stripes */}
    <g transform="translate(155, 6)">
      <polygon points="20,0 40,28 20,56 0,28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Inner stripes */}
      <line x1="10" y1="14" x2="30" y2="14" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="5" y1="28" x2="35" y2="28" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="10" y1="42" x2="30" y2="42" stroke="#1a1a1a" strokeWidth="2" />
      {/* Accent color on right half */}
      <polygon points="20,0 40,28 20,28" fill="#C0392B" opacity="0.85" />
      <polygon points="20,28 40,28 20,56" fill="#1a1a1a" opacity="0.7" />
    </g>
  </svg>
);

const RheemLogo = () => (
  <svg viewBox="0 0 120 120" className="w-full h-auto max-w-[100px]">
    <circle cx="60" cy="60" r="54" fill="#D4213D" />
    <text
      x="60"
      y="68"
      fontFamily="'Brush Script MT', 'Segoe Script', 'Comic Sans MS', cursive"
      fontWeight="700"
      fontSize="36"
      fill="#ffffff"
      textAnchor="middle"
      fontStyle="italic"
    >
      Rheem
    </text>
  </svg>
);

/* ─── Data ─── */

const logos = [
  { name: "Mitsubishi Electric", component: <MitsubishiLogo /> },
  { name: "Pro Plumber", component: <ProPlumberLogo /> },
  { name: "Diamond Contractor", component: <DiamondContractorLogo /> },
  { name: "Rheem", component: <RheemLogo /> },
];

/* ─── Section ─── */

export function PillarsSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#f4f5f7" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: Heading + description ── */}
          <RevealOnScroll direction="left">
            <h3
              className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-primary tracking-tight"
            >
              SUBGEO
              <br />
              HOLDING LTD.
            </h3>

            <p
              className="mt-5 max-w-md text-[0.92rem] leading-relaxed"
              style={{ color: "#6b7280", fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}
            >
              We pride ourselves on partnering with esteemed brands to deliver absolute excellence across our Pharmacy, Beauty, and Industrial divisions in Kenya.
            </p>
          </RevealOnScroll>

          {/* ── Right: 2×2 logo grid ── */}
          <RevealOnScroll direction="right">
            <div className="grid grid-cols-2 gap-5">
              {logos.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-center rounded-[14px] bg-white px-6 py-7"
                  style={{
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                    minHeight: "130px",
                  }}
                >
                  {item.component}
                </div>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
