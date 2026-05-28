import { PremiumSection } from "@/components/premium/PremiumLayout";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import { GridContainer } from "@/components/premium/PremiumGrid";

const testimonials = [
  {
    quote:
      "Subgeo has transformed how we access quality healthcare. The professionalism across all their branches is remarkable.",
    author: "Sarah Mwangi",
    title: "Community Member",
  },
  {
    quote:
      "Working with Subgeo means working with a team that understands healthcare excellence and community care.",
    author: "Dr. James Kipchoge",
    title: "Medical Professional",
  },
  {
    quote:
      "Every visit to Subgeo feels premium but accessible. That's the difference they bring to our neighborhood.",
    author: "Amina Hassan",
    title: "Regular Client",
  },
];

export function TestimonialsSection() {
  return (
    <PremiumSection
      variant="default"
      className="bg-[#dfe1e3] !py-10 md:!py-12"
      title={"Trusted by Our Community"}
      subtitle="Real experiences from people who've made Subgeo part of their wellness journey."
      titleStyle={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
    >
      <GridContainer columns={3} gap="md">
        {testimonials.map((testimonial, index) => (
          <RevealOnScroll key={index} delay={index * 0.15} direction="up">
            <div className="bg-[#dfe1e3] border border-gray-200 rounded-sm p-6 md:p-7 h-full flex flex-col justify-between shadow-sm">
              <p className="text-gray-700 text-lg md:text-xl leading-snug mb-5 italic">{testimonial.quote}</p>

              <div className="mt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </GridContainer>
    </PremiumSection>
  );
}
