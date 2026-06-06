import os

content = """import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check, Clock, Phone, Pill, Heart, Shield, TrendingUp, Play } from "lucide-react";
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
    <div className="min-h-screen bg-white text-foreground overflow-x-clip font-sans">
      <Navbar />

      {/* FLOCKSY-STYLE HERO SECTION */}
      <section className="pt-36 lg:pt-48 pb-16 bg-white">
        <div className="container-x max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            {/* Image Composition */}
            <div className="w-full relative group lg:pr-6">
              <div className="absolute inset-0 border-[6px] border-[#22c55e] transform -translate-x-3 translate-y-3 z-0 bg-white"></div>
              <div className="relative bg-[#a855f7] aspect-[16/9] w-full overflow-hidden flex flex-col justify-start items-center z-10 p-6 pt-8">
                <div className="absolute top-[10%] left-[-10%] w-40 h-40 bg-[#22c55e] opacity-90" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', transform: 'rotate(-15deg)' }}></div>
                <div className="absolute top-[15%] right-[-10%] w-48 h-48 bg-yellow-400 opacity-90" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', transform: 'rotate(25deg)' }}></div>
                
                <h2 className="text-white text-[clamp(24px,3vw,32px)] font-display text-center relative z-20 mb-4 tracking-tight leading-[1.1]">
                  Trusted <br /> Medicines & Care
                </h2>
                
                <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center relative z-30 bg-transparent shadow-xl cursor-pointer hover:bg-white/10 transition-colors">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>

                <div className="absolute bottom-0 inset-x-0 h-[45%] flex justify-center z-20">
                  <img src={pharmacyImg} alt="Pharmacy Team" className="object-cover w-full h-full object-top" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-8 lg:pt-0">
              <h1 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b]">
                {branch.name} <br className="hidden md:block"/>
                <span className="text-[#22c55e]">Always nearby</span>
              </h1>
              <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium max-w-xl">
                {branch.description}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white h-[50px] w-full sm:w-[180px] px-8 font-semibold text-[13px] uppercase tracking-wider shadow-sm">
                  Get Started
                </Button>
                <Button className="rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white h-[50px] w-full sm:w-[200px] px-8 font-semibold text-[13px] uppercase tracking-wider shadow-sm">
                  Schedule A Visit
                </Button>
              </div>
            </div>

          </div>

          {/* Global brands */}
          <div className="mt-32 flex flex-col items-center">
            <h3 className="font-display text-[clamp(20px,2vw,26px)] text-[#1e293b]">
              Trusted by <span className="text-[#22c55e]">top healthcare partners</span>
            </h3>
            <div className="mt-12 flex flex-wrap justify-center gap-10 lg:gap-20 items-center grayscale opacity-80">
              <span className="text-2xl font-bold font-serif">NHIF</span>
              <span className="text-2xl font-bold font-sans">KEMSA</span>
              <span className="text-[13px] font-bold font-mono uppercase tracking-widest">Ministry of Health</span>
              <span className="text-[13px] font-bold uppercase tracking-widest">GSK</span>
              <span className="text-2xl font-bold italic">Pfizer</span>
            </div>
          </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE SECOND SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-x max-w-[1200px] mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b]">
              Professional Pharmacy <br/>
              <span className="text-[#0ea5e9]">Services in Umoja</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Feature List */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-2">Prescription & OTC <span className="text-[#0ea5e9]">Medications</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Expert review and fast dispensing of all prescription medications and a wide array of over-the-counter products to keep you consistently healthy.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-2">Chronic Disease <span className="text-[#f97316]">Management</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Reliable supply and dedicated support for diabetes, hypertension and more. We stay ahead with consistent tracking of your health needs.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-2">Wellness & Health <span className="text-[#a855f7]">Screenings</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Take charge of your vitals with our free blood pressure checks, baby & maternal care, and personal guidance from licensed pharmacists.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-2">NHIF <span className="text-[#22c55e]">Accepted</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  We easily accept major health insurance plans including NHIF to ensure seamless billing with no unexpected charges or hidden fees.
                </p>
              </div>
            </div>

            {/* Right: Circular Graphic */}
            <div className="flex justify-center relative">
              <div className="relative w-full max-w-[450px] aspect-square rounded-full border-[8px] border-[#a855f7] p-2">
                {/* Floating decoration dots */}
                <div className="absolute top-[5%] right-[10%] w-12 h-12 bg-[#22c55e] rounded-full"></div>
                <div className="absolute top-[45%] left-[-5%] w-8 h-8 bg-[#0ea5e9] rounded-full"></div>
                <div className="absolute bottom-[5%] right-[15%] w-16 h-16 bg-[#f97316] rounded-full"></div>
                
                {/* Main Image */ }
                <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-[#111827] bg-[#111827] relative">
                   <img src={pharmacyImg} alt="Pharmacy Service" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-[140px] font-serif text-white font-bold leading-none -mt-4">S</span>
                   </div>
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
          </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE THIRD SECTION (Elevate your work day) */}
      <section className="py-20 bg-white">
        <div className="container-x max-w-[1200px] mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b]">
              Elevate your <br/>
              <span className="text-[#a855f7]">healthcare journey today</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Person Image */}
            <div className="flex justify-center lg:justify-start mb-10 lg:mb-0 relative order-last lg:order-first">
              <div className="relative group pr-12 pl-4 pt-10 pb-8">
                {/* Background colored dots */}
                <div className="absolute top-[40%] right-[10%] w-[180px] h-[180px] rounded-full bg-[#0ea5e9] z-0"></div>
                <div className="absolute top-[20%] left-[5%] w-[220px] h-[220px] rounded-full bg-[#f97316] z-0"></div>
                
                {/* Person cut out image */}
                <img 
                  src={pharmacyImg} 
                  alt="Pharmacist professional" 
                  className="relative z-10 w-full max-w-[320px] aspect-[3/4] object-cover rounded-t-full shadow-lg border-b-4 border-white"
                />

                <p className="text-center text-[12px] font-bold text-gray-500 uppercase tracking-widest mt-6 relative z-10">Pharmacist - Subgeo Health Team</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col gap-10 lg:pl-10 order-first lg:order-last">
              <div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-2">A dedicated team for <span className="text-[#a855f7]">every health need</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  From chronic condition management and wellness advice to specialized care packages, your dedicated pharmacy team will deliver high-quality support across all your healthcare needs, safely managed under one trusted brand to keep you healthy.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-2">Boost wellbeing with <span className="text-[#22c55e]">expert counseling</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  We've worked with licensed healthcare professionals to make sure you get the best outcomes. Save time by refilling directly at our location using your NHIF, while our pharmaceutical team uses their expertise to enhance your understanding of the medications.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-2">Meet health goals <span className="text-[#0ea5e9]">without the stress</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Your dedicated pharmacist keeps everything moving along and assists with any questions, while Subgeo's vetted team delivers high-quality medicine safely and on time. Easily get ready-to-use prescriptions with every visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE FOURTH SECTION (Features that make you efficient) */}
      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="container-x max-w-[1200px] mx-auto text-center">
          <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b] mb-4">
            Services that
          </h2>
          <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#0ea5e9] mb-16">
            support your wellbeing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left relative z-10">
            <div className="flex flex-col">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-lg flex items-center justify-center mb-6 border border-[#bae6fd]">
                <Pill className="text-[#0ea5e9] w-8 h-8" />
              </div>
              <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-3">Quality Assured</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                Subgeo makes it easy to add necessary medications to your daily regimen as well as pass important health information along to our team. Every medication is checked and properly stored right here at our pharmacy facility.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-16 h-16 bg-[#f3e8ff] rounded-lg flex items-center justify-center mb-6 border border-[#e9d5ff]">
                <Clock className="text-[#a855f7] w-8 h-8" />
              </div>
              <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-3">Stay healthy</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                We know how difficult it is to manage multiple prescriptions, chronic conditions and wellness programs for your family. With our extended hours (7am to 11pm), you can easily get all your health needs addressed in one organized place.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-16 h-16 bg-[#dcfce7] rounded-lg flex items-center justify-center mb-6 border border-[#bbf7d0]">
                <Heart className="text-[#22c55e] w-8 h-8" />
              </div>
              <h3 className="text-[14px] md:text-[15px] font-bold text-[#1e293b] mb-3">Professional Care</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                Our platform of qualified experts allows you to easily share medical reports and collaborate on health goals with our registered pharmacists. Receive accurate wellness counseling with just one visit.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-4 flex justify-center">
            <Button className="rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white h-[50px] px-10 font-semibold text-[13px] uppercase tracking-wider shadow-sm">
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE FIFTH SECTION (Real clients, Tangible wins) */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
        <div className="container-x max-w-[1200px] mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b] mb-3">
              Real patients. Tangible wins.
            </h2>
            <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#22c55e]">
              See how Subgeo delivers<br/>measurable healthcare impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Left Card - Green */}
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col sm:flex-row border border-gray-100">
              <div className="sm:w-1/2 p-8 bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center relative overflow-hidden h-64 sm:h-auto">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                <img src={pharmacyImg} alt="Pharmacy patient" className="w-[120%] max-w-none ml-10 object-cover rounded-lg shadow-2xl skew-y-3 transform -rotate-6" />
                <h3 className="absolute top-6 left-6 text-white font-serif italic text-[clamp(24px,2.5vw,30px)] font-bold z-10 drop-shadow-md">Health<br/>Journey</h3>
              </div>
              <div className="sm:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#22c55e] leading-none mb-1">500+</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">completed checkups</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#22c55e] leading-none mb-1">1,225</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">prescriptions dispensed</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#22c55e] leading-none mb-1">40%</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">faster refill times</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#22c55e] leading-none mb-1">4.9/5</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">average patient rating</p>
                </div>
                <div>
                  <Button className="rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white h-[50px] px-8 font-semibold text-[13px] uppercase tracking-wider shadow-sm">
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Card - Purple */}
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col sm:flex-row border border-gray-100">
              <div className="sm:w-1/2 p-8 bg-gradient-to-b from-[#a855f7] to-[#7c3aed] flex flex-col items-center justify-center relative overflow-hidden h-64 sm:h-auto">
                <div className="flex items-center gap-3 text-white mb-6 relative z-10 w-full">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-[#a855f7] font-bold text-[clamp(18px,2vw,24px)]">S</span>
                  </div>
                  <span className="font-bold text-[14px] text-white">SubgeoHealth</span>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 w-full relative z-10 shadow-xl mb-4">
                  <div className="text-[10px] text-white/70 mb-2 border-b border-white/20 pb-2">New Prescription</div>
                  <div className="h-2 w-1/2 bg-white/20 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                </div>

                <div className="w-full text-center relative z-10 mt-auto">
                  <div className="text-white text-[14px] font-bold">Health Recap</div>
                  <div className="text-white/70 text-[10px] uppercase tracking-widest mt-1">End of Month 2025</div>
                </div>
                
                <div className="absolute inset-0 bg-[#a855f7] opacity-40 mix-blend-multiply pointer-events-none"></div>
              </div>
              
              <div className="sm:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#a855f7] leading-none mb-1">50%</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">medication cost savings</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#a855f7] leading-none mb-1">510</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">total consultations</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#a855f7] leading-none mb-1">45%</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">faster response times</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-[clamp(32px,3.5vw,48px)] font-display text-[#a855f7] leading-none mb-1">30%</h4>
                  <p className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">increase in patient visits</p>
                </div>
                <div>
                  <Button className="rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white h-[50px] px-8 font-semibold text-[13px] uppercase tracking-wider shadow-sm">
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
            <div className="w-2 h-2 rounded-full bg-green-100"></div>
            <div className="w-2 h-2 rounded-full bg-green-100"></div>
            <div className="w-2 h-2 rounded-full bg-green-100"></div>
          </div>
        </div>
      </section>

      {/* FLOCKSY-STYLE SIXTH SECTION (CTA Block) */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container-x max-w-[1000px] mx-auto relative">
          
          {/* Decorative circles outside the block */}
          <div className="absolute -top-10 left-[15%] w-32 h-32 bg-yellow-400 rounded-full z-0"></div>
          <div className="absolute top-0 left-[20%] w-32 h-32 bg-[#0ea5e9] rounded-full z-0"></div>
          
          <div className="absolute -bottom-8 right-[15%] w-32 h-32 bg-yellow-400 rounded-full z-0"></div>
          <div className="absolute bottom-4 right-[10%] w-36 h-36 bg-[#0ea5e9] rounded-full z-0"></div>
          
          {/* Main purple block */}
          <div className="bg-[#8b5cf6] rounded-[32px] p-12 lg:p-20 text-center relative z-10 shadow-xl overflow-hidden">
            <h2 className="text-[clamp(28px,4vw,40px)] font-display text-white mb-6 leading-[1.04]">
              Maintain optimal health <br/>
              effortlessly with Subgeo
            </h2>
            <p className="text-white/90 text-[13px] md:text-sm font-medium mb-10 max-w-lg mx-auto">
              High-quality medicines, on-brand care, and always on time.
            </p>
            
            <Button className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 h-[50px] px-10 font-semibold text-[13px] uppercase tracking-wider shadow-sm">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
"""

with open("c:/Users/korri/OneDrive/Desktop/subgeo-brand-builder-main/src/routes/pharmacy.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("success")