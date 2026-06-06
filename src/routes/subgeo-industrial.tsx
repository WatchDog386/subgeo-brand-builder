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

// New images from user
import firePumpImg from "@/assets/fire-pump.jpg"; // Red fire pump system
import pumpRoomImg from "@/assets/pump-room.jpg"; // Red industrial piping
import constructionSiteImg from "@/assets/construction-site.jpg"; // Building exterior

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

function ParallaxSection({ 
  children, 
  image, 
  overlayOpacity = 0.7,
  className = "" 
}: { 
  children: React.ReactNode; 
  image: string; 
  overlayOpacity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

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
          className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/80 to-[#0a1628]"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>
    </section>
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

function SubgeoIndustrial() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section with Parallax */}
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
            className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/95"
          />
        </motion.div>

        <div className="relative z-10 w-full">
          <Navbar />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
                <span className="flex h-2 w-2 rounded-full bg-[#eb255a] animate-pulse"></span>
                <span className="text-sm font-medium text-white">Available 24/7 for Emergencies</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
            >
              Precision Plumbing
              <br />
              <span className="text-[#eb255a]">& Industrial Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 max-w-2xl text-lg md:text-2xl text-white/80 leading-relaxed font-light"
            >
              We design, install and maintain resilient plumbing and drainage systems
              for homes, commercial spaces and industrial facilities across Kenya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="rounded-lg bg-[#eb255a] hover:bg-[#d11f4e] text-white px-10 py-5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-10 py-5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request A Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs uppercase tracking-widest mb-3">Scroll</span>
            <div className="w-6 h-12 rounded-full border-2 border-white/40 flex justify-center">
              <div className="w-1 h-4 bg-white/60 rounded-full mt-3"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section 1: Trust Metrics */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Trusted Performance</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight">
                Trusted by teams that<br />cannot afford downtime
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMetrics.map((item, index) => (
              <FadeInSection key={item.label} delay={index * 0.1}>
                <div className="text-center p-8">
                  <p className="text-5xl md:text-6xl font-bold text-[#eb255a] mb-3">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section 2: About - Full Screen Parallax */}
      <ParallaxSection image={pumpRoomImg} overlayOpacity={0.85}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">About Subgeo Industrial</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Built on professional<br />
                <span className="text-[#eb255a]">discipline</span> since 2012
              </h2>
            </FadeInSection>

            <div className="space-y-6">
              <FadeInSection delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company
                  focused on plumbing, sanitary installation, drainage systems, fire-fighting
                  infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  Our fleet of well-maintained, reliable vehicles are company branded and extremely neat.
                  We align every scope with operational risk, site safety and realistic maintenance
                  windows so your teams keep moving.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="mt-10 inline-flex items-center gap-4 bg-[#eb255a] px-8 py-4 rounded-lg">
                  <p className="text-4xl font-bold text-white">12+</p>
                  <p className="text-sm font-medium text-white/90 uppercase tracking-wide">
                    Years of reliable<br />delivery
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Value Cards */}
      <section className="py-32 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.title} delay={index * 0.15}>
                  <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#eb255a] text-white mb-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0a1628] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section 3: Industries - Large Imagery */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Industries We Serve</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight mb-6">
                Reliable solutions across<br />critical sectors
              </h2>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Subgeo supports multi-site operators and independent property owners
                with tailored plumbing, drainage and maintenance programs.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.name} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-gray-50 rounded-xl p-8 hover:bg-[#eb255a] transition-colors duration-300"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eb255a] text-white mb-6 group-hover:bg-white group-hover:text-[#eb255a] transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1628] group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </h3>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>

          <FadeInSection delay={0.4}>
            <div className="mt-16 border-l-4 border-[#eb255a] pl-8 bg-gray-50 p-8 rounded-r-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#eb255a] mb-3">
                Service Promise
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We align every scope with operational risk, site safety and realistic
                maintenance windows so your teams keep moving.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Story Section 4: Services - Alternating Layout */}
      <section id="services" className="py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Core Services</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight">
                End-to-end plumbing and<br />industrial maintenance
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
                    <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
                      {service.image && (
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
                      <div className="absolute top-8 left-8">
                        <span className="text-sm font-bold uppercase tracking-widest text-white/80">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`flex flex-col justify-center p-10 lg:p-16 ${isEven ? "" : "lg:order-1"}`}>
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eb255a] text-white mb-6">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#0a1628] mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {isOpen && service.longDescription && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-6"
                        >
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {service.longDescription}
                          </p>
                          {service.features && (
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600">
                                  <CheckCircle2 className="h-5 w-5 text-[#eb255a] flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      )}

                      <button
                        onClick={() => setActiveService(isOpen ? null : index)}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#eb255a] hover:text-[#d11f4e] transition-colors uppercase tracking-wide"
                      >
                        {isOpen ? "Show Less" : "Learn More"}
                        <ArrowRight className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
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

      {/* Story Section 5: Projects - Full Width */}
      <section id="projects" className="py-32 md:py-40 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Recent Work</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Projects delivered with<br />
                <span className="text-[#eb255a]">high technical accuracy</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <FadeInSection key={project.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group grid lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="lg:col-span-4">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-[#eb255a] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-base text-white/60 italic">{project.subtitle}</p>
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

      {/* Story Section 6: Contact - Split Layout */}
      <section id="contact" className="py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <FadeInSection>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-4">Contact & Location</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight mb-8">
                  Plan your next project<br />with our team
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  Reach out for a site survey, emergency support, or a preventive
                  maintenance plan tailored to your operation.
                </p>
              </FadeInSection>

              <div className="space-y-6">
                <FadeInSection delay={0.2}>
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
                </FadeInSection>

                <FadeInSection delay={0.3}>
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
                </FadeInSection>

                <FadeInSection delay={0.4}>
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
                </FadeInSection>
              </div>

              <FadeInSection delay={0.5}>
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-10 py-5 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300"
                  >
                    Schedule A Visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection delay={0.2}>
              <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
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
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Screen Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={constructionSiteImg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/95" />
        </div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInSection>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#eb255a] mb-6">
                Need Immediate Assistance?
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Book a technical<br />assessment today
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
                Let our engineers assess your current plumbing systems and provide a practical,
                cost-aware improvement plan.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#eb255a] hover:bg-[#d11f4e] text-white px-12 py-6 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300"
                >
                  Schedule Visit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-12 py-6 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300"
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