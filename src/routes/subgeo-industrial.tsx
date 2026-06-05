import { createFileRoute, Link } from "@tanstack/react-router";
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
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { RevealOnScroll, PageTransition, ScrollProgressBar } from "@/components/premium/PremiumAnimations";
import heroImg from "@/assets/corporate-hero.jpg";
import bgImg from "@/assets/background.png";
import industryImg from "@/assets/industry.jpeg";

export const Route = createFileRoute("/subgeo-industrial")({
  head: () => ({
    meta: [
      { title: "Subgeo Plumbing & Industrial Works Ltd" },
      {
        name: "description",
        content:
          "Subgeo Plumbing & Industrial Works Ltd delivers reliable plumbing, drainage and industrial maintenance services across Nairobi and beyond.",
      },
    ],
  }),
  component: SubgeoIndustrial,
});

type IconCardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const trustMetrics = [
  { value: "12+", label: "Years of delivery" },
  { value: "240+", label: "Projects completed" },
  { value: "24/7", label: "Emergency response" },
  { value: "99%", label: "Client satisfaction" },
];

const trustQuotes = [
  {
    quote:
      "Subgeo stepped in during an emergency shutdown and restored our full water line faster than expected.",
    author: "Eng. Kevin Otieno",
    role: "Facility Manager",
  },
  {
    quote:
      "Their team communicates clearly, keeps sites clean, and delivers quality workmanship on every visit.",
    author: "Margaret Njeri",
    role: "Property Director",
  },
  {
    quote:
      "From planning to handover, Subgeo treated our industrial retrofit with real precision and care.",
    author: "Stephen Kamau",
    role: "Operations Lead",
  },
];

const industries = [
  "Commercial Buildings",
  "Residential Estates",
  "Industrial Plants",
  "Hospitality Spaces",
  "Educational Campuses",
  "Property Developers",
  "Retail Facilities",
  "Health Institutions",
];

const valueCards: IconCardItem[] = [
  {
    title: "Quality First",
    description:
      "Every installation, inspection and repair follows strict quality controls for dependable long-term performance.",
    icon: BadgeCheck,
  },
  {
    title: "Rapid Response",
    description:
      "Our dispatch-ready teams and dedicated support line keep emergency downtime as low as possible.",
    icon: Clock3,
  },
  {
    title: "Smart Innovation",
    description:
      "We combine proven plumbing practice with modern tooling to improve speed, safety and reporting accuracy.",
    icon: Sparkles,
  },
];

const services: IconCardItem[] = [
  {
    title: "Plumbing Maintenance",
    description:
      "Routine leak checks, pressure tests, and preventive upkeep for domestic and commercial systems.",
    icon: Wrench,
  },
  {
    title: "Insurance Support",
    description:
      "Technical inspections, reports and approved repair execution for plumbing-related insurance claims.",
    icon: FileText,
  },
  {
    title: "Geyser Installation",
    description:
      "Safe, code-compliant electric geyser installation, replacement and relocation services.",
    icon: Settings,
  },
  {
    title: "Kitchen & Bathroom Fitouts",
    description:
      "Precise fixture plumbing for upgrades, remodels and full sanitary installation projects.",
    icon: Home,
  },
  {
    title: "Shower System Servicing",
    description:
      "Cleaning, replacement and pressure balancing to keep shower lines efficient and reliable.",
    icon: RefreshCw,
  },
  {
    title: "Drainage & Waste Networks",
    description:
      "Drain rerouting, waste line diagnostics and leak remediation for healthy drainage performance.",
    icon: Funnel,
  },
];

const projects = [
  {
    date: "03/2018",
    title: "GLEE HOTEL | Fire Pump Retrofit",
    summary:
      "Full plumbing and drainage overhaul with integrated fire-fighting lines for a high-occupancy hospitality site.",
  },
  {
    date: "02/2023",
    title: "Qwetu Catholic University",
    summary:
      "Campus-wide sanitary upgrades with water-efficient fittings and compliance-ready safety infrastructure.",
  },
  {
    date: "04/2024",
    title: "Kenya Marine Fisheries",
    summary:
      "Mixed-use development plumbing execution spanning underground mains, sanitary systems and hydrant networks.",
  },
];

// Enhanced scroll function with better reliability
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: "smooth", 
      block: "start",
      inline: "nearest"
    });
  }
}

function SubgeoIndustrial() {
  return (
    <PageTransition className="relative min-h-screen overflow-x-hidden bg-background page-texture text-foreground">
      <ScrollProgressBar />
      
      {/* ENHANCED HERO SECTION - Full viewport height */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-black/90 overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={industryImg}
            alt="Subgeo Industrial - Professional plumbing and industrial services"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="relative z-20 w-full">
          <Navbar />
        </div>

        <div className="container-x relative z-20 pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left pt-10 lg:pt-0">
              <RevealOnScroll direction="up">
                <h1 className="font-display text-[clamp(2.5rem,8vw,4rem)] leading-tight text-white font-bold">
                  Subgeo Plumbing And
                  <br />
                  Industrial Works
                </h1>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.08}>
                <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0">
                  We design, install and maintain resilient plumbing and drainage systems for homes,
                  commercial spaces and industrial facilities across Kenya. Our fleet are well maintained reliable vehicles, company branded and extremely neat.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.16}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="rounded-none bg-white hover:bg-gray-100 text-[#b91c2a] h-14 w-full sm:w-auto px-8 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore Services
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex rounded-none border-2 border-white text-white hover:bg-white hover:text-[#b91c2a] h-14 w-full sm:w-auto px-8 font-semibold text-sm uppercase tracking-wider items-center justify-center gap-3 transition-all duration-300"
                  >
                    Request A Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.22}>
                <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                    {["12+", "240+", "99%"].map((val) => (
                      <div
                        key={val}
                        className="h-10 w-10 rounded-full bg-white text-[#b91c2a] text-xs font-bold flex items-center justify-center border-2 border-white/20 shadow-md"
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5">
                    <div className="text-sm font-semibold text-white">Emergency-ready</div>
                    <div className="text-xs text-white/70">24/7 Support Guaranteed</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-white/70 text-xs mb-1">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <main className="home-page-scale">
        {/* TRUSTED PERFORMANCE SECTION */}
        <section className="section-slab section-rule py-16 md:py-24">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow">Trusted Performance</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Trusted By Teams That Cannot Afford Downtime
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                  Our clients rely on Subgeo for dependable project execution, structured communication and measurable outcomes.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {trustMetrics.map((item, index) => (
                <RevealOnScroll key={item.label} delay={index * 0.08} direction="up">
                  <div className="rounded-lg border border-[#e2e8f0] bg-white p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p className="text-4xl md:text-5xl font-bold text-[#b91c2a]">{item.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-widest text-gray-500 font-medium">{item.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {trustQuotes.map((item, index) => (
                <RevealOnScroll key={item.author} delay={index * 0.1} direction="up">
                  <article className="flex h-full flex-col justify-between rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-[#b91c2a] text-xl">"</div>
                      <p className="text-base leading-relaxed text-gray-600 flex-1">
                        {item.quote}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                      <p className="text-base font-semibold text-[#1a2c4e]">{item.author}</p>
                      <p className="text-sm uppercase tracking-widest text-gray-500">{item.role}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section id="industries" className="section-shell section-rule py-20 md:py-28">
          <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <RevealOnScroll direction="right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 overflow-hidden rounded-lg border border-[#dbe4ef] shadow-xl">
                  <img 
                    src={heroImg} 
                    alt="Industrial plumbing installations" 
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-[#dbe4ef] shadow-lg">
                  <img 
                    src={bgImg} 
                    alt="Subgeo team in action" 
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-[#dbe4ef] shadow-lg">
                  <img 
                    src={heroImg} 
                    alt="Commercial project delivery" 
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </RevealOnScroll>

            <div>
              <RevealOnScroll direction="up">
                <p className="eyebrow">Industries We Serve</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Reliable Plumbing Solutions Across Critical Sectors
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Subgeo supports multi-site operators and independent property owners with tailored plumbing, drainage and maintenance programs.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.08}>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {industries.map((item) => (
                    <li 
                      key={item} 
                      className="flex items-center gap-3 rounded-lg border border-[#dbe4ef] bg-white px-4 py-3 text-base text-gray-700 hover:border-[#b91c2a] hover:bg-[#fff5f5] transition-all duration-300"
                    >
                      <span className="h-3 w-3 rounded-full bg-[#e0292e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.16}>
                <div className="mt-8 rounded-lg border border-[#fbcaca] bg-[#fff5f5] p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#b91c2a]">Service Promise</p>
                  <p className="mt-3 text-base leading-relaxed text-[#7f1d1d]">
                    We align every scope with operational risk, site safety and realistic maintenance windows so your teams keep moving.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ABOUT SUBGEO */}
        <section id="about" className="section-slab section-rule py-20 md:py-28">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-5xl text-center">
                <p className="eyebrow">About Subgeo Industrial</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Built On Professional Discipline Since 2012
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company focused on plumbing, sanitary installation,
                  drainage systems, fire-fighting infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {valueCards.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.1} direction="up">
                  <article className="h-full rounded-lg border border-[#e2e8f0] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#fee2e2] text-[#b91c2a]">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-[#1a2c4e]">{item.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{item.description}</p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section id="services" className="section-shell section-rule py-20 md:py-28">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow">Core Services</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  End-To-End Plumbing And Industrial Maintenance
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                  From preventive maintenance to full installation programs, our teams deliver practical technical solutions with clear reporting.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.08} direction="up">
                  <article className="group relative h-full overflow-hidden rounded-lg border border-[#dbe4ef] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#f5a2a2] hover:shadow-xl">
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b91c2a] via-[#e0292e] to-[#f97373]" />
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2c4e] text-white transition-colors group-hover:bg-[#b91c2a]">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold uppercase tracking-widest text-[#1a2c4e]">{item.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{item.description}</p>
                    <div className="mt-6 flex items-center text-sm font-semibold uppercase tracking-widest text-[#b91c2a] group-hover:gap-3 transition-all duration-300">
                      Learn more
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* RECENT WORK */}
        <section className="section-slab section-rule py-20 md:py-28">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow">Recent Work</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-[#1a2c4e] leading-tight">
                  Projects Delivered With High Technical Accuracy
                </h2>
              </div>
            </RevealOnScroll>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <RevealOnScroll direction="right">
                <article className="group h-full overflow-hidden rounded-lg border border-[#dbe4ef] bg-white shadow-xl">
                  <div className="relative overflow-hidden">
                    <img 
                      src={heroImg} 
                      alt={projects[0].title} 
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-6 top-6 rounded-lg bg-[#b91c2a] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white">
                      {projects[0].date}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1a2c4e]">{projects[0].title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{projects[0].summary}</p>
                  </div>
                </article>
              </RevealOnScroll>

              <div className="grid gap-6">
                {projects.slice(1).map((item, index) => (
                  <RevealOnScroll key={item.title} delay={index * 0.08} direction="left">
                    <article className="group overflow-hidden rounded-lg border border-[#dbe4ef] bg-white shadow-lg">
                      <div className="relative overflow-hidden">
                        <img 
                          src={bgImg} 
                          alt={item.title} 
                          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute left-4 top-4 rounded-lg bg-[#b91c2a] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                          {item.date}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-[#1a2c4e]">{item.title}</h3>
                        <p className="mt-3 text-base leading-relaxed text-gray-600">{item.summary}</p>
                      </div>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT TESTIMONY */}
        <section className="relative overflow-hidden bg-[#102845] py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,0.14),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(224,41,46,0.35),transparent_42%)]" />
          <div className="container-x relative">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-white/70">Client Testimony</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] text-white leading-tight">
                  Confidence That Comes From Consistent Delivery
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-2xl mx-auto">
                  Feedback from project partners and recurring maintenance clients who rely on Subgeo teams.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "Subgeo coordinated seamlessly with our contractors and delivered a clean, compliant installation ahead of timeline.",
                  author: "Amina Hassan",
                  role: "Project Coordinator",
                },
                {
                  quote:
                    "Their emergency support line is responsive and the technicians always arrive prepared with clear diagnostics.",
                  author: "Dr. James Kipchoge",
                  role: "Operations Consultant",
                },
              ].map((item, index) => (
                <RevealOnScroll key={item.author} direction="up" delay={index * 0.1}>
                  <article className="rounded-lg border border-white/15 bg-white/10 p-8 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-white/80 text-2xl">"</div>
                      <p className="text-lg leading-relaxed text-white/90 flex-1">
                        {item.quote}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{item.author}</p>
                        <p className="text-sm uppercase tracking-widest text-white/70">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & LOCATION */}
        <section className="section-slab section-rule py-20 md:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <RevealOnScroll direction="right">
              <div className="rounded-lg border border-[#dbe4ef] bg-white p-8 shadow-xl">
                <p className="eyebrow">Contact & Location</p>
                <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3rem)] text-[#1a2c4e] leading-tight">
                  Plan Your Next Project With Our Team
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Reach out for a site survey, emergency support, or a preventive maintenance plan tailored to your operation.
                </p>

                <div className="mt-10 space-y-6 text-lg text-gray-700">
                  <p className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="font-medium">0733 699 441</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="font-medium">info@subgeo.co.ke</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2c4e] text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="font-medium">P.O. Box 48230-00100, Nairobi, Kenya</span>
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 bg-[#b91c2a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#8f1520] shadow-lg hover:shadow-xl"
                >
                  CONTACT US
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
              <div className="overflow-hidden rounded-lg border border-[#dbe4ef] bg-white p-2 shadow-xl">
                <iframe
                  title="Subgeo location map"
                  src="https://www.google.com/maps?q=Nairobi%20Kenya&output=embed"
                  width="100%"
                  height="100%"
                  className="h-[400px] w-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="grid gap-4 border-t border-[#e2e8f0] p-6 text-base text-gray-600 sm:grid-cols-3">
                  <p className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-[#b91c2a]" />
                    Mon - Fri: 7:30 AM - 5:30 PM
                  </p>
                  <p className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-[#b91c2a]" />
                    Preventive maintenance plans
                  </p>
                  <p className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#b91c2a]" />
                    Safety-compliant execution
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="section-shell py-16 md:py-24">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="rounded-lg border border-[#f5a2a2] bg-[linear-gradient(120deg,#fff7f7_0%,#ffe8e8_55%,#ffd7d7_100%)] p-10 text-center shadow-2xl md:p-12">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b91c2a]">Need Immediate Assistance?</p>
                <h3 className="mt-4 font-display text-[clamp(2rem,5vw,3rem)] text-[#7f1d1d] leading-tight">
                  Book A Technical Assessment Today
                </h3>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#7f1d1d]/85">
                  Let our engineers assess your current plumbing systems and provide a practical, cost-aware improvement plan.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-[#b91c2a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#8f1520] shadow-lg hover:shadow-xl"
                  >
                    SCHEDULE VISIT
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="inline-flex items-center gap-3 border-2 border-[#b91c2a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#b91c2a] transition-colors hover:bg-[#fff1f1] shadow-lg hover:shadow-xl"
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
    </PageTransition>
  );
}