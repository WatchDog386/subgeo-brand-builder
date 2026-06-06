import os

file_path = "src/routes/beauty.tsx"

new_content = """import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Play, Star, Sparkles } from "lucide-react";
import { branches } from "@/lib/branches";
import beautyImg from "@/assets/salon.jpeg";

export const Route = createFileRoute("/beauty")({
  head: () => ({
    meta: [
      { title: "Subgeo Beauty Salon — Elevated self-care, every visit." },
      {
        name: "description",
        content:
          "A refined beauty studio offering facials, skincare, brows, lashes and hand & foot care — in a serene environment designed around comfort and discretion.",
      },
      { property: "og:title", content: "Subgeo Beauty Salon — Subgeo" },
      {
        property: "og:description",
        content: "Elevated self-care, every visit.",
      },
      { property: "og:image", content: beautyImg },
    ],
  }),
  component: BeautyPage,
});

function BeautyPage() {
  const branch = {
    slug: "beauty",
    name: "Subgeo Beauty Salon",
    tagline: "Elevated self-care, every visit.",
    category: "Beauty",
    description:
      "A refined beauty studio offering facials, skincare, brows, lashes and hand & foot care — in a serene environment designed around comfort and discretion.",
    image: beautyImg,
    highlights: [
      { title: "Expert Professionals", body: "Our highly trained and certified beauty experts are dedicated to providing the best care." },
      { title: "Personalized Care", body: "Every service is tailored to your unique skin needs, so you get results that truly suit you." },
      { title: "Advanced Technology", body: "We use state-of-the-art equipment and techniques to ensure effective and safe treatments." },
      { title: "Relaxing Atmosphere", body: "Relax in our soothing clinic environment, where each visit feels like a getaway." },
    ],
    services: [
      { 
        name: "Facial Treatments", 
        img: "https://images.unsplash.com/photo-1512496015851-a1abfb3b26b3?auto=format&fit=crop&q=80" 
      },
      { 
        name: "Laser Hair Removal", 
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" 
      },
      { 
        name: "Body Contouring", 
        img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
      },
    ],
    hours: "Tue–Sun · 9:00 – 20:00",
    phone: "+254 700 000 007",
  };

  const others = branches.filter((b) => b.slug !== branch.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      {/* 1. HERO SECTION (Dark theme like vegan cosmetics layout) */}
      <section className="relative bg-[#383733] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Subtle background abstract shapes */}
        <div className="absolute top-0 right-10 w-96 h-96 border border-white/5 rounded-full rounded-tr-none rotate-45 transform pointer-events-none"></div>
        <div className="absolute -bottom-20 left-20 w-[30rem] h-[30rem] border border-white/5 rounded-full transform pointer-events-none"></div>
        
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="max-w-xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#383733] text-xs font-bold uppercase tracking-wider mb-8 shadow-md">
                  Free consultation available <Sparkles className="w-3.5 h-3.5 text-[#ff2e93]" />
                </div>
                
                <h1 className="font-display text-[2.75rem] md:text-[4rem] leading-[1.05] tracking-tight mb-6">
                  Elevated Beauty &<br />Skincare Therapy
                </h1>
                
                <p className="text-[#a09e97] text-lg leading-relaxed mb-10 max-w-md font-light">
                  Made using clean, premium ingredients, our customized treatments are designed to bring out your natural glow for everyone.
                </p>
                
                <div className="flex flex-wrap items-center gap-6">
                  <Button className="bg-white hover:bg-gray-100 text-[#383733] rounded-sm px-8 py-6 text-sm font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5">
                    Book Now
                  </Button>
                  
                  <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                    <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">How It Works</span>
                  </div>
                </div>
                
                {/* Minimal carousel indicators */}
                <div className="flex items-center gap-4 mt-20">
                  <span className="text-xs text-white/50 tracking-widest uppercase">Prev</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                  <span className="text-xs text-white/50 tracking-widest uppercase">Next</span>
                </div>
              </Reveal>
            </div>

            {/* Hero Right Images & Cards */}
            <div className="relative h-[500px] md:h-[600px] flex items-center justify-center lg:justify-end">
              <Reveal delay={0.2} className="relative w-full max-w-[400px] h-full flex items-center">
                {/* Main Product/Service Image */}
                <div className="w-[85%] h-[80%] absolute left-0 bottom-10 z-10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop" 
                    alt="Premium Skincare" 
                    className="w-full h-full object-cover rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Decorative packaging box shadow behind */}
                  <div className="absolute -left-8 -top-8 w-full h-full bg-[#4e4b44] -z-10 rounded-sm shadow-lg"></div>
                </div>

                {/* Floating Detail Card */}
                <div className="absolute right-0 top-1/4 z-20 bg-[#282724] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-sm w-[220px]">
                  <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">Signature Treatment</div>
                  <div className="text-white text-2xl font-display font-medium mb-3">$100.45</div>
                  <div className="flex items-center gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#d5fb46] text-[#d5fb46]" />)}
                  </div>
                  <div className="flex items-center justify-between border border-white/20 rounded-full px-4 py-2">
                    <span className="text-white/60 hover:text-white cursor-pointer text-lg leading-none">-</span>
                    <span className="text-white text-sm font-medium">1 Session</span>
                    <span className="text-white/60 hover:text-white cursor-pointer text-lg leading-none">+</span>
                  </div>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. ABOUT CLINIC (Image 1 replica) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <Reveal className="relative mx-auto lg:mx-0 w-full max-w-[500px] h-[550px]">
               {/* Pink offset block */}
               <div className="absolute top-6 -right-6 w-full h-full bg-[#ff1e85] rounded-xl -z-10 shadow-lg"></div>
               {/* Tiny pink radiant marks */}
               <div className="absolute -top-4 right-10 text-[#ff1e85]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="0" x2="12" y2="6" />
                    <line x1="20.49" y1="3.51" x2="16.24" y2="7.76" />
                  </svg>
               </div>
               {/* Image clipped */}
               <img 
                 src="https://images.unsplash.com/photo-1611002214172-132d433bffd7?auto=format&fit=crop&q=80" 
                 alt="Beauty Treatment"
                 className="w-full h-full object-cover rounded-xl shadow-xl transform -rotate-2"
               />
            </Reveal>

            {/* Right Text */}
            <Reveal delay={0.2} className="max-w-lg lg:pl-10">
              <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-[#ff1e85] mb-4">
                — About Our Clinic —
              </div>
              <h2 className="font-display font-medium text-[32px] md:text-[40px] leading-[1.2] text-[#222] mb-6">
                Welcome to Subgeo Beauty - Your Beauty Destination
              </h2>
              <p className="text-[15px] leading-[1.7] text-gray-500 mb-8 font-light">
                At Subgeo Beauty, we specialize in personalized beauty treatments designed to bring out your natural glow. With a team of certified professionals, we offer a range of cutting-edge therapies to meet your skincare needs. Our commitment to excellence ensures that every treatment leaves you feeling rejuvenated and confident.
              </p>
              
              <div className="w-full h-px bg-gray-200 mb-8 relative">
                <div className="absolute -left-1 -top-1 w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>

              <div className="flex gap-8 mb-10 items-center">
                <div>
                  <span className="text-3xl font-display font-medium text-[#222] mr-2">1.4K</span>
                  <span className="text-xs text-gray-500 font-medium">Happy Patients</span>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div>
                  <span className="text-3xl font-display font-medium text-[#222] mr-2">10+</span>
                  <span className="text-xs text-gray-500 font-medium">Years of Experience</span>
                </div>
              </div>

              <Button className="bg-[#ff1e85] hover:bg-[#e01673] text-white rounded-full px-8 py-6 text-sm font-medium shadow-[0_8px_20px_rgba(255,30,133,0.3)] transition-transform hover:-translate-y-0.5">
                Learn More
              </Button>
            </Reveal>
            
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID (Image 2 replica) */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container-x">
          
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-medium text-[36px] md:text-[44px] text-[#222] mb-4">
              Our Beauty Treatments
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed font-light">
              Explore a wide array of specialized skincare and beauty treatments tailored to your unique skin type and goals.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="relative">
            {/* Arrows */}
            <div className="hidden md:flex absolute top-1/2 -left-16 -right-16 justify-between -translate-y-1/2 pointer-events-none">
              <button className="w-10 h-10 rounded-full bg-[#f3dae6] text-white flex items-center justify-center pointer-events-auto hover:bg-[#ebc4d7] transition-colors">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#ff1e85] text-white flex items-center justify-center pointer-events-auto shadow-md hover:bg-[#e01673] transition-colors shadow-[0_4px_12px_rgba(255,30,133,0.3)]">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {branch.services.map((svc, idx) => (
                <div key={idx} className="flex flex-col group h-full">
                  <div className="w-full h-56 xl:h-64 rounded-t-3xl overflow-hidden relative">
                    <img 
                      src={svc.img} 
                      alt={svc.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="bg-[#fcf2f8] rounded-b-3xl pt-8 pb-10 px-6 flex flex-col items-center text-center flex-grow transition-colors group-hover:bg-[#faeaf3]">
                    <h3 className="font-display font-medium text-[22px] text-[#222] mb-6">
                      {svc.name}
                    </h3>
                    <Button className="mt-auto bg-[#ff1e85] hover:bg-[#e01673] text-white rounded-full px-7 py-5 h-auto text-[13px] font-medium transition-transform hover:-translate-y-0.5 shadow-sm group-hover:shadow-[0_4px_12px_rgba(255,30,133,0.3)] w-[180px] justify-between">
                      <span>View Treatment</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Image 3 replica) */}
      <section className="py-24 bg-[#fff0f7]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
            
            {/* Left Content */}
            <Reveal className="max-w-lg">
              <h2 className="font-display font-medium text-[36px] md:text-[44px] text-[#222] mb-4">
                Why Choose Us?
              </h2>
              <p className="text-[15px] text-gray-600 mb-8 font-light leading-relaxed">
                At Subgeo Beauty, we are committed to delivering top-quality treatments with measurable results. Here's why clients trust us with their beauty and skincare needs
              </p>
              
              <div className="w-full h-[2px] bg-[#fbcbe2] relative mb-10">
                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-[#fbcbe2] rounded-full"></div>
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 bg-[#fbcbe2] rounded-full"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10 mb-10">
                {branch.highlights.map((feature, idx) => (
                  <div key={idx}>
                    <h4 className="font-display font-semibold text-[17px] text-[#222] mb-2">{feature.title}</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-light pr-4">{feature.body}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-[#ff1e85] hover:bg-[#e01673] text-white rounded-full px-8 py-6 text-sm font-medium shadow-[0_8px_20px_rgba(255,30,133,0.3)] transition-transform hover:-translate-y-0.5">
                Book An Appointment
              </Button>
            </Reveal>

            {/* Right Masonry Images */}
            <Reveal delay={0.2} className="relative mt-8 lg:mt-0">
              {/* Pink corner accents */}
              <div className="absolute -top-8 -left-4 text-[#ff1e85] hidden sm:block z-20">
                <svg width="40" height="40" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="5" y1="35" x2="15" y2="15" />
                  <line x1="20" y1="35" x2="30" y2="5" />
                  <line x1="35" y1="35" x2="35" y2="20" />
                </svg>
              </div>

              <div className="absolute -bottom-8 -right-4 text-[#ff1e85] z-20 outline-none">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                </svg>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10 w-full pl-0 sm:pl-6"> 
                {/* Top Row Images */}
                <div className="aspect-[4/5] sm:aspect-[3/4] relative">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Consultation" className="w-full h-full object-cover rounded-2xl md:rounded-[2rem]" />
                </div>
                <div className="aspect-[4/5] sm:aspect-[3/4] relative">
                  <img src="https://images.unsplash.com/photo-1504280735467-f32f38cc1377?auto=format&fit=crop&q=80" alt="Care" className="w-full h-full object-cover rounded-2xl md:rounded-[2rem]" />
                </div>
                {/* Bottom Row Wide Image */}
                <div className="col-span-2 aspect-[2/1] relative">
                  <img src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c5?auto=format&fit=crop&q=80" alt="Treatment" className="w-full h-full object-cover rounded-2xl md:rounded-[2rem] object-top" />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 5. OTHER BRANCHES */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display font-medium text-[32px] md:text-[40px] text-[#222]">Other Subgeo branches</h2>
            <Link to="/branches" className="text-[14px] text-[#ff1e85] hover:text-[#e01673] font-medium link-underline mb-2">
              View all
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {others.map((b) => (
              <Link
                key={b.slug}
                to={`/${b.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3 px-1">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-[#ff1e85] font-bold">
                      {b.category}
                    </div>
                    <h3 className="mt-2 font-display text-[22px] font-medium text-[#222] group-hover:text-[#ff1e85] transition-colors">
                      {b.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-[#ff1e85] transition-colors shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
