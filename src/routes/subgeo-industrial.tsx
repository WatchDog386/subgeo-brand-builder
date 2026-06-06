import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
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
  CheckCircle2,
  Quote,
  Star,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/corporate-hero.jpg";
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
  { value: 12, suffix: "+", label: "Years of delivery" },
  { value: 240, suffix: "+", label: "Projects completed" },
  { value: 24, suffix: "/7", label: "Emergency response" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
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
    longDescription: "Our comprehensive plumbing maintenance service ensures your systems run smoothly year-round.",
    features: ["Leak detection and repair", "Pressure testing", "Pipe insulation", "Valve maintenance", "System optimization"],
    icon: Wrench,
    image: plumbingImg,
  },
  {
    title: "Insurance Support",
    description: "Technical inspections, reports and approved repair execution for plumbing-related insurance claims.",
    longDescription: "We work directly with insurance companies to provide detailed technical assessments and approved repair services.",
    features: ["Damage assessment", "Insurance-compliant reports", "Direct insurer liaison", "Approved repairs", "Claim documentation"],
    icon: FileText,
    image: commercialImg,
  },
  {
    title: "Geyser Installation",
    description: "Safe, code-compliant electric geyser installation, replacement and relocation services.",
    longDescription: "Professional geyser installation services that prioritize safety and efficiency.",
    features: ["Size consultation", "Safe installation", "Electrical connections", "Pressure valve setup", "Warranty registration"],
    icon: Settings,
    image: geyserImg,
  },
  {
    title: "Kitchen & Bathroom Fitouts",
    description: "Precise fixture plumbing for upgrades, remodels and full sanitary installation projects.",
    longDescription: "Transform your kitchen and bathroom with our expert fitout services.",
    features: ["Fixture installation", "Pipe rerouting", "Waterproofing", "Drain connections", "Final testing"],
    icon: Home,
    image: bathroomImg,
  },
  {
    title: "Shower System Servicing",
    description: "Cleaning, replacement and pressure balancing to keep shower lines efficient and reliable.",
    longDescription: "Keep your shower systems performing at their best with our specialized servicing.",
    features: ["System cleaning", "Head replacement", "Pressure balancing", "Temperature control", "Leak prevention"],
    icon: RefreshCw,
    image: showerImg,
  },
  {
    title: "Drainage & Waste Networks",
    description: "Drain rerouting, waste line diagnostics and leak remediation for healthy drainage performance.",
    longDescription: "Our drainage specialists diagnose and resolve complex waste network issues.",
    features: ["CCTV inspection", "Blockage removal", "Pipe relining", "System rerouting", "Preventive maintenance"],
    icon: Funnel,
    image: drainageImg,
  },
];

const projects = [
  {
    date: "03/2018",
    title: "GLEE HOTEL",
    subtitle: "Fire Pump Retrofit",
    summary: "Full plumbing and drainage overhaul with integrated fire-fighting lines for a high-occupancy hospitality site.",
    image: industrialImg,
    category: "Hospitality",
  },
  {
    date: "02/2023",
    title: "Qwetu Catholic University",
    subtitle: "Campus Sanitary Upgrades",
    summary: "Campus-wide sanitary upgrades with water-efficient fittings and compliance-ready safety infrastructure.",
    image: commercialImg,
    category: "Education",
  },
  {
    date: "04/2024",
    title: "Kenya Marine Fisheries",
    subtitle: "Mixed-Use Development",
    summary: "Mixed-use development plumbing execution spanning underground mains, sanitary systems and hydrant networks.",
    image: industrialImg,
    category: "Industrial",
  },
];

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SubgeoIndustrial() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % trustQuotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={industryImg}
            alt="Subgeo Industrial Works"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/90" />
        </div>

        <div className="relative z-10 w-full">
          <Navbar />
        </div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
                <span className="flex h-2 w-2 rounded-full bg-[#2563eb] animate-pulse"></span>
                <span className="text-sm font-medium text-white">Available 24/7 for Emergencies</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Precision Plumbing
              <br />
              <span className="text-[#2563eb]">& Industrial Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed"
            >
              We design, install and maintain resilient plumbing and drainage systems
              for homes, commercial spaces and industrial facilities across Kenya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request A Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">Trusted Performance</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Trusted by teams that cannot afford downtime
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustMetrics.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-2">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">About Subgeo Industrial</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-6">
                  Built on professional discipline since 2012
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company
                  focused on plumbing, sanitary installation, drainage systems, fire-fighting
                  infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
                  We align every scope with operational risk, site safety and realistic maintenance
                  windows so your teams keep moving.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Subgeo Industrial team at work"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#2563eb] p-6 rounded-lg shadow-xl max-w-[200px]">
                  <p className="text-3xl font-bold text-white mb-1">12+</p>
                  <p className="text-xs font-medium text-white/90 uppercase tracking-wide">
                    Years of reliable delivery
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Value Cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-lg p-8 hover:bg-[#2563eb] group transition-colors duration-300">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563eb] text-white group-hover:bg-white group-hover:text-[#2563eb] transition-colors duration-300 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] group-hover:text-white mb-3 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">Industries We Serve</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-6">
                  Reliable solutions across critical sectors
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                  Subgeo supports multi-site operators and independent property owners
                  with tailored plumbing, drainage and maintenance programs.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="border-l-4 border-[#2563eb] pl-6 bg-white p-6 rounded-r-lg">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#2563eb] mb-2">
                    Service Promise
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We align every scope with operational risk, site safety and realistic
                    maintenance windows so your teams keep moving.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.name} delay={index * 0.05}>
                    <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#2563eb]">
                      <Icon className="h-8 w-8 text-[#2563eb] mb-3" />
                      <p className="text-sm font-semibold text-[#0a1628]">{item.name}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">Core Services</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                End-to-end plumbing and industrial maintenance
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = activeService === index;
              return (
                <ScrollReveal key={service.title} delay={index * 0.05}>
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200">
                    {service.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563eb] text-white mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0a1628] mb-3">{service.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-gray-200">
                              {service.longDescription && (
                                <p className="text-sm text-gray-600 mb-4">{service.longDescription}</p>
                              )}
                              {service.features && (
                                <ul className="space-y-2">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                      <CheckCircle2 className="h-4 w-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        onClick={() => setActiveService(isOpen ? null : index)}
                        className="mt-4 w-full flex items-center justify-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                      >
                        {isOpen ? "Show Less" : "Learn More"}
                        <ArrowRight className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">Recent Work</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Projects delivered with high technical accuracy
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <div className="group grid lg:grid-cols-12 gap-6 items-center bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="lg:col-span-3">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
                        {project.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-[#2563eb] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 italic">{project.subtitle}</p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-sm text-white/70 leading-relaxed">{project.summary}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">Client Testimony</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Confidence from consistent delivery
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg p-8 md:p-12 shadow-lg"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#2563eb] text-[#2563eb]" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-[#0a1628] leading-relaxed mb-8 font-medium">
                    "{trustQuotes[activeTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#2563eb] flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#0a1628]">
                        {trustQuotes[activeTestimonial].author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {trustQuotes[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {trustQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "w-12 bg-[#2563eb]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">Contact & Location</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-6">
                  Plan your next project with our team
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                  Reach out for a site survey, emergency support, or a preventive
                  maintenance plan tailored to your operation.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                <ScrollReveal delay={0.15}>
                  <a
                    href="tel:0733699441"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-[#2563eb] flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone</p>
                      <p className="text-base font-bold text-[#0a1628] group-hover:text-[#2563eb] transition-colors">
                        0733 699 441
                      </p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <a
                    href="mailto:info@subgeo.co.ke"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-[#2563eb] flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</p>
                      <p className="text-base font-bold text-[#0a1628] group-hover:text-[#2563eb] transition-colors">
                        info@subgeo.co.ke
                      </p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="h-12 w-12 rounded-lg bg-[#2563eb] flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Location</p>
                      <address className="text-base font-bold text-[#0a1628] not-italic">
                        P.O. Box 48230-00100, Nairobi, Kenya
                      </address>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.3}>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300"
                  >
                    Schedule A Visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Subgeo location map - Nairobi, Kenya"
                  src="https://maps.google.com/maps?q=Nairobi,Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Clock3 className="h-5 w-5 text-[#2563eb] mx-auto mb-2" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Hours</p>
                      <p className="text-sm font-bold text-[#0a1628] mt-1">Mon-Fri 7:30-5:30</p>
                    </div>
                    <div>
                      <Droplets className="h-5 w-5 text-[#2563eb] mx-auto mb-2" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Service</p>
                      <p className="text-sm font-bold text-[#0a1628] mt-1">Preventive Plans</p>
                    </div>
                    <div>
                      <ShieldCheck className="h-5 w-5 text-[#2563eb] mx-auto mb-2" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Safety</p>
                      <p className="text-sm font-bold text-[#0a1628] mt-1">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={commercialImg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0a1628]/90" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-4">
              Need Immediate Assistance?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Book a technical assessment today
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Let our engineers assess your current plumbing systems and provide a practical,
              cost-aware improvement plan.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300"
              >
                Schedule Visit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300"
              >
                View Services
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(37, 99, 235, 0.2);
          color: #0a1628;
        }
      `}</style>
    </div>
  );
}

export default SubgeoIndustrial;