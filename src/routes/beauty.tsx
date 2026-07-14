import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Play, Star, Sparkles, Clock, Phone, Check, Target, Eye, Heart } from "lucide-react";
import { branches } from "@/lib/branches";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import beautyImg from "@/assets/salon.jpeg";
import salon2 from "@/assets/salon2.jpeg";
import salon3 from "@/assets/salon3.jpeg";
import salon4 from "@/assets/salon4.jpeg";
import salon5 from "@/assets/salon5.jpeg";
import salon6 from "@/assets/salon6.jpeg";
import salon7 from "@/assets/salon7.jpeg";
import salon8 from "@/assets/salon8.jpeg";
import salon9 from "@/assets/salon9.jpeg";
import victor from "@/assets/victor.jpeg";
import florence from "@/assets/florence.jpeg";

export const Route = createFileRoute("/beauty")({
  head: () => ({
    meta: [
      { title: "Subgeo Unisex Barber & Salon — Expert grooms & styles for everyone." },
      {
        name: "description",
        content:
          "A premium unisex destination offering expert barbering, men's grooming, women's hairstyling, coloring, and essential beauty services under one roof.",
      },
      { property: "og:title", content: "Subgeo Unisex Barber & Salon" },
      {
        property: "og:description",
        content: "Expert grooms & styles for everyone.",
      },
      { property: "og:image", content: beautyImg },
    ],
  }),
  component: BeautyPage,
});

function BeautyPage() {
  const [mvApi, setMvApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!mvApi) return;
    const timer = setInterval(() => {
      mvApi.scrollNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [mvApi]);

  const branch = {
    slug: "beauty",
    name: "Subgeo Unisex Barber & Salon",
    tagline: "Expert grooms & styles for everyone.",
    category: "Salon & Barber",
    description:
      "A premium unisex destination offering expert barbering, men's grooming, women's hairstyling, coloring, and essential beauty services under one roof.",
    image: beautyImg,
    highlights: [
      { title: "Master Barbers & Stylists", body: "Our expertly trained professionals cater to all hair types, offering both precision fades and intricate styling." },
      { title: "Comprehensive Services", body: "From hot-towel shaves to balayage, manicures, and facials, we provide full-body care for both men and women." },
      { title: "Premium Products", body: "We exclusively use top-tier styling and grooming products to ensure lasting, healthy results." },
      { title: "Relaxing Vibe", body: "Unwind in our modern, welcoming environment where your comfort is always our top priority." },
    ],
    services: [
      { 
        name: "Haircuts & Styling", 
        img: "https://images.unsplash.com/photo-1512496015851-a1abfb3b26b3?auto=format&fit=crop&q=80" 
      },
      { 
        name: "Beard Grroming", 
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" 
      },
      { 
        name: "Manicure & Pedicure", 
        img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
      },
    ],
    hours: "Mon–Sun · 8:00 – 21:00",
    phone: "+254 700 000 007",
  };

  const others = branches.filter((b) => b.slug !== branch.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      {/* 1. HERO SECTION (Light Theme Hairdressing Replica) */}
      <section className="relative w-full bg-white flex flex-col pt-[80px] md:pt-[72px]">
        {/* Top Hero Splash */}
        <div className="relative w-full h-[400px] lg:h-[500px] flex items-center bg-gray-50 border-b border-gray-100 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 flex items-end">
             <img 
               src={beautyImg} 
               alt="Subgeo Unisex Barber & Salon" 
               className="w-full h-[120%] object-cover object-[right_top] translate-y-[15%]"
             />
             {/* Gradient overlay to make text readable on the left */}
             <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent"></div>
          </div>
          
          {/* Hero Content */}
          <div className="container-x relative z-10 w-full pt-10">
            <Reveal className="max-w-xl">
              <h1 className="font-display font-medium text-[40px] md:text-[52px] leading-[1.15] tracking-tight mb-4">
                <span className="text-[#4986c7] block">Define Your Look</span>
                <span className="text-[#df488b] block">With Our Experts</span>
              </h1>
              <p className="text-[18px] md:text-[20px] text-[#333] font-medium mb-10">
                Premium grooming & beauty for everyone
              </p>
              <Button className="bg-[#df488b] hover:bg-[#c93175] text-white rounded-sm px-10 py-6 text-[15px] font-medium transition-colors shadow-md">
                Book Visit
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Feature Blocks Bottom Rack */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 z-20 relative">
          
          {/* Block 1 */}
          <div className="bg-[#f06292] p-10 md:p-12 flex flex-col items-center justify-center text-center text-white relative group overflow-hidden border-r border-[#ec407a]/30">
            {/* Watermark flower (approximate with an svg or just shape) */}
            <div className="absolute -bottom-16 -left-16 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <svg width="250" height="250" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 10 7 12 12C14 7 12 2 12 2ZM12 22C12 22 14 17 12 12C10 17 12 22 12 22ZM2 12C2 12 7 14 12 12C7 10 2 12 2 12ZM22 12C22 12 17 10 12 12C17 14 22 12 22 12Z" />
                <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>
            
            <div className="mb-4 relative z-10">
               {/* Scissors icon representation */}
               <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform">
                 <circle cx="6" cy="6" r="3"></circle>
                 <circle cx="6" cy="18" r="3"></circle>
                 <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                 <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                 <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
               </svg>
            </div>
            <h3 className="font-display font-medium uppercase text-[16px] tracking-widest mb-4 relative z-10">Cuts & Fades</h3>
            <p className="text-[13px] font-normal leading-[1.8] opacity-90 mb-6 max-w-[280px] relative z-10">
              From classic gentleman styles and sharp fades to modern women's cuts, our team ensures precision in every detail.
            </p>
            <a href="#" className="uppercase text-[12px] font-bold tracking-widest border-b-[2px] border-white/50 hover:border-white pb-0.5 transition-colors relative z-10">
              View Services
            </a>
          </div>

          {/* Block 2 */}
          <div className="bg-[#df488b] p-10 md:p-12 flex flex-col items-center justify-center text-center text-white relative group border-r border-[#be3572]/30">
            <div className="mb-4 relative z-10">
               {/* Mirror/Treatment Station Icon representation */}
               <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform">
                 <circle cx="12" cy="8" r="6"></circle>
                 <line x1="12" y1="14" x2="12" y2="20"></line>
                 <line x1="8" y1="20" x2="16" y2="20"></line>
                 <circle cx="12" cy="8" r="2" fill="currentColor"></circle>
               </svg>
            </div>
            <h3 className="font-display font-medium uppercase text-[16px] tracking-widest mb-4 relative z-10">Hair & Scalp Treatments</h3>
            <p className="text-[13px] font-normal leading-[1.8] opacity-90 mb-6 max-w-[280px] relative z-10">
              Revitalize your hair with our deep nourishing masks, moisture therapies, and premium hot-towel grooming and facials.
            </p>
            <a href="#" className="uppercase text-[12px] font-bold tracking-widest border-b-[2px] border-white/50 hover:border-white pb-0.5 transition-colors relative z-10">
              View Services
            </a>
          </div>

          {/* Block 3 */}
          <div className="bg-[#f06292] p-10 md:p-12 flex flex-col items-center justify-center text-center text-white relative group">
            <div className="mb-4 relative z-10">
               {/* Color Palette Icon representation */}
               <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                 <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                 <circle cx="16" cy="8" r="2" fill="currentColor"></circle>
                 <circle cx="8" cy="16" r="2" fill="currentColor"></circle>
                 <circle cx="16" cy="16" r="2" fill="currentColor"></circle>
                 <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
               </svg>
            </div>
            <h3 className="font-display font-medium uppercase text-[16px] tracking-widest mb-4 relative z-10">Color & Highlights</h3>
            <p className="text-[13px] font-normal leading-[1.8] opacity-90 mb-6 max-w-[280px] relative z-10">
              Transform your look with expert coloring techniques, whether you need a quick root touch-up or a fully vibrant new balayage.
            </p>
            <a href="#" className="uppercase text-[12px] font-bold tracking-widest border-b-[2px] border-white/50 hover:border-white pb-0.5 transition-colors relative z-10">
              View Services
            </a>
          </div>

        </div>
      </section>

      {/* 2. OUR COURSES (Replica of Screenshot 6) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-x">
          
          <Reveal className="text-center mb-16">
            <h2 className="text-[#df488b] text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest mb-3">
              Signature Services
            </h2>
            <p className="text-[#4986c7] text-[13px] md:text-[14px] max-w-2xl mx-auto">
              Discover our range of professional barbering and salon services, delivered by industry experts to elevate your personal aesthetic.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              
              {/* Course 1 */}
              <div className="flex flex-col group shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-full h-[120px] md:h-[300px] overflow-hidden">
                   <img 
                     src={salon3}
                     alt="Hairdressing Setup" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                </div>
                <div className="bg-[#f5f5f5] p-3 md:p-8 md:pb-10 flex flex-col items-center text-center">
                   <h3 className="text-[#333] text-[10px] md:text-[12px] font-bold uppercase tracking-wider mb-1 md:mb-3">
                     Executive Barbering & Grooming
                   </h3>
                   <div className="text-[#df488b] text-[10px] md:text-[14px] leading-relaxed mb-2 md:mb-6 px-1 md:px-4">
                     Expert fades, classic gentleman cuts, hot-towel shaves, and precise beard line-ups for a sharp, refined look.
                   </div>
                   <Button className="bg-[#6196d2] hover:bg-[#4a7eb5] text-white rounded-none px-3 md:px-8 py-1.5 md:py-5 text-[9px] md:text-[11px] font-bold uppercase tracking-widest transition-colors w-auto md:w-[150px]">
                     Book Service
                   </Button>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col group shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-full h-[120px] md:h-[300px] overflow-hidden">
                   <img 
                     src={salon4}
                     alt="Hair Salon Working" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                </div>
                <div className="bg-[#f5f5f5] p-3 md:p-8 md:pb-10 flex flex-col items-center text-center">
                   <h3 className="text-[#333] text-[10px] md:text-[12px] font-bold uppercase tracking-wider mb-1 md:mb-3">
                     Advanced Hair Styling & Care
                   </h3>
                   <div className="text-[#df488b] text-[10px] md:text-[14px] leading-relaxed mb-2 md:mb-6 px-1 md:px-4">
                     Bespoke coloring, silk presses, protective braiding, balayage, and deep conditioning treatments for healthy, flawless hair.
                   </div>
                   <Button className="bg-[#6196d2] hover:bg-[#4a7eb5] text-white rounded-none px-3 md:px-8 py-1.5 md:py-5 text-[9px] md:text-[11px] font-bold uppercase tracking-widest transition-colors w-auto md:w-[150px]">
                     Book Service
                   </Button>
                </div>
              </div>

            </div>
          </Reveal>
          
        </div>
      </section>

      {/* 4. FEEL BEAUTIFUL (Discount Cards Replica) */}
      <section className="py-20 bg-white">
        <div className="container-x w-full max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left Card - Light Theme */}
            <div className="bg-[#f5f5f5] rounded-[12px] overflow-hidden relative h-[280px] flex items-center border border-gray-100">
              <div className="p-8 w-[60%] relative z-10 font-sans flex flex-col items-start justify-center h-full">
                <div className="inline-block bg-[#ffc72c] text-[#222] text-[11px] font-bold px-3.5 py-1.5 rounded-[6px] mb-4">
                  Flat 20% Discount
                </div>
                <h3 className="text-[#222] font-bold text-[24px] xl:text-[28px] leading-[1.1] mb-3">
                  Elevated Aesthetics,<br />Every Day
                </h3>
                <p className="text-[#999] text-[12px] leading-[1.6] mb-6 font-medium">
                  Premium haircare and spa treatments<br />designed for your well-being.
                </p>
                <Button className="bg-[#00875a] hover:bg-[#006a47] text-white rounded-full px-5 h-9 text-[13px] font-medium transition-colors shadow-sm">
                   Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80" 
                  alt="Beauty Products" 
                  className="w-full h-[110%] object-cover object-left mix-blend-multiply relative top-1/2 -translate-y-1/2"
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
              </div>
            </div>

            {/* Right Card - Yellow Theme */}
            <div className="bg-[#ffbd00] rounded-[12px] overflow-hidden relative h-[280px] flex items-center">
              <div className="p-8 w-[60%] relative z-10 font-sans flex flex-col items-start justify-center h-full">
                <div className="inline-block bg-[#ffe16b] text-[#444] text-[11px] font-bold px-3.5 py-1.5 rounded-[6px] mb-4">
                  Flat 25% Discount
                </div>
                <h3 className="text-[#222] font-bold text-[24px] xl:text-[28px] leading-[1.1] mb-3">
                  Sharp Fades,<br />Sharp Looks
                </h3>
                <p className="text-[#b57a00] text-[12px] leading-[1.6] mb-6 font-medium">
                  Experience precision barber cuts<br />with our seasoned professionals.
                </p>
                <Button className="bg-[#00875a] hover:bg-[#006a47] text-white rounded-full px-5 h-9 text-[13px] font-medium transition-colors shadow-sm">
                   Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-[50%] h-full">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWv_gQVTJ6YgJKdoJmFL5-m_O3_RUna5Tcg&s" 
                  alt="Beauty Setup" 
                  className="w-full h-full object-cover object-left mix-blend-multiply"
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* 5. WHY CHOOSE US (E-commerce Style Features & Banners Replica) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-x w-full max-w-6xl mx-auto">
          
          {/* Top Features Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-100">
            {/* 1 */}
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="16" height="12" rx="1"></rect>
                    <path d="M18 8h3l2 3v5h-5"></path>
                    <circle cx="6" cy="19" r="2"></circle>
                    <circle cx="17" cy="19" r="2"></circle>
                 </svg>
              </div>
              <div className="flex flex-col">
                 <h4 className="font-bold text-[14px] text-[#222]">Easy Booking</h4>
                 <p className="text-[#777] text-[11px]">Book your appointment fast</p>
              </div>
            </div>
            
            {/* 2 */}
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4"></path>
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                 </svg>
              </div>
              <div className="flex flex-col">
                 <h4 className="font-bold text-[14px] text-[#222]">Flexibility</h4>
                 <p className="text-[#777] text-[11px]">We accommodate busy schedules</p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8M10 10h4M10 14h4"></path>
                 </svg>
              </div>
              <div className="flex flex-col">
                 <h4 className="font-bold text-[14px] text-[#222]">Quality Guaranteed</h4>
                 <p className="text-[#777] text-[11px]">Walk out looking your best</p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex items-center gap-4">
              <div className="text-[#2563eb] shrink-0">
                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
                    <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
                    <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
                 </svg>
              </div>
              <div className="flex flex-col">
                 <h4 className="font-bold text-[14px] text-[#222]">Consultations</h4>
                 <p className="text-[#777] text-[11px]">Personalized style advice</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:h-[420px]">
            
            {/* Left Card */}
            <div className="bg-[#f0f2f5] p-10 flex flex-col justify-center relative overflow-hidden rounded-[2px] h-[400px] md:h-full group">
              <div className="relative z-10 w-[60%] ml-auto text-right flex flex-col items-end">
                <span className="text-[#2563eb] text-[13px] font-semibold mb-2">Salon Specials</span>
                <h3 className="text-[#222] text-[28px] lg:text-[34px] font-black leading-tight mb-3">Women's Styling</h3>
                <p className="text-[#555] text-[13px] mb-8">Up to 30% Off</p>
                <Button className="bg-transparent border-[1.5px] border-[#222] text-[#222] hover:bg-[#222] hover:text-white rounded-full px-7 py-2 h-10 w-fit text-[13px] font-bold transition-colors">
                  Book Now
                </Button>
              </div>
              <div className="absolute left-[-5%] bottom-0 w-[70%] h-[95%] pointer-events-none">
                <img 
                  src={salon9}
                  alt="Women's Style"
                  className="w-full h-full object-cover object-bottom mix-blend-darken group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 h-full">
              
              {/* Top Row */}
              <div className="grid grid-cols-2 gap-6 h-[200px] md:h-[calc(50%-12px)]">
                
                {/* Handbag -> Hair Products */}
                <div className="bg-[#bdae9c] p-6 relative overflow-hidden rounded-[2px] flex flex-col justify-start group">
                  <div className="bg-[#2563eb] text-white text-[10px] font-bold px-2.5 py-1 rounded-[2px] w-fit mb-3 relative z-10 tracking-widest">
                    25% OFF
                  </div>
                  <h4 className="text-white text-[20px] font-bold mb-3 relative z-10">Care Kits</h4>
                  <a href="#" className="text-white text-[12px] font-bold flex items-center gap-1 hover:gap-2 transition-all relative z-10">
                    Get Details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </a>
                  <div className="absolute -right-4 bottom-[-10%] w-[80%] h-[90%] pointer-events-none">
                     <img src="https://pictures-kenya.jijistatic.com/78393373_MzAwLTMyMi0yNjYwZTY3ZjM5.webp" alt="Care Kits" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                {/* Watch -> Beard Oils */}
                <div className="bg-[#cfceca] p-6 relative overflow-hidden rounded-[2px] flex flex-col justify-start group">
                  <div className="bg-[#2563eb] text-white text-[10px] font-bold px-2.5 py-1 rounded-[2px] w-fit mb-3 relative z-10 tracking-widest">
                    15% OFF
                  </div>
                  <h4 className="text-[#222] text-[20px] font-bold mb-3 relative z-10">Beard Oils</h4>
                  <a href="#" className="text-[#222] text-[12px] font-bold flex items-center gap-1 hover:gap-2 transition-all relative z-10">
                    Get Details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </a>
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-[85%] h-[120%] pointer-events-none">
                     <img src="https://www.purpink.co.ke/cdn/shop/files/Beard_care_routine_in_warm_tones.png?v=1779350985" alt="Beard Oils" className="w-full h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

              </div>

              {/* Bottom Row */}
              <div className="bg-[#a38c78] p-8 relative overflow-hidden rounded-[2px] h-[200px] md:h-[calc(50%-12px)] flex flex-col justify-center group">
                <div className="relative z-10">
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1.5">Grooming Sets</p>
                  <h4 className="text-white text-[24px] lg:text-[28px] font-bold mb-2">Premium Kits</h4>
                  <p className="text-white/90 text-[11px] font-bold tracking-widest uppercase mb-4">BUNDLE & SAVE</p>
                  <a href="#" className="text-white text-[13px] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View Offers <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </a>
                </div>
                <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55%] h-[120%] pointer-events-none">
                   <img src="https://m.media-amazon.com/images/I/71WVhSbNgSL._AC_UF1000,1000_QL80_.jpg" alt="Premium Kits" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </section>

      {/* 6. PROMO BANNERS (Men's & Women's Fashion Replica) */}
      <section className="py-12 bg-white">
        <div className="container-x w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Men's Fashion Banner */}
            <div className="bg-[#e4e8eb] h-[220px] rounded-[2px] overflow-hidden relative flex items-center group">
              <div className="pl-10 relative z-10 w-[55%] font-sans">
                <p className="text-[#555] text-[11px] mb-1 font-medium">Gentleman's Special</p>
                <h3 className="text-[#222] font-black text-[24px] lg:text-[28px] leading-tight mb-1">Men's Grooming</h3>
                <p className="text-[#2563eb] text-[12px] font-semibold mb-6">Barbering & Beard Care</p>
                <a href="#" className="text-[#444] text-[11px] font-bold flex items-center hover:text-[#2563eb] transition-colors uppercase tracking-wider">
                  Book Slot <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
              <div className="absolute right-[-5%] bottom-0 top-0 w-[60%] pointer-events-none">
                <img 
                  src="https://d3sc42dkmius1e.cloudfront.net/media/1708524316differences_between_barber_mens_hairdressersquare.jpg" 
                  alt="Men's Fashion" 
                  className="w-full h-[115%] object-cover object-top mix-blend-darken group-hover:scale-105 transition-transform duration-700 relative top-2" 
                />
              </div>
            </div>

            {/* Women's Wear Banner */}
            <div className="bg-[#e5e1da] h-[220px] rounded-[2px] overflow-hidden relative flex items-center group">
              <div className="pl-10 relative z-10 w-[55%] font-sans">
                <p className="text-[#555] text-[11px] mb-1 font-medium">Beauty Treat</p>
                <h3 className="text-[#222] font-black text-[24px] lg:text-[28px] leading-tight mb-1">Women's Styling</h3>
                <p className="text-[#2563eb] text-[12px] font-semibold mb-6">Hair, Nails & Spa</p>
                <a href="#" className="text-[#444] text-[11px] font-bold flex items-center hover:text-[#2563eb] transition-colors uppercase tracking-wider">
                  Book Slot <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-[55%] pointer-events-none">
                <img 
                  src={salon5}
                  alt="Women's Wear" 
                  className="w-full h-full object-cover object-center mix-blend-darken group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x max-w-[1200px] mx-auto">

          <Reveal>
            {/* Mobile: Carousel */}
            <div className="block md:hidden mb-10">
              <Carousel setApi={setMvApi} opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center mx-2 h-full">
                      <div className="w-[72px] h-[72px] mx-auto mb-4 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" style={{ color: "#f0164c" }} className="w-full h-full">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="none"/>
                          <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="12" fill="none"/>
                          <circle cx="50" cy="50" r="6" fill="currentColor"/>
                        </svg>
                      </div>
                      <h2 className="text-[1rem] font-extrabold text-black mb-3 uppercase tracking-[0.5px]">
                        OUR <span className="text-[#f0164c]">MISSION</span>
                      </h2>
                      <p className="text-[#888888] text-[0.85rem] leading-relaxed font-normal">
                        To deliver high-standard plumbing, drainage, sanitary, and fire-fighting solutions with precision, safety, and reliability — exceeding expectations on every project.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center mx-2 h-full">
                      <div className="w-[72px] h-[72px] mx-auto mb-4 flex items-center justify-center">
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
                      <h2 className="text-[1rem] font-extrabold text-black mb-3 uppercase tracking-[0.5px]">
                        OUR <span className="text-[#1e92ec]">VISION</span>
                      </h2>
                      <p className="text-[#888888] text-[0.85rem] leading-relaxed font-normal">
                        To be Kenya's most trusted partner in plumbing and industrial works — known for quality workmanship, 24/7 readiness, and enduring client partnerships.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center mx-2 h-full">
                      <div className="w-[72px] h-[72px] mx-auto mb-4 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" style={{ color: "#00ce8d" }} className="w-full h-full">
                          <path d="M50 55 L 46 51 C 30 36, 25 28, 25 18 C 25 8, 33 0, 43 0 C 49 0, 50 4, 50 4 C 50 4, 51 0, 57 0 C 67 0, 75 8, 75 18 C 75 28, 70 36, 54 51 Z" fill="currentColor" transform="translate(0, 10)"/>
                          <path d="M 15 50 L 15 65 C 15 75, 25 80, 35 85 L 45 90 C 48 91, 52 91, 55 90 L 65 85 C 75 80, 85 75, 85 65 L 85 50 M 30 55 L 30 75 M 70 55 L 70 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M 15 60 C 25 60, 35 70, 40 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                          <path d="M 85 60 C 75 60, 65 70, 60 75" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h2 className="text-[1rem] font-extrabold text-black mb-3 uppercase tracking-[0.5px]">
                        OUR <span className="text-[#00ce8d]">VALUES</span>
                      </h2>
                      <p className="text-[#888888] text-[0.85rem] leading-relaxed font-normal">
                        &ldquo;Quality Service. 24/7 Readiness. Innovative Solutions.&rdquo; We serve with integrity, respond with urgency, and deliver excellence on every job &mdash; big or small.
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>

            {/* Desktop: Row layout */}
            <div className="hidden md:flex flex-row items-center justify-between mb-[60px]">

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
          </Reveal>

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

      {/* 7. NEWS & EVENTS (Screenshot 8 Replica) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-x">
          
          <Reveal className="text-center mb-16">
            <h2 className="text-[#333] text-[20px] md:text-[24px] font-display font-medium uppercase tracking-widest">
              Style Trends & Events
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-12 md:gap-y-12">
              
              {/* Event 1 */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start">
                <div className="w-full md:w-[220px] h-[80px] md:h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPejGHZ9V4Q-O_b5kl_UBvQxiIr8Jwyck8UA&s" alt="Community Involvement" className="w-full h-full object-contain bg-gray-50" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-[#df488b] text-[11px] md:text-[14px] font-medium mb-1 md:mb-3">Community Styling Days</h3>
                  <p className="text-[#666] text-[10px] md:text-[12px] leading-relaxed mb-2 md:mb-5">
                    Our team participates in local styling and grooming events, providing complimentary cuts and giving back to our vibrant community.
                  </p>
                  <Button className="bg-[#6196d2] hover:bg-[#4a7eb5] text-white rounded-none px-3 md:px-6 py-1.5 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto h-auto md:h-8">
                    Read More
                  </Button>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start">
                <div className="w-full md:w-[220px] h-[80px] md:h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src="https://i.pinimg.com/736x/1a/0b/eb/1a0bebe35a895a17acba70615e4ef0e4.jpg" alt="Matric 2018" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-[#df488b] text-[11px] md:text-[14px] font-medium mb-1 md:mb-3">Barber Battles 2026</h3>
                  <p className="text-[#666] text-[10px] md:text-[12px] leading-relaxed mb-2 md:mb-5">
                    Watch our master barbers compete in regional showcases featuring precision fades, intricate linework, and creative styling.
                  </p>
                  <Button className="bg-[#6196d2] hover:bg-[#4a7eb5] text-white rounded-none px-3 md:px-6 py-1.5 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto h-auto md:h-8">
                    Read More
                  </Button>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start">
                <div className="w-full md:w-[220px] h-[80px] md:h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src="https://i.ytimg.com/vi/bTUY8upDbI8/maxresdefault.jpg" alt="Hair demo" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-[#df488b] text-[11px] md:text-[14px] font-medium mb-1 md:mb-3">Bridal Showcases</h3>
                  <p className="text-[#666] text-[10px] md:text-[12px] leading-relaxed mb-2 md:mb-5">
                    A demonstration of our premium bridal and groom packages, highlighting flawless makeup, updos, and expert detailing.
                  </p>
                  <Button className="bg-[#6196d2] hover:bg-[#4a7eb5] text-white rounded-none px-3 md:px-6 py-1.5 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto h-auto md:h-8">
                    Read More
                  </Button>
                </div>
              </div>

              {/* Event 4 */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start">
                <div className="w-full md:w-[220px] h-[80px] md:h-[160px] shrink-0 border border-gray-100 p-1 bg-white">
                  <img src="https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2025/05/13-feed-in-braid-styles-with-beads.jpg?fit=688%2C843&ssl=1" alt="Battle of the Colleges 2020" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-[#df488b] text-[11px] md:text-[14px] font-medium mb-1 md:mb-3">Color Mastery Workshop</h3>
                  <p className="text-[#666] text-[10px] md:text-[12px] leading-relaxed mb-2 md:mb-5">
                    An in-house showcase of modern coloring techniques, featuring live transformations by our top hair colorists.
                  </p>
                  <Button className="bg-[#6196d2] hover:bg-[#4a7eb5] text-white rounded-none px-3 md:px-6 py-1.5 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors mt-auto h-auto md:h-8">
                    Read More
                  </Button>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* 8. GALLERY (Screenshot 9 Replica) */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container-x">
          
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 relative max-w-5xl mx-auto px-4 lg:px-0">
            <Reveal className="text-center md:text-left flex-1">
              <h2 className="text-[#df488b] text-[18px] md:text-[22px] font-display font-medium uppercase tracking-widest mb-2">
                Gallery
              </h2>
              <p className="text-[#6196d2] text-[12px] md:text-[13px] tracking-wide">
                View our premium facilities, interior design, and styling sessions inside Subgeo Salon.
              </p>
            </Reveal>
            
            <div className="flex gap-1 mt-6 md:mt-0 md:absolute md:right-0 md:top-2">
              <button aria-label="Previous" className="w-[30px] h-[30px] bg-[#9cb9df] hover:bg-[#6196d2] text-white flex items-center justify-center transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button aria-label="Next" className="w-[30px] h-[30px] bg-[#9cb9df] hover:bg-[#6196d2] text-white flex items-center justify-center transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <Reveal delay={0.2} className="max-w-5xl mx-auto w-full relative">
            {/* Gallery Images Grid Container */}
            <div className="grid md:grid-cols-3 gap-0 border border-gray-200 bg-white">
              
              {/* Image 1 - salon5.jpeg */}
              <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
                <div className="w-full h-[220px] p-2 hover:p-0 transition-all duration-300">
                   <img src={salon5} alt="Beauty Treatment" className="w-full h-full object-cover object-top" />
                </div>
                {/* Hover Maximize Overlay Icon (matches the design) */}
                <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image 2 - salon6.jpeg */}
              <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
                <div className="w-full h-[220px] p-2 hover:p-0 transition-all duration-300">
                   <img src={salon6} alt="Salon Workspace" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image 3 - salon7.jpeg */}
              <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
                <div className="w-full h-[220px] p-2 hover:p-0 transition-all duration-300">
                   <img src={salon7} alt="Hair Care" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image 4 - salon8.jpeg */}
              <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
                <div className="w-full h-[220px] p-2 hover:p-0 transition-all duration-300">
                   <img src={salon8} alt="Salon Ambience" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image 5 - salon9.jpeg */}
              <div className="relative group overflow-hidden">
                <div className="w-full h-[220px] p-2 hover:p-0 transition-all duration-300">
                   <img src={salon9} alt="Women Styling" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}