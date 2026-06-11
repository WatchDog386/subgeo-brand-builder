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

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SubgeoIndustrial() {
  return (
    <>
      <Navbar />
      <PageTransition className="relative min-h-screen overflow-x-clip bg-background page-texture text-foreground">
      <ScrollProgressBar />
      
      <section className="relative overflow-hidden bg-black/90">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={industryImg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-x relative z-10 pt-32 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="pt-10 lg:pt-16">
              <RevealOnScroll direction="up">
                <h1 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-white">
                  Subgeo Plumbing And
                  <br />
                  Industrial Works
                  
                </h1>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.08}>
                <p className="mt-5 text-[13px] md:text-sm text-white/90 max-w-xl">
                  We design, install and maintain resilient plumbing and drainage systems for homes,
                  commercial spaces and industrial facilities across Kenya. Our fleet are well maintained reliable vehicles, company branded and extremely neat.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.16}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="rounded-none bg-white hover:bg-gray-100 text-[#b91c2a] h-[50px] w-full sm:w-auto px-8 font-semibold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex rounded-none border-2 border-white text-white hover:bg-white hover:text-[#b91c2a] h-[50px] w-full sm:w-auto px-8 font-semibold text-[13px] uppercase tracking-wider items-center justify-center gap-2"
                  >
                    Request A Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.22}>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["12+", "24", "99"].map((val) => (
                      <div
                        key={val}
                        className="h-9 w-9 rounded-full bg-white text-[#b91c2a] text-[10px] font-bold flex items-center justify-center border-2 border-white/20"
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                    <div className="text-xs font-semibold text-white">Emergency-ready</div>
                    <div className="text-[10px] text-white/70">24/7 Support Guaranteed</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll direction="left" delay={0.2}>
              <div className="relative flex justify-center min-h-[400px] lg:min-h-[600px] mt-10 lg:mt-0">
                {/* Empty right side as requested */}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <main className="home-page-scale">
        <section className="section-slab section-rule py-16 md:py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Trusted Performance</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">Trusted By Teams That Cannot Afford Downtime</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  Our clients rely on Subgeo for dependable project execution, structured communication and measurable outcomes.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {trustMetrics.map((item, index) => (
                <RevealOnScroll key={item.label} delay={index * 0.08} direction="up">
                  <div className="rounded-sm border border-[#e2e8f0] bg-white p-5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                    <p className="text-3xl font-bold text-[#b91c2a]">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gray-500">{item.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {trustQuotes.map((item, index) => (
                <RevealOnScroll key={item.author} delay={index * 0.1} direction="up">
                  <article className="flex h-full flex-col justify-between rounded-sm border border-[#e2e8f0] bg-[#f8fafc] p-6 shadow-[0_14px_30px_rgba(15,23,42,0.09)] transition-transform duration-300 hover:-translate-y-1.5">
                    <p className="text-[14px] leading-relaxed text-gray-600">"{item.quote}"</p>
                    <div className="mt-6 border-t border-[#e2e8f0] pt-4">
                      <p className="text-sm font-semibold text-[#1a2c4e]">{item.author}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-gray-500">{item.role}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="section-shell section-rule py-20">
          <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <RevealOnScroll direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 overflow-hidden rounded-sm border border-[#dbe4ef] shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                  <img src={heroImg} alt="Industrial plumbing installations" className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-sm border border-[#dbe4ef] shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                  <img src={bgImg} alt="Subgeo team in action" className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-sm border border-[#dbe4ef] shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                  <img src={heroImg} alt="Commercial project delivery" className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </RevealOnScroll>

            <div>
              <RevealOnScroll direction="up">
                <p className="eyebrow">Industries We Serve</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">
                  Reliable Plumbing Solutions Across Critical Sectors
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  Subgeo supports multi-site operators and independent property owners with tailored plumbing, drainage and maintenance programs.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.08}>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {industries.map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-sm border border-[#dbe4ef] bg-white px-3 py-2 text-[13px] text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-[#e0292e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.16}>
                <div className="mt-7 rounded-sm border border-[#fbcaca] bg-[#fff5f5] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b91c2a]">Service Promise</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#7f1d1d]">
                    We align every scope with operational risk, site safety and realistic maintenance windows so your teams keep moving.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section id="about" className="section-slab section-rule py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow">About Subgeo Industrial</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">Built On Professional Discipline Since 2012</h2>
                <p className="mt-5 text-[14px] leading-relaxed text-gray-600">
                  Subgeo Plumbing & Industrial Works Ltd is a registered private limited company focused on plumbing, sanitary installation,
                  drainage systems, fire-fighting infrastructure and recurring maintenance services for long-term asset performance.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {valueCards.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.1} direction="up">
                  <article className="h-full rounded-sm border border-[#e2e8f0] bg-white p-7 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(15,23,42,0.13)]">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fee2e2] text-[#b91c2a]">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#1a2c4e]">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">{item.description}</p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell section-rule py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Core Services</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">End-To-End Plumbing And Industrial Maintenance</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  From preventive maintenance to full installation programs, our teams deliver practical technical solutions with clear reporting.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.08} direction="up">
                  <article className="group relative h-full overflow-hidden rounded-sm border border-[#dbe4ef] bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5a2a2] hover:shadow-[0_20px_34px_rgba(15,23,42,0.14)]">
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b91c2a] via-[#e0292e] to-[#f97373]" />
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1a2c4e] text-white transition-colors group-hover:bg-[#b91c2a]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-bold uppercase tracking-[0.08em] text-[#1a2c4e]">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">{item.description}</p>
                    <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-[#b91c2a]">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="section-slab section-rule py-20">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Recent Work</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-[#1a2c4e]">Projects Delivered With High Technical Accuracy</h2>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <RevealOnScroll direction="right">
                <article className="group h-full overflow-hidden rounded-sm border border-[#dbe4ef] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                  <div className="relative overflow-hidden">
                    <img src={heroImg} alt={projects[0].title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-sm bg-[#b91c2a] px-3 py-1 text-xs font-bold tracking-[0.14em] text-white">
                      {projects[0].date}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-[#1a2c4e]">{projects[0].title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">{projects[0].summary}</p>
                  </div>
                </article>
              </RevealOnScroll>

              <div className="grid gap-5">
                {projects.slice(1).map((item, index) => (
                  <RevealOnScroll key={item.title} delay={index * 0.08} direction="left">
                    <article className="group overflow-hidden rounded-sm border border-[#dbe4ef] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                      <div className="relative overflow-hidden">
                        <img src={bgImg} alt={item.title} className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="absolute left-4 top-4 rounded-sm bg-[#b91c2a] px-3 py-1 text-xs font-bold tracking-[0.14em] text-white">
                          {item.date}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-bold uppercase tracking-[0.08em] text-[#1a2c4e]">{item.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{item.summary}</p>
                      </div>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#102845] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,0.14),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(224,41,46,0.35),transparent_42%)]" />
          <div className="container-x relative">
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/70">Client Testimony</p>
                <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] text-white">Confidence That Comes From Consistent Delivery</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-white/75">
                  Feedback from project partners and recurring maintenance clients who rely on Subgeo teams.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
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
                  <article className="rounded-sm border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
                    <p className="text-[15px] leading-relaxed text-white/90">"{item.quote}"</p>
                    <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.author}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-white/70">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="section-slab section-rule py-20">
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <RevealOnScroll direction="right">
              <div className="rounded-sm border border-[#dbe4ef] bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                <p className="eyebrow">Contact & Location</p>
                <h2 className="mt-3 font-display text-[clamp(26px,3vw,36px)] text-[#1a2c4e]">Plan Your Next Project With Our Team</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-600">
                  Reach out for a site survey, emergency support, or a preventive maintenance plan tailored to your operation.
                </p>

                <div className="mt-8 space-y-4 text-[14px] text-gray-700">
                  <p className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2c4e] text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    0733 699 441
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2c4e] text-white">
                      <Mail className="h-4 w-4" />
                    </span>
                    info@subgeo.co.ke
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2c4e] text-white">
                      <MapPin className="h-4 w-4" />
                    </span>
                    P.O. Box 48230-00100, Nairobi, Kenya
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#b91c2a] px-7 py-3 text-xs font-bold tracking-[0.2em] text-white transition-colors hover:bg-[#8f1520]"
                >
                  CONTACT US
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
              <div className="overflow-hidden rounded-sm border border-[#dbe4ef] bg-white p-2 shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                <iframe
                  title="Subgeo location map"
                  src="https://www.google.com/maps?q=Nairobi%20Kenya&output=embed"
                  width="100%"
                  height="100%"
                  className="h-[360px] w-full rounded-sm"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="grid gap-3 border-t border-[#e2e8f0] p-4 text-[12px] text-gray-600 sm:grid-cols-3">
                  <p className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#b91c2a]" />
                    Mon - Fri: 7:30 AM - 5:30 PM
                  </p>
                  <p className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-[#b91c2a]" />
                    Preventive maintenance plans
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#b91c2a]" />
                    Safety-compliant execution
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="container-x">
            <RevealOnScroll direction="up">
              <div className="rounded-sm border border-[#f5a2a2] bg-[linear-gradient(120deg,#fff7f7_0%,#ffe8e8_55%,#ffd7d7_100%)] p-8 text-center shadow-[0_16px_34px_rgba(185,28,40,0.16)] md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b91c2a]">Need Immediate Assistance?</p>
                <h3 className="mt-3 font-display text-[clamp(26px,3.2vw,38px)] text-[#7f1d1d]">Book A Technical Assessment Today</h3>
                <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-[#7f1d1d]/85">
                  Let our engineers assess your current plumbing systems and provide a practical, cost-aware improvement plan.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#b91c2a] px-7 py-3 text-xs font-bold tracking-[0.2em] text-white transition-colors hover:bg-[#8f1520]"
                  >
                    SCHEDULE VISIT
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="inline-flex items-center gap-2 border border-[#b91c2a] px-7 py-3 text-xs font-bold tracking-[0.2em] text-[#b91c2a] transition-colors hover:bg-[#fff1f1]"
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
    </>
  );
}
