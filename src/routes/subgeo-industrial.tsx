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
  Wrench,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
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
import industrialImg from "@/assets/industry2.jpeg";

// New images from user - infrastructure focused, no people
import firePumpImg from "@/assets/fire-pump.jpg";
import pumpRoomImg from "@/assets/pump-room.jpg";
import constructionSiteImg from "@/assets/construction-site.jpg";

export const Route = createFileRoute("/subgeo-industrial")({
  head: () => ({
    meta: [
      { title: "Subgeo Plumbing & Industrial Works Ltd | Professional Plumbing Services Nairobi" },
      {
        name: "description",
        content:
          "Subgeo Plumbing & Industrial Works Ltd delivers reliable plumbing, drainage and industrial maintenance services across Nairobi and beyond. 24/7 emergency response.",
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
  { value: 12, suffix: "+", label: "Years of delivery" },
  { value: 240, suffix: "+", label: "Projects completed" },
  { value: 24, suffix: "/7", label: "Emergency response" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
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
    image: constructionSiteImg,
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

// Full-screen parallax section with fade-out effect
function ParallaxStorySection({ 
  children, 
  image, 
  overlayColor = "#0a1628",
  overlayOpacity = 0.85,
  className = "",
  align = "center"
}: { 
  children: React.ReactNode; 
  image: string; 
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
  align?: "center" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <section ref={ref} className={`relative h-screen overflow-hidden ${className}`}>
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full"
            style={{ 
              backgroundColor: overlayColor,
              opacity: overlayOpacity 
            }}
          />
        </motion.div>
      </motion.div>
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
        className={`relative z-10 h-full flex ${alignmentClasses[align]} justify-center px-6 md:px-12 lg:px-20`}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Floating content section
function FloatingContentSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, y }}
      className={`relative py-32 md:py-40 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SubgeoIndustrial() {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Chapter 1: Hero - Full Screen with Disappearing Effect */}
      <ParallaxStorySection 
        image={firePumpImg} 
        overlayOpacity={0.9}
        align="left"
      >
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
              <span className="flex h-3 w-3 rounded-full bg-[#eb255a] animate-pulse"></span>
              <span className="text-sm font-semibold text-white uppercase tracking-widest">Available 24/7 for Emergencies</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight"
          >
            Precision Plumbing
            <br />
            <span className="text-[#eb255a]">& Industrial Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 max-w-2xl text-xl md:text-2xl text-white/80 leading-relaxed font-light"
          >
            We design, install and maintain resilient plumbing and drainage systems
            for homes, commercial spaces and industrial facilities across Kenya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row gap-5"
          >
            <button
              onClick={() => scrollToSection("services")}
              className="rounded-lg bg-[#eb255a] hover:bg-[#d11f4e] text-white px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
            >
              Request A Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </ParallaxStorySection>

      {/* Chapter 2: Trust Metrics - Clean White Section */}
      <FloatingContentSection className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {trustMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <p className="text-6xl md:text-7xl font-bold text-[#eb255a] mb-3">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FloatingContentSection>

      {/* Chapter 3: About - Full Screen Parallax */}
      <ParallaxStorySection 
        image={pumpRoomImg} 
        overlayOpacity={0.88}
        align="right"
      >
        <div className="max-w-3xl ml-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-6">About Subgeo Industrial</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8">
              Built on Professional
              <br />
              <span className="text-[#eb255a]">Discipline</span> Since 2012
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-white/85 leading-relaxed font-light">
              Subgeo Plumbing & Industrial Works Ltd is a registered private limited company
              focused on plumbing, sanitary installation, drainage systems, fire-fighting
              infrastructure and recurring maintenance services.
            </p>
            <p className="text-xl text-white/85 leading-relaxed font-light">
              Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
              We align every scope with operational risk, site safety and realistic maintenance
              windows so your teams keep moving.
            </p>
            
            <div className="mt-10 inline-flex items-center gap-6 bg-[#eb255a] px-10 py-6 rounded-lg">
              <p className="text-5xl font-bold text-white">12+</p>
              <div>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                  Years of
                </p>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                  Reliable Delivery
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxStorySection>

      {/* Chapter 4: Value Cards - Floating */}
      <FloatingContentSection className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#eb255a] text-white mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a1628] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </FloatingContentSection>

      {/* Chapter 5: Industries - Full Screen */}
      <ParallaxStorySection 
        image={constructionSiteImg} 
        overlayOpacity={0.85}
        align="left"
      >
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Industries We Serve</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
              Reliable Solutions Across
              <br />
              <span className="text-[#eb255a]">Critical Sectors</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl"
          >
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-[#eb255a] transition-all duration-300"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#eb255a] mb-5 group-hover:bg-[#0a1628] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[#eb255a] mb-3">
              Service Promise
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              We align every scope with operational risk, site safety and realistic
              maintenance windows so your teams keep moving.
            </p>
          </motion.div>
        </div>
      </ParallaxStorySection>

      {/* Chapter 6: Services - Alternating Full-Screen Sections */}
      <div className="relative">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isOpen = activeService === index;
          const isEven = index % 2 === 0;
          
          return (
            <ParallaxStorySection
              key={service.title}
              image={service.image || industryImg}
              overlayOpacity={0.88}
              align={isEven ? "left" : "right"}
              className={index % 2 === 0 ? "" : ""}
            >
              <div className={`max-w-3xl ${isEven ? "" : "ml-auto"}`}>
                <motion.div
                  initial={{ opacity: 0, [isEven ? "x" : "x"]: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#eb255a] text-white mb-8">
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <p className="text-sm font-bold uppercase tracking-widest text-[#eb255a] mb-4">
                    0{index + 1} — Core Service
                  </p>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-xl text-white/85 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8"
                    >
                      {service.longDescription && (
                        <p className="text-lg text-white/90 leading-relaxed mb-6">
                          {service.longDescription}
                        </p>
                      )}
                      {service.features && (
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-white/90">
                              <CheckCircle2 className="h-6 w-6 text-[#eb255a] flex-shrink-0 mt-0.5" />
                              <span className="text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}

                  <button
                    onClick={() => setActiveService(isOpen ? null : index)}
                    className="inline-flex items-center gap-3 text-sm font-semibold text-[#eb255a] hover:text-white uppercase tracking-widest transition-colors bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg"
                  >
                    {isOpen ? "Show Less" : "Learn More"}
                    <ArrowRight className={`h-5 w-5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                  </button>
                </motion.div>
              </div>
            </ParallaxStorySection>
          );
        })}
      </div>

      {/* Chapter 7: Projects - Full Screen */}
      <ParallaxStorySection 
        image={industrialImg} 
        overlayOpacity={0.9}
        align="center"
      >
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Recent Work</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
              Projects Delivered with
              <br />
              <span className="text-[#eb255a]">High Technical Accuracy</span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group grid lg:grid-cols-12 gap-6 items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#eb255a]">
                      {project.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="text-xs font-medium uppercase tracking-widest text-white/60">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#eb255a] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-base text-white/60 italic">{project.subtitle}</p>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-base text-white/80 leading-relaxed">{project.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxStorySection>

      {/* Chapter 8: Contact - Clean Section */}
      <FloatingContentSection className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Contact & Location</p>
                <h2 className="text-5xl md:text-6xl font-bold text-[#0a1628] leading-tight mb-8">
                  Plan Your Next
                  <br />
                  <span className="text-[#eb255a]">Project</span> With Our Team
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <a
                  href="tel:0733699441"
                  className="flex items-center gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="h-14 w-14 rounded-xl bg-[#eb255a] flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                    <p className="text-xl font-bold text-[#0a1628] group-hover:text-[#eb255a] transition-colors">
                      0733 699 441
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@subgeo.co.ke"
                  className="flex items-center gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="h-14 w-14 rounded-xl bg-[#eb255a] flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                    <p className="text-xl font-bold text-[#0a1628] group-hover:text-[#eb255a] transition-colors">
                      info@subgeo.co.ke
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 rounded-xl bg-gray-50">
                  <div className="h-14 w-14 rounded-xl bg-[#eb255a] flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Location</p>
                    <address className="text-xl font-bold text-[#0a1628] not-italic">
                      P.O. Box 48230-00100, Nairobi, Kenya
                    </address>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-10 py-5 text-sm font-semibold uppercase tracking-widest rounded-lg transition-all duration-300"
                >
                  Schedule A Visit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
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
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <Clock3 className="h-6 w-6 text-[#eb255a] mx-auto mb-2" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Hours</p>
                    <p className="text-sm font-bold text-[#0a1628]">Mon-Fri 7:30-5:30</p>
                  </div>
                  <div>
                    <Droplets className="h-6 w-6 text-[#eb255a] mx-auto mb-2" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Service</p>
                    <p className="text-sm font-bold text-[#0a1628]">Preventive Plans</p>
                  </div>
                  <div>
                    <ShieldCheck className="h-6 w-6 text-[#eb255a] mx-auto mb-2" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Safety</p>
                    <p className="text-sm font-bold text-[#0a1628]">Compliant</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </FloatingContentSection>

      {/* Final CTA - Full Screen Parallax */}
      <ParallaxStorySection 
        image={heroImg} 
        overlayOpacity={0.92}
        align="center"
        className="h-[80vh]"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-6">
              Need Immediate Assistance?
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8">
              Book a Technical
              <br />
              <span className="text-[#eb255a]">Assessment</span> Today
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
              Let our engineers assess your current plumbing systems and provide a practical,
              cost-aware improvement plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-12 py-6 text-sm font-semibold uppercase tracking-widest rounded-lg transition-all duration-300"
              >
                Schedule Visit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-12 py-6 text-sm font-semibold uppercase tracking-widest rounded-lg transition-all duration-300"
              >
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </ParallaxStorySection>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(235, 37, 90, 0.3);
          color: #0a1628;
        }
      `}</style>
    </div>
  );
}

export default SubgeoIndustrial;