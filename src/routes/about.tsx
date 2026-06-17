import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Globe, Clock, Briefcase, CheckCircle2, Plane, Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about.png";
import serviceImg from "@/assets/service.jpeg";
import communityImg from "@/assets/community.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us" }
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] font-sans text-gray-700">
      <Navbar />

      {/* Hero Header */}
      <section className="relative mt-[112px] h-[300px] md:h-[360px] lg:h-[420px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImg}
            alt="Hero Background"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112a38] from-15% via-[#112a38]/80 via-40% to-transparent to-70%"></div>
        </div>
        <div className="container-x relative z-10 text-white w-full">
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>About Us</h1>
          <div className="flex items-center text-xs md:text-sm font-medium space-x-2 text-gray-200" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Plane className="w-3.5 h-3.5 text-[#ef6a42] transform rotate-45" fill="currentColor" strokeWidth={0} />
            <span className="text-white">About us</span>
          </div>
        </div>
      </section>

      {/* Story / Intro Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-[#f6f8fb]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left Content */}
            <Reveal className="space-y-6 lg:pr-10">
              <h2 className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.04] mb-6" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                <span className="text-[#ef6a42] block">Providing comprehensive</span>
                <span className="text-[#1d3b4a] block">industry solutions</span>
              </h2>
              <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                Subgeo Holding Company Ltd. is a premier provider of integrated services across multiple sectors. Our expertise spans industrial supplies, healthcare, and beauty solutions.
              </p>
              <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium mb-6">
                We are dedicated to elevating standards through innovation, reliability, and an unwavering commitment to customer satisfaction across every business division we operate.
              </p>
              
              <div className="flex items-center gap-8 pt-4">
                <Button className="bg-[#ef6a42] hover:bg-[#d95d3a] text-white px-8 py-3.5 rounded-none text-[13px] uppercase tracking-widest font-bold transition-all shadow-none">
                  Discover More
                </Button>
                <div className="flex items-center gap-3">
                  <div className="text-[#41949e]">
                    <PhoneCall className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 font-bold mb-0.5">Call Us Now</div>
                    <div className="text-base font-bold text-[#ef6a42]">003 707 0242</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Images */}
            <Reveal delay={0.2} className="relative h-[350px] sm:h-[400px] lg:h-[450px] w-full max-w-[500px] ml-auto">
              {/* Top Left Image */}
              <div className="absolute top-0 left-0 w-[78%] h-[68%] shadow-lg z-10">
                <img src={communityImg} alt="Subgeo community" className="w-full h-full object-cover" />
              </div>
              
              {/* Bottom Right Image */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] shadow-2xl border-[10px] border-white z-20 bg-white">
                <img src={serviceImg} alt="Subgeo services" className="w-full h-full object-cover" />
              </div>
              
              {/* Dot Pattern (Behind Bottom Left) */}
              <div className="absolute top-[50%] left-[-20px] w-32 h-32 grid grid-cols-6 gap-2 z-0 opacity-30">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                ))}
              </div>

              {/* Experience Badge */}
              <div className="absolute top-[65%] left-[55%] -translate-y-1/2 -translate-x-1/2 z-30 bg-white px-7 py-5 shadow-2xl flex flex-col items-center justify-center text-center whitespace-nowrap min-w-[140px]">
                <div className="text-[#ef6a42] font-bold text-[36px] leading-none mb-1">20+</div>
                <div className="text-[10px] font-bold text-[#1d3b4a] uppercase tracking-wide">
                  Years Of Experience
                </div>
              </div>
            </Reveal>
          </div>

          {/* Features Row */}
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 pt-32 pb-8">
            {[
              {
                icon: Globe,
                title: "Experience And Expertise",
                desc: "Decades of combined experience delivering exceptional value and innovative solutions across diverse market sectors."
              },
              {
                icon: Clock,
                title: "Reliability And Timeliness",
                desc: "We prioritize meeting deadlines and ensuring our services and products are always available when you need them most."
              },
              {
                icon: Briefcase,
                title: "Comprehensive Services",
                desc: "From industrial equipment to premium wellness products, we offer a diverse portfolio to meet your unique needs."
              }
            ].map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-orange-200 bg-white flex items-center justify-center text-[#ef6a42] mb-6 shadow-sm">
                   <feature.icon strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <h3 className="text-[#1d3b4a] font-bold text-[16px] xl:text-[18px] leading-tight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{feature.title}</h3>
                <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Competence Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="h-[380px] lg:h-[440px] w-full shadow-lg">
            <img src={communityImg} alt="Industry competence" className="w-full h-full object-cover" />
          </Reveal>
          
          <Reveal delay={0.2} className="space-y-6 lg:pl-10">
            <h2 className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.04] mb-6" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              <span className="text-[#1d3b4a] block">Our industry-explicit</span>
              <span className="text-[#ef6a42] block">competence</span>
            </h2>
            <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium mb-8">
              Through strategic investments and an unwavering focus on operational excellence, Subgeo has cultivated specific industry competencies that guarantee results. 
              We build long-lasting partnerships based on trust, quality assurance, and superior service delivery.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-6 mb-10">
              {[
                "Industrial Supply Chain",
                "Pharmacy Dispensary",
                "Beauty & Cosmetics",
                "Healthcare Solutions",
                "Sector Integration",
                "24/7 Client Support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ef6a42] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-[12px] lg:text-[14px] text-[#4a5568] font-bold">{item}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-[#ef6a42] hover:bg-[#d95d3a] text-white px-8 py-3.5 rounded-none text-[13px] uppercase tracking-widest font-bold transition-all shadow-none mt-4">
              Get Help Now !
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <Reveal className="text-center mb-14">
            <h2 className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.04]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              <span className="text-[#1d3b4a]">Our Mission, Vision</span>
              <span className="text-[#ef6a42] block">Values & Motto</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Target,
                label: "Our Mission",
                desc: "To provide comprehensive industry solutions with innovation, reliability, and an unwavering commitment to customer satisfaction across every business division we operate.",
                color: "#ef6a42"
              },
              {
                icon: Eye,
                label: "Our Vision",
                desc: "To be the premier provider of integrated services across multiple sectors in Kenya and beyond, setting the benchmark for quality and excellence.",
                color: "#41949e"
              },
              {
                icon: Heart,
                label: "Our Values & Motto",
                desc: "Excellence, Integrity, and Innovation in everything we do. We build lasting partnerships based on trust, quality assurance, and superior service delivery.",
                color: "#1d3b4a"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-orange-200 bg-white flex items-center justify-center text-[#ef6a42] mb-6 shadow-sm">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#1d3b4a] font-bold text-[16px] xl:text-[18px] leading-tight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{item.label}</h3>
              <p className="mt-5 text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}


