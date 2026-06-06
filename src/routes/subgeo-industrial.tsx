import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowDown,
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
  Play,
  Quote,
  Star,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
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

/* ─────────────────────────────────────────────
   DATA (preserved from original)
   ───────────────────────────────────────────── */

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

/* ─────────────────────────────────────────────
   UTILITY HOOKS & COMPONENTS
   ───────────────────────────────────────────── */

// Animated counter
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

// Magnetic button wrapper
function MagneticButton({ children, className = "", strength = 0.3, ...props }: {
  children: ReactNode;
  className?: string;
  strength?: number;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const y = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.current = (e.clientX - centerX) * strength;
    y.current = (e.clientY - centerY) * strength;
    ref.current.style.transform = `translate(${x.current}px, ${y.current}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

// Scroll-triggered reveal
function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: directionMap[direction].y,
        x: directionMap[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directionMap[direction].y,
              x: directionMap[direction].x,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax image
function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover"
        loading="lazy"
      />
    </div>
  );
}

// Custom cursor
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        setIsHovering(true);
        setLabel(interactive.getAttribute("data-cursor") || "View");
      } else {
        setIsHovering(false);
        setLabel("");
      }
    };
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[#b91c2a] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: pos.x - 8, y: pos.y - 8, scale: isHovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#b91c2a]/50 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(185, 28, 42, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <AnimatePresence>
          {isHovering && label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold uppercase tracking-wider text-[#b91c2a] whitespace-nowrap"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

// Horizontal scroll section
function HorizontalScrollSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={containerRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 pl-[10vw]">
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

function SubgeoIndustrial() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);

  // Auto-rotate testimonials
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
    <div className="relative min-h-screen overflow-x-clip bg-[#fafaf8] text-[#1a1a1a]">
      <CustomCursor />

      {/* ═══════════════════════════════════════
          HERO — Cinematic Full-Screen Entry
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={industryImg}
            alt="Subgeo Industrial Works"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/50 to-[#0a1628]/90" />
          {/* Grain overlay for premium texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        {/* Navigation */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 w-full"
        >
          <Navbar />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b91c2a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b91c2a]"></span>
                </span>
                <span className="text-xs font-semibold text-white/90 uppercase tracking-[0.2em]">
                  Available 24/7 for Emergencies
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white font-light tracking-tight"
              >
                Precision
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white font-light tracking-tight"
              >
                in Every
                <span className="italic text-[#b91c2a]"> Pipe</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white/40 font-light tracking-tight"
              >
                We Touch.
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed font-light"
            >
              We design, install and maintain resilient plumbing and drainage systems
              for homes, commercial spaces and industrial facilities across Kenya.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-5"
            >
              <MagneticButton strength={0.2}>
                <button
                  onClick={() => scrollToSection("services")}
                  data-cursor="Explore"
                  className="group relative overflow-hidden rounded-full bg-[#b91c2a] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(185,28,42,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <Link
                  to="/contact"
                  data-cursor="Contact"
                  className="group flex items-center gap-3 rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/60"
                >
                  Request A Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>

        {/* Side decorative elements */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]">
            Subgeo Industrial
          </span>
          <div className="w-[1px] h-16 bg-white/20" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAPTER 01 — Trust Metrics
          ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Chapter label */}
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">01</span>
              <div className="h-[1px] flex-1 bg-[#b91c2a]/20 max-w-[80px]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Trusted Performance</span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-[#1a2c4e] font-light max-w-4xl">
              Trusted by teams that
              <span className="italic"> cannot afford </span>
              downtime.
            </h2>
          </ScrollReveal>

          {/* Metrics Grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-200">
            {trustMetrics.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.1}>
                <div className="border-b border-r border-gray-200 p-8 md:p-10 group hover:bg-[#1a2c4e]/[0.02] transition-colors duration-500">
                  <p className="font-serif text-5xl md:text-6xl text-[#b91c2a] font-light">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAPTER 02 — About / Story
          ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-[#0a1628] text-white overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-[#b91c2a]/30 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">02</span>
              <div className="h-[1px] flex-1 bg-white/20 max-w-[80px]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Our Story</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-light">
                  Built on professional
                  <span className="italic text-[#b91c2a]"> discipline </span>
                  since 2012.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mt-8 text-base leading-relaxed text-white/60 font-light">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company
                  focused on plumbing, sanitary installation, drainage systems, fire-fighting
                  infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="mt-6 text-base leading-relaxed text-white/60 font-light">
                  Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
                  We align every scope with operational risk, site safety and realistic maintenance
                  windows so your teams keep moving.
                </p>
              </ScrollReveal>
            </div>

            {/* Image composition */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <ParallaxImage
                    src={heroImg}
                    alt="Subgeo Industrial team at work"
                    speed={0.2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
                </div>
                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-8 -left-8 bg-[#b91c2a] p-6 rounded-sm shadow-2xl max-w-[240px]"
                >
                  <p className="text-3xl font-serif font-light text-white">12+</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">
                    Years of reliable delivery
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Value Cards */}
          <div className="mt-24 grid md:grid-cols-3 gap-0 border-t border-white/10">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <div className="border-b border-r border-white/10 p-8 md:p-10 group hover:bg-white/[0.03] transition-colors duration-500">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#b91c2a]/30 text-[#b91c2a] group-hover:bg-[#b91c2a] group-hover:text-white transition-all duration-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAPTER 03 — Industries (Horizontal Scroll)
          ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">03</span>
              <div className="h-[1px] flex-1 bg-[#b91c2a]/20 max-w-[80px]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Industries</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-[#1a2c4e] font-light">
                  Reliable solutions across
                  <span className="italic"> critical </span>
                  sectors.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-8 text-base leading-relaxed text-gray-600 font-light">
                  Subgeo supports multi-site operators and independent property owners
                  with tailored plumbing, drainage and maintenance programs.
                </p>
              </ScrollReveal>

              {/* Service Promise */}
              <ScrollReveal delay={0.2}>
                <div className="mt-10 border-l-2 border-[#b91c2a] pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b91c2a]">
                    Service Promise
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    We align every scope with operational risk, site safety and realistic
                    maintenance windows so your teams keep moving.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-2 gap-4">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.name} delay={index * 0.05}>
                    <motion.div
                      data-cursor="Discover"
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-sm border border-gray-200 bg-white p-6 cursor-pointer hover:border-[#b91c2a]/30 hover:shadow-lg transition-all duration-500"
                    >
                      <Icon className="h-6 w-6 text-[#b91c2a]/60 group-hover:text-[#b91c2a] transition-colors duration-300" />
                      <p className="mt-4 text-sm font-medium text-[#1a2c4e]">{item.name}</p>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#b91c2a] group-hover:w-full transition-all duration-500" />
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAPTER 04 — Services (Immersive)
          ═══════════════════════════════════════ */}
      <section id="services" className="relative py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">04</span>
              <div className="h-[1px] flex-1 bg-[#b91c2a]/20 max-w-[80px]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Core Services</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-[#1a2c4e] font-light max-w-4xl">
              End-to-end plumbing
              <span className="italic"> and </span>
              industrial maintenance.
            </h2>
          </ScrollReveal>

          {/* Services — alternating layout */}
          <div className="mt-20 space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={service.title} delay={0.05}>
                  <motion.div
                    data-cursor="Explore"
                    className={`group grid lg:grid-cols-2 gap-0 border-t border-gray-200 ${
                      isEven ? "" : "lg:direction-rtl"
                    }`}
                    whileHover={{ backgroundColor: "rgba(26, 44, 78, 0.02)" }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Image */}
                    <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0a1628]/20 group-hover:bg-[#0a1628]/10 transition-colors duration-500" />
                      <div className="absolute top-6 left-6">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-medium">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${isEven ? "" : "lg:order-1"}`}>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#b91c2a]/20 text-[#b91c2a] group-hover:bg-[#b91c2a] group-hover:text-white transition-all duration-500">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-6 font-serif text-2xl md:text-3xl text-[#1a2c4e] font-light">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-base leading-relaxed text-gray-600 font-light">
                        {service.description}
                      </p>

                      {/* Expandable features */}
                      <AnimatePresence>
                        {activeService === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-gray-100">
                              <p className="text-sm text-gray-600 mb-4">{service.longDescription}</p>
                              {service.features && (
                                <ul className="space-y-2">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                      <CheckCircle2 className="h-4 w-4 text-[#b91c2a] flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        onClick={() => setActiveService(activeService === index ? null : index)}
                        className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b91c2a] group/btn"
                        data-cursor={activeService === index ? "Close" : "View"}
                      >
                        <span>{activeService === index ? "Show Less" : "Learn More"}</span>
                        <motion.span
                          animate={{ rotate: activeService === index ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </motion.span>
                      </button>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
            {/* Bottom border */}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAPTER 05 — Projects (Cinematic Gallery)
          ═══════════════════════════════════════ */}
      <section id="projects" className="relative py-32 md:py-40 bg-[#0a1628] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">05</span>
              <div className="h-[1px] flex-1 bg-white/20 max-w-[80px]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Recent Work</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-light max-w-4xl">
              Projects delivered with
              <span className="italic text-[#b91c2a]"> high </span>
              technical accuracy.
            </h2>
          </ScrollReveal>

          {/* Projects */}
          <div className="mt-20 space-y-0">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <motion.div
                  data-cursor="View Project"
                  className="group grid lg:grid-cols-12 gap-8 items-center border-t border-white/10 py-10 cursor-pointer hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-sm"
                >
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="text-xs text-white/30 font-mono">0{index + 1}</span>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-3">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0a1628]/30 group-hover:bg-[#0a1628]/10 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#b91c2a] font-semibold">
                        {project.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-white group-hover:text-[#b91c2a] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 mt-1 italic">{project.subtitle}</p>
                  </div>

                  {/* Summary */}
                  <div className="lg:col-span-2">
                    <p className="text-xs leading-relaxed text-white/40">{project.summary}</p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-1 flex justify-end">
                    <motion.div
                      className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#b91c2a] group-hover:bg-[#b91c2a] transition-all duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAPTER 06 — Testimonials (Immersive)
          ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-[#fafaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">06</span>
              <div className="h-[1px] flex-1 bg-[#b91c2a]/20 max-w-[80px]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Client Testimony</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-[#1a2c4e] font-light max-w-4xl">
              Confidence that comes from
              <span className="italic"> consistent </span>
              delivery.
            </h2>
          </ScrollReveal>

          {/* Testimonial Carousel */}
          <div className="mt-20 relative">
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <motion.img
                      src={trustQuotes[activeTestimonial].image}
                      alt={trustQuotes[activeTestimonial].author}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <Quote className="h-8 w-8 text-[#b91c2a]" />
                    </div>
                  </div>

                  {/* Quote */}
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#b91c2a] text-[#b91c2a]" />
                      ))}
                    </div>
                    <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-[#1a2c4e] font-light italic">
                      "{trustQuotes[activeTestimonial].quote}"
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#1a2c4e] flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1a2c4e]">
                          {trustQuotes[activeTestimonial].author}
                        </p>
                        <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                          {trustQuotes[activeTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center gap-6">
              {trustQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className="group flex items-center gap-3"
                  data-cursor="View"
                >
                  <div
                    className={`h-[2px] transition-all duration-500 ${
                      activeTestimonial === index
                        ? "w-12 bg-[#b91c2a]"
                        : "w-6 bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  />
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                      activeTestimonial === index ? "text-[#b91c2a]" : "text-gray-400"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAPTER 07 — Contact
          ═══════════════════════════════════════ */}
      <section id="contact" className="relative py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">07</span>
              <div className="h-[1px] flex-1 bg-[#b91c2a]/20 max-w-[80px]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Get In Touch</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-[#1a2c4e] font-light">
                  Plan your next project
                  <span className="italic"> with </span>
                  our team.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mt-8 text-base leading-relaxed text-gray-600 font-light">
                  Reach out for a site survey, emergency support, or a preventive
                  maintenance plan tailored to your operation.
                </p>
              </ScrollReveal>

              {/* Contact Details */}
              <div className="mt-12 space-y-6">
                <ScrollReveal delay={0.15}>
                  <a
                    href="tel:0733699441"
                    data-cursor="Call"
                    className="group flex items-center gap-5 p-4 -ml-4 rounded-sm hover:bg-[#1a2c4e]/[0.03] transition-colors duration-300"
                  >
                    <div className="h-12 w-12 rounded-full border border-[#1a2c4e]/20 flex items-center justify-center group-hover:border-[#b91c2a] group-hover:bg-[#b91c2a] transition-all duration-500">
                      <Phone className="h-4 w-4 text-[#1a2c4e] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Phone</p>
                      <p className="mt-1 text-base font-medium text-[#1a2c4e] group-hover:text-[#b91c2a] transition-colors duration-300">
                        0733 699 441
                      </p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <a
                    href="mailto:info@subgeo.co.ke"
                    data-cursor="Email"
                    className="group flex items-center gap-5 p-4 -ml-4 rounded-sm hover:bg-[#1a2c4e]/[0.03] transition-colors duration-300"
                  >
                    <div className="h-12 w-12 rounded-full border border-[#1a2c4e]/20 flex items-center justify-center group-hover:border-[#b91c2a] group-hover:bg-[#b91c2a] transition-all duration-500">
                      <Mail className="h-4 w-4 text-[#1a2c4e] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Email</p>
                      <p className="mt-1 text-base font-medium text-[#1a2c4e] group-hover:text-[#b91c2a] transition-colors duration-300">
                        info@subgeo.co.ke
                      </p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="group flex items-center gap-5 p-4 -ml-4 rounded-sm">
                    <div className="h-12 w-12 rounded-full border border-[#1a2c4e]/20 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-[#1a2c4e]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Location</p>
                      <address className="mt-1 text-base font-medium text-[#1a2c4e] not-italic">
                        P.O. Box 48230-00100, Nairobi, Kenya
                      </address>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* CTA */}
              <ScrollReveal delay={0.3}>
                <div className="mt-12">
                  <MagneticButton strength={0.15}>
                    <Link
                      to="/contact"
                      data-cursor="Start"
                      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#b91c2a] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(185,28,42,0.3)]"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Schedule A Visit
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-[#8f1520] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>

            {/* Map */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-sm">
                <iframe
                  title="Subgeo location map - Nairobi, Kenya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.45975638997!2d36.656375!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7996dbaaaa9100"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Map overlay info */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Clock3 className="h-4 w-4 text-[#b91c2a] mx-auto mb-2" />
                      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500">Hours</p>
                      <p className="text-xs font-medium text-[#1a2c4e] mt-1">Mon-Fri 7:30-5:30</p>
                    </div>
                    <div>
                      <Droplets className="h-4 w-4 text-[#b91c2a] mx-auto mb-2" />
                      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500">Service</p>
                      <p className="text-xs font-medium text-[#1a2c4e] mt-1">Preventive Plans</p>
                    </div>
                    <div>
                      <ShieldCheck className="h-4 w-4 text-[#b91c2a] mx-auto mb-2" />
                      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500">Safety</p>
                      <p className="text-xs font-medium text-[#1a2c4e] mt-1">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA — Cinematic
          ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background */}
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
            <p className="text-xs uppercase tracking-[0.3em] text-[#b91c2a] font-semibold">
              Need Immediate Assistance?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.1] text-white font-light">
              Book a technical
              <span className="italic"> assessment </span>
              today.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-white/60 font-light max-w-2xl mx-auto">
              Let our engineers assess your current plumbing systems and provide a practical,
              cost-aware improvement plan.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <MagneticButton strength={0.15}>
                <Link
                  to="/contact"
                  data-cursor="Book Now"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#b91c2a] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(185,28,42,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Schedule Visit
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <button
                  onClick={() => scrollToSection("services")}
                  data-cursor="View"
                  className="group flex items-center gap-3 rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-white/10 hover:border-white/60"
                >
                  View Services
                </button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* ═══════════════════════════════════════
          GLOBAL STYLES
          ═══════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');

        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }

        body {
          font-family: 'Inter', system-ui, sans-serif;
          cursor: none;
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Selection color */
        ::selection {
          background: rgba(185, 28, 42, 0.2);
          color: #1a2c4e;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #fafaf8;
        }
        ::-webkit-scrollbar-thumb {
          background: #b91c2a;
          border-radius: 3px;
        }

        /* Grain animation */
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
      `}</style>
    </div>
  );
}

export default SubgeoIndustrial;