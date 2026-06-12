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
import { Reveal } from "@/components/site/Reveal";
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
  overlayColor = "primary",
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
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {/* Removed Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "white",
            opacity: overlayOpacity,
          }}
        />
      </motion.div>
      <div className="relative z-10 h-full flex items-center py-20 lg:py-32">
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
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2"
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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
              Our Process
            </p>
            <h2 className="text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest text-primary">
              How we deliver{" "}
              <span className="text-accent">excellence</span>
            </h2>
            <p className="mt-6 text-[13px] md:text-[14px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <motion.div
                        className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full text-white text-lg md:text-2xl font-bold shadow-lg ${
                          isActive ? "bg-accent scale-110" : "bg-white/20 backdrop-blur-md"
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
                      <div className={`h-10 w-10 rounded-xl ${isActive ? "bg-accent" : "bg-accent/10"} flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-accent"}`} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-accent" : "text-gray-400"}`}>
                        Step {step.number}
                      </span>
                    </div>
                    
                    <h3 className={`text-[16px] md:text-[18px] font-display font-semibold ${isActive ? "text-accent" : "text-primary group-hover:text-accent"} transition-colors`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2 pt-2">
                      {processSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === index
                              ? "w-12 bg-accent"
                              : i < index
                              ? "w-6 bg-accent/40"
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
                    <div className="w-0.5 h-12 bg-gradient-to-b from-accent/40 to-gray-200" />
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
    <div className="relative min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Fixed Sticky Navbar - content scrolls behind */}
      <StickyNavbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[520px] md:h-[580px] lg:h-[640px] w-full overflow-hidden flex items-center">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src={firePumpImg}
            alt="Subgeo Industrial Works"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary from-15% via-primary/80 via-60% to-transparent to-80%" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 container-x w-full"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4 md:mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2 md:py-3">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
                  Available 24/7 for Emergencies
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-display font-medium text-[40px] md:text-[52px] leading-[1.15] tracking-tight text-white"
            >
              Precision Plumbing &<br />
              <span className="text-accent">Industrial Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-4 md:mt-6 max-w-xl text-[13px] md:text-[14px] text-white/80 leading-relaxed font-light"
            >
              We design, install and maintain resilient plumbing and drainage systems
              for homes, commercial spaces and industrial facilities across Kenya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-5 md:mt-7 flex flex-col sm:flex-row gap-3 md:gap-5"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="rounded-lg bg-accent hover:bg-accent/90 text-white px-8 md:px-10 py-3.5 md:py-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <Link
                to="/contact"
                className="rounded-lg border-2 border-white/80 text-white hover:bg-white hover:text-primary px-8 md:px-10 py-3.5 md:py-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                Request A Quote
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Precision Plumbing — Promotional Cards */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-x w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:h-[420px]">
            
            {/* Left Card */}
            <div className="bg-[#f0f2f5] p-10 flex flex-col justify-center relative overflow-hidden rounded-[2px] h-[400px] md:h-full group">
              <div className="relative z-10 w-[60%] ml-auto text-right flex flex-col items-end">
                <span className="text-[#2563eb] text-[13px] font-semibold mb-2">Precision Work</span>
                <h3 className="text-[#222] text-[28px] lg:text-[34px] font-black leading-tight mb-3">Plumbing</h3>
                <p className="text-[#555] text-[13px] mb-8">Expert installation & repair</p>
                <button className="bg-transparent border-[1.5px] border-[#222] text-[#222] hover:bg-[#222] hover:text-white rounded-full px-7 py-2 h-10 w-fit text-[13px] font-bold transition-colors">
                  Book Service
                </button>
              </div>
              <div className="absolute left-[-5%] bottom-0 w-[70%] h-[95%] pointer-events-none">
                <img src={plumbingImg} alt="Plumbing" className="w-full h-full object-cover object-bottom mix-blend-darken group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 h-full">
              
              {/* Top Row */}
              <div className="grid grid-cols-2 gap-6 h-[200px] md:h-[calc(50%-12px)]">
                
                {/* Drainage */}
                <div className="bg-[#bdae9c] p-6 relative overflow-hidden rounded-[2px] flex flex-col justify-start group">
                  <div className="bg-[#2563eb] text-white text-[10px] font-bold px-2.5 py-1 rounded-[2px] w-fit mb-3 relative z-10 tracking-widest">
                    24/7
                  </div>
                  <h4 className="text-white text-[20px] font-bold mb-3 relative z-10">Drainage</h4>
                  <a href="#" className="text-white text-[12px] font-bold flex items-center gap-1 hover:gap-2 transition-all relative z-10">
                    Get Details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </a>
                  <div className="absolute -right-4 bottom-[-10%] w-[80%] h-[90%] pointer-events-none">
                    <img src={drainageImg} alt="Drainage" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                {/* Geyser */}
                <div className="bg-[#cfceca] p-6 relative overflow-hidden rounded-[2px] flex flex-col justify-start group">
                  <div className="bg-[#2563eb] text-white text-[10px] font-bold px-2.5 py-1 rounded-[2px] w-fit mb-3 relative z-10 tracking-widest">
                    Expert
                  </div>
                  <h4 className="text-[#222] text-[20px] font-bold mb-3 relative z-10">Geysers</h4>
                  <a href="#" className="text-[#222] text-[12px] font-bold flex items-center gap-1 hover:gap-2 transition-all relative z-10">
                    Get Details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </a>
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-[85%] h-[120%] pointer-events-none">
                    <img src={geyserImg} alt="Geyser" className="w-full h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

              </div>

              {/* Bottom Row */}
              <div className="bg-[#a38c78] p-8 relative overflow-hidden rounded-[2px] h-[200px] md:h-[calc(50%-12px)] flex flex-col justify-center group">
                <div className="relative z-10">
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1.5">Full Service</p>
                  <h4 className="text-white text-[24px] lg:text-[28px] font-bold mb-2">Kitchen & Bathroom</h4>
                  <p className="text-white/90 text-[11px] font-bold tracking-widest uppercase mb-4">FITOUTS & INSTALLATION</p>
                  <a href="#" className="text-white text-[13px] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View Offers <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </a>
                </div>
                <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55%] h-[120%] pointer-events-none">
                  <img src={bathroomImg} alt="Kitchen and Bathroom" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Chapter 02: About */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-x max-w-[1200px] mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-sans font-[900] tracking-tighter text-[clamp(28px,3vw,40px)] leading-[1.04] text-[#1e293b]">
              Built on Professional<br/>
              <span className="text-[#0ea5e9]">Discipline since 2012</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="flex justify-center relative order-last lg:order-first">
              <div className="relative w-full max-w-[450px] aspect-[4/3] overflow-hidden shadow-lg">
                <img src={pumpRoomImg} alt="Plumbing" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right: Feature List */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Private Limited <span className="text-[#0ea5e9]">Registration</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company focused on plumbing, sanitary installation, and drainage systems.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Industrial <span className="text-[#f97316]">Maintenance</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Fire-fighting infrastructure and recurring maintenance services designed for long-term asset performance.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Well-maintained <span className="text-[#a855f7]">Fleet</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Our fleet of well-maintained, reliable vehicles are company branded and extremely neat for professional site attendance.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Operational <span className="text-[#22c55e]">Safety</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  We align every scope with operational risk, site safety, and realistic maintenance windows so your teams keep moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Integrity — Features Row */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-x w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                <BadgeCheck className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[14px] text-[#222]">Quality First</h4>
                <p className="text-[#777] text-[11px]">Dependable long-term performance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                <Clock3 className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[14px] text-[#222]">Rapid Response</h4>
                <p className="text-[#777] text-[11px]">24/7 emergency dispatch</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                <Sparkles className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[14px] text-[#222]">Smart Innovation</h4>
                <p className="text-[#777] text-[11px]">Modern tooling & reporting</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                <ShieldCheck className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[14px] text-[#222]">Fully Insured</h4>
                <p className="text-[#777] text-[11px]">Licensed & safety compliant</p>
              </div>
            </div>
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
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
                  Industries We Serve
                </p>
                <h2 className="text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest text-white mb-8">
                  Reliable solutions
                  <br />
                  across critical
                  <br />
                  <span className="text-accent">sectors</span>
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <p className="text-[13px] md:text-[14px] text-white/85 leading-relaxed font-light mb-8 md:mb-10">
                  Subgeo supports multi-site operators and independent property owners
                  with tailored plumbing, drainage and maintenance programs.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="border-l-4 border-accent pl-6 md:pl-8 bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-r-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                    Service Promise
                  </p>
                  <p className="text-[13px] md:text-[14px] text-white/90 leading-relaxed">
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
                      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6 hover:bg-accent transition-all duration-500"
                    >
                      <div className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white/20 text-white mb-4 group-hover:bg-white group-hover:text-accent transition-all duration-500">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h3 className="text-[12px] md:text-[13px] font-display font-semibold text-white group-hover:text-white transition-colors duration-300">
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

      {/* Why Choose Us - Subgeo Advantage */}
      <section className="relative">
        <div className="relative min-h-[350px] md:min-h-[400px] overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img
              src={constructionSiteImg}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
          </div>

          <div className="relative container-x pt-10 md:pt-14 pb-24 md:pb-28">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 text-center">
                Why Choose Us
              </p>
              <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-white text-center">
                The Subgeo
                <br />
                <span className="text-accent">advantage</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 md:mt-8 max-w-xl mx-auto md:bg-black/30 md:backdrop-blur-sm p-0 md:p-6 rounded-sm text-center">
                <p className="text-white/90 text-[13px] leading-relaxed">
                  We combine technical expertise with unwavering commitment to safety,
                  quality, and client satisfaction. Every project reflects our dedication
                  to excellence.
                </p>
                <div className="mt-5 flex justify-center">
                  <a
                    href="#services"
                    className="bg-white text-primary px-8 py-3.5 text-sm font-bold tracking-widest hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                  >
                    OUR SERVICES
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative -mt-16 md:-mt-20 pb-16 md:pb-24">
          <div className="container-x">
            <div className="relative z-10 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 max-w-sm md:max-w-none mx-auto">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative bg-white shadow-2xl">
                    <div
                      className="absolute top-0 left-0 right-0 h-3 -translate-y-1/2"
                      style={{
                        background:
                          "radial-gradient(circle at 10px 0, transparent 8px, white 8px) repeat-x",
                        backgroundSize: "20px 12px",
                      }}
                    />

                    <div className="px-6 pt-8 pb-6 md:px-8 md:pt-10 md:pb-8 text-center">
                      <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-accent text-white mb-4">
                        <Icon className="h-6 w-6 md:h-7 md:w-7" />
                      </div>
                      <h3 className="text-xl md:text-[1.7rem] font-bold md:font-extrabold text-primary leading-tight">
                        {item.title}
                      </h3>

                      <div className="mt-4 md:mt-6 -mx-2 md:-mx-4 flex justify-center">
                        <div className="relative">
                          <div
                            className="bg-primary text-white py-2.5 px-10 md:py-4 md:px-8 flex items-center justify-center font-display"
                            style={{
                              clipPath:
                                "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)",
                            }}
                          >
                            <span className="text-xl md:text-3xl font-bold pr-2">
                              {item.stat}
                            </span>
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
                              {item.statLabel}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                        {item.description}
                      </p>

                      <a
                        href="#services"
                        className="w-[85%] md:w-full inline-flex justify-center items-center mt-6 bg-accent hover:bg-accent/90 text-white h-11 md:h-12 font-bold text-sm tracking-wider transition-colors gap-2"
                      >
                        LEARN MORE
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>

                    <div
                      className="absolute bottom-0 left-0 right-0 h-3 translate-y-1/2"
                      style={{
                        background:
                          "radial-gradient(circle at 10px 100%, transparent 8px, white 8px) repeat-x",
                        backgroundSize: "20px 12px",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services — Card Grid */}
      <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="container-x">
          
          <Reveal className="text-center mb-16">
            <h2 className="text-[#333] text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest">
              End-to-end plumbing &amp; industrial maintenance
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="w-full sm:w-[220px] h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                      {service.image && (
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover bg-gray-50" />
                      )}
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-[#df488b] text-[14px] font-medium mb-3">{service.title}</h3>
                      <p className="text-[#666] text-[12px] leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <button className="bg-[#6196d2] hover:bg-[#4a7eb5] text-white rounded-none px-6 py-4 h-8 text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}

            </div>
          </Reveal>

        </div>
      </section>

      {/* Recent Projects & Insights — Promo Banners */}
      <section className="py-12 bg-white">
        <div className="container-x w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Project 1 */}
            <div className="bg-[#e4e8eb] h-[220px] rounded-[2px] overflow-hidden relative flex items-center group">
              <div className="pl-10 relative z-10 w-[55%] font-sans">
                <p className="text-[#555] text-[11px] mb-1 font-medium">{projects[0].date} · {projects[0].category}</p>
                <h3 className="text-[#222] font-black text-[24px] lg:text-[28px] leading-tight mb-1">{projects[0].title}</h3>
                <p className="text-[#2563eb] text-[12px] font-semibold mb-6">{projects[0].subtitle}</p>
                <a href="#" className="text-[#444] text-[11px] font-bold flex items-center hover:text-[#2563eb] transition-colors uppercase tracking-wider">
                  View Project <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
              <div className="absolute right-[-5%] bottom-0 top-0 w-[60%] pointer-events-none">
                <img src={projects[0].image} alt={projects[0].title} className="w-full h-[115%] object-cover object-top mix-blend-darken group-hover:scale-105 transition-transform duration-700 relative top-2" />
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#e5e1da] h-[220px] rounded-[2px] overflow-hidden relative flex items-center group">
              <div className="pl-10 relative z-10 w-[55%] font-sans">
                <p className="text-[#555] text-[11px] mb-1 font-medium">{projects[1].date} · {projects[1].category}</p>
                <h3 className="text-[#222] font-black text-[24px] lg:text-[28px] leading-tight mb-1">{projects[1].title}</h3>
                <p className="text-[#2563eb] text-[12px] font-semibold mb-6">{projects[1].subtitle}</p>
                <a href="#" className="text-[#444] text-[11px] font-bold flex items-center hover:text-[#2563eb] transition-colors uppercase tracking-wider">
                  View Project <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-[55%] pointer-events-none">
                <img src={projects[1].image} alt={projects[1].title} className="w-full h-full object-cover object-center mix-blend-darken group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Equipment & Safety */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="h-[380px] lg:h-[440px] w-full shadow-lg">
            <img src={safetyGearImg} alt="Industry competence" className="w-full h-full object-cover" />
          </Reveal>
          
          <Reveal delay={0.2} className="space-y-6 lg:pl-10">
            <h2 className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.04] mb-6" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              <span className="text-[#1d3b4a] block">Professional-grade</span>
              <span className="text-[#ef6a42] block">tools & safety first</span>
            </h2>
            <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium mb-8">
              We invest in state-of-the-art equipment and prioritize safety protocols on every job site. 
              Our technicians are equipped with the latest tools and protective gear to ensure efficient, safe service delivery.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-6 mb-10">
              {[
                "Modern Diagnostic Tools",
                "OSHA Compliant Safety",
                "Regular Equipment Servicing",
                "Premium Quality Materials",
                "Certified Technicians",
                "24/7 Emergency Response"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ef6a42] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-[12px] lg:text-[14px] text-[#4a5568] font-bold">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-[#ef6a42] hover:bg-[#d95d3a] text-white px-8 py-3.5 rounded-none text-[13px] uppercase tracking-widest font-bold transition-all shadow-none mt-4">
              Get A Quote
            </button>
          </Reveal>
        </div>
      </section>

      {/* Chapter 06: Contact */}
      <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div>
              <FadeInSection>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
                  Contact & Location
                </p>
                <h2 className="text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest text-primary mb-8">
                  Plan your next
                  <br />
                  project with our team
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed mb-10 md:mb-12">
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
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                        Phone
                      </p>
                      <p className="text-[15px] md:text-[16px] font-display font-semibold text-primary group-hover:text-accent transition-colors">
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
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                        Email
                      </p>
                      <p className="text-[15px] md:text-[16px] font-display font-semibold text-primary group-hover:text-accent transition-colors">
                        info@subgeo.co.ke
                      </p>
                    </div>
                  </a>
                </FadeInSection>

                <FadeInSection delay={0.4}>
                  <div className="flex items-center gap-5 md:gap-6 p-5 md:p-6 rounded-2xl bg-gray-50">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                        Location
                      </p>
                      <address className="text-[15px] md:text-[16px] font-display font-semibold text-primary not-italic">
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
                    className="inline-flex items-center gap-2 md:gap-3 bg-accent hover:bg-[#d11f4e] text-white px-8 md:px-10 py-4 md:py-5 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
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
                      <Clock3 className="h-5 w-5 md:h-6 md:w-6 text-accent mx-auto mb-2" />
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-1">
                        Hours
                      </p>
                      <p className="text-xs md:text-sm font-bold text-primary">
                        Mon-Fri 7:30-5:30
                      </p>
                    </div>
                    <div>
                      <Droplets className="h-5 w-5 md:h-6 md:w-6 text-accent mx-auto mb-2" />
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-1">
                        Service
                      </p>
                      <p className="text-xs md:text-sm font-bold text-primary">
                        Preventive Plans
                      </p>
                    </div>
                    <div>
                      <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-accent mx-auto mb-2" />
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-1">
                        Safety
                      </p>
                      <p className="text-xs md:text-sm font-bold text-primary">Compliant</p>
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
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95" />
        </div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInSection>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 md:mb-8">
                Need Immediate Assistance?
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest text-white mb-8 md:mb-10">
                Book a technical
                <br />
                assessment today
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-[13px] md:text-[14px] text-white/85 leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto font-light">
                Let our engineers assess your current plumbing systems and provide a practical,
                cost-aware improvement plan.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 md:gap-3 bg-accent hover:bg-[#d11f4e] text-white px-10 md:px-12 py-5 md:py-6 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                >
                  Schedule Visit
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center gap-2 md:gap-3 border-2 border-white text-white hover:bg-white hover:text-primary px-10 md:px-12 py-5 md:py-6 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
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
          color: primary;
        }
      `}</style>
    </div>
  );
}

export default SubgeoIndustrial;