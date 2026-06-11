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
  Users,
  Award,
  TrendingUp,
  Target,
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
import heroImg from "@/assets/corporate-hero.jpeg";
import industryImg from "@/assets/industry.jpeg";
import plumbingImg from "@/assets/plumber.jpeg";
import drainageImg from "@/assets/drainage.png";
import geyserImg from "@/assets/geyserinstall.png";
import bathroomImg from "@/assets/kitchenfitouts.png";
import showerImg from "@/assets/showerservice.png";
import commercialImg from "@/assets/corporate-hero.jpeg";
import industrialImg from "@/assets/industry.jpeg";
import firePumpImg from "@/assets/industry.jpeg";
import pumpRoomImg from "@/assets/industry.jpeg";
import constructionSiteImg from "@/assets/industry.jpeg";
import teamWorkingImg from "@/assets/work.jpeg";
import equipmentImg from "@/assets/service.jpeg";
import safetyGearImg from "@/assets/industry.jpeg";
import siteAssessmentImg from "@/assets/siteassessment.png";
import planningImg from "@/assets/planning.png";
import expertExecutionImg from "@/assets/expertexecution.png";
import handoverImg from "@/assets/handover.png";

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
    date: "2023",
    title: "Qwetu Catholic University",
    subtitle: "Water Reservoir Tanks & Plumbing Upgrade",
    summary:
      "Contracted to deliver a comprehensive water storage and plumbing upgrade. The assignment involved installation of water reservoir tanks and modernization of existing plumbing systems to improve efficiency and sustainability.",
    details:
      "Our team implemented durable water storage solutions, upgraded sanitary systems, and installed water-saving fixtures to enhance resource management. Additionally, we designed and integrated a fire protection system featuring automatic fire suppression components and emergency water reserves. The successful completion strengthened the institution's water management capacity while ensuring compliance with safety and operational standards.",
    image: commercialImg,
    category: "Education",
    highlights: [
      "Water reservoir tank installation",
      "Sanitary system upgrades",
      "Water-saving fixtures",
      "Fire protection system integration",
    ],
  },
  {
    date: "2024",
    title: "Kenya Marine Fisheries & Socio-Economic Development",
    subtitle: "KEMFSED Liwatoni Project",
    summary:
      "Completed a large-scale plumbing, drainage, sanitary, and fire-fighting installation project involving extensive underground plumbing and drainage works with detailed hydraulic calculations.",
    details:
      "The project involved installation of high-quality sanitary fixtures across residential, commercial, and public-use facilities. Our team also designed and implemented a comprehensive fire protection system, including sprinklers, fire hose reels, and emergency water supply lines to safeguard occupants and infrastructure. Delivered on time and to the highest industry standards, showcasing our ability to execute complex integrated mechanical and plumbing solutions.",
    image: constructionSiteImg,
    category: "Industrial",
    highlights: [
      "Underground plumbing & drainage",
      "Hydraulic calculations",
      "Sanitary fixtures installation",
      "Fire protection system (sprinklers, hose reels)",
    ],
  },
  {
    date: "2018",
    title: "GLEE HOTEL",
    subtitle: "Fire Pump Retrofit & Full Overhaul",
    summary:
      "Full plumbing and drainage overhaul with integrated fire-fighting lines for a high-occupancy hospitality site, ensuring compliance with safety standards and operational reliability.",
    details:
      "The project required careful coordination to minimize disruption to hotel operations while delivering comprehensive plumbing upgrades, drainage improvements, and a fully integrated fire suppression system. All work was completed within tight timelines to maintain the property's operational schedule.",
    image: industrialImg,
    category: "Hospitality",
    highlights: [
      "Full plumbing overhaul",
      "Drainage system upgrade",
      "Fire-fighting line integration",
      "Minimal operational disruption",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Site Assessment",
    description:
      "Our engineers conduct thorough on-site inspections to understand your unique plumbing challenges, infrastructure conditions, and operational requirements before proposing any solution.",
    icon: Target,
    image: siteAssessmentImg,
  },
  {
    number: "02",
    title: "Strategic Planning",
    description:
      "We develop detailed project plans with clear timelines, resource allocation, material specifications, and comprehensive safety protocols tailored to your facility.",
    icon: FileText,
    image: planningImg,
  },
  {
    number: "03",
    title: "Expert Execution",
    description:
      "Skilled technicians deploy with properly maintained equipment and certified materials to deliver precision workmanship that meets industry standards and project specifications.",
    icon: Wrench,
    image: expertExecutionImg,
  },
  {
    number: "04",
    title: "Quality Assurance & Handover",
    description:
      "Rigorous pressure testing, system diagnostics, and compliance inspections ensure every installation meets our high standards before formal handover and documentation.",
    icon: ShieldCheck,
    image: handoverImg,
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "Our team holds industry certifications and undergoes continuous training on latest technologies and safety standards.",
    stat: "100%",
    statLabel: "Certified Technicians",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Over 240 successful projects across diverse sectors demonstrate our capability to handle complex challenges.",
    stat: "240+",
    statLabel: "Projects Delivered",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "We assign dedicated project managers and technicians who understand your facility's unique needs.",
    stat: "24/7",
    statLabel: "Support Available",
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

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ParallaxSection({
  image,
  children,
  overlayColor = "#1e293b",
  overlayOpacity = 0.85,
  parallaxSpeed = 0.5,
  className = "",
}: {
  image: string;
  children: React.ReactNode;
  overlayColor?: string;
  overlayOpacity?: number;
  parallaxSpeed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${parallaxSpeed * 20}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.3, 0]);

  return (
    <section ref={ref} className={`relative min-h-screen overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      </motion.div>
      <div className="relative z-10 h-full flex items-center py-24 md:py-32">
        {children}
      </div>
    </section>
  );
}

// ─── Sticky Navbar Wrapper ──────────────────────────────────────────────────────
function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <Navbar />
      </div>
    </header>
  );
}

// ─── Process Timeline Component - Vertical Layout with Images ─────────────────
function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
              Our Process
            </p>
            <h2 className="font-display text-[clamp(24px,2.5vw,36px)] font-bold text-[#1e293b] leading-[1.15]">
              How we deliver{" "}
              <span className="text-[#2563eb]">excellence</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-sans line-clamp-2">
              A structured, transparent approach that keeps every project on time,
              on budget, and built to last.
            </p>
          </div>
        </FadeInSection>

        {/* Vertical Process Steps - Images on Left, Text on Right */}
        <div className="space-y-8 md:space-y-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            return (
              <FadeInSection key={step.number} delay={index * 0.1}>
                <motion.div
                  onClick={() => setActiveStep(index)}
                  className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center cursor-pointer group ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Side */}
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 via-transparent to-transparent" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <motion.div
                        className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full text-white text-lg md:text-2xl font-bold shadow-lg ${
                          isActive ? "bg-[#2563eb] scale-110" : "bg-white/20 backdrop-blur-md"
                        }`}
                        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                  </div>

                    {/* Content Side */}
                    <div className={`space-y-3 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                      <div className={`inline-flex items-center gap-2 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className={`h-8 w-8 rounded-lg ${isActive ? "bg-[#2563eb]" : "bg-[#2563eb]/10"} flex items-center justify-center`}>
                          <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#2563eb]"}`} />
                        </div>
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? "text-[#2563eb]" : "text-gray-400"} font-sans`}>
                          Step {step.number}
                        </span>
                      </div>
                      
                      <h3 className={`font-display text-xl md:text-2xl font-bold ${isActive ? "text-[#2563eb]" : "text-[#1e293b] group-hover:text-[#2563eb]"} transition-colors`}>
                        {step.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans line-clamp-2">
                        {step.description}
                      </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2 pt-2">
                      {processSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === index
                              ? "w-12 bg-[#2563eb]"
                              : i < index
                              ? "w-6 bg-[#2563eb]/40"
                              : "w-6 bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Divider */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center py-4">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#2563eb]/40 to-gray-200" />
                  </div>
                )}
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SubgeoIndustrial() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Fixed Sticky Navbar - content scrolls behind */}
      <StickyNavbar />

      {/* Hero Section - Reduced height like beauty.tsx */}
      <section ref={heroRef} className="relative h-[420px] lg:h-[520px] flex items-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src={firePumpImg}
            alt="Subgeo Industrial Works"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/95 via-[#1e293b]/80 to-transparent"
          />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
              <span className="flex h-2 w-2 rounded-full bg-[#2563eb] animate-pulse"></span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Available 24/7 for Emergencies
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-display text-[clamp(28px,3.5vw,48px)] leading-[1.1] font-bold text-white"
          >
            Precision <span className="text-[#2563eb]">Plumbing</span>
            <br />
            &amp; Industrial Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 max-w-xl text-sm md:text-base text-white/80 leading-relaxed font-sans"
          >
            We design, install and maintain resilient plumbing and drainage systems
            for homes, commercial spaces and industrial facilities across Kenya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-5 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => scrollToSection("services")}
              className="rounded-sm bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <Link
              to="/contact"
              className="rounded-sm border-2 border-white text-white hover:bg-white hover:text-[#1e293b] px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              Request A Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chapter 01: Trust Metrics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                Trusted Performance
              </p>
              <h2 className="font-display text-[clamp(24px,2.5vw,36px)] font-bold text-[#1e293b] leading-[1.15]">
                Trusted by teams that cannot afford downtime
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustMetrics.map((item, index) => (
              <FadeInSection key={item.label} delay={index * 0.12}>
                <div className="text-center p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <p className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-2">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest font-sans">
                    {item.label}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 02: About */}
      <ParallaxSection image={pumpRoomImg} overlayOpacity={0.9} className="min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeInSection>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                About Subgeo Industrial
              </p>
              <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-white leading-[1.15] mb-6">
                Built on professional <span className="text-[#2563eb]">discipline</span> since 2012
              </h2>
            </FadeInSection>

            <div className="space-y-4">
              <FadeInSection delay={0.2}>
                <p className="text-sm md:text-base text-white/85 leading-relaxed font-sans line-clamp-2">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company
                  focused on plumbing, sanitary installation, drainage systems, fire-fighting
                  infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <p className="text-sm md:text-base text-white/85 leading-relaxed font-sans line-clamp-2">
                  Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
                  We align every scope with operational risk, site safety and realistic maintenance
                  windows so your teams keep moving.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="inline-flex items-center gap-3 bg-[#2563eb] px-5 py-3 rounded-sm">
                  <p className="text-2xl font-bold text-white">12+</p>
                  <div>
                    <p className="text-[11px] font-semibold text-white/90 uppercase tracking-widest font-sans">
                      Years of reliable delivery
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Value Cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.title} delay={index * 0.12}>
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563eb] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1e293b] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process - Enhanced Timeline with Vertical Layout */}
      <ProcessTimeline />

      {/* Chapter 03: Industries */}
      <ParallaxSection image={constructionSiteImg} overlayOpacity={0.85} className="min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <FadeInSection>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                  Industries We Serve
                </p>
                <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-white leading-[1.15] mb-6">
                  Reliable solutions across critical <span className="text-[#2563eb]">sectors</span>
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <p className="text-sm md:text-base text-white/85 leading-relaxed font-sans line-clamp-2 mb-6">
                  Subgeo supports multi-site operators and independent property owners
                  with tailored plumbing, drainage and maintenance programs.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="border-l-4 border-[#2563eb] pl-5 bg-white/10 backdrop-blur-sm p-5 rounded-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb] mb-2 font-sans">
                    Service Promise
                  </p>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans line-clamp-2">
                    We align every scope with operational risk, site safety and realistic
                    maintenance windows so your teams keep moving.
                  </p>
                </div>
              </FadeInSection>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeInSection key={item.name} delay={0.4 + index * 0.06}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-[#2563eb] transition-all duration-300"
                    >
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white mb-3 group-hover:bg-white group-hover:text-[#2563eb] transition-all duration-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-xs md:text-sm font-bold text-white font-sans">
                        {item.name}
                      </h3>
                    </motion.div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <FadeInSection>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                  Why Choose Us
                </p>
                <h2 className="font-display text-[clamp(24px,2.5vw,36px)] font-bold text-[#1e293b] leading-[1.15] mb-6">
                  The Subgeo <span className="text-[#2563eb]">advantage</span>
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 font-sans line-clamp-2">
                  We combine technical expertise with unwavering commitment to safety,
                  quality, and client satisfaction. Every project reflects our dedication
                  to excellence.
                </p>
              </FadeInSection>

              <div className="space-y-3">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <FadeInSection key={item.title} delay={0.2 + index * 0.1}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-lg bg-[#2563eb] flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-display text-base font-bold text-[#1e293b] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed mb-2 font-sans line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-[#2563eb]">
                              {item.stat}
                            </span>
                            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider font-sans">
                              {item.statLabel}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </FadeInSection>
                  );
                })}
              </div>
            </div>

            <FadeInSection delay={0.3}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={teamWorkingImg}
                    alt="Subgeo team at work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 via-transparent to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 md:-bottom-6 -left-3 md:-left-6 bg-white rounded-lg p-4 shadow-lg max-w-[220px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-[#2563eb] flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#1e293b]">12+</p>
                      <p className="text-[11px] text-gray-500 font-sans">Years Experience</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-sans line-clamp-2">
                    Trusted by leading companies across Kenya for industrial plumbing excellence
                  </p>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Chapter 04: Services */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                Core Services
              </p>
              <h2 className="font-display text-[clamp(24px,2.5vw,36px)] font-bold text-[#1e293b] leading-[1.15]">
                End-to-end plumbing and industrial maintenance
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = activeService === index;
              const isEven = index % 2 === 0;

              return (
                <FadeInSection key={service.title} delay={index * 0.08}>
                  <div
                    className={`grid lg:grid-cols-2 gap-0 border-t border-gray-200 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Image Side */}
                    <div
                      className={`relative aspect-[4/3] lg:aspect-auto lg:h-[450px] xl:h-[500px] overflow-hidden ${
                        isEven ? "" : "lg:order-2"
                      }`}
                    >
                      {service.image && (
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          initial={{ scale: 1.1 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2 }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/50 via-transparent to-transparent" />
                      <div className="absolute top-6 md:top-8 left-6 md:left-8">
                        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div
                      className={`flex flex-col justify-center p-6 md:p-8 lg:p-10 ${
                        isEven ? "" : "lg:order-1"
                      }`}
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563eb] text-white mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#1e293b] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 font-sans line-clamp-2">
                        {service.description}
                      </p>

                      <AnimatePresence>
                        {isOpen && service.longDescription && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mb-6"
                          >
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                              {service.longDescription}
                            </p>
                            {service.features && (
                              <ul className="space-y-2 md:space-y-3">
                                {service.features.map((feature, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 md:gap-4 text-gray-600"
                                  >
                                    <CheckCircle2 className="h-5 w-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                                    <span className="text-sm md:text-base">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        onClick={() => setActiveService(isOpen ? null : index)}
                        className="mt-4 inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] transition-colors uppercase tracking-widest"
                      >
                        {isOpen ? "Show Less" : "Learn More"}
                        <ArrowRight
                          className={`h-4 w-4 md:h-5 md:w-5 transition-transform ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* Chapter 05: Projects - Enhanced with detailed descriptions */}
      <section id="projects" className="py-16 md:py-20 bg-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                Recent Work
              </p>
              <h2 className="font-display text-[clamp(24px,2.5vw,36px)] font-bold leading-[1.15]">
                Projects delivered with <span className="text-[#2563eb]">high technical accuracy</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-8 md:space-y-10">
            {projects.map((project, index) => {
              const isExpanded = activeProject === index;
              return (
                <FadeInSection key={project.title} delay={index * 0.12}>
                  <motion.div
                    layout
                    className="group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="grid lg:grid-cols-12 gap-0">
                      {/* Image */}
                      <div className="lg:col-span-4">
                        <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[200px] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center bg-[#2563eb] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                              {project.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-8 p-5 md:p-6 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb] font-sans">
                            {project.category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 font-sans">
                            {project.subtitle}
                          </span>
                        </div>

                        <h3 className="font-display text-lg md:text-xl font-bold mb-2 group-hover:text-[#2563eb] transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-sm text-white/70 leading-relaxed mb-3 font-sans line-clamp-2">
                          {project.summary}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
                          {project.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 bg-white/10 border border-white/10 rounded-full px-3 py-1.5"
                            >
                              <CheckCircle2 className="h-3 w-3 text-[#2563eb]" />
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 md:pt-5 border-t border-white/10">
                                <p className="text-sm md:text-base text-white/65 leading-relaxed">
                                  {project.details}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          onClick={() => setActiveProject(isExpanded ? null : index)}
                          className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#2563eb] hover:text-white transition-colors uppercase tracking-widest self-start"
                        >
                          {isExpanded ? "Show Less" : "Read Full Scope"}
                          <ArrowRight
                            className={`h-4 w-4 transition-transform ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment & Safety */}
      <ParallaxSection image={safetyGearImg} overlayOpacity={0.9} className="min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeInSection>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                Safety & Equipment
              </p>
              <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-white leading-[1.15] mb-6">
                Professional <span className="text-[#2563eb]">grade tools</span> &amp; safety first
              </h2>
            </FadeInSection>

            <div className="space-y-4">
              <FadeInSection delay={0.2}>
                <p className="text-sm md:text-base text-white/85 leading-relaxed font-sans line-clamp-2">
                  We invest in state-of-the-art equipment and prioritize safety protocols
                  on every job site. Our technicians are equipped with the latest tools
                  and protective gear to ensure efficient, safe service delivery.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <Wrench className="h-6 w-6 text-[#2563eb] mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1 font-sans">
                      Modern Equipment
                    </h4>
                    <p className="text-xs text-white/70 font-sans">
                      Latest diagnostic and repair tools
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <ShieldCheck className="h-6 w-6 text-[#2563eb] mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1 font-sans">
                      Safety Certified
                    </h4>
                    <p className="text-xs text-white/70 font-sans">OSHA compliant practices</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <RefreshCw className="h-6 w-6 text-[#2563eb] mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1 font-sans">
                      Well Maintained
                    </h4>
                    <p className="text-xs text-white/70 font-sans">
                      Regular equipment servicing
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <BadgeCheck className="h-6 w-6 text-[#2563eb] mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1 font-sans">
                      Quality Assured
                    </h4>
                    <p className="text-xs text-white/70 font-sans">Premium materials only</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Chapter 06: Contact */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <FadeInSection>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-3 font-sans">
                  Contact & Location
                </p>
                <h2 className="font-display text-[clamp(22px,2.5vw,34px)] font-bold text-[#1e293b] leading-[1.15] mb-4">
                  Plan your next project with our team
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 font-sans line-clamp-2">
                  Reach out for a site survey, emergency support, or a preventive
                  maintenance plan tailored to your operation.
                </p>
              </FadeInSection>

              <div className="space-y-3">
                <FadeInSection delay={0.2}>
                  <a
                    href="tel:0733699441"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#2563eb] flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors flex-shrink-0">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-0.5 font-sans">
                        Phone
                      </p>
                      <p className="text-sm font-bold text-[#1e293b] group-hover:text-[#2563eb] transition-colors font-sans">
                        0733 699 441
                      </p>
                    </div>
                  </a>
                </FadeInSection>

                <FadeInSection delay={0.3}>
                  <a
                    href="mailto:info@subgeo.co.ke"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#2563eb] flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors flex-shrink-0">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-0.5 font-sans">
                        Email
                      </p>
                      <p className="text-sm font-bold text-[#1e293b] group-hover:text-[#2563eb] transition-colors font-sans">
                        info@subgeo.co.ke
                      </p>
                    </div>
                  </a>
                </FadeInSection>

                <FadeInSection delay={0.4}>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="h-10 w-10 rounded-lg bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-0.5 font-sans">
                        Location
                      </p>
                      <address className="text-sm font-bold text-[#1e293b] not-italic font-sans">
                        P.O. Box 48230-00100, Nairobi, Kenya
                      </address>
                    </div>
                  </div>
                </FadeInSection>
              </div>

              <FadeInSection delay={0.5}>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 font-sans"
                  >
                    Schedule A Visit
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection delay={0.2}>
              <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
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
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <Clock3 className="h-4 w-4 text-[#2563eb] mx-auto mb-1" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-0.5 font-sans">
                        Hours
                      </p>
                      <p className="text-[11px] font-bold text-[#1e293b] font-sans">
                        Mon-Fri 7:30-5:30
                      </p>
                    </div>
                    <div>
                      <Droplets className="h-4 w-4 text-[#2563eb] mx-auto mb-1" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-0.5 font-sans">
                        Service
                      </p>
                      <p className="text-[11px] font-bold text-[#1e293b] font-sans">
                        Preventive Plans
                      </p>
                    </div>
                    <div>
                      <ShieldCheck className="h-4 w-4 text-[#2563eb] mx-auto mb-1" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-0.5 font-sans">
                        Safety
                      </p>
                      <p className="text-[11px] font-bold text-[#1e293b] font-sans">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-[400px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={firePumpImg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/95 via-[#1e293b]/90 to-[#1e293b]/95" />
        </div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb] mb-4 font-sans">
                Need Immediate Assistance?
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="font-display text-[clamp(26px,3vw,42px)] font-bold text-white leading-[1.1] mb-4">
                Book a technical assessment today
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-sm md:text-base text-white/85 leading-relaxed mb-6 max-w-2xl mx-auto font-sans line-clamp-2">
                Let our engineers assess your current plumbing systems and provide a practical,
                cost-aware improvement plan.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 font-sans"
                >
                  Schedule Visit
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1e293b] px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 font-sans"
                >
                  View Services
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(37, 99, 235, 0.2);
          color: #1e293b;
        }
      `}</style>
    </div>
  );
}

export default SubgeoIndustrial;