import { StatsDisplay } from "@/components/premium/PremiumLayout";

const stats = [
  { number: "6", label: "Specialised Branches" },
  { number: "10K+", label: "Community Clients" },
  { number: "20+", label: "Healthcare Professionals" },
  { number: "365", label: "Days Operating Yearly" },
];

export function ImpactStatsSection() {
  return (
    <section className="section-hero-match py-8 md:py-10 overflow-hidden relative text-gray-900">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4 text-gray-600">BY THE NUMBERS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900 whitespace-nowrap">
            Impact in Kenyan Communities
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Growing reach, consistent standards, and real lives improved every day.
          </p>
        </div>

        <div className="mt-4 md:mt-5">
          <StatsDisplay stats={stats} className="text-gray-900" />
        </div>
      </div>
    </section>
  );
}
