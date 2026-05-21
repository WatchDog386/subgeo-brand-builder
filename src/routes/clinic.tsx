import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Phone, Stethoscope, Users, Shield, Zap } from "lucide-react";
import { branches } from "@/lib/branches";
import { PremiumHero, PremiumSection, PremiumButton } from "@/components/premium/PremiumLayout";
import { GridContainer } from "@/components/premium/PremiumGrid";
import clinicImg from "@/assets/clinic.jpg";

export const Route = createFileRoute("/clinic")({
  head: () => ({
    meta: [
      { title: "Subgeo Medical Clinic — Compassionate primary care for every family." },
      {
        name: "description",
        content:
          "A modern outpatient clinic offering walk-in and booked consultations across general practice, family medicine and minor procedures — delivered by qualified clinicians.",
      },
      { property: "og:title", content: "Subgeo Medical Clinic — Subgeo" },
      {
        property: "og:description",
        content: "Compassionate primary care for every family.",
      },
      { property: "og:image", content: clinicImg },
    ],
  }),
  component: ClinicPage,
});

function ClinicPage() {
  const branch = {
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
          label: "Book Consultation",
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
                    <img src={clinicImg} alt={`clinic-${i}`} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Healthcare for Your Family</h2>

              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>General Consultations</li>
                <li>Paediatric Care</li>
                <li>Women's Health Services</li>
                <li>Minor Procedures</li>
                <li>Vaccinations & Immunisations</li>
                <li>Chronic Disease Management</li>
                <li>Health Referrals</li>
                <li>Digital Medical Records</li>
              </ul>

              <p className="mt-6 text-muted-foreground max-w-xl">Our qualified clinicians provide compassionate, professional healthcare in a modern facility equipped to handle a wide range of medical needs.</p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection className="py-20" title={"About Our Clinic"} subtitle={undefined}>
        <div id="about" className="container-x">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-6">
              Subgeo Medical Clinic is a modern outpatient facility dedicated to providing accessible, quality healthcare to families in Umoja and beyond. With a team of qualified clinicians and modern diagnostic equipment, we're committed to delivering compassionate care at every visit.
            </p>
            <p>
              Whether you're seeking routine check-ups, treatment for acute illnesses, or management of chronic conditions, our clinic is designed to serve the entire family from birth to adulthood.
            </p>
          </div>

          <div className="mt-12 container-x">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                  <Stethoscope className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Qualified Clinicians</h4>
                <p className="mt-3 text-sm text-muted-foreground">Our team of registered medical professionals brings expertise and compassion to every consultation.</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                  <Clock className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Same-Day Appointments</h4>
                <p className="mt-3 text-sm text-muted-foreground">Most consultations are completed within an hour of arrival, minimizing wait times for urgent care.</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                  <Users className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Family-Centred Care</h4>
                <p className="mt-3 text-sm text-muted-foreground">From newborns to seniors, we provide integrated healthcare for your entire family under one roof.</p>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={"Our Clinical Services"} subtitle={"Comprehensive healthcare for every age and need."}>
        <div className="mt-8 container-x">
          <GridContainer columns={3} gap="lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                <Stethoscope className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">General Consultations</h3>
              <p className="text-sm text-muted-foreground">Expert assessment and treatment for common illnesses and health concerns by experienced clinicians.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                <Users className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Paediatric Care</h3>
              <p className="text-sm text-muted-foreground">Specialized care for infants, children, and adolescents with a focus on healthy development.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                <Shield className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Women's Health</h3>
              <p className="text-sm text-muted-foreground">Comprehensive healthcare services for women at every stage of life, from adolescence through menopause.</p>
            </div>
          </GridContainer>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                <Zap className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Minor Procedures & Dressings</h4>
              <p className="text-sm text-muted-foreground">Professional handling of wound care, minor surgical procedures, and medical dressings in a sterile environment.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                <Shield className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Vaccinations & Immunisations</h4>
              <p className="text-sm text-muted-foreground">Complete immunisation schedules for children and adults, with proper record-keeping and documentation.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#06b6d4] rounded-full mb-6">
                <Stethoscope className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Health Referrals</h4>
              <p className="text-sm text-muted-foreground">When specialist care is needed, we provide smooth referrals to trusted healthcare partners.</p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={undefined} subtitle={undefined}>
        <div className="container-x">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#06b6d4]">Why Patients Choose Us</h2>
            <p className="mt-4 max-w-3xl mx-auto text-sm text-muted-foreground">Our clinic has become a trusted healthcare destination because we combine medical expertise with genuine care for our patients. Every visit is an opportunity to build a lasting relationship with your healthcare provider.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#06b6d4] text-white px-4 py-2 rounded-t-full rounded-br-full text-sm">Modern</div>
              <div className="overflow-hidden rounded-sm">
                <img src={clinicImg} alt="modern-facility" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#06b6d4] font-semibold">Modern Facility</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our clinic is equipped with state-of-the-art diagnostic equipment and maintains high standards of cleanliness and safety.</p>
            </article>

            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#06b6d4] text-white px-4 py-2 rounded-t-full rounded-br-full text-sm">Accessible</div>
              <div className="overflow-hidden rounded-sm">
                <img src={clinicImg} alt="accessible" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#06b6d4] font-semibold">Accessible Hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">Open Monday through Saturday with extended hours to fit your schedule, and most consultations completed within the hour.</p>
            </article>

            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#06b6d4] text-white px-4 py-2 rounded-t-full rounded-br-full text-sm">Caring</div>
              <div className="overflow-hidden rounded-sm">
                <img src={clinicImg} alt="caring-team" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#06b6d4] font-semibold">Caring Team</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our clinicians and support staff are committed to providing compassionate, personalized care to every patient.</p>
            </article>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="dark" title={"Patient Testimonials"} subtitle={"Hear from families who trust us"}>
        <div className="container-x">
          <div className="text-center text-white max-w-3xl mx-auto">
            <p className="mb-6">"Taking my family to Subgeo Clinic has been the best decision. The doctors are thorough, the staff is friendly, and we never feel rushed. They treat us like family, not just patients. I highly recommend them to anyone looking for quality healthcare."</p>
            <p className="font-semibold">— David Kipchoge</p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection title={"Book Your Consultation"} subtitle={"Professional healthcare when you need it"}>
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
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
                title="Subgeo Clinic map"
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
              <h3 className="text-2xl font-semibold text-[#06b6d4] mb-4">About Our Clinic</h3>
              <p className="text-sm text-muted-foreground">Subgeo Medical Clinic is part of the trusted Subgeo group, committed to providing quality healthcare to families in Umoja and surrounding areas. We believe in family-centered care delivered with compassion and professionalism.</p>

              <div className="mt-6 flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-xs">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#1da1f2] flex items-center justify-center text-white text-xs">t</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#db4437] flex items-center justify-center text-white text-xs">g</a>
              </div>

              <p className="mt-6 text-xs">© 2025 Subgeo Medical Clinic</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#06b6d4] mb-4">Get In Touch <span className="text-[#1f6feb]">{branch.phone}</span></h3>
              <p className="text-sm text-muted-foreground">Have questions about our services or want to schedule a consultation? We're here to help with all your healthcare needs.</p>

              <div className="mt-6 flex items-center gap-4">
                <input type="email" placeholder="Enter your email" className="px-4 py-3 border rounded-sm flex-1" />
                <button className="bg-[#06b6d4] text-white px-4 py-3 rounded-sm">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <Footer />
    </div>
  );
}
