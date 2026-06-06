<<<<<<< HEAD
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
=======
import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const reviewers = [
  {
    name: "Rachel Coston",
    date: "December 17, 2022 via Google",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=140&h=140&fit=crop&crop=face",
    type: "image" as const,
    title: "Exceptional Service\nand Care.",
    text: "The team from Subgeo arrived exactly on time and exceeded expectations. From the thorough consultation to the flawless execution of the service, everything was handled with utmost professionalism. I highly recommend them to anyone looking for reliable and quality service...",
  },
  {
    name: "ERIC Ruiz",
    date: "December 27, 2022 via Google",
    avatar: "E",
    color: "#f4a8c4",
    type: "letter" as const,
    title: "Highly Professional\nand Quick.",
    text: "Fantastic experience all around. Subgeo's representatives were extremely knowledgeable and took the time to answer all my questions. Their attention to detail was exceptional, and the final results speak for themselves. Would confidently use their services again.",
  },
  {
    name: "Barbara Powers",
    date: "December 9, 2022 via Google",
    avatar: "B",
    color: "#b5c9a8",
    type: "letter" as const,
    title: "Outstanding Quality\nof Work.",
    text: "I've been a loyal customer for over a year now, and I couldn't be happier. The level of care and dedication the team shows is rare to find these days. They consistently go above and beyond to ensure customer satisfaction. Simply outstanding work!",
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 272 92" width="115" height="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#EA4335"
      />
      <path
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C119.25 34.32 129.24 25 141.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#FBBC05"
      />
      <path
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
        fill="#4285F4"
      />
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
      <path
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
        fill="#EA4335"
      />
      <path
        d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z"
        fill="#4285F4"
      />
    </svg>
  );
}

function Avatar({ reviewer }: { reviewer: (typeof reviewers)[number] }) {
  if (reviewer.type === "image") {
    return (
      <img
        src={reviewer.avatar}
        alt={reviewer.name}
        className="h-[64px] w-[64px] rounded-full object-cover"
      />
    );
  }
  return (
    <div
      className="h-[64px] w-[64px] rounded-full flex items-center justify-center text-white text-[22px] font-medium"
      style={{ backgroundColor: reviewer.color }}
    >
      {reviewer.avatar}
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviewers[activeIndex];
  
  return (
    <section className="py-24 md:py-32 bg-[#f6f8fb]">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column */}
        <RevealOnScroll direction="left">
          <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-primary">
            Our Clients Speaks
            <br />
            Highly Of Us
          </h2>

          <div className="mt-14 space-y-5">
            {reviewers.map((item, index) => (
              <div
                key={item.name}
                onClick={() => setActiveIndex(index)}
                className={`bg-white px-6 py-5 flex items-center gap-5 border cursor-pointer transition-all duration-500 ease-out ${
                  activeIndex === index 
                    ? "border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.08)] scale-[1.02]" 
                    : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300"
                }`}
              >
                <Avatar reviewer={item} />
                <div>
                  <div
                    className="text-[14px] font-bold"
                    style={{ color: "#2a3d52" }}
                  >
                    {item.name}
                  </div>
                  <div className="text-[12px] text-[#9aa8b8] mt-1">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Right Column */}
        <RevealOnScroll direction="right">
          <div className="flex flex-col items-start">
            <GoogleLogo />
            <p
              className="mt-4 text-[13px] leading-[1.6]"
              style={{ color: "#4a5568" }}
            >
              4.9 Stars & 500 Reviews Thanks
              <br />
              To Our Amazing Community
            </p>
          </div>

          <div className="mt-16">
            <h3
              className="text-[24px] md:text-[28px] font-bold leading-[1.2] whitespace-pre-line transition-all duration-300"
              style={{
                color: "#1a2d42",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              {activeReview.title}
            </h3>

            <div className="mt-6 flex items-center gap-[4px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-[26px] w-[26px] fill-[#f4b942] text-[#f4b942]"
                  strokeWidth={0}
                />
              ))}
            </div>

            <p
              className="mt-7 text-[13px] leading-[1.85] transition-all duration-300"
              style={{ color: "#6b7a8d" }}
            >
              {activeReview.text}
            </p>

            <button className="mt-10 flex items-center gap-2 group">
              <span
                className="text-[13px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#d41a2a" }}
              >
                Read More
              </span>
              <ArrowRight
                className="h-[14px] w-[14px] transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "#d41a2a" }}
              />
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
