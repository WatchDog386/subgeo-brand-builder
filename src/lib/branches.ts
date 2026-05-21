import pharmacyImg from "@/assets/pharmacy.jpg";
import clinicImg from "@/assets/clinic.jpg";
import barberImg from "@/assets/barber.jpg";
import beautyImg from "@/assets/beauty.jpg";
import labImg from "@/assets/lab.jpg";
import wellnessImg from "@/assets/wellness.jpg";

export type Branch = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  highlights: { title: string; body: string }[];
  services: string[];
  hours: string;
  phone: string;
};

export const branches: Branch[] = [
  {
    slug: "pharmacy",
    name: "Subgeo Pharmacy",
    tagline: "Trusted medicines. Expert pharmacists. Always nearby.",
    category: "Pharmacy",
    description:
      "Our flagship retail pharmacy stocks a full range of prescription, over-the-counter, chronic care and wellness essentials — backed by licensed pharmacists who take time to advise every customer.",
    image: pharmacyImg,
    highlights: [
      {
        title: "Licensed pharmacists",
        body: "Every prescription reviewed by a registered professional.",
      },
      {
        title: "Chronic care refills",
        body: "Reliable supply for diabetes, hypertension and more.",
      },
      { title: "NHIF friendly", body: "Convenient cover options for qualifying clients." },
    ],
    services: [
      "Prescription dispensing",
      "Over-the-counter medication",
      "Chronic disease management",
      "Wellness & supplements",
      "Baby & maternal care",
      "Free blood pressure checks",
    ],
    hours: "Mon–Sun · 7:00 – 23:00",
    phone: "+254 700 000 002",
  },
  {
    slug: "clinic",
    name: "Subgeo Medical Clinic",
    tagline: "Compassionate primary care for every family.",
    category: "Healthcare",
    description:
      "A modern outpatient clinic offering walk-in and booked consultations across general practice, family medicine and minor procedures — delivered by qualified clinicians.",
    image: clinicImg,
    highlights: [
      { title: "Same-day appointments", body: "Most consultations seen within the hour." },
      { title: "Family-centred care", body: "From paediatrics to adult medicine under one roof." },
      { title: "Digital records", body: "Your history travels with you across our branches." },
    ],
    services: [
      "General consultations",
      "Paediatric care",
      "Women's health",
      "Minor procedures & dressings",
      "Vaccinations & immunisations",
      "Referrals & follow-up",
    ],
    hours: "Mon–Sat · 8:00 – 20:00",
    phone: "+254 700 000 004",
  },
  {
    slug: "laboratory",
    name: "Subgeo Diagnostics",
    tagline: "Accurate diagnostics. Same-day clarity.",
    category: "Diagnostics",
    description:
      "Our laboratory delivers reliable results on a wide menu of routine and specialised tests, with most reports available the same day and shareable directly with your clinician.",
    image: labImg,
    highlights: [
      { title: "Modern equipment", body: "Calibrated analysers and rigorous QA." },
      { title: "Fast turnaround", body: "Same-day reporting on most routine panels." },
      { title: "Shareable results", body: "Digital delivery to you and your doctor." },
    ],
    services: [
      "Full blood count",
      "Liver & kidney panels",
      "Diabetes & lipid screening",
      "Hormonal & thyroid tests",
      "Infection screening",
      "Pre-employment medicals",
    ],
    hours: "Mon–Sat · 7:00 – 19:00",
    phone: "+254 700 000 005",
  },
  {
    slug: "wellness",
    name: "Subgeo Wellness",
    tagline: "Lifestyle, nutrition and mental wellbeing.",
    category: "Wellness",
    description:
      "A calm consultation space dedicated to long-term wellbeing — covering nutrition, lifestyle medicine, stress management and chronic-condition coaching.",
    image: wellnessImg,
    highlights: [
      { title: "Personal plans", body: "Programmes tailored to your goals and history." },
      { title: "Qualified coaches", body: "Trained nutritionists and wellness practitioners." },
      { title: "Long-term partnership", body: "Regular check-ins, not one-off visits." },
    ],
    services: [
      "Nutrition consultations",
      "Lifestyle medicine",
      "Weight management",
      "Stress & sleep coaching",
      "Chronic condition support",
      "Corporate wellness programs",
    ],
    hours: "Tue–Sat · 9:00 – 18:00",
    phone: "+254 700 000 006",
  },
  {
    slug: "barber",
    name: "Subgeo Barber Shop",
    tagline: "Premium cuts in a calm, modern space.",
    category: "Grooming",
    description:
      "A polished barbering experience — from classic cuts and skin fades to beard sculpting — delivered by experienced stylists in a clean, contemporary environment.",
    image: barberImg,
    highlights: [
      { title: "Senior stylists", body: "Trained barbers with years of experience." },
      { title: "Hygiene first", body: "Sterilised tools and single-use blades." },
      { title: "Walk-in or book", body: "Same-day chairs reserved online." },
    ],
    services: [
      "Classic & signature cuts",
      "Skin & taper fades",
      "Beard shape & line-up",
      "Hot towel shave",
      "Scalp & hair treatments",
      "Children's cuts",
    ],
    hours: "Tue–Sun · 9:00 – 21:00",
    phone: "+254 700 000 003",
  },
  {
    slug: "beauty",
    name: "Subgeo Beauty & Grooming",
    tagline: "Elevated self-care, every visit.",
    category: "Beauty",
    description:
      "A refined beauty studio offering facials, skincare, brows, lashes and hand & foot care — in a serene environment designed around comfort and discretion.",
    image: beautyImg,
    highlights: [
      { title: "Trained therapists", body: "Certified beauty professionals you can trust." },
      { title: "Premium products", body: "Carefully chosen, skin-friendly brands." },
      { title: "Calm interiors", body: "Designed for relaxation and privacy." },
    ],
    services: [
      "Signature facials",
      "Skin consultations",
      "Brows & lashes",
      "Manicure & pedicure",
      "Waxing & threading",
      "Bridal packages",
    ],
    hours: "Tue–Sun · 9:00 – 20:00",
    phone: "+254 700 000 007",
  },
];

export const branchBySlug = (slug: string) => branches.find((b) => b.slug === slug);
