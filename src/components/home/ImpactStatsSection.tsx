import { StatsDisplay } from "@/components/premium/PremiumLayout";

const stats = [
  { number: "6", label: "Specialised Branches" },
  { number: "10K+", label: "Community Clients" },
  { number: "20+", label: "Healthcare Professionals" },
  { number: "365", label: "Days Operating Yearly" },
];

export function ImpactStatsSection() {
  return (
    <section className="py-8 md:py-10 section-subgeo-blue overflow-hidden relative text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4 text-white/80">BY THE NUMBERS</p>
          <h2 className="font-hero text-[32px] md:text-[56px] leading-[0.95] tracking-[-0.04em] text-white whitespace-nowrap">
            Impact in Kenyan Communities
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
            Growing reach, consistent standards, and real lives improved every day.
          </p>
        </div>

        <div className="mt-4 md:mt-5">
          <StatsDisplay stats={stats} className="text-white" />
        </div>
      </div>
    </section>
  );
}
