import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Droplets,
  Factory,
  FileText,
  Funnel,
  Home,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { RevealOnScroll, PageTransition, ScrollProgressBar } from "@/components/premium/PremiumAnimations";
import heroImg from "@/assets/corporate-hero.jpg";
import bgImg from "@/assets/background.png";
import industryImg from "@/assets/industry.jpeg";

// Import additional relevant images
import plumbingMaintenanceImg from "@/assets/plumbing-maintenance.jpg";
import geyserInstallationImg from "@/assets/geyser-installation.jpg";
import drainageImg from "@/assets/drainage-systems.jpg";
import bathroomFitoutImg from "@/assets/bathroom-fitout.jpg";
import commercialProjectImg from "@/assets/commercial-project.jpg";
import industrialPlantImg from "@/assets/industrial-plant.jpg";
import emergencyServiceImg from "@/assets/emergency-service.jpg";

export const Route = createFileRoute("/subgeo-industrial")({
  head: () => ({
    meta: [
      { title: "Subgeo Plumbing & Industrial Works Ltd" },
      {
        name: "description",
        content:
          "Subgeo Plumbing & Industrial Works Ltd delivers reliable plumbing, drainage and industrial maintenance services across Nairobi and beyond.",
      },
    ],
  }),
  component: SubgeoIndustrial,
});

type IconCardItem = {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  icon: LucideIcon;
  image?: string;
};

const trustMetrics = [
  { value: "12+", label: "Years of delivery" },
  { value: "240+", label: "Projects completed" },
  { value: "24/7", label: "Emergency response" },
  { value: "99%", label: "Client satisfaction" },
];

const trustQuotes = [
  {
    quote:
      "Subgeo stepped in during an emergency shutdown and restored our full water line faster than expected.",
    author: "Eng. Kevin Otieno",
    role: "Facility Manager",
  },
  {
    quote:
      "Their team communicates clearly, keeps sites clean, and delivers quality workmanship on every visit.",
    author: "Margaret Njeri",
    role: "Property Director",
  },
  {
    quote:
      "From planning to handover, Subgeo treated our industrial retrofit with real precision and care.",
    author: "Stephen Kamau",
    role: "Operations Lead",
  },
];

const industries = [
  { name: "Commercial Buildings", image: commercialProjectImg },
  { name: "Residential Estates", image: bgImg },
  { name: "Industrial Plants", image: industrialPlantImg },
  { name: "Hospitality Spaces", image: heroImg },
  { name: "Educational Campuses", image: bgImg },
  { name: "Property Developers", image: commercialProjectImg },
  { name: "Retail Facilities", image: heroImg },
  { name: "Health Institutions", image: bgImg },
];

const valueCards: IconCardItem[] = [
  {
    title: "Quality First",
    description:
      "Every installation, inspection and repair follows strict quality controls for dependable long-term performance.",
    icon: BadgeCheck,
  },
  {
    title: "Rapid Response",
    description:
      "Our dispatch-ready teams and dedicated support line keep emergency downtime as low as possible.",
    icon: Clock3,
  },
  {
    title: "Smart Innovation",
    description:
      "We combine proven plumbing practice with modern tooling to improve speed, safety and reporting accuracy.",
    icon: Sparkles,
  },
];

const services: IconCardItem[] = [
  {
    title: "Plumbing Maintenance",
    description:
      "Routine leak checks, pressure tests, and preventive upkeep for domestic and commercial systems.",
    longDescription: "Our comprehensive plumbing maintenance service ensures your systems run smoothly year-round. We conduct thorough inspections, identify potential issues before they become major problems, and perform preventive maintenance to extend the lifespan of your plumbing infrastructure.",
    features: ["Leak detection and repair", "Pressure testing", "Pipe insulation", "Valve maintenance", "System optimization"],
    icon: Wrench,
    image: plumbingMaintenanceImg,
  },
  {
    title: "Insurance Support",
    description:
      "Technical inspections, reports and approved repair execution for plumbing-related insurance claims.",
    longDescription: "We work directly with insurance companies to provide detailed technical assessments, comprehensive reports, and approved repair services. Our documentation meets all insurance requirements, making the claims process smooth and efficient.",
    features: ["Damage assessment", "Insurance-compliant reports", "Direct insurer liaison", "Approved repairs", "Claim documentation"],
    icon: FileText,
    image: bgImg,
  },
  {
    title: "Geyser Installation",
    description:
      "Safe, code-compliant electric geyser installation, replacement and relocation services.",
    longDescription: "Professional geyser installation services that prioritize safety and efficiency. We handle everything from selecting the right size unit to proper electrical connections and pressure valve installation, ensuring compliance with all safety standards.",
    features: ["Size consultation", "Safe installation", "Electrical connections", "Pressure valve setup", "Warranty registration"],
    icon: Settings,
    image: geyserInstallationImg,
  },
  {
    title: "Kitchen & Bathroom Fitouts",
    description:
      "Precise fixture plumbing for upgrades, remodels and full sanitary installation projects.",
    longDescription: "Transform your kitchen and bathroom with our expert fitout services. We handle everything from sink installations to complete bathroom renovations, ensuring perfect alignment, proper sealing, and beautiful finishes.",
    features: ["Fixture installation", "Pipe rerouting", "Waterproofing", "Drain connections", "Final testing"],
    icon: Home,
    image: bathroomFitoutImg,
  },
  {
    title: "Shower System Servicing",
    description:
      "Cleaning, replacement and pressure balancing to keep shower lines efficient and reliable.",
    longDescription: "Keep your shower systems performing at their best with our specialized servicing. We clean mineral buildup, replace worn components, balance water pressure, and ensure consistent temperature control for the perfect shower experience.",
    features: ["System cleaning", "Head replacement", "Pressure balancing", "Temperature control", "Leak prevention"],
    icon: RefreshCw,
    image: heroImg,
  },
  {
    title: "Drainage & Waste Networks",
    description:
      "Drain rerouting, waste line diagnostics and leak remediation for healthy drainage performance.",
    longDescription: "Our drainage specialists diagnose and resolve complex waste network issues. From CCTV inspections to complete system rerouting, we ensure your drainage systems function efficiently and prevent costly backups.",
    features: ["CCTV inspection", "Blockage removal", "Pipe relining", "System rerouting", "Preventive maintenance"],
    icon: Funnel,
    image: drainageImg,
  },
];

const projects = [
  {
    date: "03/2018",
    title: "GLEE HOTEL | Fire Pump Retrofit",
    summary:
      "Full plumbing and drainage overhaul with integrated fire-fighting lines for a high-occupancy hospitality site.",
    image: heroImg,
    details: "Complete system upgrade including fire suppression integration",
  },
  {
    date: "02/2023",
    title: "Qwetu Catholic University",
    summary:
      "Campus-wide sanitary upgrades with water-efficient fittings and compliance-ready safety infrastructure.",
    image: bgImg,
    details: "Eco-friendly solutions for educational facility",
  },
  {
    date: "04/2024",
    title: "Kenya Marine Fisheries",
    summary:
      "Mixed-use development plumbing execution spanning underground mains, sanitary systems and hydrant networks.",
    image: commercialProjectImg,
    details: "Large-scale industrial plumbing project",
  },
];

// Enhanced scroll function with header offset
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Service Card with Dropdown
function ServiceCard({ service, index }: { service: IconCardItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <RevealOnScroll delay={index * 0.08} direction="up">
      <article className="group relative h-full overflow-hidden rounded-xl border border-[#dbe4ef] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b91c2a] via-[#e0292e] to-[#f97373]" />
        
        {/* Service Image */}
        {service.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#b91c2a] text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        )}

        <div className="p-6">
          {!service.image && (
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2c4e] text-white transition-colors group-hover:bg-[#b91c2a]">
              <Icon className="h-6 w-6" />
            </div>
          )}
          
          <h3 className={`text-lg font-bold uppercase tracking-widest text-[#1a2c4e] ${service.image ? 'mt-4' : 'mt-5'}`}>
            {service.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-gray-600">{service.description}</p>
          
          {/* Dropdown Content */}
          <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <div className="border-t border-gray-100 pt-4">
              {service.longDescription && (
                <p className="text-sm leading-relaxed text-gray-700 mb-4">
                  {service.longDescription}
                </p>
              )}
              {service.features && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#b91c2a]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#b91c2a] py-3 text-sm font-bold uppercase tracking-widest text-[#b91c2a] transition-all duration-300 hover:bg-[#b91c2a] hover:text-white"
          >
            {isOpen ? 'Show Less' : 'Learn More'}
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </article>
    </RevealOnScroll>
  );
}

// Industry Card Component
function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  return (
    <RevealOnScroll delay={index * 0.05} direction="up">
      <div className="group relative overflow-hidden rounded-lg border border-[#dbe4ef] bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <img
            src={industry.image}
            alt={industry.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-lg font-bold text-white">{industry.name}</h4>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function SubgeoIndustrial() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section
      const sections = ['industries', 'about', 'services'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition className="relative min-h-screen overflow-x-hidden bg-background page-texture text-foreground">
      <ScrollProgressBar />
      
      {/* ENHANCED HERO SECTION */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-black/90 overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src={industryImg}
            alt="Subgeo Industrial - Professional plumbing and industrial services"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 w-full">
          <Navbar />
        </div>

        <div className="container-x relative z-20 pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="grid grid-cols-1 gap-10 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left pt-10 lg:pt-0">
              <RevealOnScroll direction="up">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#b91c2a] animate-pulse"></span>
                  <span className="text-sm font-semibold text-white">Available 24/7 for Emergencies</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.08}>
                <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-tight text-white font-bold">
                  Subgeo Plumbing And
                  <br />
                  <span className="text-[#b91c2a]">Industrial Works</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.16}>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  We design, install and maintain resilient plumbing and drainage systems for homes,
                  commercial spaces and industrial facilities across Kenya.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.24}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="rounded-lg bg-[#b91c2a] hover:bg-[#8f1520] text-white h-14 w-full sm:w-auto px-8 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Explore Services
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#b91c2a] h-14 w-full sm:w-auto px-8 font-semibold text-sm uppercase tracking-wider items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
                  >
                    Request A Quote
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.32}>
                <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {["12+", "240+", "99%"].map((val, idx) => (
                      <div
                        key={val}
                        className="h-12 w-12 rounded-full bg-white text-[#b91c2a] text-sm font-bold flex items-center justify-center border-2 border-white shadow-lg"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                  <div className="h-12 w-px bg-white/30"></div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">Emergency-ready</div>
                    <div className="text-xs text-white/70">24/7 Support Guaranteed</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={() => scrollToSection('industries')}
            className="animate-bounce flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-xs mb-2">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </button>
        </div>
      </section>

      <main className="home-page-scale">
        {/* TRUSTED PERFORMANCE SECTION */}
        <section className="section-slab section-rule py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow text-[#b91c2a] font-semibold">Trusted Performance</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Trusted By Teams That Cannot Afford Downtime
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                  Our clients rely on Subgeo for dependable project execution, structured communication and measurable outcomes.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {trustMetrics.map((item, index) => (
                <RevealOnScroll key={item.label} delay={index * 0.08} direction="up">
                  <div className="rounded-xl border border-[#e2e8f0] bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b91c2a]">
                    <p className="text-5xl font-bold text-[#b91c2a] mb-2">{item.value}</p>
                    <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">{item.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {trustQuotes.map((item, index) => (
                <RevealOnScroll key={item.author} delay={index * 0.1} direction="up">
                  <article className="flex h-full flex-col justify-between rounded-xl border border-[#e2e8f0] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-[#b91c2a] text-4xl font-serif">"</div>
                      <p className="text-base leading-relaxed text-gray-600 flex-1">
                        {item.quote}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                      <p className="text-base font-semibold text-[#1a2c4e]">{item.author}</p>
                      <p className="text-sm uppercase tracking-widest text-gray-500">{item.role}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section id="industries" className="section-shell section-rule py-20 md:py-28 bg-white">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center mb-16">
                <p className="eyebrow text-[#b91c2a] font-semibold">Industries We Serve</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Reliable Plumbing Solutions Across Critical Sectors
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                  Subgeo supports multi-site operators and independent property owners with tailored plumbing, drainage and maintenance programs.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <IndustryCard key={industry.name} industry={industry} index={index} />
              ))}
            </div>

            <RevealOnScroll direction="up" delay={0.3}>
              <div className="mt-12 rounded-xl border border-[#fbcaca] bg-gradient-to-r from-[#fff5f5] to-[#ffe8e8] p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#b91c2a] flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a]">Service Promise</p>
                    <p className="mt-2 text-base leading-relaxed text-[#7f1d1d]">
                      We align every scope with operational risk, site safety and realistic maintenance windows so your teams keep moving.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ABOUT SUBGEO */}
        <section id="about" className="section-slab section-rule py-20 md:py-28 bg-gray-50">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-5xl text-center">
                <p className="eyebrow text-[#b91c2a] font-semibold">About Subgeo Industrial</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Built On Professional Discipline Since 2012
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company focused on plumbing, sanitary installation,
                  drainage systems, fire-fighting infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {valueCards.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.1} direction="up">
                  <article className="h-full rounded-xl border border-[#e2e8f0] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#fee2e2] to-[#fecaca] text-[#b91c2a]">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-[#1a2c4e]">{item.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{item.description}</p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section id="services" className="section-shell section-rule py-20 md:py-28 bg-white">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow text-[#b91c2a] font-semibold">Core Services</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  End-To-End Plumbing And Industrial Maintenance
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                  From preventive maintenance to full installation programs, our teams deliver practical technical solutions with clear reporting.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* RECENT WORK */}
        <section className="section-slab section-rule py-20 md:py-28 bg-gray-50">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow text-[#b91c2a] font-semibold">Recent Work</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Projects Delivered With High Technical Accuracy
                </h2>
              </div>
            </RevealOnScroll>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {projects.map((project, index) => (
                <RevealOnScroll key={project.title} delay={index * 0.1} direction={index % 2 === 0 ? "right" : "left"}>
                  <article className={`group h-full overflow-hidden rounded-xl border border-[#dbe4ef] bg-white shadow-lg ${index === 0 ? 'lg:col-span-2' : ''}`}>
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 ? 'h-96' : 'h-64'}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute left-6 top-6 rounded-lg bg-[#b91c2a] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-lg">
                        {project.date}
                      </span>
                      {index === 0 && (
                        <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <p className="text-sm font-medium">{project.details}</p>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#1a2c4e]">{project.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-600">{project.summary}</p>
                      <Link 
                        to="/contact" 
                        className="mt-6 inline-flex items-center gap-2 text-[#b91c2a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
                      >
                        View Project Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT TESTIMONY */}
        <section className="relative overflow-hidden bg-[#102845] py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,0.14),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(224,41,46,0.35),transparent_42%)]" />
          <div className="container-x relative">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-white/70">Client Testimony</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-white leading-tight">
                  Confidence That Comes From Consistent Delivery
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-2xl mx-auto">
                  Feedback from project partners and recurring maintenance clients who rely on Subgeo teams.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "Subgeo coordinated seamlessly with our contractors and delivered a clean, compliant installation ahead of timeline.",
                  author: "Amina Hassan",
                  role: "Project Coordinator",
                },
                {
                  quote:
                    "Their emergency support line is responsive and the technicians always arrive prepared with clear diagnostics.",
                  author: "Dr. James Kipchoge",
                  role: "Operations Consultant",
                },
              ].map((item, index) => (
                <RevealOnScroll key={item.author} direction="up" delay={index * 0.1}>
                  <article className="rounded-xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-white/80 text-4xl font-serif">"</div>
                      <p className="text-lg leading-relaxed text-white/90 flex-1">
                        {item.quote}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b91c2a] text-white">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{item.author}</p>
                        <p className="text-sm uppercase tracking-widest text-white/70">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & LOCATION */}
        <section className="section-slab section-rule py-20 md:py-28 bg-white">
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <RevealOnScroll direction="right">
              <div className="rounded-xl border border-[#dbe4ef] bg-white p-8 shadow-xl">
                <p className="eyebrow text-[#b91c2a] font-semibold">Contact & Location</p>
                <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3rem)] text-[#1a2c4e] leading-tight">
                  Plan Your Next Project With Our Team
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Reach out for a site survey, emergency support, or a preventive maintenance plan tailored to your operation.
                </p>

                <div className="mt-10 space-y-6 text-lg text-gray-700">
                  <a href="tel:0733699441" className="flex items-center gap-4 group">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white group-hover:bg-[#b91c2a] transition-colors">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="font-medium group-hover:text-[#b91c2a] transition-colors">0733 699 441</span>
                  </a>
                  <a href="mailto:info@subgeo.co.ke" className="flex items-center gap-4 group">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white group-hover:bg-[#b91c2a] transition-colors">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="font-medium group-hover:text-[#b91c2a] transition-colors">info@subgeo.co.ke</span>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="font-medium">P.O. Box 48230-00100<br />Nairobi, Kenya</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 bg-[#b91c2a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#8f1520] shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg"
                >
                  CONTACT US
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
              <div className="overflow-hidden rounded-xl border border-[#dbe4ef] bg-white p-2 shadow-xl">
                <iframe
                  title="Subgeo location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255277.1636928384!2d36.656375!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2c5c00001%3A0x1c5c000000000000!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  className="h-[400px] w-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="grid gap-4 border-t border-[#e2e8f0] p-6 text-base text-gray-600 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-[#b91c2a]" />
                    <div>
                      <p className="font-semibold text-[#1a2c4e]">Business Hours</p>
                      <p className="text-sm">Mon - Fri: 7:30 AM - 5:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-[#b91c2a]" />
                    <div>
                      <p className="font-semibold text-[#1a2c4e]">Maintenance</p>
                      <p className="text-sm">Preventive plans available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#b91c2a]" />
                    <div>
                      <p className="font-semibold text-[#1a2c4e]">Certified</p>
                      <p className="text-sm">Safety-compliant execution</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="section-shell py-20 md:py-28">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2c4e] via-[#1e3a5f] to-[#102845] p-12 md:p-16 text-center shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#b91c2a]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b91c2a]/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
                    <Sparkles className="h-4 w-4 text-[#b91c2a]" />
                    <span className="text-sm font-semibold text-white">Limited Time Offer</span>
                  </div>
                  
                  <h3 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] text-white leading-tight font-bold">
                    Ready to Start Your Project?
                  </h3>
                  <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
                    Get a free consultation and quote from our expert team. We'll assess your needs and provide a customized solution that fits your budget and timeline.
                  </p>
                  
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 bg-[#b91c2a] hover:bg-[#8f1520] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <a
                      href="tel:0733699441"
                      className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                    >
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>
                  </div>

                  <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-[#b91c2a]" />
                      <span className="text-sm">Free Site Assessment</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-[#b91c2a]" />
                      <span className="text-sm">No Obligation Quote</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-[#b91c2a]" />
                      <span className="text-sm">24/7 Emergency Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <Footer />
      </main>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </PageTransition>
  );
}