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
import drainageImg from "@/assets/plumbing.png";
import geyserImg from "@/assets/service.png";
import bathroomImg from "@/assets/plumbing.png";
import showerImg from "@/assets/services.png";
import commercialImg from "@/assets/corporate-hero.jpeg";
import industrialImg from "@/assets/industry2.jpeg";

// New images from user
import firePumpImg from "@/assets/industry.jpeg";
import pumpRoomImg from "@/assets/industry2.jpeg";
import constructionSiteImg from "@/assets/industry.jpeg";

// Additional imagery for storytelling
import teamWorkingImg from "@/assets/work.jpg";
import equipmentImg from "@/assets/equipment.jpg";
import safetyGearImg from "@/assets/safety.jpg";
import blueprintImg from "@/assets/blueprint.png";
import completedProjectImg from "@/assets/completeprjct.jpg";

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
    image: blueprintImg,
  },
  {
    number: "02",
    title: "Strategic Planning",
    description:
      "We develop detailed project plans with clear timelines, resource allocation, material specifications, and comprehensive safety protocols tailored to your facility.",
    icon: FileText,
    image: constructionSiteImg,
  },
  {
    number: "03",
    title: "Expert Execution",
    description:
      "Skilled technicians deploy with properly maintained equipment and certified materials to deliver precision workmanship that meets industry standards and project specifications.",
    icon: Wrench,
    image: equipmentImg,
  },
  {
    number: "04",
    title: "Quality Assurance & Handover",
    description:
      "Rigorous pressure testing, system diagnostics, and compliance inspections ensure every installation meets our high standards before formal handover and documentation.",
    icon: ShieldCheck,
    image: completedProjectImg,
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
  overlayColor = "#0a1628",
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
          ? "bg-[#0a1628]/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2"
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <FadeInSection>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-[1.15]">
              How we deliver{" "}
              <span className="text-[#eb255a]">excellence</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-[#0a1628]/30 to-transparent" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <motion.div
                        className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full text-white text-lg md:text-2xl font-bold shadow-lg ${
                          isActive ? "bg-[#eb255a] scale-110" : "bg-white/20 backdrop-blur-md"
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
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                    <div className={`inline-flex items-center gap-2 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`h-10 w-10 rounded-xl ${isActive ? "bg-[#eb255a]" : "bg-[#eb255a]/10"} flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-[#eb255a]"}`} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-[#eb255a]" : "text-gray-400"}`}>
                        Step {step.number}
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${isActive ? "text-[#eb255a]" : "text-[#0a1628] group-hover:text-[#eb255a]"} transition-colors`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2 pt-2">
                      {processSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === index
                              ? "w-12 bg-[#eb255a]"
                              : i < index
                              ? "w-6 bg-[#eb255a]/40"
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
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#eb255a]/40 to-gray-200" />
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

      {/* Hero Section - Full Screen with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
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
            className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/95"
          />
        </motion.div>

        {/* Spacer for fixed navbar */}
        <div className="relative z-10 h-20 md:h-24" />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 flex items-center px-6 md:px-12 lg:px-20 pb-12 md:pb-16"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4 md:mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2 md:py-3">
                <span className="flex h-2 w-2 rounded-full bg-[#eb255a] animate-pulse"></span>
                <span className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
                  Available 24/7 for Emergencies
                </span>
              </div>
            </motion.div>

            {/* Reduced hero typography for better balance */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Precision
              <br />
              <span className="text-[#eb255a]">Plumbing</span>
              <br />
              & Industrial
              <br />
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg lg:text-xl text-white/80 leading-relaxed font-light"
            >
              We design, install and maintain resilient plumbing and drainage systems
              for homes, commercial spaces and industrial facilities across Kenya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="rounded-lg bg-[#eb255a] hover:bg-[#d11f4e] text-white px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <Link
                to="/contact"
                className="rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                Request A Quote
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs uppercase tracking-[0.3em] mb-4">Scroll</span>
            <div className="w-7 h-12 md:w-8 md:h-14 rounded-full border-2 border-white/40 flex justify-center">
              <div className="w-1.5 h-4 md:h-5 bg-white/60 rounded-full mt-3 md:mt-4"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Chapter 01: Trust Metrics */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                Trusted Performance
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-[1.15]">
                Trusted by teams that
                <br className="hidden md:block" /> cannot afford downtime
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustMetrics.map((item, index) => (
              <FadeInSection key={item.label} delay={index * 0.12}>
                <div className="text-center p-6 md:p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow duration-500">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#eb255a] mb-3">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 02: About */}
      <ParallaxSection image={pumpRoomImg} overlayOpacity={0.9}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeInSection>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                About Subgeo Industrial
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
                Built on professional
                <br />
                <span className="text-[#eb255a]">discipline</span>
                <br />
                since 2012
              </h2>
            </FadeInSection>

            <div className="space-y-6">
              <FadeInSection delay={0.2}>
                <p className="text-base md:text-lg text-white/85 leading-relaxed font-light">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company
                  focused on plumbing, sanitary installation, drainage systems, fire-fighting
                  infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <p className="text-base md:text-lg text-white/85 leading-relaxed font-light">
                  Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
                  We align every scope with operational risk, site safety and realistic maintenance
                  windows so your teams keep moving.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="mt-8 md:mt-10 inline-flex items-center gap-4 md:gap-6 bg-[#eb255a] px-6 md:px-8 py-4 md:py-5 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold text-white">12+</p>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-widest">
                      Years of reliable
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-widest">
                      delivery
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Value Cards */}
      <section className="py-24 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.title} delay={index * 0.12}>
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full group hover:-translate-y-2">
                    <div className="inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-[#eb255a] text-white mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-7 w-7 md:h-8 md:w-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-4 md:mb-5">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
      <ParallaxSection image={constructionSiteImg} overlayOpacity={0.85}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <FadeInSection>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                  Industries We Serve
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
                  Reliable solutions
                  <br />
                  across critical
                  <br />
                  <span className="text-[#eb255a]">sectors</span>
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <p className="text-base md:text-lg text-white/85 leading-relaxed font-light mb-8 md:mb-10">
                  Subgeo supports multi-site operators and independent property owners
                  with tailored plumbing, drainage and maintenance programs.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="border-l-4 border-[#eb255a] pl-6 md:pl-8 bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-r-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eb255a] mb-3">
                    Service Promise
                  </p>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    We align every scope with operational risk, site safety and realistic
                    maintenance windows so your teams keep moving.
                  </p>
                </div>
              </FadeInSection>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeInSection key={item.name} delay={0.4 + index * 0.06}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6 hover:bg-[#eb255a] transition-all duration-500"
                    >
                      <div className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white/20 text-white mb-4 group-hover:bg-white group-hover:text-[#eb255a] transition-all duration-500">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-white group-hover:text-white transition-colors duration-300">
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
      <section className="py-24 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <FadeInSection>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                  Why Choose Us
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-[1.15] mb-8">
                  The Subgeo
                  <br />
                  <span className="text-[#eb255a]">advantage</span>
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10">
                  We combine technical expertise with unwavering commitment to safety,
                  quality, and client satisfaction. Every project reflects our dedication
                  to excellence.
                </p>
              </FadeInSection>

              <div className="space-y-5 md:space-y-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <FadeInSection key={item.title} delay={0.2 + index * 0.1}>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-[#eb255a] flex items-center justify-center">
                            <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl md:text-2xl font-bold text-[#0a1628] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl md:text-3xl font-bold text-[#eb255a]">
                              {item.stat}
                            </span>
                            <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
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
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={teamWorkingImg}
                    alt="Subgeo team at work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-10 bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-[260px] md:max-w-xs"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#eb255a] flex items-center justify-center">
                      <Award className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-[#0a1628]">12+</p>
                      <p className="text-xs md:text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Trusted by leading companies across Kenya for industrial plumbing excellence
                  </p>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Chapter 04: Services */}
      <section id="services" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                Core Services
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-[1.15]">
                End-to-end plumbing
                <br className="hidden md:block" /> and industrial maintenance
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />
                      <div className="absolute top-6 md:top-8 left-6 md:left-8">
                        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div
                      className={`flex flex-col justify-center p-8 md:p-10 lg:p-14 xl:p-16 ${
                        isEven ? "" : "lg:order-1"
                      }`}
                    >
                      <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-[#eb255a] text-white mb-6">
                        <Icon className="h-6 w-6 md:h-7 md:w-7" />
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4 md:mb-5">
                        {service.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
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
                                    <CheckCircle2 className="h-5 w-5 text-[#eb255a] flex-shrink-0 mt-0.5" />
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
                        className="mt-4 inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-[#eb255a] hover:text-[#d11f4e] transition-colors uppercase tracking-widest"
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
      <section id="projects" className="py-24 md:py-32 lg:py-40 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                Recent Work
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15]">
                Projects delivered with
                <br className="hidden md:block" />
                <span className="text-[#eb255a]">high technical accuracy</span>
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
                    className="group bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500"
                  >
                    <div className="grid lg:grid-cols-12 gap-0">
                      {/* Image */}
                      <div className="lg:col-span-4">
                        <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[240px] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                          <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                            <span className="inline-flex items-center gap-2 bg-[#eb255a] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                              {project.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-8 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#eb255a]">
                            {project.category}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                            {project.subtitle}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 group-hover:text-[#eb255a] transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4 md:mb-5">
                          {project.summary}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
                          {project.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 bg-white/10 border border-white/10 rounded-full px-3 py-1.5"
                            >
                              <CheckCircle2 className="h-3 w-3 text-[#eb255a]" />
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
                          className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#eb255a] hover:text-white transition-colors uppercase tracking-widest self-start"
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
      <ParallaxSection image={safetyGearImg} overlayOpacity={0.9}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeInSection>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                Safety & Equipment
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
                Professional
                <br />
                <span className="text-[#eb255a]">grade tools</span>
                <br />
                & safety first
              </h2>
            </FadeInSection>

            <div className="space-y-6">
              <FadeInSection delay={0.2}>
                <p className="text-base md:text-lg text-white/85 leading-relaxed font-light">
                  We invest in state-of-the-art equipment and prioritize safety protocols
                  on every job site. Our technicians are equipped with the latest tools
                  and protective gear to ensure efficient, safe service delivery.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="grid grid-cols-2 gap-4 md:gap-5">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/20">
                    <Wrench className="h-8 w-8 md:h-9 md:w-9 text-[#eb255a] mb-3" />
                    <h4 className="text-base md:text-lg font-bold text-white mb-1.5">
                      Modern Equipment
                    </h4>
                    <p className="text-xs md:text-sm text-white/70">
                      Latest diagnostic and repair tools
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/20">
                    <ShieldCheck className="h-8 w-8 md:h-9 md:w-9 text-[#eb255a] mb-3" />
                    <h4 className="text-base md:text-lg font-bold text-white mb-1.5">
                      Safety Certified
                    </h4>
                    <p className="text-xs md:text-sm text-white/70">OSHA compliant practices</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/20">
                    <RefreshCw className="h-8 w-8 md:h-9 md:w-9 text-[#eb255a] mb-3" />
                    <h4 className="text-base md:text-lg font-bold text-white mb-1.5">
                      Well Maintained
                    </h4>
                    <p className="text-xs md:text-sm text-white/70">
                      Regular equipment servicing
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/20">
                    <BadgeCheck className="h-8 w-8 md:h-9 md:w-9 text-[#eb255a] mb-3" />
                    <h4 className="text-base md:text-lg font-bold text-white mb-1.5">
                      Quality Assured
                    </h4>
                    <p className="text-xs md:text-sm text-white/70">Premium materials only</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Chapter 06: Contact */}
      <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div>
              <FadeInSection>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-4">
                  Contact & Location
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-[1.15] mb-8">
                  Plan your next
                  <br />
                  project with our team
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 md:mb-12">
                  Reach out for a site survey, emergency support, or a preventive
                  maintenance plan tailored to your operation.
                </p>
              </FadeInSection>

              <div className="space-y-4 md:space-y-5">
                <FadeInSection delay={0.2}>
                  <a
                    href="tel:0733699441"
                    className="flex items-center gap-5 md:gap-6 p-5 md:p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-[#eb255a] flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                        Phone
                      </p>
                      <p className="text-lg md:text-xl font-bold text-[#0a1628] group-hover:text-[#eb255a] transition-colors">
                        0733 699 441
                      </p>
                    </div>
                  </a>
                </FadeInSection>

                <FadeInSection delay={0.3}>
                  <a
                    href="mailto:info@subgeo.co.ke"
                    className="flex items-center gap-5 md:gap-6 p-5 md:p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-[#eb255a] flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                        Email
                      </p>
                      <p className="text-lg md:text-xl font-bold text-[#0a1628] group-hover:text-[#eb255a] transition-colors">
                        info@subgeo.co.ke
                      </p>
                    </div>
                  </a>
                </FadeInSection>

                <FadeInSection delay={0.4}>
                  <div className="flex items-center gap-5 md:gap-6 p-5 md:p-6 rounded-2xl bg-gray-50">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-[#eb255a] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                        Location
                      </p>
                      <address className="text-lg md:text-xl font-bold text-[#0a1628] not-italic">
                        P.O. Box 48230-00100
                        <br />
                        Nairobi, Kenya
                      </address>
                    </div>
                  </div>
                </FadeInSection>
              </div>

              <FadeInSection delay={0.5}>
                <div className="mt-8 md:mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 md:gap-3 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                  >
                    Schedule A Visit
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection delay={0.2}>
              <div className="relative h-full min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
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
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-6 md:p-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                    <div>
                      <Clock3 className="h-5 w-5 md:h-6 md:w-6 text-[#eb255a] mx-auto mb-2" />
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-1">
                        Hours
                      </p>
                      <p className="text-xs md:text-sm font-bold text-[#0a1628]">
                        Mon-Fri 7:30-5:30
                      </p>
                    </div>
                    <div>
                      <Droplets className="h-5 w-5 md:h-6 md:w-6 text-[#eb255a] mx-auto mb-2" />
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-1">
                        Service
                      </p>
                      <p className="text-xs md:text-sm font-bold text-[#0a1628]">
                        Preventive Plans
                      </p>
                    </div>
                    <div>
                      <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-[#eb255a] mx-auto mb-2" />
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-1">
                        Safety
                      </p>
                      <p className="text-xs md:text-sm font-bold text-[#0a1628]">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={firePumpImg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/95" />
        </div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInSection>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6 md:mb-8">
                Need Immediate Assistance?
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8 md:mb-10">
                Book a technical
                <br />
                assessment today
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-base md:text-lg lg:text-xl text-white/85 leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto font-light">
                Let our engineers assess your current plumbing systems and provide a practical,
                cost-aware improvement plan.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 md:gap-3 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-10 md:px-12 py-5 md:py-6 text-xs md:text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                >
                  Schedule Visit
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center gap-2 md:gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-10 md:px-12 py-5 md:py-6 text-xs md:text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
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
          background: rgba(235, 37, 90, 0.3);
          color: #0a1628;
        }
      `}</style>
    </div>
  );
}

export default SubgeoIndustrial;