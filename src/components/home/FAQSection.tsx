import { PremiumSection } from "@/components/premium/PremiumLayout";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const faqs = [
  {
    q: "Do you accept health insurance?",
    a: "Yes — we accept a range of local insurance plans at selected branches. Please contact your nearest branch for details.",
  },
  {
    q: "Can I book appointments online?",
    a: "Yes — use our Contact page to book clinic appointments or call your nearest branch directly.",
  },
  {
    q: "Do you offer same-day lab results?",
    a: "Many routine diagnostics are available with same-day reporting at our diagnostics locations.",
  },
  {
    q: "Do you provide medicine delivery?",
    a: "Yes — select branches offer same-day local delivery for prescription medications. Check the branch page or call to confirm availability.",
  },
  {
    q: "Are emergency services available?",
    a: "Our clinics handle urgent primary care during opening hours. For life-threatening emergencies, please call local emergency services immediately.",
  },
  {
    q: "How do I apply for a job at Subgeo?",
    a: "Visit our Contact page and select 'Careers' or email careers@subgeo.co.ke with your CV and cover letter. Open roles are listed on branch pages when available.",
  },
  {
    q: "What safety measures are in place for infectious diseases?",
    a: "We follow national clinical infection control guidelines, maintain PPE for staff, and perform routine sanitisation across all branches.",
  },
];

export function FAQSection() {
  return (
    <PremiumSection
      variant="default"
      className="bg-[#dfe1e3] font-sans"
      title="Frequently Asked Questions"
      subtitle="Quick answers to common questions"
    >
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <RevealOnScroll key={faq.q} delay={index * 0.06}>
            <details className="rounded-2xl border border-black/10 bg-[#dfe1e3] p-6 shadow-[0_12px_30px_rgba(17,24,39,0.06)] backdrop-blur-sm cursor-pointer">
              <summary className="font-semibold text-lg mb-2">{faq.q}</summary>
              <div className="mt-3 text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          </RevealOnScroll>
        ))}
      </div>
    </PremiumSection>
  );
}
