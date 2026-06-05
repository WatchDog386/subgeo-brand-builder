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
import plumbingImg from "@/assets/plumber.jpeg";
import drainageImg from "@/assets/plumbing.png";
import geyserImg from "@/assets/service.png";
import bathroomImg from "@/assets/plumbing.png";
import showerImg from "@/assets/services.png";
import commercialImg from "@/assets/corporate-hero.jpg";
import residentialImg from "@/assets/subgeo.jpeg";
import industrialImg from "@/assets/industry.jpeg";

export const Route = createFileRoute("/subgeo-industrial")({
  head: () => ({
    meta: [
      { title: "Subgeo Plumbing & Industrial Works Ltd | Professional Plumbing Services Nairobi" },
      {
        name: "description",
        content:
          "Subgeo Plumbing & Industrial Works Ltd delivers reliable plumbing, drainage and industrial maintenance services across Nairobi and beyond. 24/7 emergency response.",
      },
      { name: "keywords", content: "plumbing Nairobi, industrial plumbing Kenya, drainage services, emergency plumber" },
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
    quote: "Subgeo stepped in during an emergency shutdown and restored our full water line faster than expected.",
    author: "Eng. Kevin Otieno",
    role: "Facility Manager",
    image: residentialImg,
  },
  {
    quote: "Their team communicates clearly, keeps sites clean, and delivers quality workmanship on every visit.",
    author: "Margaret Njeri",
    role: "Property Director",
    image: commercialImg,
  },
  {
    quote: "From planning to handover, Subgeo treated our industrial retrofit with real precision and care.",
    author: "Stephen Kamau",
    role: "Operations Lead",
    image: industrialImg,
  },
];

const industries = [
  { name: "Commercial Buildings", icon: Building2 },
  { name: "Residential Estates", icon: Home },
  { name: "Industrial Plants", icon: Factory },
  { name: "Hospitality Spaces", icon: Building2 },
  { name: "Educational Campuses", icon: Building2 },
  { name: "Property Developers", icon: Building2 },
  { name: "Retail Facilities", icon: Building2 },
  { name: "Health Institutions", icon: Building2 },
];

const valueCards: IconCardItem[] = [
  {
    title: "Quality First",
    description: "Every installation, inspection and repair follows strict quality controls for dependable long-term performance.",
    icon: BadgeCheck,
  },
  {
    title: "Rapid Response",
    description: "Our dispatch-ready teams and dedicated support line keep emergency downtime as low as possible.",
    icon: Clock3,
  },
  {
    title: "Smart Innovation",
    description: "We combine proven plumbing practice with modern tooling to improve speed, safety and reporting accuracy.",
    icon: Sparkles,
  },
];

const services: IconCardItem[] = [
  {
    title: "Plumbing Maintenance",
    description: "Routine leak checks, pressure tests, and preventive upkeep for domestic and commercial systems.",
    longDescription: "Our comprehensive plumbing maintenance service ensures your systems run smoothly year-round. We conduct thorough inspections, identify potential issues before they become major problems, and perform preventive maintenance to extend the lifespan of your plumbing infrastructure.",
    features: ["Leak detection and repair", "Pressure testing", "Pipe insulation", "Valve maintenance", "System optimization"],
    icon: Wrench,
    image: plumbingImg,
  },
  {
    title: "Insurance Support",
    description: "Technical inspections, reports and approved repair execution for plumbing-related insurance claims.",
    longDescription: "We work directly with insurance companies to provide detailed technical assessments, comprehensive reports, and approved repair services. Our documentation meets all insurance requirements, making the claims process smooth and efficient.",
    features: ["Damage assessment", "Insurance-compliant reports", "Direct insurer liaison", "Approved repairs", "Claim documentation"],
    icon: FileText,
    image: commercialImg,
  },
  {
    title: "Geyser Installation",
    description: "Safe, code-compliant electric geyser installation, replacement and relocation services.",
    longDescription: "Professional geyser installation services that prioritize safety and efficiency. We handle everything from selecting the right size unit to proper electrical connections and pressure valve installation, ensuring compliance with all safety standards.",
    features: ["Size consultation", "Safe installation", "Electrical connections", "Pressure valve setup", "Warranty registration"],
    icon: Settings,
    image: geyserImg,
  },
  {
    title: "Kitchen & Bathroom Fitouts",
    description: "Precise fixture plumbing for upgrades, remodels and full sanitary installation projects.",
    longDescription: "Transform your kitchen and bathroom with our expert fitout services. We handle everything from sink installations to complete bathroom renovations, ensuring perfect alignment, proper sealing, and beautiful finishes.",
    features: ["Fixture installation", "Pipe rerouting", "Waterproofing", "Drain connections", "Final testing"],
    icon: Home,
    image: bathroomImg,
  },
  {
    title: "Shower System Servicing",
    description: "Cleaning, replacement and pressure balancing to keep shower lines efficient and reliable.",
    longDescription: "Keep your shower systems performing at their best with our specialized servicing. We clean mineral buildup, replace worn components, balance water pressure, and ensure consistent temperature control for the perfect shower experience.",
    features: ["System cleaning", "Head replacement", "Pressure balancing", "Temperature control", "Leak prevention"],
    icon: RefreshCw,
    image: showerImg,
  },
  {
    title: "Drainage & Waste Networks",
    description: "Drain rerouting, waste line diagnostics and leak remediation for healthy drainage performance.",
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
    summary: "Full plumbing and drainage overhaul with integrated fire-fighting lines for a high-occupancy hospitality site.",
    image: industrialImg,
    category: "Hospitality",
  },
  {
    date: "02/2023",
    title: "Qwetu Catholic University",
    summary: "Campus-wide sanitary upgrades with water-efficient fittings and compliance-ready safety infrastructure.",
    image: commercialImg,
    category: "Education",
  },
  {
    date: "04/2024",
    title: "Kenya Marine Fisheries",
    summary: "Mixed-use development plumbing execution spanning underground mains, sanitary systems and hydrant networks.",
    image: industrialImg,
    category: "Industrial",
  },
];

function SubgeoIndustrial() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleTestimonial, setVisibleTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonial((prev) => (prev + 1) % trustQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    }
  };

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <PageTransition className="relative min-h-screen overflow-x-clip bg-background page-texture text-foreground">
      <ScrollProgressBar />
      
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#b91c2a] text-white px-4 py-2 rounded-lg z-[60]"
      >
        Skip to main content
      </a>
      
      <section className="relative overflow-hidden bg-black/90 min-h-screen flex items-center">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img
            src={industryImg}
            alt="Subgeo Industrial Services - Professional plumbing and industrial maintenance"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 w-full">
          <Navbar />
        </div>

        <div className="container-x relative z-10 pt-32 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Aligned Content */}
            <div className="text-left">
              <RevealOnScroll direction="up">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#b91c2a] animate-pulse"></span>
                  <span className="text-sm font-semibold text-white">Available 24/7 for Emergencies</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up">
                <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.04] text-white font-bold">
                  Subgeo Plumbing And
                  <br />
                  <span className="text-[#b91c2a]">Industrial Works</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.08}>
                <p className="mt-5 text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                  We design, install and maintain resilient plumbing and drainage systems for homes,
                  commercial spaces and industrial facilities across Kenya. Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.16}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="rounded-lg bg-[#b91c2a] hover:bg-[#8f1520] text-white h-[50px] w-full sm:w-auto px-8 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#b91c2a]"
                    aria-label="Explore our plumbing and industrial services"
                  >
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#b91c2a] h-[50px] w-full sm:w-auto px-8 font-semibold text-sm uppercase tracking-wider items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    aria-label="Request a quote for your project"
                  >
                    Request A Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.22}>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["12+", "24", "99"].map((val) => (
                      <div
                        key={val}
                        className="h-9 w-9 rounded-full bg-white text-[#b91c2a] text-[10px] font-bold flex items-center justify-center border-2 border-white/20"
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                    <div className="text-xs font-semibold text-white">Emergency-ready</div>
                    <div className="text-[10px] text-white/70">24/7 Support Guaranteed</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Animated Image Sequence */}
            <RevealOnScroll direction="left" delay={0.2}>
              <div className="relative flex justify-center min-h-[500px] lg:min-h-[600px] mt-10 lg:mt-0">
                <div className="relative w-full max-w-lg">
                  {/* Image 1 - Plumbing */}
                  <div 
                    className="absolute top-0 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out"
                    style={{
                      animation: 'floatIn1 1s ease-out 0.2s both, float1 6s ease-in-out infinite',
                      zIndex: 3,
                    }}
                  >
                    <img 
                      src={plumbingImg} 
                      alt="Professional plumbing installation" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Image 2 - Commercial */}
                  <div 
                    className="absolute top-20 right-0 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out"
                    style={{
                      animation: 'floatIn2 1s ease-out 0.5s both, float2 6s ease-in-out infinite',
                      zIndex: 2,
                    }}
                  >
                    <img 
                      src={commercialImg} 
                      alt="Commercial plumbing project" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Image 3 - Industrial */}
                  <div 
                    className="absolute bottom-0 left-10 w-60 h-60 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out"
                    style={{
                      animation: 'floatIn3 1s ease-out 0.8s both, float3 6s ease-in-out infinite',
                      zIndex: 4,
                    }}
                  >
                    <img 
                      src={industrialImg} 
                      alt="Industrial maintenance services" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Image 4 - Drainage */}
                  <div 
                    className="absolute bottom-20 right-10 w-52 h-52 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out"
                    style={{
                      animation: 'floatIn4 1s ease-out 1.1s both, float4 6s ease-in-out infinite',
                      zIndex: 1,
                    }}
                  >
                    <img 
                      src={drainageImg} 
                      alt="Drainage system installation" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#b91c2a]/20 rounded-full blur-3xl"
                    style={{ animation: 'pulse 4s ease-in-out infinite' }}
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button 
            onClick={() => scrollToSection('main-content')}
            className="animate-bounce flex flex-col items-center text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
            aria-label="Scroll to main content"
          >
            <span className="text-xs mb-2 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </button>
        </div>
      </section>

      <main id="main-content" className="home-page-scale">
        <section className="section-slab section-rule py-16 md:py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Trusted Performance</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">Trusted By Teams That Cannot Afford Downtime</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  Our clients rely on Subgeo for dependable project execution, structured communication and measurable outcomes.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {trustMetrics.map((item, index) => (
                <RevealOnScroll key={item.label} delay={index * 0.08} direction="up">
                  <div className="rounded-sm border border-[#e2e8f0] bg-white p-5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1">
                    <p className="text-3xl font-bold text-[#b91c2a]">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gray-500">{item.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Sequential Testimonials with Image Background */}
            <div className="mt-10 relative">
              {trustQuotes.map((item, index) => (
                <RevealOnScroll key={item.author} direction="up" delay={index * 0.15}>
                  <article 
                    className={`flex h-full flex-col justify-between rounded-sm border border-[#e2e8f0] bg-[#f8fafc] p-0 shadow-[0_14px_30px_rgba(15,23,42,0.09)] transition-all duration-700 overflow-hidden ${
                      visibleTestimonial === index 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95 absolute inset-0 pointer-events-none'
                    }`}
                    style={{ minHeight: '400px' }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={item.image} 
                        alt={item.author} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b91c2a] text-white">
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-white">{item.author}</p>
                            <p className="text-sm text-white/70">{item.role}</p>
                          </div>
                        </div>
                        <p className="text-lg leading-relaxed text-white/95 font-medium">"{item.quote}"</p>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#b91c2a] fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
              
              {/* Testimonial Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {trustQuotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setVisibleTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      visibleTestimonial === index 
                        ? 'bg-[#b91c2a] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="section-shell section-rule py-20">
          <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <RevealOnScroll direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 overflow-hidden rounded-sm border border-[#dbe4ef] shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                  <img src={heroImg} alt="Industrial plumbing installations" className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-sm border border-[#dbe4ef] shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                  <img src={bgImg} alt="Subgeo team in action" className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-sm border border-[#dbe4ef] shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                  <img src={plumbingImg} alt="Commercial project delivery" className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
              </div>
            </RevealOnScroll>

            <div>
              <RevealOnScroll direction="up">
                <p className="eyebrow">Industries We Serve</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">
                  Reliable Plumbing Solutions Across Critical Sectors
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  Subgeo supports multi-site operators and independent property owners with tailored plumbing, drainage and maintenance programs.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.08}>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {industries.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className="flex items-center gap-2 rounded-sm border border-[#dbe4ef] bg-white px-3 py-2 text-[13px] text-gray-700 hover:border-[#b91c2a] hover:shadow-md transition-all duration-300">
                        <Icon className="h-4 w-4 text-[#b91c2a]" aria-hidden="true" />
                        <span>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.16}>
                <div className="mt-7 rounded-sm border border-[#fbcaca] bg-[#fff5f5] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b91c2a]">Service Promise</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#7f1d1d]">
                    We align every scope with operational risk, site safety and realistic maintenance windows so your teams keep moving.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section id="about" className="section-slab section-rule py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow">About Subgeo Industrial</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">Built On Professional Discipline Since 2012</h2>
                <p className="mt-5 text-[14px] leading-relaxed text-gray-600">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company focused on plumbing, sanitary installation,
                  drainage systems, fire-fighting infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {valueCards.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.1} direction="up">
                  <article className="h-full rounded-sm border border-[#e2e8f0] bg-white p-7 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(15,23,42,0.13)]">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fee2e2] text-[#b91c2a]">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#1a2c4e]">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">{item.description}</p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell section-rule py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Core Services</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">End-To-End Plumbing And Industrial Maintenance</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  From preventive maintenance to full installation programs, our teams deliver practical technical solutions with clear reporting.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item, index) => (
                <ServiceCard 
                  key={item.title} 
                  service={item} 
                  index={index}
                  isOpen={activeService === index}
                  onToggle={() => toggleService(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-slab section-rule py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Recent Work</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">Projects Delivered With High Technical Accuracy</h2>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <RevealOnScroll direction="right">
                <article className="group h-full overflow-hidden rounded-sm border border-[#dbe4ef] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.1)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)] transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img src={projects[0].image} alt={projects[0].title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <span className="absolute left-4 top-4 rounded-sm bg-[#b91c2a] px-3 py-1 text-xs font-bold tracking-[0.14em] text-white">
                      {projects[0].date}
                    </span>
                    <span className="absolute right-4 top-4 rounded-sm bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-[#1a2c4e]">
                      {projects[0].category}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-[#1a2c4e]">{projects[0].title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">{projects[0].summary}</p>
                    <Link 
                      to="/contact" 
                      className="mt-4 inline-flex items-center gap-2 text-[#b91c2a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b91c2a] rounded"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>

              <div className="grid gap-5">
                {projects.slice(1).map((item, index) => (
                  <RevealOnScroll key={item.title} delay={index * 0.08} direction="left">
                    <article className="group overflow-hidden rounded-sm border border-[#dbe4ef] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.1)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)] transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img src={item.image} alt={item.title} className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                        <span className="absolute left-4 top-4 rounded-sm bg-[#b91c2a] px-3 py-1 text-xs font-bold tracking-[0.14em] text-white">
                          {item.date}
                        </span>
                        <span className="absolute right-4 top-4 rounded-sm bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-[#1a2c4e]">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-bold uppercase tracking-[0.08em] text-[#1a2c4e]">{item.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{item.summary}</p>
                        <Link 
                          to="/contact" 
                          className="mt-3 inline-flex items-center gap-2 text-[#b91c2a] font-semibold text-xs uppercase tracking-wider hover:gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b91c2a] rounded"
                        >
                          View Details
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#102845] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,0.14),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(224,41,46,0.35),transparent_42%)]" />
          <div className="container-x relative">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/70">Client Testimony</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-white">Confidence That Comes From Consistent Delivery</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-white/75">
                  Feedback from project partners and recurring maintenance clients who rely on Subgeo teams.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  quote: "Subgeo coordinated seamlessly with our contractors and delivered a clean, compliant installation ahead of timeline.",
                  author: "Amina Hassan",
                  role: "Project Coordinator",
                  image: residentialImg,
                },
                {
                  quote: "Their emergency support line is responsive and the technicians always arrive prepared with clear diagnostics.",
                  author: "Dr. James Kipchoge",
                  role: "Operations Consultant",
                  image: commercialImg,
                },
              ].map((item, index) => (
                <RevealOnScroll key={item.author} direction="up" delay={index * 0.1}>
                  <article className="rounded-sm border border-white/15 bg-white/10 p-7 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                    <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.author} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <p className="text-[15px] leading-relaxed text-white/90">"{item.quote}"</p>
                    <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                        <Users className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.author}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-white/70">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-slab section-rule py-20">
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <RevealOnScroll direction="right">
              <div className="rounded-sm border border-[#dbe4ef] bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                <p className="eyebrow">Contact & Location</p>
                <h2 className="mt-3 font-display text-[clamp(26px,3vw,36px)] text-[#1a2c4e]">Plan Your Next Project With Our Team</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  Reach out for a site survey, emergency support, or a preventive maintenance plan tailored to your operation.
                </p>

                <div className="mt-8 space-y-4 text-[14px] text-gray-700">
                  <a href="tel:0733699441" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#b91c2a] rounded-lg p-2 -ml-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2c4e] text-white group-hover:bg-[#b91c2a] transition-colors">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="group-hover:text-[#b91c2a] transition-colors font-semibold">0733 699 441</span>
                  </a>
                  <a href="mailto:info@subgeo.co.ke" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#b91c2a] rounded-lg p-2 -ml-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2c4e] text-white group-hover:bg-[#b91c2a] transition-colors">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="group-hover:text-[#b91c2a] transition-colors font-semibold">info@subgeo.co.ke</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2c4e] text-white">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <address className="not-italic">
                      <p className="font-semibold">P.O. Box 48230-00100</p>
                      <p className="text-sm text-gray-600">Nairobi, Kenya</p>
                    </address>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#b91c2a] hover:bg-[#8f1520] px-7 py-3 text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b91c2a] focus:ring-offset-2"
                >
                  CONTACT US
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
              <div className="overflow-hidden rounded-sm border border-[#dbe4ef] bg-white p-2 shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                <iframe
                  title="Subgeo location map - Nairobi, Kenya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.45975638997!2d36.656375!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1702345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="h-[360px] w-full rounded-sm"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="grid gap-3 border-t border-[#e2e8f0] p-4 text-[12px] text-gray-600 sm:grid-cols-3">
                  <p className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#b91c2a]" aria-hidden="true" />
                    Mon - Fri: 7:30 AM - 5:30 PM
                  </p>
                  <p className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-[#b91c2a]" aria-hidden="true" />
                    Preventive maintenance plans
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#b91c2a]" aria-hidden="true" />
                    Safety-compliant execution
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="rounded-sm border border-[#f5a2a2] bg-[linear-gradient(120deg,#fff7f7_0%,#ffe8e8_55%,#ffd7d7_100%)] p-8 text-center shadow-[0_16px_34px_rgba(185,28,40,0.16)] md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b91c2a]">Need Immediate Assistance?</p>
                <h3 className="mt-3 font-display text-[clamp(26px,3.2vw,38px)] text-[#7f1d1d]">Book A Technical Assessment Today</h3>
                <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-[#7f1d1d]/85">
                  Let our engineers assess your current plumbing systems and provide a practical, cost-aware improvement plan.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#b91c2a] hover:bg-[#8f1520] px-7 py-3 text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b91c2a] focus:ring-offset-2"
                  >
                    SCHEDULE VISIT
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="inline-flex items-center gap-2 border-2 border-[#b91c2a] px-7 py-3 text-xs font-bold tracking-[0.2em] text-[#b91c2a] transition-all duration-300 hover:bg-[#b91c2a] hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b91c2a] focus:ring-offset-2"
                  >
                    VIEW SERVICES
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <Footer />
      </main>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes floatIn1 {
          0% {
            opacity: 0;
            transform: translateY(50px) translateX(-30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        
        @keyframes floatIn2 {
          0% {
            opacity: 0;
            transform: translateY(-50px) translateX(30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        
        @keyframes floatIn3 {
          0% {
            opacity: 0;
            transform: translateY(50px) translateX(-20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        
        @keyframes floatIn4 {
          0% {
            opacity: 0;
            transform: translateY(-30px) translateX(20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
        
        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float4 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </PageTransition>
  );
}

// Service Card Component with Expandable Content
function ServiceCard({ 
  service, 
  index,
  isOpen,
  onToggle 
}: { 
  service: IconCardItem; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <RevealOnScroll delay={index * 0.08} direction="up">
      <article className="group relative h-full overflow-hidden rounded-sm border border-[#dbe4ef] bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5a2a2] hover:shadow-[0_20px_34px_rgba(15,23,42,0.14)]">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b91c2a] via-[#e0292e] to-[#f97373]" />
        
        {service.image && (
          <div className="relative h-40 overflow-hidden rounded-sm mb-4 -mx-6 -mt-6">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}
        
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1a2c4e] text-white transition-colors group-hover:bg-[#b91c2a]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-base font-bold uppercase tracking-[0.08em] text-[#1a2c4e]">{service.title}</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-gray-600">{service.description}</p>
        
        {/* Expandable Content */}
        <div 
          ref={contentRef}
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 pt-4">
            {service.longDescription && (
              <p className="text-sm text-gray-700 mb-4">
                {service.longDescription}
              </p>
            )}
            {service.features && (
              <ul className="space-y-2" role="list">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-[#b91c2a] flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          onClick={onToggle}
          className="mt-6 w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b91c2a] hover:text-[#8f1520] transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c2a] rounded py-2"
          aria-expanded={isOpen}
          aria-controls={`service-details-${index}`}
        >
          {isOpen ? "Show Less" : "Learn More"}
          {isOpen ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </article>
    </RevealOnScroll>
  );
}

export default SubgeoIndustrial;