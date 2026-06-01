import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, ScrollProgressBar } from "@/components/premium/PremiumAnimations";
import { Footer } from "@/components/site/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ImpactStatsSection } from "@/components/home/ImpactStatsSection";
import { StorySection } from "@/components/home/StorySection";
import { BranchesGridSection } from "@/components/home/BranchesGridSection";
import { VisitUsTodaySection } from "@/components/home/VisitUsTodaySection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ValuesMissionSection } from "@/components/home/ValuesMissionSection";
import { FAQSection } from "@/components/home/FAQSection";
import { NewsAndInsightsSection } from "@/components/home/NewsAndInsightsSection";
import { PremiumCTASection } from "@/components/home/PremiumCTASection";
// (Removed Subgeo Industrial imports)

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subgeo — A Kenyan multi-service company" },
      {
        name: "description",
        content:
          "Subgeo is a Kenyan group operating pharmacy, medical, diagnostics, wellness, barber and beauty branches under one trusted brand.",
      },
      { property: "og:title", content: "Subgeo — A Kenyan multi-service company" },
      {
        property: "og:description",
        content:
          "One company, six trusted branches: pharmacy, clinic, diagnostics, wellness, barber and beauty.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageTransition className="min-h-screen bg-background text-foreground overflow-x-clip relative">
      <ScrollProgressBar />
      <HeroSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ServicesSection />
      <ImpactStatsSection />
      <StorySection />
      <BranchesGridSection />
      <PillarsSection />
      <ValuesMissionSection />
      <FAQSection />
      <NewsAndInsightsSection />
      <PremiumCTASection />
      <VisitUsTodaySection />

      
      <Footer />
    </PageTransition>
  );
}
