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
  MessageCircle,
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
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/image5.jpeg";
import industryImg from "@/assets/industry.jpeg";
import plumbingImg from "@/assets/image2.jpeg";
import drainageImg from "@/assets/drainage.png";
import geyserImg from "@/assets/geyserinstall.png";
import bathroomImg from "@/assets/kitchenfitouts.png";
import showerImg from "@/assets/showerservice.png";
import commercialImg from "@/assets/image4.jpeg";
import industrialImg from "@/assets/industry.jpeg";
import firePumpImg from "@/assets/industry.jpeg";
import pumpRoomImg from "@/assets/image6.jpeg";
import constructionSiteImg from "@/assets/image7.jpeg";
import teamWorkingImg from "@/assets/work.jpeg";
import equipmentImg from "@/assets/service.jpeg";
import safetyGearImg from "@/assets/image3.jpeg";
import siteAssessmentImg from "@/assets/siteassessment.png";
import planningImg from "@/assets/planning.png";
import expertExecutionImg from "@/assets/expertexecution.png";
import handoverImg from "@/assets/handover.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import whyImg from "@/assets/why.png";
import qwetuImg1 from "@/assets/image1.jpeg";
import qwetuImg2 from "@/assets/image2.jpeg";
import qwetuImg3 from "@/assets/image3.jpeg";
import qwetuImg4 from "@/assets/image4.jpeg";
import qwetuImg5 from "@/assets/image5.jpeg";
import qwetuImg6 from "@/assets/image6.jpeg";
import qwetuImg7 from "@/assets/image7.jpeg";
import qwetuImg8 from "@/assets/image8.jpeg";
import subgeoImg from "@/assets/subgeo.jpeg";
import subgeo1Img from "@/assets/subgeo1.jpeg";
import subgeo2Img from "@/assets/subgeo2.jpeg";
import subgeo3Img from "@/assets/subgeo3.jpeg";
import subgeo4Img from "@/assets/subgeo4.jpeg";
import subgeo5Img from "@/assets/subgeo5.jpeg";
import subgeo6Img from "@/assets/subgeo6.jpeg";
import subgeo7Img from "@/assets/subgeo7.jpeg";
import subgeo8Img from "@/assets/subgeo8.jpeg";
import subgeo9Img from "@/assets/subgeo9.jpeg";
import suggeoImg from "@/assets/suggeo.jpeg";

export const Route = createFileRoute("/subgeo-industrial")({
  head: () => ({
    meta: [
      { title: "Subgeo Plumbing And Industrial Works Ltd" },
      {
        name: "description",
        content:
          "SUBGEO PLUMBING & INDUSTRIAL WORKS is a Private Limited Company providing Plumbing, Sanitary ware Installation, Drainage, Fire fighting System installation, and Regular Service maintenance.",
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
  { value: 14, suffix: "+", label: "Years of delivery" },
  { value: 240, suffix: "+", label: "Projects completed" },
  { value: 24, suffix: "/7", label: "Emergency response" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
];

const industries = [
  { name: "Commercial Industry", icon: Building2 },
  { name: "Residential Homes", icon: Home },
  { name: "Industrial Industry", icon: Factory },
  { name: "Hospitality Industry", icon: Building2 },
  { name: "Construction Industry", icon: Building2 },
  { name: "Property Developers", icon: TrendingUp },
  { name: "Estate & Rental Agents", icon: Building2 },
  { name: "Landlords", icon: Building2 },
  { name: "Fitness Industry", icon: Building2 },
];

const valueCards: IconCardItem[] = [
  {
    title: "Quality Service",
    description: "Quality service is a non-negotiable at Subgeo Plumbing Works. Many of our larger clients know our team members by first name already – they know we will be there on time and we will sort out their plumbing issues right first-time round.",
    icon: BadgeCheck,
  },
  {
    title: "24/7 Availability",
    description: "Our emergency number is manned 24/7 by a dedicated team member. Our standby teams are ready day or night to attend to your plumbing emergencies with a smile!",
    icon: Clock3,
  },
  {
    title: "Dynamic & Innovative",
    description: "Our dynamic management team ensures that the company is utilizing the very latest systems, methods and tools in the market to ensure speed and efficiency to clients.",
    icon: Sparkles,
  },
];

const services: IconCardItem[] = [
  {
    title: "All Plumbing Maintenance Requirements",
    description: "We offer Regular, comprehensive maintenance services, including leak checks, pipe inspections, and routine servicing of taps, toilets, and drainage systems.",
    longDescription: "Our comprehensive plumbing maintenance service ensures your systems run smoothly year-round.",
    features: ["Leak detection and repair", "Pipe inspections", "Tap and toilet servicing", "Drainage system checks", "Preventive maintenance"],
    icon: Wrench,
    image: plumbingImg,
  },
  {
    title: "Plumbing for Insurance Claims",
    description: "Dealing with plumbing issues covered by insurance? We assist homeowners and businesses with all plumbing-related insurance claims.",
    longDescription: "We work directly with insurance companies to provide detailed technical assessments and approved repair services.",
    features: ["Damage assessment", "Insurance-compliant reports", "Direct insurer liaison", "Approved repairs", "Claim documentation"],
    icon: FileText,
    image: commercialImg,
  },
  {
    title: "Electric Geysers Installation, Relocation, Repair",
    description: "Professional electric geyser installation, relocation and repair services — safe, code-compliant and reliable.",
    longDescription: "Professional geyser installation services that prioritize safety and efficiency.",
    features: ["Safe installation", "Relocation services", "Repair and servicing", "Pressure valve setup", "Warranty registration"],
    icon: Settings,
    image: geyserImg,
  },
  {
    title: "Kitchen & Bathroom Installations/Renovations",
    description: "Planning a kitchen or bathroom upgrade? We provide expert plumbing services for renovations, ensuring proper installation of sinks, taps, toilets, showers, and more.",
    longDescription: "Transform your kitchen and bathroom with our expert renovation services.",
    features: ["Fixture installation", "Pipe rerouting", "Waterproofing", "Drain connections", "Final testing"],
    icon: Home,
    image: bathroomImg,
  },
  {
    title: "Shower Head Cleaning & Replacement",
    description: "We provide thorough cleaning and replacement services to ensure your shower operates at peak performance, giving you a refreshing and uninterrupted bathing experience.",
    longDescription: "Keep your shower systems performing at their best with our specialized servicing.",
    features: ["System cleaning", "Head replacement", "Pressure balancing", "Temperature control", "Leak prevention"],
    icon: RefreshCw,
    image: showerImg,
  },
  {
    title: "Irrigation & Waste Pipe Leak Repairs",
    description: "We offer professional leak detection and repair services to keep your irrigation system running smoothly and ensure waste pipes function properly without leaks or blockages.",
    longDescription: "Our specialists diagnose and resolve complex waste network and irrigation issues.",
    features: ["Leak detection", "Pipe relining", "Blockage removal", "Irrigation system repair", "Preventive maintenance"],
    icon: Funnel,
    image: drainageImg,
  },
];

const projects = [
  {
    date: "2018",
    title: "GLEE HOTEL",
    subtitle: "Installation of Fire Pump",
    summary:
      "Full plumbing and drainage overhaul with integrated fire-fighting lines for a high-occupancy hospitality site, ensuring compliance with safety standards and operational reliability.",
    details:
      "In 2018, we undertook a major renovation for a luxury residence, which involved extensive plumbing, drainage, and sanitary installations. Our team reworked the entire plumbing system to accommodate new fixtures in the kitchen, bathrooms, and laundry room. We also installed a state-of-the-art drainage system to ensure smooth water flow throughout the property. Additionally, we worked closely with fire safety experts to implement a robust fire fighting system, including fire sprinklers and emergency water supply lines. The project was completed on time, and the homeowner praised our meticulous attention to detail and the seamless integration of all systems.",
    image: industrialImg,
    category: "Hospitality",
    highlights: [
      "Full plumbing overhaul",
      "Drainage system upgrade",
      "Fire-fighting line integration",
      "Fire sprinklers & emergency water supply",
    ],
  },
  {
    date: "2023",
    title: "Qwetu Hostel Jogoo Road",
    subtitle: "Installation of Water Reservoir Tanks",
    summary:
      "Contracted to deliver a comprehensive water storage and plumbing upgrade. The assignment involved installation of water reservoir tanks and modernization of existing plumbing systems to improve efficiency and sustainability.",
    details:
      "In 2023, we were contracted for a large-scale plumbing and drainage upgrade in a commercial office building. Our team was tasked with replacing outdated piping and improving the drainage system to meet modern standards. We installed new sanitary systems across multiple floors, including eco-friendly solutions like low-flow toilets and water-saving faucets. As part of the building's fire safety compliance, we also designed and implemented a new fire fighting system, incorporating automatic fire suppression and emergency water supplies. The successful completion of this project ensured that the building met both safety regulations and efficiency standards.",
    image: qwetuImg1,
    category: "Education",
    highlights: [
      "Water reservoir tank installation",
      "Sanitary system upgrades",
      "Water-saving fixtures",
      "Fire protection system integration",
    ],
    gallery: [qwetuImg1, qwetuImg2, qwetuImg3, qwetuImg4, qwetuImg5, qwetuImg6, qwetuImg7, qwetuImg8],
  },
  {
    date: "2024",
    title: "Kenya Marine Fisheries & Socio-Economic Development",
    subtitle: "KEMFSED Liwatoni Project",
    summary:
      "Completed a large-scale plumbing, drainage, sanitary, and fire-fighting installation project involving extensive underground plumbing and drainage works with detailed hydraulic calculations.",
    details:
      "In 2024, we completed the plumbing, drainage, sanitary, and fire fighting installations for a mixed-use complex, combining residential and commercial spaces. This ambitious project involved extensive underground plumbing and drainage work, with precise calculations for water pressure and flow rates. Our team handled the installation of high-quality sanitary fixtures across apartments, office spaces, and retail areas. We also designed and installed an advanced fire fighting system, including sprinklers, fire hose reels, and emergency water lines to ensure the safety of all building occupants. The project was delivered on schedule, and the client was extremely satisfied with our integrated approach and the overall quality of the installations.",
    image: constructionSiteImg,
    category: "Industrial",
    highlights: [
      "Underground plumbing & drainage",
      "Hydraulic calculations",
      "Sanitary fixtures installation",
      "Fire protection system (sprinklers, hose reels)",
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
    title: "Highly Skilled Team",
    description:
      "Our team is made up of highly skilled plumbing specialists. All our plumbers have at least 5 years broad onsite plumbing experience.",
    stat: "5+",
    statLabel: "Years Experience Avg",
  },
  {
    icon: Users,
    title: "Clean & Tidy Work",
    description:
      "We understand our client's need for cleanliness from their preferred plumber. We confidently state that our jobs are extremely neat; we keep and leave our work area tidy every single day.",
    stat: "100%",
    statLabel: "Tidy Job Sites",
  },
  {
    icon: BadgeCheck,
    title: "Quality Service",
    description:
      "Quality service is a non-negotiable at Subgeo Plumbing Works. Many of our larger clients know our team members by first name already — they know right first-time round.",
    stat: "99%",
    statLabel: "Client Satisfaction",
  },
];

const galleryImages = [
  qwetuImg1, qwetuImg2, qwetuImg3, qwetuImg4,
  qwetuImg5, qwetuImg6, qwetuImg7, qwetuImg8,
  subgeoImg, subgeo1Img, subgeo2Img, subgeo3Img,
  subgeo4Img, subgeo5Img, subgeo6Img, subgeo7Img,
  subgeo8Img, subgeo9Img, suggeoImg,
];

const autoSlideInterval = 3000;

function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      if (current === count - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, autoSlideInterval);
    return () => clearInterval(timer);
  }, [api, current, count]);

  return (
    <div className="relative px-2 md:px-10">
      <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="w-full">
        <CarouselContent>
          {galleryImages.map((img, idx) => (
            <CarouselItem key={idx} className="basis-full md:basis-1/3">
              <div className="group relative overflow-hidden shadow-md aspect-[4/3] mx-1">
                <img
                  src={img}
                  alt={`Gallery photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-1 md:-left-3 lg:-left-4 bg-white/90 border-0 shadow-md hover:bg-white" />
        <CarouselNext className="hidden md:flex -right-1 md:-right-3 lg:-right-4 bg-white/90 border-0 shadow-md hover:bg-white" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-accent w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
  const [branch, setBranch] = useState<string>("");
  const heroRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received — we'll get back to you within one business day.");
  };

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
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display font-medium text-[40px] md:text-[52px] leading-[1.15] tracking-tight text-white"
            >
              Subgeo Plumbing &<br />
              <span className="text-accent">Industrial Works Ltd</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-4 md:mt-6 max-w-xl text-[13px] md:text-[14px] text-white/80 leading-relaxed font-light"
            >
              SUBGEO PLUMBING & INDUSTRIAL WORKS is a Private Limited Company. Our business scope includes Plumbing, Sanitary ware Installation, Drainage, Fire fighting System installation, and Regular Service maintenance — with 24/7 emergency response across Kenya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-5 md:mt-7 flex flex-col sm:flex-row gap-3 md:gap-5"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="bg-accent hover:bg-accent/90 text-white px-8 md:px-10 py-3.5 md:py-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-primary px-8 md:px-10 py-3.5 md:py-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
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
                <span className="text-accent text-[13px] font-semibold mb-2">Precision Work</span>
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
                  <div className="bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-[2px] w-fit mb-3 relative z-10 tracking-widest">
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
                  <div className="bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-[2px] w-fit mb-3 relative z-10 tracking-widest">
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
              Established in 2012<br/>
              <span className="text-accent">Incorporated 24/06/2018</span>
            </h2>
            <p className="mt-4 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium max-w-3xl mx-auto">
              SUBGEO PLUMBING & INDUSTRIAL WORKS is a Private Limited Company registered under the Registrar of Companies. Its business scope includes Plumbing, Sanitary ware Installation, Drainage, Fire fighting System installation, and Regular Service maintenance. To all the services provided have been of high standard and quality, satisfactory to all involved parties that include Project Managers, Engineers, Architects, various consultants and the clients.
            </p>
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
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Dynamic & <span className="text-accent">Innovative</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Our dynamic management team ensures that the company is utilizing the very latest systems, methods and tools in the market to ensure speed and efficiency to clients.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Well-maintained <span className="text-accent">Fleet</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Our fleet are well maintained reliable vehicles, company branded and extremely neat.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Latest <span className="text-accent">Equipment</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  We invest in the very latest equipment/tools to ensure speed in undertaking Projects.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[15px] font-sans font-[900] tracking-tight text-[#1e293b] mb-2">Highly Skilled <span className="text-accent">Team</span></h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                  Our team is made up of highly skilled plumbing specialists. All our plumbers have at least 5 years broad onsite plumbing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x max-w-[1200px] mx-auto">

          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-between mb-[60px]">

              {/* Mission */}
              <div className="flex-1 text-center px-10">
                <div className="w-[100px] h-[100px] mx-auto mb-[30px] flex items-center justify-center">
                  <svg viewBox="0 0 100 100" style={{ color: "#f0164c" }} className="w-full h-full">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="none"/>
                    <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="12" fill="none"/>
                    <circle cx="50" cy="50" r="6" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className="text-[1.25rem] font-extrabold text-black mb-4 uppercase tracking-[0.5px]">
                  OUR <span className="text-[#f0164c]">MISSION</span>
                </h2>
                <p className="text-[#888888] text-[0.95rem] leading-relaxed font-normal">
                  To deliver high-standard plumbing, drainage, sanitary, and fire-fighting solutions with precision, safety, and reliability — exceeding expectations on every project.
                </p>
              </div>

              <div className="hidden md:block w-px h-[150px] bg-[#d1d1d1]"></div>

              {/* Vision */}
              <div className="flex-1 text-center px-10">
                <div className="w-[100px] h-[100px] mx-auto mb-[30px] flex items-center justify-center">
                  <svg viewBox="0 0 100 100" style={{ color: "#1e92ec" }} className="w-full h-full">
                    <path d="M50 25 C 32 25, 25 40, 32 55 C 36 63, 40 68, 40 75 L 60 75 C 60 68, 64 63, 68 55 C 75 40, 68 25, 50 25 Z" stroke="currentColor" strokeWidth="7" fill="none" strokeLinejoin="round"/>
                    <line x1="42" y1="83" x2="58" y2="83" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="45" y1="91" x2="55" y2="91" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="50" y1="12" x2="50" y2="5" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="77" y1="25" x2="83" y2="19" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="88" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="23" y1="25" x2="17" y2="19" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="12" y1="50" x2="5" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </div>
                <h2 className="text-[1.25rem] font-extrabold text-black mb-4 uppercase tracking-[0.5px]">
                  OUR <span className="text-[#1e92ec]">VISION</span>
                </h2>
                <p className="text-[#888888] text-[0.95rem] leading-relaxed font-normal">
                  To be Kenya's most trusted partner in plumbing and industrial works — known for quality workmanship, 24/7 readiness, and enduring client partnerships.
                </p>
              </div>

              <div className="hidden md:block w-px h-[150px] bg-[#d1d1d1]"></div>

              {/* Values */}
              <div className="flex-1 text-center px-10">
                <div className="w-[100px] h-[100px] mx-auto mb-[30px] flex items-center justify-center">
                  <svg viewBox="0 0 100 100" style={{ color: "#00ce8d" }} className="w-full h-full">
                    <path d="M50 55 L 46 51 C 30 36, 25 28, 25 18 C 25 8, 33 0, 43 0 C 49 0, 50 4, 50 4 C 50 4, 51 0, 57 0 C 67 0, 75 8, 75 18 C 75 28, 70 36, 54 51 Z" fill="currentColor" transform="translate(0, 10)"/>
                    <path d="M 15 50 L 15 65 C 15 75, 25 80, 35 85 L 45 90 C 48 91, 52 91, 55 90 L 65 85 C 75 80, 85 75, 85 65 L 85 50 M 30 55 L 30 75 M 70 55 L 70 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M 15 60 C 25 60, 35 70, 40 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                    <path d="M 85 60 C 75 60, 65 70, 60 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <h2 className="text-[1.25rem] font-extrabold text-black mb-4 uppercase tracking-[0.5px]">
                  OUR <span className="text-[#00ce8d]">VALUES</span>
                </h2>
                <p className="text-[#888888] text-[0.95rem] leading-relaxed font-normal">
                  &ldquo;Quality Service. 24/7 Readiness. Innovative Solutions.&rdquo; We serve with integrity, respond with urgency, and deliver excellence on every job &mdash; big or small.
                </p>
              </div>

            </div>
          </FadeInSection>

          {/* Bottom Row — Small Grey Icons */}
          <div className="flex items-center justify-center w-[70%] mx-auto">
            <div className="flex-1 flex justify-center">
              <div className="w-[50px] h-[50px]">
                <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: "#888888" }}>
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="none"/>
                  <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="12" fill="none"/>
                  <circle cx="50" cy="50" r="6" fill="#888888"/>
                </svg>
              </div>
            </div>

            <div className="w-px h-10 bg-[#a8a8a8]"></div>

            <div className="flex-1 flex justify-center">
              <div className="w-[50px] h-[50px]">
                <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: "#888888" }}>
                  <path d="M50 25 C 32 25, 25 40, 32 55 C 36 63, 40 68, 40 75 L 60 75 C 60 68, 64 63, 68 55 C 75 40, 68 25, 50 25 Z" stroke="currentColor" strokeWidth="7" fill="none" strokeLinejoin="round"/>
                  <line x1="42" y1="83" x2="58" y2="83" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                  <line x1="45" y1="91" x2="55" y2="91" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                  <line x1="50" y1="12" x2="50" y2="5" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  <line x1="77" y1="25" x2="83" y2="19" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  <line x1="88" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  <line x1="23" y1="25" x2="17" y2="19" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  <line x1="12" y1="50" x2="5" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="w-px h-10 bg-[#a8a8a8]"></div>

            <div className="flex-1 flex justify-center">
              <div className="w-[50px] h-[50px]">
                <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: "#888888" }}>
                  <path d="M50 55 L 46 51 C 30 36, 25 28, 25 18 C 25 8, 33 0, 43 0 C 49 0, 50 4, 50 4 C 50 4, 51 0, 57 0 C 67 0, 75 8, 75 18 C 75 28, 70 36, 54 51 Z" fill="#888888" transform="translate(0, 10)"/>
                  <path d="M 15 50 L 15 65 C 15 75, 25 80, 35 85 L 45 90 C 48 91, 52 91, 55 90 L 65 85 C 75 80, 85 75, 85 65 L 85 50 M 30 55 L 30 75 M 70 55 L 70 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 15 60 C 25 60, 35 70, 40 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                  <path d="M 85 60 C 75 60, 65 70, 60 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                </svg>
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
              <div className="text-accent shrink-0">
                <BadgeCheck className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[14px] text-[#222]">Quality First</h4>
                <p className="text-[#777] text-[11px]">Dependable long-term performance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-accent shrink-0">
                <Clock3 className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[14px] text-[#222]">Rapid Response</h4>
                <p className="text-[#777] text-[11px]">24/7 emergency dispatch</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-accent shrink-0">
                <Sparkles className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[14px] text-[#222]">Smart Innovation</h4>
                <p className="text-[#777] text-[11px]">Modern tooling & reporting</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-accent shrink-0">
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

      {/* Reliable Solutions Across Critical Sectors */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-x">
          
          <Reveal className="text-center mb-16">
            <h2 className="text-[#333] text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest">
              Industries we
              <br />
              Serve!
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-[220px] h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src={commercialImg} alt="Commercial Buildings" className="w-full h-full object-cover bg-gray-50" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-accent text-[14px] font-medium mb-3">Commercial Industry</h3>
                  <p className="text-[#666] text-[12px] leading-relaxed mb-5">
                    Comprehensive plumbing and drainage solutions for office complexes, retail centers, and multi-tenant commercial properties.
                  </p>
                  <button className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto inline-flex items-center justify-center">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-[220px] h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src={industrialImg} alt="Industrial Plants" className="w-full h-full object-cover bg-gray-50" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-accent text-[14px] font-medium mb-3">Industrial Industry</h3>
                  <p className="text-[#666] text-[12px] leading-relaxed mb-5">
                    Heavy-duty pipework, fire suppression systems, and maintenance programs tailored for manufacturing and processing facilities.
                  </p>
                  <button className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto inline-flex items-center justify-center">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-[220px] h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src={plumbingImg} alt="Residential Estates" className="w-full h-full object-cover bg-gray-50" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-accent text-[14px] font-medium mb-3">Residential Homes</h3>
                  <p className="text-[#666] text-[12px] leading-relaxed mb-5">
                    Reliable plumbing installation and maintenance for housing developments, apartment complexes, and gated communities.
                  </p>
                  <button className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto inline-flex items-center justify-center">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-[220px] h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src={constructionSiteImg} alt="Hospitality Spaces" className="w-full h-full object-cover bg-gray-50" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-accent text-[14px] font-medium mb-3">Hospitality Industry</h3>
                  <p className="text-[#666] text-[12px] leading-relaxed mb-5">
                    Specialized plumbing and fire safety solutions for hotels, restaurants, and resorts requiring uninterrupted guest comfort.
                  </p>
                  <button className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto inline-flex items-center justify-center">
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

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
                  All the services provided by Subgeo Plumbing & Industrial Works Ltd have been of high standard and quality, satisfactory to all involved parties that include Project Managers, Engineers, Architects, various consultants and the clients.
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
              Our Services
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
                      <h3 className="text-accent text-[14px] font-medium mb-3">{service.title}</h3>
                      <p className="text-[#666] text-[12px] leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <button className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto inline-flex items-center justify-center">
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
                <p className="text-accent text-[12px] font-semibold mb-6">{projects[0].subtitle}</p>
                <a href="#" className="text-[#444] text-[11px] font-bold flex items-center hover:text-accent transition-colors uppercase tracking-wider">
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
                <p className="text-accent text-[12px] font-semibold mb-6">{projects[1].subtitle}</p>
                <a href="#" className="text-[#444] text-[11px] font-bold flex items-center hover:text-accent transition-colors uppercase tracking-wider">
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

      {/* Qwetu Project Gallery - Carousel */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">Project Gallery</p>
              <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-tight text-[#1d3b4a]">
                Qwetu Hostel Jogoo Road
              </h2>
              <p className="text-[13px] text-gray-500 mt-3 max-w-xl mx-auto">
                Installation of Water Reservoir Tanks — 2023
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GalleryCarousel />
          </Reveal>
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
              <span className="text-[#1d3b4a] block">Latest Equipment</span>
              <span className="text-accent block">& Skilled Specialists</span>
            </h2>
            <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium mb-8">
              We invest in the very latest equipment/tools to ensure speed in undertaking Projects. Our team is made up of highly skilled plumbing specialists. All our plumbers have at least 5 years broad onsite plumbing experience.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-6 mb-10">
              {[
                "Latest Equipment & Tools",
                "5+ Years Experience Per Plumber",
                "Well-Maintained Branded Fleet",
                "Dynamic Management Systems",
                "Quality Service Non-Negotiable",
                "24/7 Emergency Response"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-[12px] lg:text-[14px] text-[#4a5568] font-bold">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-none text-[13px] uppercase tracking-widest font-bold transition-all shadow-none mt-4">
              Get A Quote
            </button>
          </Reveal>
        </div>
      </section>

      {/* Contact Section — Form & Image Layout */}
      <section className="pt-16 lg:pt-24 pb-0 bg-white relative z-10" id="contact">
        <div className="container-x max-w-[1100px] mx-auto relative z-10 flex flex-col lg:flex-row items-end gap-16 lg:gap-12">
          
          {/* Left Side : Image & Info Box */}
          <div className="w-full lg:w-[45%] relative flex items-center justify-center lg:justify-end pt-32 lg:pt-0">
            
            {/* Floating Info Box */}
            <div className="absolute top-10 lg:-top-10 left-0 lg:left-0 xl:left-[-20px] z-10 bg-accent text-white p-8 w-[240px] sm:w-[280px] shadow-2xl">
              <div className="bg-white text-accent w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-center font-bold text-[16px] mb-3">Get A Free Quote</h3>
              <p className="text-center text-[12px] leading-relaxed text-white/90 mb-8 pt-2">
                Request a site assessment or preventive maintenance plan tailored to your operation.
              </p>
              <div className="flex justify-center">
                <a href="tel:0733699441" className="bg-white text-accent hover:bg-gray-100 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest inline-flex items-center transition-colors">
                  CALL NOW
                </a>
              </div>
            </div>

            {/* The Image */}
            <div className="relative z-20 w-[320px] md:w-[400px] max-w-[480px] lg:mr-8 xl:mr-16">
               <img src={whyImg} alt="Customer Service" className="w-full h-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] block" />
            </div>
            
          </div>

          {/* Right Side : The Form */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center pb-12 lg:pb-16">
            
            <Reveal>
              <div className="inline-flex items-center gap-2 text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                CONTACT US
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              </div>
              <h2 className="text-[#333] text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest mb-10">
                <span className="text-accent">Plan</span> Your Next Project<br />
                With Our Team
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your name*" 
                    className="bg-[#f7f8f9] border border-gray-200 rounded-none h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent" 
                    required 
                  />
                  <Input 
                    placeholder="Your Email*" 
                    type="email" 
                    className="bg-[#f7f8f9] border border-gray-200 rounded-none h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your number*" 
                    className="bg-[#f7f8f9] border border-gray-200 rounded-none h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent" 
                  />
                  <Input 
                    placeholder="Service Needed*" 
                    className="bg-[#f7f8f9] border border-gray-200 rounded-none h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent" 
                  />
                </div>
                <Textarea 
                  placeholder="Tell us about your project" 
                  rows={5} 
                  className="bg-[#f7f8f9] border border-gray-200 rounded-none p-6 text-[13px] placeholder:text-gray-400 resize-none focus-visible:ring-1 focus-visible:ring-accent" 
                />
                
                <div className="mt-2 text-left">
                  <Button 
                    type="submit" 
                    className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
                  >
                    SEND MESSAGE
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </form>
            </Reveal>
            
          </div>
        </div>
      </section>

      <Toaster />

      {/* Final CTA */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden">
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
                  className="inline-flex items-center gap-2 md:gap-3 bg-accent hover:bg-accent/90 text-white px-10 md:px-12 py-5 md:py-6 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
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

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(224, 41, 46, 0.3);
          color: primary;
        }
      `}</style>
    </div>
  );
}

export default SubgeoIndustrial;