import { PremiumSection } from "@/components/premium/PremiumLayout";
import { BentoGrid } from "@/components/premium/PremiumGrid";

const news = [
  {
    title: "Subgeo Diagnostics Expands Same-Day Reporting",
    description: "Enhanced laboratory capabilities bring faster results to our clients.",
    date: "Apr 2026",
    badge: "Update",
    gradient: "linear-gradient(135deg, #5FA8FF, #3F8FFF)",
  },
  {
    title: "Free BP Screenings Continue Across Branches",
    description: "Community health initiatives reach new neighborhoods.",
    date: "Mar 2026",
    badge: "Community",
    gradient: "linear-gradient(135deg, #10B981, #5FA8FF)",
  },
  {
    title: "Welcoming New Clinicians to Medical Team",
    description: "Expanding our healthcare professional network.",
    date: "Feb 2026",
    badge: "People",
    gradient: "linear-gradient(135deg, #FF9D54, #FF6B9D)",
  },
];

export function NewsAndInsightsSection() {
  return (
    <PremiumSection
      variant="default"
      title="Latest From Subgeo"
      subtitle="News, updates, and insights from across our branches."
    >
      <div className="mt-8">
        <BentoGrid
          items={news.map((item) => ({
            title: item.title,
            description: item.description,
            gradient: item.gradient,
            span: "col-span-1",
            className: "h-64 md:h-72",
            children: (
              <div className="mt-auto pt-4 flex items-center justify-between text-xs text-white/80">
                <span className="px-2.5 py-1 bg-white/20 rounded-full font-medium tracking-wide backdrop-blur-sm">
                  {item.badge}
                </span>
                <span className="font-mono">{item.date}</span>
              </div>
            ),
          }))}
        />
      </div>
    </PremiumSection>
  );
}
