import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  X,
  Menu,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { RevealOnScroll, PageTransition, ScrollProgressBar } from "@/components/premium/PremiumAnimations";
import heroImg from "@/assets/corporate-hero.jpg";
import bgImg from "@/assets/background.png";
import industryImg from "@/assets/industry.jpeg";
import plumbingImg from "@/assets/plumbing.jpg";
import drainageImg from "@/assets/drainage.jpg";
import geyserImg from "@/assets/geyser.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import showerImg from "@/assets/shower.jpg";
import commercialImg from "@/assets/commercial.jpg";
import residentialImg from "@/assets/residential.jpg";
import industrialImg from "@/assets/industrial.jpg";
import hospitalityImg from "@/assets/hospitality.jpg";
import educationImg from "@/assets/education.jpg";
import retailImg from "@/assets/retail.jpg";
import healthImg from "@/assets/health.jpg";

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

type IndustryItem = {
  name: string;
  image: string;
  icon: LucideIcon;
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
    image: residentialImg,
  },
  {
    quote:
      "Their team communicates clearly, keeps sites clean, and delivers quality workmanship on every visit.",
    author: "Margaret Njeri",
    role: "Property Director",
    image: commercialImg,
  },
  {
    quote:
      "From planning to handover, Subgeo treated our industrial retrofit with real precision and care.",
    author: "Stephen Kamau",
    role: "Operations Lead",
    image: industrialImg,
  },
];

const industries: IndustryItem[] = [
  { name: "Commercial Buildings", image: commercialImg, icon: Building2 },
  { name: "Residential Estates", image: residentialImg, icon: Home },
  { name: "Industrial Plants", image: industrialImg, icon: Factory },
  { name: "Hospitality Spaces", image: hospitalityImg, icon: Building2 },
  { name: "Educational Campuses", image: educationImg, icon: Building2 },
  { name: "Property Developers", image: commercialImg, icon: Building2 },
  { name: "Retail Facilities", image: retailImg, icon: Building2 },
  { name: "Health Institutions", image: healthImg, icon: Building2 },
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
    image: plumbingImg,
  },
  {
    title: "Insurance Support",
    description:
      "Technical inspections, reports and approved repair execution for plumbing-related insurance claims.",
    longDescription: "We work directly with insurance companies to provide detailed technical assessments, comprehensive reports, and approved repair services. Our documentation meets all insurance requirements, making the claims process smooth and efficient.",
    features: ["Damage assessment", "Insurance-compliant reports", "Direct insurer liaison", "Approved repairs", "Claim documentation"],
    icon: FileText,
    image: commercialImg,
  },
  {
    title: "Geyser Installation",
    description:
      "Safe, code-compliant electric geyser installation, replacement and relocation services.",
    longDescription: "Professional geyser installation services that prioritize safety and efficiency. We handle everything from selecting the right size unit to proper electrical connections and pressure valve installation, ensuring compliance with all safety standards.",
    features: ["Size consultation", "Safe installation", "Electrical connections", "Pressure valve setup", "Warranty registration"],
    icon: Settings,
    image: geyserImg,
  },
  {
    title: "Kitchen & Bathroom Fitouts",
    description:
      "Precise fixture plumbing for upgrades, remodels and full sanitary installation projects.",
    longDescription: "Transform your kitchen and bathroom with our expert fitout services. We handle everything from sink installations to complete bathroom renovations, ensuring perfect alignment, proper sealing, and beautiful finishes.",
    features: ["Fixture installation", "Pipe rerouting", "Waterproofing", "Drain connections", "Final testing"],
    icon: Home,
    image: bathroomImg,
  },
  {
    title: "Shower System Servicing",
    description:
      "Cleaning, replacement and pressure balancing to keep shower lines efficient and reliable.",
    longDescription: "Keep your shower systems performing at their best with our specialized servicing. We clean mineral buildup, replace worn components, balance water pressure, and ensure consistent temperature control for the perfect shower experience.",
    features: ["System cleaning", "Head replacement", "Pressure balancing", "Temperature control", "Leak prevention"],
    icon: RefreshCw,
    image: showerImg,
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
    image: hospitalityImg,
    category: "Hospitality",
  },
  {
    date: "02/2023",
    title: "Qwetu Catholic University",
    summary:
      "Campus-wide sanitary upgrades with water-efficient fittings and compliance-ready safety infrastructure.",
    image: educationImg,
    category: "Education",
  },
  {
    date: "04/2024",
    title: "Kenya Marine Fisheries",
    summary:
      "Mixed-use development plumbing execution spanning underground mains, sanitary systems and hydrant networks.",
    image: industrialImg,
    category: "Industrial",
  },
];

function SubgeoIndustrial() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll for parallax and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Detect active section
      const sections = ["hero", "industries", "about", "services", "projects", "contact"];
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section with offset for fixed header
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Industries", id: "industries" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <PageTransition className="relative min-h-screen overflow-x-hidden bg-background page-texture text-foreground">
      <ScrollProgressBar />
      
      {/* ENHANCED STICKY NAVIGATION */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-transparent"
        }`}
      >
        <nav className="container-x py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-lg bg-[#b91c2a] flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className={`font-bold text-lg transition-colors ${scrollY > 50 ? "text-[#1a2c4e]" : "text-white"}`}>
                Subgeo Industrial
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-[#b91c2a] relative ${
                    activeSection === item.id ? "text-[#b91c2a]" : scrollY > 50 ? "text-[#1a2c4e]" : "text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#b91c2a] rounded-full" />
                  )}
                </button>
              ))}
              <Link
                to="/contact"
                className="bg-[#b91c2a] hover:bg-[#8f1520] text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrollY > 50 ? "text-[#1a2c4e]" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-sm font-semibold uppercase tracking-wider py-2 transition-colors ${
                    activeSection === item.id ? "text-[#b91c2a]" : "text-[#1a2c4e]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/contact"
                className="block bg-[#b91c2a] hover:bg-[#8f1520] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center mt-4"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* WORLD-CLASS HERO SECTION - Full Viewport Height */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ height: "100vh" }}>
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
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 150 + 100}px`,
                height: `${Math.random() * 150 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container-x relative z-20 pt-20 pb-16">
          <div className="max-w-6xl mx-auto text-center">
            <RevealOnScroll direction="up">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 mb-8 animate-pulse">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#b91c2a]"></span>
                <span className="text-sm font-semibold text-white">Available 24/7 for Emergencies</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] text-white font-bold mb-6">
                Subgeo Plumbing And
                <br />
                <span className="text-[#b91c2a]">Industrial Works</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                We design, install and maintain resilient plumbing and drainage systems for homes,
                commercial spaces and industrial facilities across Kenya with excellence and precision.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => scrollToSection("services")}
                  className="rounded-lg bg-[#b91c2a] hover:bg-[#8f1520] text-white h-14 px-10 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#b91c2a] h-14 px-10 font-semibold text-sm uppercase tracking-wider items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
                >
                  Request A Quote
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {trustMetrics.map((metric, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#b91c2a] transition-colors duration-300">{metric.value}</div>
                    <div className="text-sm text-white/70 uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={() => scrollToSection("industries")}
            className="animate-bounce flex flex-col items-center text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-xs mb-2 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center group-hover:border-white transition-colors">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </button>
        </div>
      </section>

      <main>
        {/* TRUSTED PERFORMANCE SECTION */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a] mb-4">Trusted Performance</p>
                <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight mb-6">
                  Trusted By Teams That Cannot Afford Downtime
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our clients rely on Subgeo for dependable project execution, structured communication and measurable outcomes.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {trustMetrics.map((item, index) => (
                <RevealOnScroll key={item.label} delay={index * 0.08} direction="up">
                  <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b91c2a] group">
                    <p className="text-4xl md:text-5xl font-bold text-[#b91c2a] mb-2 group-hover:scale-110 transition-transform">{item.value}</p>
                    <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">{item.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {trustQuotes.map((item, index) => (
                <RevealOnScroll key={item.author} delay={index * 0.1} direction="up">
                  <article className="h-full rounded-xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-40 mb-6 overflow-hidden rounded-lg">
                      <img src={item.image} alt={item.author} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="text-[#b91c2a] text-4xl font-serif mb-4">"</div>
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">{item.quote}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-base font-semibold text-[#1a2c4e]">{item.author}</p>
                      <p className="text-sm uppercase tracking-widest text-gray-500">{item.role}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION WITH IMAGES */}
        <section id="industries" className="py-20 md:py-28 bg-white">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a] mb-4">Industries We Serve</p>
                <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight mb-6">
                  Reliable Plumbing Solutions Across Critical Sectors
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Subgeo supports multi-site operators and independent property owners with tailored plumbing, drainage and maintenance programs.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <RevealOnScroll key={industry.name} delay={index * 0.05} direction="up">
                    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-10 w-10 rounded-lg bg-[#b91c2a] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{industry.name}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>

            <RevealOnScroll direction="up" delay={0.3}>
              <div className="mt-12 rounded-xl border border-[#fbcaca] bg-gradient-to-r from-[#fff5f5] to-[#ffe8e8] p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#b91c2a] flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a] mb-2">Service Promise</p>
                    <p className="text-base text-[#7f1d1d]">
                      We align every scope with operational risk, site safety and realistic maintenance windows so your teams keep moving.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-28 bg-gray-50">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <RevealOnScroll direction="right">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a] mb-4">About Subgeo Industrial</p>
                  <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-[#1a2c4e] leading-tight mb-6">
                    Built On Professional Discipline Since 2012
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Subgeo Plumbing & Industrial Works Ltd is a registered private limited company focused on plumbing, sanitary installation,
                    drainage systems, fire-fighting infrastructure and recurring maintenance services for long-term asset performance.
                  </p>

                  <div className="space-y-6">
                    {valueCards.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="flex gap-4 group">
                          <div className="flex-shrink-0">
                            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#fee2e2] to-[#fecaca] flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="h-7 w-7 text-[#b91c2a]" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1a2c4e] mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="left">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <img src={heroImg} alt="Industrial plumbing" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <img src={plumbingImg} alt="Plumbing services" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <img src={commercialImg} alt="Commercial project" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <img src={bgImg} alt="Team at work" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION WITH EXPANDABLE CARDS */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a] mb-4">Core Services</p>
                <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight mb-6">
                  End-To-End Plumbing And Industrial Maintenance
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From preventive maintenance to full installation programs, our teams deliver practical technical solutions with clear reporting.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 md:py-28 bg-gray-50">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a] mb-4">Recent Work</p>
                <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight mb-6">
                  Projects Delivered With High Technical Accuracy
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project, index) => (
                <RevealOnScroll key={project.title} delay={index * 0.1} direction="up">
                  <article className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute left-4 top-4 rounded-lg bg-[#b91c2a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                        {project.date}
                      </span>
                      <span className="absolute right-4 top-4 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-[#1a2c4e]">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1a2c4e] mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.summary}</p>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 text-[#b91c2a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="relative overflow-hidden bg-[#102845] py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,0.14),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(224,41,46,0.35),transparent_42%)]" />
          <div className="container-x relative">
            <RevealOnScroll direction="up">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">Client Testimony</p>
                <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] text-white leading-tight mb-6">
                  Confidence That Comes From Consistent Delivery
                </h2>
                <p className="text-lg text-white/75 max-w-2xl mx-auto">
                  Feedback from project partners and recurring maintenance clients who rely on Subgeo teams.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
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
                    <div className="text-white/80 text-4xl font-serif mb-4">"</div>
                    <p className="text-base text-white/90 mb-6 leading-relaxed">
                      {item.quote}
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b91c2a] text-white">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{item.author}</p>
                        <p className="text-sm text-white/70">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION WITH CORRECTED MAP */}
        <section id="contact" className="py-20 md:py-28 bg-white">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-12">
              <RevealOnScroll direction="right">
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a] mb-4">Contact & Location</p>
                  <h2 className="font-display text-[clamp(2rem,5vw,2.5rem)] text-[#1a2c4e] leading-tight mb-6">
                    Plan Your Next Project With Our Team
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Reach out for a site survey, emergency support, or a preventive maintenance plan tailored to your operation.
                  </p>

                  <div className="space-y-6 mb-8">
                    <a href="tel:0733699441" className="flex items-center gap-4 group">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white group-hover:bg-[#b91c2a] transition-colors">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">Phone</p>
                        <p className="text-lg font-semibold text-[#1a2c4e] group-hover:text-[#b91c2a] transition-colors">0733 699 441</p>
                      </div>
                    </a>
                    <a href="mailto:info@subgeo.co.ke" className="flex items-center gap-4 group">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white group-hover:bg-[#b91c2a] transition-colors">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">Email</p>
                        <p className="text-lg font-semibold text-[#1a2c4e] group-hover:text-[#b91c2a] transition-colors">info@subgeo.co.ke</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">Address</p>
                        <p className="text-lg font-semibold text-[#1a2c4e]">P.O. Box 48230-00100<br />Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-[#b91c2a] hover:bg-[#8f1520] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="left">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                  {/* Corrected Google Maps Embed - Nairobi Coordinates */}
                  <iframe
                    title="Subgeo location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255277.1636928384!2d36.656375!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2c5c00001%3A0x1c5c000000000000!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />

                  <div className="grid gap-4 border-t border-gray-200 p-6 sm:grid-cols-3">
                    <div className="flex items-center gap-3">
                      <Clock3 className="h-5 w-5 text-[#b91c2a]" />
                      <div>
                        <p className="font-semibold text-[#1a2c4e] text-sm">Business Hours</p>
                        <p className="text-xs text-gray-600">Mon - Fri: 7:30 AM - 5:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Droplets className="h-5 w-5 text-[#b91c2a]" />
                      <div>
                        <p className="font-semibold text-[#1a2c4e] text-sm">Maintenance</p>
                        <p className="text-xs text-gray-600">Preventive plans available</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-[#b91c2a]" />
                      <div>
                        <p className="font-semibold text-[#1a2c4e] text-sm">Certified</p>
                        <p className="text-xs text-gray-600">Safety-compliant execution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* STUNNING CTA SECTION */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2c4e] via-[#1e3a5f] to-[#102845] p-12 md:p-16 text-center shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#b91c2a]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b91c2a]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 mb-6">
                    <Sparkles className="h-4 w-4 text-[#b91c2a]" />
                    <span className="text-sm font-semibold text-white">Get Started Today</span>
                  </div>
                  
                  <h3 className="font-display text-[clamp(2rem,6vw,3.5rem)] text-white leading-tight font-bold mb-6">
                    Ready to Start Your Project?
                  </h3>
                  <p className="mx-auto max-w-3xl text-lg text-white/85 mb-10">
                    Get a free consultation and quote from our expert team. We'll assess your needs and provide a customized solution that fits your budget and timeline.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 bg-[#b91c2a] hover:bg-[#8f1520] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <a
                      href="tel:0733699441"
                      className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
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

// Service Card Component with Professional Dropdown
function ServiceCard({ service, index }: { service: IconCardItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <RevealOnScroll delay={index * 0.08} direction="up">
      <article className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {service.image && (
          <div className="relative h-56 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="h-12 w-12 rounded-lg bg-[#b91c2a] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        )}

        <div className="p-6">
          {!service.image && (
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2c4e] text-white mb-4 group-hover:bg-[#b91c2a] transition-colors">
              <Icon className="h-7 w-7" />
            </div>
          )}
          
          <h3 className="text-xl font-bold text-[#1a2c4e] mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          {/* Professional Dropdown Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="border-t border-gray-100 pt-4 mt-4">
              {service.longDescription && (
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {service.longDescription}
                </p>
              )}
              {service.features && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#b91c2a] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg border-2 border-[#b91c2a] py-3 text-sm font-bold uppercase tracking-wider text-[#b91c2a] transition-all duration-300 hover:bg-[#b91c2a] hover:text-white group/btn"
          >
            {isOpen ? "Show Less" : "Learn More"}
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />}
          </button>
        </div>
      </article>
    </RevealOnScroll>
  );
}