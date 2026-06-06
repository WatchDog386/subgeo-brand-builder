import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { ArrowRight, ArrowUpRight, Check, Clock, Phone, Pill, Heart, Shield, TrendingUp } from "lucide-react";
=======
import { ArrowRight, ArrowUpRight, Check, Clock, Phone, Pill, Heart, Shield, TrendingUp, Play, Facebook, Twitter, Instagram, Linkedin, ClipboardList, Briefcase, Users, Globe } from "lucide-react";
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
import { branches } from "@/lib/branches";
import { PremiumHero, PremiumSection, PremiumButton } from "@/components/premium/PremiumLayout";
import { GridContainer } from "@/components/premium/PremiumGrid";
import pharmacyImg from "@/assets/pharmacy.jpg";
<<<<<<< HEAD
=======
import labImg from "@/assets/lab.jpg";
import guideImg from "@/assets/Guide.png";
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396

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
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-white text-foreground overflow-x-clip font-sans">
      <Navbar />

      {/* EXACT MATCH HERO SECTION */}
      <section className="mt-28 lg:mt-36 pt-8 pb-8 w-full bg-white relative flex justify-center">
        <div className="container-x w-full max-w-[1240px] px-4 md:px-0">
          <div className="relative w-full min-h-[400px] lg:min-h-[480px] overflow-hidden bg-white mx-auto">
            
            {/* Background Image Layer underneath */}
            <div className="absolute top-0 bottom-0 left-0 w-full z-0">
              <img src={pharmacyImg} alt="Pharmacy" className="w-full h-full object-cover object-left lg:object-center" />
            </div>

            {/* Slanted White Background Area overlaying the right side (Slant \) */}
            <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none" style={{ clipPath: 'polygon(39% 0, 100% 0, 100% 100%, 49% 100%)' }}>
                <div className="absolute inset-0 bg-white"></div>
                
                {/* Light grey rounded shape at the bottom right */}
                <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[80%] bg-[#eff0f2] rounded-tl-[150px] opacity-70"></div>
                
                {/* Decorative floating grey play buttons on the white bg */}
                <svg width="70" height="70" viewBox="0 0 200 200" fill="#e9ecef" className="absolute top-[18%] left-[45%] opacity-80">
                  <path d="M40 30 Q 40 10, 60 20 L 160 80 Q 180 90, 160 100 L 60 160 Q 40 170, 40 150 Z" />
                </svg>
                <svg width="45" height="45" viewBox="0 0 200 200" fill="#e9ecef" className="absolute top-[45%] left-[50%] opacity-80 transform rotate-[-20deg]">
                  <path d="M40 30 Q 40 10, 60 20 L 160 80 Q 180 90, 160 100 L 60 160 Q 40 170, 40 150 Z" />
                </svg>
            </div>

            {/* Light Blue Diagonal Ribbon (Underneath solid) */}
            <div className="hidden lg:block absolute inset-0 z-15 pointer-events-none" style={{ clipPath: 'polygon(34% 0, 42% 0, 52% 100%, 44% 100%)' }}>
                <div className="absolute inset-0 bg-[#c6dffc]"></div>
            </div>

            {/* Solid Blue Diagonal Ribbon */}
            <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none" style={{ clipPath: 'polygon(26% 0, 37% 0, 47% 100%, 36% 100%)' }}>
                <div className="absolute inset-0 bg-[#4b8bf4]"></div>
            </div>

            {/* White overlay for Mobile only */}
            <div className="block lg:hidden absolute inset-0 bg-white/90 z-20 backdrop-blur-[2px]"></div>

            {/* Left Edge Fade for ultra-wide screens */}
            <div className="hidden lg:block absolute top-0 bottom-0 -left-px w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-25 pointer-events-none"></div>

            {/* Content Container */}
            <div className="absolute inset-0 z-30 flex items-center justify-center lg:justify-end lg:pr-[5%] pointer-events-none">
              <div className="flex flex-col items-center lg:items-end pointer-events-auto h-full w-full lg:w-[60%] justify-between py-8 lg:py-12 relative">
                
                {/* Top: Socials Row */}
                <div className="flex items-center gap-3 w-full justify-center lg:justify-end mb-6 lg:mb-10 lg:pr-8">
                  <span className="text-[#5190f5] text-[13px] lg:text-[14px] font-medium tracking-wide">@SubgeoHealth</span>
                  <div className="flex gap-2">
                    <a href="#" className="w-[28px] h-[28px] rounded-full bg-[#5190f5] text-white flex items-center justify-center hover:bg-[#3b82f6] shadow-sm"><svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 8 23.3c.1-2 .2-5.1-.4-7.3-1-3.6-2.5-6.5-2.5-6.5S4 6.7 5.7 4.9c1.4-1.5 3.3-2 5.5-2 4 0 6.6 2.4 6.6 5.8 0 4-2.5 7.1-6 7.1-1.8 0-3.4-1-4-2 0 0-.9 3.3-1.1 4.2-.3 1.2-1.3 2.7-1.9 3.6A12 12 0 1 0 12 0z"/></svg></a>
                    <a href="#" className="w-[28px] h-[28px] rounded-full bg-[#5190f5] text-white flex items-center justify-center hover:bg-[#3b82f6] shadow-sm"><Twitter className="w-3.5 h-3.5" fill="currentColor" stroke="none"/></a>
                    <a href="#" className="w-[28px] h-[28px] rounded-full bg-[#5190f5] text-white flex items-center justify-center hover:bg-[#3b82f6] shadow-sm"><Facebook className="w-4 h-4" fill="currentColor" stroke="none"/></a>
                    <a href="#" className="w-[28px] h-[28px] rounded-full bg-[#5190f5] text-white flex items-center justify-center hover:bg-[#3b82f6] shadow-sm"><Instagram className="w-3.5 h-3.5"/></a>
                  </div>
                </div>

                {/* Middle: Headlines Container */}
                <div className="flex flex-col items-center lg:transform lg:translate-x-12 lg:-mr-4 w-full z-10 text-center">
                  <h1 className="font-sans text-[clamp(28px,3vw,52px)] leading-[1.1] font-medium text-[#4b8bf4] mb-1">
                     Subgeo Pharmacy
                  </h1>
                  <h2 className="font-sans text-[clamp(26px,4vw,60px)] leading-[1.1] tracking-tighter font-[900] text-[#0f4eb5]">
                     We Treat But God Heals
                  </h2>
                </div>

                {/* Bottom: Button and Email Container */}
                <div className="flex flex-col w-full relative mt-6 lg:mt-10">
                  <div className="w-full flex justify-center lg:justify-end lg:pr-[8%] z-10">
                    <button className="bg-[#5190f5] hover:bg-[#3b82f6] text-white h-[42px] lg:h-[48px] rounded-[4px] font-sans px-8 lg:px-10 text-[15px] lg:text-[17px] font-medium transition-all shadow-sm">
                       Check It Now
                    </button>
                  </div>
                  <div className="w-full flex justify-center lg:justify-end lg:mr-8 mt-6 lg:mt-8 text-[#9bbcf4] text-[15px] lg:text-[18px] font-medium z-10">
                     support@subgeo.co.ke
                  </div>
                </div>

              </div>
            </div>
            
            {/* Right Edge Fade to blend container smoothly into page background on ultra-wide screens */}
            <div className="hidden lg:block absolute top-0 bottom-0 -right-px w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-40 pointer-events-none"></div>

          </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE SECOND SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-x max-w-[1200px] mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-sans font-[900] tracking-tighter text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b]">
              Professional Pharmacy <br/>
              <span className="text-[#0ea5e9]">Services in Umoja</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Circular Graphic (Swapped) */}
            <div className="flex justify-center relative order-last lg:order-first">
              <div className="relative w-full max-w-[450px] aspect-square rounded-full border-[8px] border-[#a855f7] p-2">
                {/* Floating decoration dots */}
                <div className="absolute top-[5%] right-[10%] w-12 h-12 bg-[#22c55e] rounded-full"></div>
                <div className="absolute top-[45%] left-[-5%] w-8 h-8 bg-[#0ea5e9] rounded-full"></div>
                <div className="absolute bottom-[5%] right-[15%] w-16 h-16 bg-[#f97316] rounded-full"></div>
                
                {/* Main Image */ }
                <div className="w-full h-full rounded-full overflow-hidden relative">
                   <img src={guideImg} alt="Pharmacy Service" className="w-full h-full object-cover" />
                </div>
                {/* Quotes icon */}
                <div className="absolute bottom-10 left-10 text-[80px] text-[#22c55e] leading-none font-serif rotate-180">
                  "
                </div>

                <div className="absolute -bottom-10 inset-x-0 text-center text-[#1e293b]">
                  <p className="font-bold text-[14px]">Subgeo Pharmacy</p>
                  <p className="text-[12px] text-[#8b5cf6] font-medium">"Your trusted healthcare partner"</p>
                </div>
              </div>
            </div>

            {/* Right: Feature List (Swapped) */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Prescription & OTC <span className="text-[#0ea5e9]">Medications</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Expert review and fast dispensing of all prescription medications and a wide array of over-the-counter products to keep you consistently healthy.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Chronic Disease <span className="text-[#f97316]">Management</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Reliable supply and dedicated support for diabetes, hypertension and more. We stay ahead with consistent tracking of your health needs.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Wellness & Health <span className="text-[#a855f7]">Screenings</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Take charge of your vitals with our free blood pressure checks, baby & maternal care, and personal guidance from licensed pharmacists.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">NHIF <span className="text-[#22c55e]">Accepted</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  We easily accept major health insurance plans including NHIF to ensure seamless billing with no unexpected charges or hidden fees.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE FOURTH SECTION (Features that make you efficient) */}
      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="container-x max-w-[1200px] mx-auto text-center">
          <h2 className="font-sans font-[900] tracking-tighter text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b] mb-4">
            Services that
          </h2>
          <h2 className="font-sans font-[900] tracking-tighter text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#0ea5e9] mb-16">
            support your wellbeing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-lg flex items-center justify-center mb-6 shadow-sm border border-[#bae6fd]">
                <Pill className="text-[#0ea5e9] w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-3">Quality Assured</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                Subgeo makes it easy to add necessary medications to your daily regimen as well as pass important health information along to our team. Every medication is checked and properly stored right here at our pharmacy facility.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-[#f3e8ff] rounded-lg flex items-center justify-center mb-6 shadow-sm border border-[#e9d5ff]">
                <Clock className="text-[#a855f7] w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-3">Stay healthy</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                We know how difficult it is to manage multiple prescriptions, chronic conditions and wellness programs for your family. With our extended hours (7am to 11pm), you can easily get all your health needs addressed in one organized place.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-[#dcfce7] rounded-lg flex items-center justify-center mb-6 shadow-sm border border-[#bbf7d0]">
                <Heart className="text-[#22c55e] w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-3">Professional Care</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                Our platform of qualified experts allows you to easily share medical reports and collaborate on health goals with our registered pharmacists. Receive accurate wellness counseling with just one visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn with Subgeo Pharmacy */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-b border-gray-100">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-between">
            <svg className="w-[400px] h-full text-blue-50 opacity-[0.6]" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="8">
              <circle cx="100" cy="150" r="25" />
              <line x1="125" y1="150" x2="275" y2="150" />
              <circle cx="300" cy="150" r="25" />
              <line x1="315" y1="170" x2="380" y2="280" />
              <circle cx="400" cy="300" r="30" />
              <circle cx="50" cy="350" r="20" />
              <line x1="70" y1="350" x2="180" y2="350" />
              <circle cx="200" cy="350" r="20" />
            </svg>
            <svg className="w-[400px] h-full text-blue-50 opacity-[0.6]" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="8">
              <circle cx="300" cy="100" r="25" />
              <line x1="275" y1="100" x2="125" y2="100" />
              <circle cx="100" cy="100" r="25" />
              <line x1="85" y1="120" x2="50" y2="220" />
              <circle cx="40" cy="240" r="20" />
              <line x1="55" y1="255" x2="150" y2="350" />
              <circle cx="165" cy="365" r="20" />
              <circle cx="350" cy="300" r="25" />
              <line x1="325" y1="300" x2="185" y2="365" />
            </svg>
        </div>

        <div className="container-x max-w-[1200px] mx-auto relative z-10">
          
          {/* TOP ADS BANNERS ROW */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mb-16">
            <div className="w-full md:w-1/2 overflow-hidden shadow-md group">
               {/* Note: Ideally place actual ad banners here. Using default pharmacyImg for structure placeholder */}
               <div className="relative w-full aspect-[2/1] bg-gray-100 overflow-hidden border border-gray-200">
                  <img src={pharmacyImg} alt="Ad left" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 flex flex-col justify-center px-8 bg-gradient-to-r from-white via-white/80 to-transparent">
                     <h4 className="font-sans text-[clamp(18px,2vw,28px)] leading-[1.1] font-medium text-red-600 mb-1">Health, Skin And Lifestyle Care</h4>
                     <h3 className="font-sans text-[clamp(22px,3vw,36px)] leading-[1.1] tracking-tighter font-[900] text-blue-900 mb-2">On Your Palms</h3>
                     <p className="text-xs lg:text-sm text-gray-700 mt-2 max-w-[60%]">Discover a world of beauty essentials that care for your skin, enhance your glow, and bring out your best self.</p>
                     
                     <div className="mt-4 bg-red-600 text-white font-bold w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-[10px] leading-none uppercase">up to</span>
                        <span className="text-xl leading-none">10%</span>
                        <span className="text-sm leading-none uppercase">OFF</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full md:w-1/2 overflow-hidden shadow-md group">
               <div className="relative w-full aspect-[2/1] bg-[#1a0f0d] overflow-hidden border border-[#2d1b17]">
                  <div className="absolute inset-0 mix-blend-overlay opacity-30">
                     <img src={pharmacyImg} alt="Ad right background" className="w-full h-full object-cover"/>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center px-8 text-white z-10">
                      <h4 className="font-sans text-[clamp(18px,2vw,28px)] leading-[1.1] font-medium text-white mb-1">30+ YEARS OF SERVICE.</h4>
                      <h3 className="font-sans text-[clamp(22px,3vw,36px)] leading-[1.1] tracking-tighter font-[900] text-red-500 mb-2">A LIFETIME OF CARE.</h3>
                      <p className="text-xs lg:text-sm text-gray-300 max-w-[60%] border-t border-red-500 pt-4 mt-2">Whether it's medicine, wellness, or everyday health needs, we've been here for your family—then, now, and always.</p>
                  </div>
                  <div className="absolute right-[-10%] top-0 h-full w-[50%] bg-gradient-to-l from-yellow-900 to-transparent z-0 skew-x-[-20deg]"></div>
                  
                  {/* Decorative badge placeholder right side */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-yellow-500/30 flex items-center justify-center z-20 overflow-hidden p-2">
                      <div className="w-full h-full border border-yellow-400 rounded-full flex flex-col items-center justify-center bg-black/40">
                         <span className="text-4xl font-serif text-yellow-400 font-bold">30</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="text-[11px] text-gray-500 mb-8 mt-[-30px] font-mono">[elfsight_popup id="1"]</div>


          <h2 className="text-[#0d173d] font-sans font-[900] tracking-tight text-[clamp(24px,3vw,28px)] mb-4">
            Learn with Subgeo Pharmacy
          </h2>
          
          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] px-6 pt-8 pb-8 relative mt-4 flex flex-col h-full">
              {/* Date Badge */}
              <div className="absolute -top-4 left-6 bg-white border border-[#e25c52] px-[10px] py-1 flex flex-col items-center justify-center">
                <span className="text-[#e25c52] font-bold text-[15px] leading-none mb-0.5">13</span>
                <span className="text-[#e25c52] text-[10px] font-semibold uppercase tracking-wider leading-none">Aug</span>
              </div>

              <div className="flex gap-5 mb-5 items-start">
                <div className="w-[45%] h-[120px] bg-gray-100 overflow-hidden relative">
                   <img src="https://pharmacareonline.qa/cdn/shop/articles/Choose_the_Right_Skincare_Products_for_Your_Skin_Type.webp?v=1755681987" alt="Skincare" className="w-full h-full object-cover" />
                </div>
                <div className="w-[55%]">
                   <h3 className="font-sans font-[900] tracking-tight text-[#111827] text-[14px] lg:text-[15px] leading-tight">
                     How to Choose the Right Skincare Products for Your Skin
                   </h3>
                </div>
              </div>

              <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow pr-4">
                Selecting the right skincare products can be a challenge, especially when considering the impact of [...]
              </p>

              <div className="flex justify-center w-full mt-auto">
                <button className="border border-[#e25c52] text-[#e25c52] rounded-full px-8 py-[6px] text-[13px] font-medium hover:bg-red-50 transition-colors">
                  Read More
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] px-6 pt-8 pb-8 relative mt-4 flex flex-col h-full">
              {/* Date Badge */}
              <div className="absolute -top-4 left-6 bg-white border border-[#e25c52] px-[10px] py-1 flex flex-col items-center justify-center">
                <span className="text-[#e25c52] font-bold text-[15px] leading-none mb-0.5">13</span>
                <span className="text-[#e25c52] text-[10px] font-semibold uppercase tracking-wider leading-none">Aug</span>
              </div>

              <div className="flex gap-5 mb-5 items-start">
                <div className="w-[45%] h-[120px] bg-gray-100 overflow-hidden relative">
                   <img src="https://assets.clevelandclinic.org/transform/LargeFeatureImage/de3bda53-59e5-4342-a45c-e64c72c1207d/foods-with-vitamins-1182014891" alt="Supplements" className="w-full h-full object-cover" />
                </div>
                <div className="w-[55%]">
                   <h3 className="font-sans font-[900] tracking-tight text-[#111827] text-[14px] lg:text-[15px] leading-tight">
                     Top Vitamins and Supplements for Boosting Immunity in Kenya
                   </h3>
                </div>
              </div>

              <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow pr-4">
                In today's fast-paced world, maintaining a strong immune system is essential, especially for Kenyans facing [...]
              </p>

              <div className="flex justify-center w-full mt-auto">
                <button className="border border-[#e25c52] text-[#e25c52] rounded-full px-8 py-[6px] text-[13px] font-medium hover:bg-red-50 transition-colors">
                  Read More
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] px-6 pt-8 pb-8 relative mt-4 flex flex-col h-full">
              {/* Date Badge */}
              <div className="absolute -top-4 left-6 bg-white border border-[#e25c52] px-[10px] py-1 flex flex-col items-center justify-center">
                <span className="text-[#e25c52] font-bold text-[15px] leading-none mb-0.5">13</span>
                <span className="text-[#e25c52] text-[10px] font-semibold uppercase tracking-wider leading-none">Aug</span>
              </div>

              <div className="flex gap-5 mb-5 items-start">
                <div className="w-[45%] h-[120px] bg-gray-100 overflow-hidden relative">
                   <img src="https://rafpharmacy.com/cdn/shop/articles/high-angle-pill-foils-plastic-containers.jpg?v=1780556070&width=1500" alt="Medicines" className="w-full h-full object-cover" />
                </div>
                <div className="w-[55%]">
                   <h3 className="font-sans font-[900] tracking-tight text-[#111827] text-[14px] lg:text-[15px] leading-tight">
                     Essential Over-the-Counter Medicines Every Household Should Have
                   </h3>
                </div>
              </div>

              <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow pr-4">
                In every household, having a well-stocked medicine cabinet is crucial for handling common health issues [...]
              </p>

              <div className="flex justify-center w-full mt-auto">
                <button className="border border-[#e25c52] text-[#e25c52] rounded-full px-8 py-[6px] text-[13px] font-medium hover:bg-red-50 transition-colors">
                  Read More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Learn with Subgeo Pharmacy */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="w-full mx-auto relative overflow-hidden bg-[#f0f5f8] min-h-[400px] lg:min-h-[500px] flex items-center">
            
            {/* Top Left Leaves */}
            <div className="absolute top-0 left-4 lg:left-10 w-24 h-24 pointer-events-none opacity-80">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M40 0 C55 20 65 40 45 60 C30 50 15 25 40 0Z" fill="#a8c1cf"/>
                 <path d="M45 0 C60 15 75 35 60 55 C45 40 35 15 45 0Z" fill="#bacfd9"/>
                 <path d="M30 10 C20 30 10 40 0 35 C10 20 25 15 30 10Z" fill="#a8c1cf"/>
              </svg>
            </div>

            {/* Bottom Mid Leaves */}
            <div className="absolute bottom-[-10%] right-[35%] w-32 h-32 pointer-events-none opacity-80 transform rotate-[160deg]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M40 0 C55 20 65 40 45 60 C30 50 15 25 40 0Z" fill="#a8c1cf"/>
                 <path d="M45 0 C60 15 75 35 60 55 C45 40 35 15 45 0Z" fill="#bacfd9"/>
                 <path d="M30 10 C20 30 10 40 0 35 C10 20 25 15 30 10Z" fill="#a8c1cf"/>
              </svg>
            </div>

            {/* Huge Blue Circle mask for Right Image */}
            <div className="absolute top-[-20%] bottom-[-20%] right-[-10%] w-[60%] lg:w-[45%] bg-[#a5c2d3] rounded-full z-0 overflow-hidden shadow-2xl border-8 border-white/20">
               {/* Woman Image masked inside circle - ensuring absolute clarity */}
               <img src={labImg} alt="Radiant skin" className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>

            <div className="container-x max-w-[1400px] w-full mx-auto relative z-10 flex flex-col md:flex-row items-stretch lg:px-16 py-12">
               
               {/* Left Text Content */}
               <div className="w-full md:w-[45%] flex flex-col items-start justify-center pl-4 lg:pl-0 mb-8 md:mb-0 mt-4 md:mt-0">
                  <h3 className="font-sans text-[clamp(24px,3vw,36px)] leading-[1.1] font-medium text-[#6495ca] mb-1">
                    Unlock Better Health
                  </h3>
                  <h2 className="font-sans text-[clamp(28px,3.5vw,48px)] leading-[1.1] tracking-tighter font-[900] text-[#3b71ad] mb-8">
                    Discover The Transformative Power of Subgeo Pharmacy!
                  </h2>
                  
                  {/* Badge with Shield Icon */}
                  <div className="relative inline-flex items-center mt-2 pl-4 pointer-events-none">
                     {/* Icon Circle overlay */}
                     <div className="absolute left-[-5px] w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center shadow-md z-10 border border-gray-100">
                        <Shield className="w-6 h-6 text-[#3b71ad]" strokeWidth={2} />
                     </div>
                     {/* Pill Badge background */}
                     <div className="bg-[#467ab6] text-white font-bold text-[14px] lg:text-[15px] tracking-widest uppercase pl-[56px] pr-8 py-3.5 lg:py-4 rounded-r-full rounded-l-full shadow-lg relative z-0">
                        Trusted Care
                     </div>
                  </div>
               </div>

               {/* Center Products Podium */}
               <div className="w-full md:w-[35%] flex items-end justify-center relative mt-16 md:mt-0 z-10">
                  <div className="relative w-[300px] lg:w-[400px] h-full flex flex-col items-center justify-end pb-8">
                     
                     {/* Placeholder blocks mimicking the CeraVe bottles layout */}
                     <div className="flex items-end justify-center gap-2 lg:gap-4 relative z-10 mb-[-10px] w-full px-8">
                        <div className="w-[30%] aspect-[3/4] bg-white rounded shadow-md border-t-[8px] border-[#0070e0] flex items-center justify-center p-2 opacity-90"><span className="text-[#0070e0] text-[10px] font-bold rotate-[-90deg]">Subgeo Base</span></div>
                        <div className="w-[35%] aspect-[1/2] bg-white rounded-[10px] shadow-lg border-t-[12px] border-[#00bc3a] flex flex-col items-center justify-center p-2"><div className="w-4 h-6 bg-white border border-gray-300 -mt-8 mb-2 rounded-sm"></div><span className="text-[#00bc3a] text-xs font-bold text-center">Subgeo<br/>Care</span></div>
                        <div className="w-[30%] aspect-[2/3] bg-white rounded shadow-md border-t-[10px] border-[#0070e0] flex flex-col items-center justify-center p-2"><div className="w-3 h-5 bg-white border border-gray-300 -mt-6 mb-1 rounded-sm"></div><span className="text-[#0070e0] text-[10px] font-bold text-center">Subgeo Plus</span></div>
                     </div>

                     {/* Oval Base */}
                     <div className="relative w-full">
                         {/* Bottom shadow base */}
                         <div className="w-[110%] ml-[-5%] h-[30px] lg:h-[40px] bg-gradient-to-b from-[#e3ecf0] to-[#c6d7e0] rounded-[50%] shadow-lg border-b-[3px] border-[#a9c1ce]"></div>
                         {/* Top white/flat surface */}
                         <div className="absolute top-[-2px] lg:top-[-4px] w-[106%] ml-[-3%] h-[24px] lg:h-[30px] bg-[#f0f6f8] rounded-[50%]"></div>
                     </div>
                  </div>
               </div>

               {/* Right Side Fill (spacing for the circle mask) */}
               <div className="hidden md:block md:w-[20%]"></div>
            </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE FIFTH SECTION (Real clients, Tangible wins) */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={pharmacyImg} alt="Pharmacy Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-x max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
              {/* Card 1 */}
            <div className="bg-white px-6 pt-10 pb-8 flex flex-col items-center text-center relative shadow-xl rounded-sm">
              <div className="w-20 h-20 bg-[#f8fdf4] rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6">
                 <ClipboardList className="text-[#71d340] w-8 h-8" />
              </div>
              <h3 className="text-[#1a202c] font-sans font-[900] tracking-tight text-[16px] leading-[1.3] mb-4 min-h-[42px]">Regulatory Decisions</h3>
              <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow">
                List of Products, Premises, Professionals, Clinical Trials, Safety Reports
              </p>
              <Link to="/about" className="flex items-center justify-center gap-2 text-[#71d340] font-sans font-[900] tracking-tight text-[13px] hover:text-[#5ab132] transition-colors uppercase">
                <ArrowRight className="w-4 h-4" />
                LEARN MORE
              </Link>
              {/* Bottom Dash */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#71d340]"></div>
            </div>

            {/* Card 2 */}
            <div className="bg-white px-6 pt-10 pb-8 flex flex-col items-center text-center relative shadow-xl rounded-sm">
              <div className="w-20 h-20 bg-[#f8fdf4] rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6">
                 <Briefcase className="text-[#71d340] w-8 h-8" />
              </div>
              <h3 className="text-[#1a202c] font-sans font-[900] tracking-tight text-[16px] leading-[1.3] mb-4 min-h-[42px]">Legal Provisions,<br/>Guidelines, and<br/>Procedures</h3>
              <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow">
                Policy Documents, Laws, Processes, Instructions to Applicants
              </p>
              <Link to="/about" className="flex items-center justify-center gap-2 text-[#71d340] font-sans font-[900] tracking-tight text-[13px] hover:text-[#5ab132] transition-colors uppercase">
                <ArrowRight className="w-4 h-4" />
                LEARN MORE
              </Link>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#71d340]"></div>
            </div>

            {/* Card 3 */}
            <div className="bg-white px-6 pt-10 pb-8 flex flex-col items-center text-center relative shadow-xl rounded-sm">
              <div className="w-20 h-20 bg-[#f8fdf4] rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6">
                 <Users className="text-[#71d340] w-8 h-8" />
              </div>
              <h3 className="text-[#1a202c] font-sans font-[900] tracking-tight text-[16px] leading-[1.3] mb-4 min-h-[42px]">Stakeholder<br/>Consultations</h3>
              <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow">
                Support for public participation in governance ascribed to by the Constitution of Kenya 2010
              </p>
              <Link to="/about" className="flex items-center justify-center gap-2 text-[#71d340] font-sans font-[900] tracking-tight text-[13px] hover:text-[#5ab132] transition-colors uppercase">
                <ArrowRight className="w-4 h-4" />
                LEARN MORE
              </Link>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#71d340]"></div>
            </div>

            {/* Card 4 */}
            <div className="bg-white px-6 pt-10 pb-8 flex flex-col items-center text-center relative shadow-xl rounded-sm">
              <div className="w-20 h-20 bg-[#f8fdf4] rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6">
                 <Globe className="text-[#71d340] w-8 h-8" />
              </div>
              <h3 className="text-[#1a202c] font-sans font-[900] tracking-tight text-[16px] leading-[1.3] mb-4 min-h-[42px]">Online Services</h3>
              <p className="text-[#4b5563] text-[13px] leading-relaxed mb-8 flex-grow">
                PRIMS, Practice, CPD, Clinical Trials, Pharmacovigilance, Transporters
              </p>
              <Link to="/about" className="flex items-center justify-center gap-2 text-[#71d340] font-sans font-[900] tracking-tight text-[13px] hover:text-[#5ab132] transition-colors uppercase">
                <ArrowRight className="w-4 h-4" />
                LEARN MORE
              </Link>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#71d340]"></div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-between">
            <svg className="w-[400px] h-full text-blue-50 opacity-[0.6]" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="8">
              <circle cx="100" cy="150" r="25" />
              <line x1="125" y1="150" x2="275" y2="150" />
              <circle cx="300" cy="150" r="25" />
              <line x1="315" y1="170" x2="380" y2="280" />
              <circle cx="400" cy="300" r="30" />
              <circle cx="50" cy="350" r="20" />
              <line x1="70" y1="350" x2="180" y2="350" />
              <circle cx="200" cy="350" r="20" />
            </svg>
            <svg className="w-[400px] h-full text-blue-50 opacity-[0.6]" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="8">
              <circle cx="300" cy="100" r="25" />
              <line x1="275" y1="100" x2="125" y2="100" />
              <circle cx="100" cy="100" r="25" />
              <line x1="85" y1="120" x2="50" y2="220" />
              <circle cx="40" cy="240" r="20" />
              <line x1="55" y1="255" x2="150" y2="350" />
              <circle cx="165" cy="365" r="20" />
              <circle cx="350" cy="300" r="25" />
              <line x1="325" y1="300" x2="185" y2="365" />
            </svg>
        </div>

        <div className="container-x max-w-[1200px] mx-auto relative z-10">
          
          {/* Main Promotional Banner */}
          <div className="w-full bg-[#f6f2ef] shadow-[0_4px_25px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col md:flex-row min-h-[220px] lg:min-h-[260px] border border-gray-100">
             
             {/* Text Content (Left) */}
             <div className="w-full md:w-[60%] lg:w-[50%] p-8 lg:p-12 z-20 flex flex-col justify-center">
                <h3 className="font-sans text-[clamp(26px,3vw,42px)] leading-[1.1] font-medium text-[#1a237e] mb-1">
                   Cold Season,
                </h3>
                <h2 className="font-sans text-[clamp(28px,4vw,52px)] leading-[1.1] tracking-tighter font-[900] text-[#e22e23] mb-4">
                   Warm Relief
                </h2>
                
                <div className="pr-4 mb-2 text-[#4b5563] text-[13px] md:text-[14px] leading-relaxed">
                   <p>Find fast, effective relief this cold season with our carefully selected</p>
                   <p>flu medications—available now at your neighborhood pharmacy.</p>
                </div>
                
                <p className="text-gray-900 font-bold text-[13px] md:text-[14px]">
                   We're here to help you feel better, sooner.
                </p>
             </div>

             {/* Corner Decoration & Button */}
             <div className="absolute bottom-0 left-0 w-[240px] md:w-[320px] h-[120px] md:h-[150px] z-20 pointer-events-none">
                 <div className="absolute inset-0 bg-[#ffd500]" style={{ clipPath: 'polygon(0 90%, 100% 100%, 0 100%)' }}></div>
                 <div className="absolute inset-0 bg-[#e31828]" style={{ clipPath: 'polygon(0 30%, 100% 100%, 0 100%)' }}></div>
             </div>
             
             <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 z-30 flex items-center gap-1.5 pointer-events-auto">
                 <svg className="w-4 h-4 text-[#ffd500] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                 </svg>
                 <button className="bg-[#ffd500] text-black text-[10px] lg:text-[11px] font-bold px-3 py-1 rounded hover:bg-[#e6c000] transition-colors shadow-sm">
                    SHOP NOW
                 </button>
             </div>

             {/* Products Placeholder (Center) */}
             <div className="hidden md:flex absolute bottom-0 right-[25%] lg:right-[30%] w-[35%] h-[80%] z-10 items-end justify-center pointer-events-none">
                <div className="w-[85%] h-full relative">
                   {/* Mock Circular Podiums */}
                   <div className="absolute bottom-0 left-[10%] w-[40%] h-[30px] bg-white rounded-[50%] shadow-sm border border-gray-200"></div>
                   <div className="absolute bottom-3 left-[40%] w-[45%] h-[35px] bg-white rounded-[50%] shadow-sm border border-gray-200 z-10"></div>
                   <div className="absolute bottom-1 right-[5%] w-[40%] h-[30px] bg-white rounded-[50%] shadow-sm border border-gray-200"></div>
                   
                   {/* Image over podiums */}
                   <img src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/04/16131251/Best-Pharmacy-Website-Designs-1024x528.jpg" alt="Products" className="absolute bottom-6 left-[15%] w-[70%] h-[75%] object-cover rounded-lg shadow-md border-4 border-white opacity-95 grayscale mix-blend-multiply" />
                </div>
             </div>

             {/* End Image (Right) */}
             <div className="absolute right-0 top-0 w-1/3 md:w-[35%] lg:w-[32%] h-full z-0 overflow-hidden">
                <img src="https://www.medisana.com/healthblog/app/uploads/2025/10/Design-ohne-Titel-3.jpg" alt="Cold relief" className="w-full h-full object-cover object-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ef] via-[#f6f2ef]/40 to-transparent"></div>
             </div>
          </div>

          {/* Regulatory Decisions Section matching screenshot */}
          <div className="mt-16 lg:mt-24">
             {/* Note: the Regulatory cards are currently located within the 'py-20 lg:py-28 relative overflow-hidden bg-gray-900' section */}
          </div>

          {/* Heading for next section (if needed matching screenshot) */}
          <div className="mt-16 lg:mt-20">
             <h2 className="text-[#0d173d] font-sans font-[900] tracking-tight text-[clamp(24px,3vw,28px)] mb-3">
               Why Choose Subgeo Pharmacy?
             </h2>
             <div className="w-full h-px bg-gray-200 mb-8"></div>
          </div>

        </div>
      </section>
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396

      <Footer />
    </div>
  );
}
