import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check, Clock, Phone, Pill, Heart, Shield, TrendingUp } from "lucide-react";
import { branches } from "@/lib/branches";
import { PremiumHero, PremiumSection, PremiumButton } from "@/components/premium/PremiumLayout";
import { GridContainer } from "@/components/premium/PremiumGrid";
import pharmacyImg from "@/assets/pharmacy.jpg";

export const Route = createFileRoute("/pharmacy")({
  head: () => ({
    meta: [
      { title: "Subgeo Pharmacy — Trusted medicines. Expert pharmacists. Always nearby." },
      {
        name: "description",
        content:
          "Our flagship retail pharmacy stocks a full range of prescription, over-the-counter, chronic care and wellness essentials — backed by licensed pharmacists.",
      },
      { property: "og:title", content: "Subgeo Pharmacy — Subgeo" },
      {
        property: "og:description",
        content: "Trusted medicines. Expert pharmacists. Always nearby.",
      },
      { property: "og:image", content: pharmacyImg },
    ],
  }),
  component: PharmacyPage,
});

function PharmacyPage() {
  const branch = {
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
  };

  const others = branches.filter((b) => b.slug !== branch.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />

      <PremiumHero
        eyebrow={branch.category.toUpperCase()}
        title={<span className="hero-magazine-title">{branch.name}</span>}
        subtitle={branch.tagline}
        background="light"
        layout="magazine"
        fullscreen={true}
        cta={{
          label: "Book Now",
          onClick: () => window.scrollTo({ top: document.body.scrollHeight / 6, behavior: "smooth" }),
        }}
        showDots={false}
      />

      <PremiumSection className="py-12" title={undefined} subtitle={undefined}>
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-sm">
                    <img src={pharmacyImg} alt={`pharmacy-${i}`} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Pharmacy Services in Umoja</h2>

              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Prescription Medications</li>
                <li>Over-the-Counter Products</li>
                <li>Chronic Disease Management</li>
                <li>Wellness & Supplements</li>
                <li>Baby & Maternal Care</li>
                <li>Health Screenings</li>
                <li>Medication Counseling</li>
                <li>NHIF Accepted</li>
              </ul>

              <p className="mt-6 text-muted-foreground max-w-xl">We provide quality pharmaceutical services backed by registered professionals who ensure every customer receives expert guidance and quality assured medications.</p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection className="py-20" title={"About Our Pharmacy"} subtitle={undefined}>
        <div id="about" className="container-x">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-6">
              Subgeo Pharmacy is part of the Subgeo group of companies, committed to providing accessible, quality healthcare to the communities we serve. With licensed pharmacists on staff and a comprehensive inventory of medications and wellness products, we're here to support your health journey.
            </p>
            <p>
              Our pharmacy is open extended hours to serve your convenience, and we accept major health insurance plans including NHIF. We believe in personalized pharmaceutical care that goes beyond just dispensing medications.
            </p>
          </div>

          <div className="mt-12 container-x">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                  <Pill className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Quality Medications</h4>
                <p className="mt-3 text-sm text-muted-foreground">Every medication in our inventory is quality-assured and properly stored to maintain efficacy and safety.</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                  <Clock className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Extended Hours</h4>
                <p className="mt-3 text-sm text-muted-foreground">Open 7am to 11pm daily, we're here when you need us. Your health doesn't wait for business hours.</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                  <Heart className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Professional Care</h4>
                <p className="mt-3 text-sm text-muted-foreground">Our licensed pharmacists are available for consultations, medication reviews, and health advice.</p>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={"Our Pharmacy Services"} subtitle={"Comprehensive pharmaceutical care for your health needs."}>
        <div className="mt-8 container-x">
          <GridContainer columns={3} gap="lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                <Pill className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prescription Dispensing</h3>
              <p className="text-sm text-muted-foreground">Expert review and fast dispensing of all prescription medications with clear usage instructions.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                <TrendingUp className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chronic Disease Management</h3>
              <p className="text-sm text-muted-foreground">Reliable refills and support for managing diabetes, hypertension, and other chronic conditions.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                <Shield className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medication Counseling</h3>
              <p className="text-sm text-muted-foreground">Personal guidance from our pharmacists on medication use, interactions, and side effects.</p>
            </div>
          </GridContainer>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                <Heart className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Wellness & Supplements</h4>
              <p className="text-sm text-muted-foreground">Curated selection of vitamins, supplements, and wellness products to support your health goals.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                <Clock className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Health Screening</h4>
              <p className="text-sm text-muted-foreground">Free blood pressure checks and health screenings to monitor your vital health indicators.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#22c55e] rounded-full mb-6">
                <Shield className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Insurance Accepted</h4>
              <p className="text-sm text-muted-foreground">We accept NHIF and other major health insurance plans to make quality pharmacy care accessible.</p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={undefined} subtitle={undefined}>
        <div className="container-x">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#22c55e]">Why Choose Subgeo Pharmacy</h2>
            <p className="mt-4 max-w-3xl mx-auto text-sm text-muted-foreground">We're not just a pharmacy – we're your healthcare partner in Umoja. Our commitment to quality, accessibility, and professional care has made us a trusted name in the community since we opened. Whether you need prescription medications, wellness products, or health advice, we're here for you.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#22c55e] text-white px-4 py-2 rounded-t-full rounded-br-full text-sm">Quality</div>
              <div className="overflow-hidden rounded-sm">
                <img src={pharmacyImg} alt="quality-meds" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#22c55e] font-semibold">Quality Assured Medications</h3>
              <p className="mt-2 text-sm text-muted-foreground">Every medication in our pharmacy is sourced from licensed distributors and stored under optimal conditions to ensure potency and safety.</p>
            </article>

            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#22c55e] text-white px-4 py-2 rounded-t-full rounded-br-full text-sm">Expert</div>
              <div className="overflow-hidden rounded-sm">
                <img src={pharmacyImg} alt="pharmacists" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#22c55e] font-semibold">Licensed Pharmacists</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our team of registered pharmacists is available to answer questions, provide medication counseling, and ensure safe and effective medication use.</p>
            </article>

            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#22c55e] text-white px-4 py-2 rounded-t-full rounded-br-full text-sm">Accessible</div>
              <div className="overflow-hidden rounded-sm">
                <img src={pharmacyImg} alt="accessible" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#22c55e] font-semibold">Always Accessible</h3>
              <p className="mt-2 text-sm text-muted-foreground">Extended hours from 7am to 11pm every day, plus acceptance of major insurance plans, makes quality pharmacy care accessible to everyone in our community.</p>
            </article>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="dark" title={"What Our Customers Say"} subtitle={"Real feedback from people we've served"}>
        <div className="container-x">
          <div className="text-center text-white max-w-3xl mx-auto">
            <p className="mb-6">"I've been coming to Subgeo Pharmacy for my chronic medications, and the service is always excellent. The pharmacists take time to explain everything and answer my questions. It's a relief having professionals who truly care about my health."</p>
            <p className="font-semibold">— Margaret Kipchoge</p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection title={"Visit Us Today"} subtitle={"Get the pharmaceutical care you deserve"}>
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 font-semibold">Contact Information</h3>
            <p className="text-muted-foreground mb-2"><Phone className="inline mr-2 size-4" />Phone: {branch.phone}</p>
            <p className="text-muted-foreground mb-2">Hours: {branch.hours}</p>
            <div className="mt-6">
              <Link to="/contact" className="inline-block">
                <PremiumButton variant="primary" size="lg">Book Appointment</PremiumButton>
              </Link>
            </div>
          </div>

          <div>
            <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden rounded-sm">
              <iframe
                title="Subgeo Pharmacy map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.123456789!2d36.874!3d-1.269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a...!2sSUBGEO%20CHEMIST%20LTD!5e0!3m2!1sen!2ske!4v161234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={undefined} subtitle={undefined} className="py-12">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#22c55e] mb-4">About Subgeo Pharmacy</h3>
              <p className="text-sm text-muted-foreground">Part of the trusted Subgeo group of companies, our pharmacy is committed to providing accessible, quality pharmaceutical care to the communities we serve. With licensed pharmacists and a comprehensive inventory, we're your healthcare partner.</p>

              <div className="mt-6 flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-xs">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#1da1f2] flex items-center justify-center text-white text-xs">t</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#db4437] flex items-center justify-center text-white text-xs">g</a>
              </div>

              <p className="mt-6 text-xs">© 2025 Subgeo Pharmacy</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#22c55e] mb-4">Get In Touch <span className="text-[#1f6feb]">{branch.phone}</span></h3>
              <p className="text-sm text-muted-foreground">Need advice on medications or want to book a health screening? Contact us for all your pharmaceutical needs.</p>

              <div className="mt-6 flex items-center gap-4">
                <input type="email" placeholder="Enter your email" className="px-4 py-3 border rounded-sm flex-1" />
                <button className="bg-[#22c55e] text-white px-4 py-3 rounded-sm">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <Footer />
    </div>
  );
}
