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
import teamWorkingImg from "@/assets/work.jpeg"; // Placeholder - replace with actual
import equipmentImg from "@/assets/hero.jpg"; // Placeholder - replace with actual
import safetyGearImg from "@/assets/hero.jpeg"; // Placeholder - replace with actual
import blueprintImg from "@/assets/background.png"; // Placeholder - replace with actual
import completedProjectImg from "@/assets/work.jpeg"; // Placeholder - replace with actual

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

const processSteps = [
  {
    number: "01",
    title: "Site Assessment",
    description: "Our engineers conduct thorough inspections to understand your unique requirements and challenges.",
    icon: Target,
    image: blueprintImg,
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "We develop detailed project plans with timelines, resource allocation, and safety protocols.",
    icon: FileText,
    image: constructionSiteImg,
  },
  {
    number: "03",
    title: "Expert Execution",
    description: "Skilled technicians deploy with proper equipment to deliver precision workmanship.",
    icon: Wrench,
    image: equipmentImg,
  },
  {
    number: "04",
    title: "Quality Assurance",
    description: "Rigorous testing and inspection ensure every system meets our high standards before handover.",
    icon: ShieldCheck,
    image: completedProjectImg,
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Certified Experts",
    description: "Our team holds industry certifications and undergoes continuous training on latest technologies and safety standards.",
    stat: "100%",
    statLabel: "Certified Technicians",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Over 240 successful projects across diverse sectors demonstrate our capability to handle complex challenges.",
    stat: "240+",
    statLabel: "Projects Delivered",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "We assign dedicated project managers and technicians who understand your facility's unique needs.",
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
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
  className = ""
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
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${parallaxSpeed * 30}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.3, 0]);

  return (
    <section ref={ref} className={`relative h-screen overflow-hidden ${className}`}>
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: overlayColor,
            opacity: overlayOpacity 
          }}
        />
      </motion.div>
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>
    </section>
  );
}

function SubgeoIndustrial() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section - Full Screen with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={firePumpImg}
            alt="Subgeo Industrial Works"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <motion.div 
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/95"
          />
        </motion.div>

        <div className="relative z-10 w-full">
          <Navbar />
        </div>

        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
                <span className="flex h-2 w-2 rounded-full bg-[#eb255a] animate-pulse"></span>
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Available 24/7 for Emergencies</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.95] tracking-tight"
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
              className="mt-12 max-w-2xl text-xl md:text-2xl text-white/80 leading-relaxed font-light"
            >
              We design, install and maintain resilient plumbing and drainage systems
              for homes, commercial spaces and industrial facilities across Kenya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-12 flex flex-col sm:flex-row gap-6"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="rounded-lg bg-[#eb255a] hover:bg-[#d11f4e] text-white px-12 py-6 text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/contact"
                className="rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-12 py-6 text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                Request A Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs uppercase tracking-[0.3em] mb-4">Scroll</span>
            <div className="w-8 h-14 rounded-full border-2 border-white/40 flex justify-center">
              <div className="w-1.5 h-5 bg-white/60 rounded-full mt-4"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Chapter 01: Trust Metrics - Clean White */}
      <section className="py-40 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-24">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Trusted Performance</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a1628] leading-[1.1]">
                Trusted by teams that<br />cannot afford downtime
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {trustMetrics.map((item, index) => (
              <FadeInSection key={item.label} delay={index * 0.15}>
                <div className="text-center p-10 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow duration-500">
                  <p className="text-6xl md:text-7xl font-bold text-[#eb255a] mb-4">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 02: About - Full Screen Parallax with Pump Room */}
      <ParallaxSection image={pumpRoomImg} overlayOpacity={0.9}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeInSection>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">About Subgeo Industrial</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-10">
                Built on professional
                <br />
                <span className="text-[#eb255a]">discipline</span>
                <br />
                since 2012
              </h2>
            </FadeInSection>

            <div className="space-y-8">
              <FadeInSection delay={0.2}>
                <p className="text-xl text-white/85 leading-relaxed font-light">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company
                  focused on plumbing, sanitary installation, drainage systems, fire-fighting
                  infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <p className="text-xl text-white/85 leading-relaxed font-light">
                  Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
                  We align every scope with operational risk, site safety and realistic maintenance
                  windows so your teams keep moving.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="mt-12 inline-flex items-center gap-6 bg-[#eb255a] px-10 py-6 rounded-lg">
                  <p className="text-5xl font-bold text-white">12+</p>
                  <div>
                    <p className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                      Years of reliable
                    </p>
                    <p className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                      delivery
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Value Cards - Clean Grid */}
      <section className="py-40 md:py-48 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.title} delay={index * 0.15}>
                  <div className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 h-full group hover:-translate-y-2">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#eb255a] text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0a1628] mb-6">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Our Process - Visual Storytelling Section */}
      <section className="py-40 md:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-24">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Our Process</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a1628] leading-[1.05]">
                How we deliver
                <br />
                <span className="text-[#eb255a]">excellence</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#eb255a]/20 via-[#eb255a] to-[#eb255a]/20 -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <FadeInSection key={step.number} delay={index * 0.15}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="group relative"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/40 to-transparent" />
                        
                        {/* Step Number Badge */}
                        <div className="absolute top-6 left-6">
                          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#eb255a] text-white text-xl font-bold shadow-lg">
                            {step.number}
                          </span>
                        </div>

                        {/* Icon Overlay */}
                        <div className="absolute bottom-6 right-6">
                          <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-[#0a1628] mb-3 group-hover:text-[#eb255a] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 03: Industries - Full Screen with Construction Site */}
      <ParallaxSection image={constructionSiteImg} overlayOpacity={0.85}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <FadeInSection>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Industries We Serve</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-10">
                  Reliable solutions
                  <br />
                  across critical
                  <br />
                  <span className="text-[#eb255a]">sectors</span>
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <p className="text-xl text-white/85 leading-relaxed font-light mb-12">
                  Subgeo supports multi-site operators and independent property owners
                  with tailored plumbing, drainage and maintenance programs.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="border-l-4 border-[#eb255a] pl-8 bg-white/10 backdrop-blur-sm p-8 rounded-r-2xl">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#eb255a] mb-4">
                    Service Promise
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    We align every scope with operational risk, site safety and realistic
                    maintenance windows so your teams keep moving.
                  </p>
                </div>
              </FadeInSection>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeInSection key={item.name} delay={0.4 + index * 0.08}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-[#eb255a] transition-all duration-500"
                    >
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white mb-6 group-hover:bg-white group-hover:text-[#eb255a] transition-all duration-500">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
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

      {/* NEW: Why Choose Us - Visual Stats Section */}
      <section className="py-40 md:py-48 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInSection>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Why Choose Us</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a1628] leading-[1.05] mb-10">
                  The Subgeo
                  <br />
                  <span className="text-[#eb255a]">advantage</span>
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  We combine technical expertise with unwavering commitment to safety,
                  quality, and client satisfaction. Every project reflects our dedication
                  to excellence.
                </p>
              </FadeInSection>

              <div className="space-y-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <FadeInSection key={item.title} delay={0.2 + index * 0.1}>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-6 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="h-16 w-16 rounded-2xl bg-[#eb255a] flex items-center justify-center">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-[#0a1628] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-[#eb255a]">{item.stat}</span>
                            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{item.statLabel}</span>
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
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 bg-white rounded-2xl p-8 shadow-2xl max-w-xs"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#eb255a] flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#0a1628]">12+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Trusted by leading companies across Kenya for industrial plumbing excellence
                  </p>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Chapter 04: Services - Alternating Large Layout */}
      <section id="services" className="py-40 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-24">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Core Services</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a1628] leading-[1.05]">
                End-to-end plumbing
                <br />
                and industrial maintenance
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = activeService === index;
              const isEven = index % 2 === 0;

              return (
                <FadeInSection key={service.title} delay={index * 0.1}>
                  <div className={`grid lg:grid-cols-2 gap-0 border-t border-gray-200 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Image Side */}
                    <div className={`relative aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
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
                      <div className="absolute top-10 left-10">
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/90">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`flex flex-col justify-center p-12 lg:p-20 ${isEven ? "" : "lg:order-1"}`}>
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eb255a] text-white mb-8">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-4xl font-bold text-[#0a1628] mb-6">
                        {service.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {isOpen && service.longDescription && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-8"
                        >
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {service.longDescription}
                          </p>
                          {service.features && (
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-gray-600">
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
                        className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#eb255a] hover:text-[#d11f4e] transition-colors uppercase tracking-widest"
                      >
                        {isOpen ? "Show Less" : "Learn More"}
                        <ArrowRight className={`h-5 w-5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
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

      {/* Chapter 05: Projects - Full Screen Dark with Industrial */}
      <section id="projects" className="py-40 md:py-48 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-24">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Recent Work</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                Projects delivered with
                <br />
                <span className="text-[#eb255a]">high technical accuracy</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <FadeInSection key={project.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="group grid lg:grid-cols-12 gap-10 items-center bg-white/5 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="lg:col-span-4">
                    <div className="relative aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-5 mb-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#eb255a]">
                        {project.date}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-[#eb255a] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg text-white/60 italic">{project.subtitle}</p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-base text-white/70 leading-relaxed">{project.summary}</p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Equipment & Safety - Visual Section */}
      <ParallaxSection image={safetyGearImg} overlayOpacity={0.9}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeInSection>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Safety & Equipment</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-10">
                Professional
                <br />
                <span className="text-[#eb255a]">grade tools</span>
                <br />
                & safety first
              </h2>
            </FadeInSection>

            <div className="space-y-8">
              <FadeInSection delay={0.2}>
                <p className="text-xl text-white/85 leading-relaxed font-light">
                  We invest in state-of-the-art equipment and prioritize safety protocols
                  on every job site. Our technicians are equipped with the latest tools
                  and protective gear to ensure efficient, safe service delivery.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <Wrench className="h-10 w-10 text-[#eb255a] mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Modern Equipment</h4>
                    <p className="text-sm text-white/70">Latest diagnostic and repair tools</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <ShieldCheck className="h-10 w-10 text-[#eb255a] mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Safety Certified</h4>
                    <p className="text-sm text-white/70">OSHA compliant practices</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <RefreshCw className="h-10 w-10 text-[#eb255a] mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Well Maintained</h4>
                    <p className="text-sm text-white/70">Regular equipment servicing</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <BadgeCheck className="h-10 w-10 text-[#eb255a] mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Quality Assured</h4>
                    <p className="text-sm text-white/70">Premium materials only</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Chapter 06: Contact - Split Layout */}
      <section id="contact" className="py-40 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <FadeInSection>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-6">Contact & Location</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a1628] leading-[1.05] mb-10">
                  Plan your next
                  <br />
                  project with our team
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-xl text-gray-600 leading-relaxed mb-16">
                  Reach out for a site survey, emergency support, or a preventive
                  maintenance plan tailored to your operation.
                </p>
              </FadeInSection>

              <div className="space-y-6">
                <FadeInSection delay={0.2}>
                  <a
                    href="tel:0733699441"
                    className="flex items-center gap-8 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-[#eb255a] flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Phone</p>
                      <p className="text-2xl font-bold text-[#0a1628] group-hover:text-[#eb255a] transition-colors">
                        0733 699 441
                      </p>
                    </div>
                  </a>
                </FadeInSection>

                <FadeInSection delay={0.3}>
                  <a
                    href="mailto:info@subgeo.co.ke"
                    className="flex items-center gap-8 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-[#eb255a] flex items-center justify-center group-hover:bg-[#d11f4e] transition-colors">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Email</p>
                      <p className="text-2xl font-bold text-[#0a1628] group-hover:text-[#eb255a] transition-colors">
                        info@subgeo.co.ke
                      </p>
                    </div>
                  </a>
                </FadeInSection>

                <FadeInSection delay={0.4}>
                  <div className="flex items-center gap-8 p-8 rounded-2xl bg-gray-50">
                    <div className="h-16 w-16 rounded-2xl bg-[#eb255a] flex items-center justify-center">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Location</p>
                      <address className="text-2xl font-bold text-[#0a1628] not-italic">
                        P.O. Box 48230-00100
                        <br />
                        Nairobi, Kenya
                      </address>
                    </div>
                  </div>
                </FadeInSection>
              </div>

              <FadeInSection delay={0.5}>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                  >
                    Schedule A Visit
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection delay={0.2}>
              <div className="relative h-full min-h-[700px] rounded-3xl overflow-hidden shadow-2xl">
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
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-10 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <Clock3 className="h-7 w-7 text-[#eb255a] mx-auto mb-3" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Hours</p>
                      <p className="text-sm font-bold text-[#0a1628]">Mon-Fri 7:30-5:30</p>
                    </div>
                    <div>
                      <Droplets className="h-7 w-7 text-[#eb255a] mx-auto mb-3" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Service</p>
                      <p className="text-sm font-bold text-[#0a1628]">Preventive Plans</p>
                    </div>
                    <div>
                      <ShieldCheck className="h-7 w-7 text-[#eb255a] mx-auto mb-3" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Safety</p>
                      <p className="text-sm font-bold text-[#0a1628]">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Screen Parallax with Fire Pump */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={firePumpImg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/95" />
        </div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInSection>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#eb255a] mb-8">
                Need Immediate Assistance?
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-12">
                Book a technical
                <br />
                assessment today
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
                Let our engineers assess your current plumbing systems and provide a practical,
                cost-aware improvement plan.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-14 py-7 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                >
                  Schedule Visit
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-14 py-7 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
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