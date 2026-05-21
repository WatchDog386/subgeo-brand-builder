import { StatsDisplay } from "@/components/premium/PremiumLayout";
import { CenteredContent } from "@/components/premium/PremiumGrid";

const stats = [
  { number: "6", label: "Specialised Branches" },
  { number: "10K+", label: "Community Clients" },
  { number: "20+", label: "Healthcare Professionals" },
  { number: "365", label: "Days Operating Yearly" },
];

export function ImpactStatsSection() {
  return (
    <section className="py-12 md:py-16 section-hero-match section-subgeo-blue overflow-hidden relative text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <CenteredContent
          eyebrow="BY THE NUMBERS"
          title="Measurable Impact in Kenyan Communities"
          description="Growing reach, consistent standards, and real lives improved every day."
          maxWidth="max-w-2xl"
        />

        <div className="mt-6">
          <StatsDisplay stats={stats} className="text-white" />
        </div>
      </div>
    </section>
  );
}
