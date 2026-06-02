import pharmacyImg from "@/assets/pharmacy.jpg";
import beautyImg from "@/assets/beauty.jpg";
import labImg from "@/assets/lab.jpg";

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
    slug: "beauty",
    name: "Subgeo Beauty Salon",
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
  {
    slug: "subgeo-industrial",
    name: "Subgeo Industrial",
    tagline: "Reliable plumbing and industrial works for demanding projects.",
    category: "Industrial Works",
    description:
      "Subgeo Industrial delivers plumbing, installation, drainage and maintenance services for homes, estates and commercial projects with dependable execution and a professional finish.",
    image: labImg,
    highlights: [
      { title: "Experienced crews", body: "Skilled teams that work safely and efficiently." },
      { title: "Project-ready", body: "Built to support installations, maintenance and urgent repairs." },
      { title: "Reliable delivery", body: "A clear process from inspection to completion." },
    ],
    services: [
      "Plumbing maintenance",
      "Sanitary ware installation",
      "Drainage works",
      "Fire fighting systems",
      "Geyser services",
      "Industrial repairs",
    ],
    hours: "Mon–Sat · 8:00 – 18:00",
    phone: "+254 700 000 008",
  },
];

export const branchBySlug = (slug: string) => branches.find((b) => b.slug === slug);
