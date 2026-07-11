import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.png";
import { AnimatedFireElement } from "@/components/home/AnimatedFireElement";
import { useState } from "react";

const PharmacyIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 64 64" className={className}>
<defs>
<linearGradient id="pharmacyBg" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#4ade80" />
<stop offset="100%" stopColor="#16a34a" />
</linearGradient>
<linearGradient id="pharmacyCross" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#ffffff" />
<stop offset="100%" stopColor="#f0f0f0" />
</linearGradient>
</defs>
<rect x="12" y="12" width="40" height="40" rx="8" fill="url(#pharmacyBg)" />
<rect x="28" y="20" width="8" height="24" rx="2" fill="url(#pharmacyCross)" />
<rect x="20" y="28" width="24" height="8" rx="2" fill="url(#pharmacyCross)" />
</svg>
);

const BeautyIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 64 64" className={className}>
<defs>
<linearGradient id="beautyLipstick" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#ec4899" />
<stop offset="100%" stopColor="#be185d" />
</linearGradient>
<linearGradient id="beautyTube" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#fbbf24" />
<stop offset="100%" stopColor="#d97706" />
</linearGradient>
<linearGradient id="beautyBase" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#1e293b" />
<stop offset="100%" stopColor="#0f172a" />
</linearGradient>
</defs>
<rect x="26" y="14" width="12" height="18" rx="2" fill="url(#beautyLipstick)" />
<path d="M26 14 L32 8 L38 14 Z" fill="#be185d" />
<rect x="24" y="32" width="16" height="8" rx="1" fill="url(#beautyTube)" />
<rect x="22" y="40" width="20" height="14" rx="2" fill="url(#beautyBase)" />
<circle cx="32" cy="47" r="3" fill="#fbbf24" />
</svg>
);

const IndustrialIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 64 64" className={className}>
<defs>
<linearGradient id="industrialBuilding" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#64748b" />
<stop offset="100%" stopColor="#475569" />
</linearGradient>
<linearGradient id="industrialRoof" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#334155" />
<stop offset="100%" stopColor="#1e293b" />
</linearGradient>
<linearGradient id="industrialSmoke" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.8" />
<stop offset="100%" stopColor="#94a3b8" stopOpacity="0.3" />
</linearGradient>
</defs>
<path d="M8 52 L8 28 L20 20 L20 52 Z" fill="url(#industrialBuilding)" />
<path d="M20 52 L20 24 L32 16 L32 52 Z" fill="url(#industrialBuilding)" />
<path d="M32 52 L32 20 L44 12 L44 52 Z" fill="url(#industrialBuilding)" />
<rect x="44" y="12" width="12" height="40" fill="url(#industrialBuilding)" />
<path d="M8 28 L20 20 L20 24 L8 32 Z" fill="url(#industrialRoof)" />
<path d="M20 24 L32 16 L32 20 L20 28 Z" fill="url(#industrialRoof)" />
<path d="M32 20 L44 12 L44 16 L32 24 Z" fill="url(#industrialRoof)" />
<rect x="12" y="36" width="4" height="6" fill="#fbbf24" />
<rect x="24" y="32" width="4" height="6" fill="#fbbf24" />
<rect x="36" y="28" width="4" height="6" fill="#fbbf24" />
<rect x="48" y="20" width="4" height="6" fill="#fbbf24" />
<circle cx="14" cy="16" r="3" fill="url(#industrialSmoke)" />
<circle cx="18" cy="12" r="4" fill="url(#industrialSmoke)" />
<circle cx="26" cy="10" r="3" fill="url(#industrialSmoke)" />
<rect x="4" y="52" width="56" height="4" fill="#334155" />
</svg>
);

const WellnessIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 64 64" className={className}>
<defs>
<linearGradient id="wellnessHeart" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#ef4444" />
<stop offset="100%" stopColor="#b91c1c" />
</linearGradient>
<radialGradient id="wellnessGlow" cx="50%" cy="50%" r="50%">
<stop offset="0%" stopColor="#fca5a5" stopOpacity="0.6" />
<stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
</radialGradient>
</defs>
<circle cx="32" cy="32" r="28" fill="url(#wellnessGlow)" />
<path d="M32 52 C32 52 12 36 12 24 C12 18 16 14 22 14 C26 14 29 16 32 20 C35 16 38 14 42 14 C48 14 52 18 52 24 C52 36 32 52 32 52 Z" fill="url(#wellnessHeart)" />
<path d="M32 20 C29 16 26 14 22 14 C16 14 12 18 12 24 C12 26 12.5 28 13.5 30" fill="none" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />
<path d="M28 30 L32 34 L40 26" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
</svg>
);

const CosmeticsIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 64 64" className={className}>
<defs>
<linearGradient id="cosmeticsPalette" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#f472b6" />
<stop offset="100%" stopColor="#db2777" />
</linearGradient>
<linearGradient id="cosmeticsCompact" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#fbbf24" />
<stop offset="100%" stopColor="#d97706" />
</linearGradient>
<linearGradient id="cosmeticsMirror" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#e0e7ff" />
<stop offset="100%" stopColor="#c7d2fe" />
</linearGradient>
</defs>
<ellipse cx="32" cy="38" rx="20" ry="16" fill="url(#cosmeticsPalette)" />
<ellipse cx="32" cy="36" rx="18" ry="14" fill="#1e293b" />
<circle cx="22" cy="34" r="4" fill="#ef4444" />
<circle cx="32" cy="32" r="4" fill="#ec4899" />
<circle cx="42" cy="34" r="4" fill="#8b5cf6" />
<circle cx="26" cy="42" r="4" fill="#f59e0b" />
<circle cx="38" cy="42" r="4" fill="#10b981" />
<ellipse cx="32" cy="18" rx="14" ry="10" fill="url(#cosmeticsCompact)" />
<ellipse cx="32" cy="17" rx="12" ry="8" fill="url(#cosmeticsMirror)" />
<ellipse cx="28" cy="15" rx="4" ry="3" fill="#ffffff" opacity="0.6" />
</svg>
);

const MaintenanceIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 64 64" className={className}>
<defs>
<linearGradient id="maintWrench" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#94a3b8" />
<stop offset="100%" stopColor="#64748b" />
</linearGradient>
<linearGradient id="maintScrewdriver" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#fbbf24" />
<stop offset="100%" stopColor="#d97706" />
</linearGradient>
<linearGradient id="maintHandle" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#dc2626" />
<stop offset="100%" stopColor="#991b1b" />
</linearGradient>
</defs>
<path d="M16 48 L28 36 L32 40 L20 52 C18 54 14 54 12 52 C10 50 10 46 12 44 L16 48 Z" fill="url(#maintWrench)" />
<circle cx="14" cy="50" r="4" fill="#475569" />
<circle cx="14" cy="50" r="2" fill="#1e293b" />
<rect x="28" y="34" width="8" height="4" rx="1" fill="url(#maintWrench)" transform="rotate(-45 32 36)" />
<rect x="36" y="26" width="16" height="6" rx="2" fill="url(#maintHandle)" />
<rect x="38" y="28" width="12" height="2" fill="#7f1d1d" />
<rect x="52" y="28" width="6" height="2" fill="url(#maintScrewdriver)" />
<rect x="56" y="26" width="4" height="6" fill="#92400e" />
<path d="M40 16 L44 12 L48 16 L44 20 Z" fill="url(#maintWrench)" />
<circle cx="44" cy="16" r="2" fill="#1e293b" />
</svg>
);

const tiles = [
{ label: "Pharmacy", icon: PharmacyIcon },
{ label: "Beauty", icon: BeautyIcon },
{ label: "Industrial", icon: IndustrialIcon, active: true },
{ label: "Wellness", icon: WellnessIcon },
{ label: "Cosmetics", icon: CosmeticsIcon },
{ label: "Maintenance", icon: MaintenanceIcon },
];

export function HeroSection() {

return (
<section className="relative section-slab">
<Navbar />

<div className="container-x pt-36 pb-10">
<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
<div className="pt-20 lg:pt-32">
<h1 className="font-display font-medium text-[40px] md:text-[52px] leading-[1.15] tracking-tight text-primary mb-1">
Providing Kenyans
</h1>
<h2 className="font-display font-medium text-[40px] md:text-[52px] leading-[1.15] tracking-tight text-primary">
With Reliable and <br />
<span className="text-accent">Quality Services</span>
</h2>
<p className="mt-4 md:mt-6 max-w-xl text-[13px] md:text-[14px] text-gray-500 leading-relaxed font-light">
As a premier holding company based in Kenya, Subgeo Holding Limited delivers comprehensive, high-quality services and infrastructure solutions tailored to drive progress, reliability, and innovation across the region.
</p>
<div className="mt-7 flex flex-col sm:flex-row gap-4">
<Button className="rounded-none bg-[#e0292e] hover:bg-[#c42428] text-white h-[50px] w-full sm:w-auto px-8 font-semibold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2">
Book Now
<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
</Button>
<Button variant="outline" className="rounded-none border-[#e0292e] text-[#e0292e] hover:bg-[#e0292e] hover:text-white h-[50px] w-full sm:w-auto px-8 font-semibold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2">
Get A Free Quote
<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
</Button>
</div>
<div className="mt-7 flex items-center gap-4">
<div className="flex -space-x-2">
{["R", "E", "B"].map((letter) => (
<div
key={letter}
className="h-9 w-9 rounded-full bg-primary text-white text-xs flex items-center justify-center border-2 border-white"
>
{letter}
</div>
))}
</div>
<div className="hero-badge px-4 py-2">
<div className="text-xs font-semibold text-primary">4.9 Stars</div>
<div className="text-[10px] text-gray-500">500 Reviews in Google</div>
</div>
</div>
</div>

{/* Image section */}
<div className="relative flex justify-center min-h-[400px] lg:min-h-[500px] mt-10 lg:mt-0">
{/* Blue Circle */}
<div className="absolute top-16 lg:top-24 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-12 h-[220px] w-[220px] lg:h-[320px] lg:w-[320px] rounded-full bg-[#223a5c] z-0" />

{/* Red Vertical Ribbon - wider, extends from navbar to cards */}
<div className="absolute -top-20 lg:-top-32 right-4 lg:right-20 w-24 lg:w-40 h-[400px] lg:h-[600px] bg-[#e0292e] z-0" />

{/* Fire Animated Elements - Parallax Background Effect */}
<motion.div 
  className="absolute inset-0 pointer-events-none"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.5 }}
>
  {/* Fire particles floating up */}
  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
  <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
  <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
  <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.5s' }}></div>
  <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '2s' }}></div>
  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse" style={{ animationDuration: '3.2s', animationDelay: '2.5s' }}></div>
  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ animationDuration: '2.7s', animationDelay: '3s' }}></div>
  <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDuration: '3.3s', animationDelay: '3.5s' }}></div>
  
  {/* Subtle flame animation at bottom */}
  <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0s', animationIterationCount: 'infinite' }}></div>
  <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDuration: '1.7s', animationDelay: '0.3s', animationIterationCount: 'infinite' }}></div>
  <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" style={{ animationDuration: '1.3s', animationDelay: '0.6s', animationIterationCount: 'infinite' }}></div>
  <div className="absolute bottom-0 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-bounce" style={{ animationDuration: '1.6s', animationDelay: '0.9s', animationIterationCount: 'infinite' }}></div>
  <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDuration: '1.4s', animationDelay: '1.2s', animationIterationCount: 'infinite' }}></div>
</motion.div>

{/* Person Image - moved down to exactly touch the bottom line */}
<motion.img
src={heroImg}
alt="Technician"
className="absolute z-10 -bottom-24 left-1/2 -translate-x-1/2 h-[500px] lg:h-[750px] w-full max-w-[360px] lg:max-w-[560px] object-contain object-bottom"
initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
transition={{ duration: 0.8, delay: 0.2 }}
/>

{/* Same Day Service Badge - HIGHEST z-index, in front */}
<AnimatedFireElement delay={0.3} duration={0.7} className="absolute top-[260px] lg:top-[380px] right-2 lg:-right-4 px-4 py-2.5 lg:px-7 lg:py-4 bg-white shadow-xl rounded-2xl z-30 flex items-center gap-2 lg:gap-3 lg:border-[none] border border-gray-100">
<div className="flex items-center justify-center flex-shrink-0 text-[#e0292e]">
<svg className="h-6 w-6 lg:h-9 lg:w-9" viewBox="0 0 24 24" fill="currentColor">
{/* Outer spinning arrows */}
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fillOpacity="0"/>
<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
{/* Inner clock hands */}
<path d="M12 7v5l4.25 2.52.75-1.23-3.5-2.07V7z" />
</svg>
</div>
<span className="text-[13px] lg:text-[18px] tracking-tight font-sans font-bold text-[#e0292e]">Same Day Service</span>
</AnimatedFireElement>

{/* 4.9 Stars Badge - HIGHEST z-index, in front */}
<AnimatedFireElement delay={0.5} duration={0.7} className="absolute top-[320px] lg:top-[480px] right-12 lg:right-24 px-4 py-3 lg:px-6 lg:py-4 bg-white shadow-xl rounded-2xl z-30 border border-gray-50/50">
<div className="flex items-center gap-3 lg:gap-4">
<div className="flex -space-x-2 lg:-space-x-3">
<div className="h-8 w-8 lg:h-11 lg:w-11 rounded-full bg-[#82cbf7] border-2 lg:border-[3px] border-white overflow-hidden shadow-sm z-30">
<img src="https://i.pravatar.cc/100?img=47" alt="avatar" className="h-full w-full object-cover mix-blend-multiply" />
</div>
<div className="h-8 w-8 lg:h-11 lg:w-11 rounded-full bg-[#b2a2e6] border-2 lg:border-[3px] border-white overflow-hidden shadow-sm z-20">
<img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="h-full w-full object-cover mix-blend-multiply" />
</div>
<div className="h-8 w-8 lg:h-11 lg:w-11 rounded-full bg-[#a1e2b5] border-2 lg:border-[3px] border-white overflow-hidden shadow-sm z-10">
<img src="https://i.pravatar.cc/100?img=5" alt="avatar" className="h-full w-full object-cover mix-blend-multiply" />
</div>
</div>
<div className="flex flex-col">
<div className="text-[14px] lg:text-lg font-display font-bold text-[#1a2c4e] leading-tight">4.9 Stars</div>
<div className="text-[9px] lg:text-[11px] font-semibold text-[#5a6b82] mt-0.5">
500 Reviews in <span className="font-bold text-[10px] lg:text-[12px]">
<span className="text-[#4285F4]">G</span>
<span className="text-[#EA4335]">o</span>
<span className="text-[#FBBC05]">o</span>
<span className="text-[#4285F4]">g</span>
<span className="text-[#34A853]">l</span>
<span className="text-[#EA4335]">e</span>
</span>
</div>
</div>
</div>
</AnimatedFireElement>
</div>
</div>
</div>
</section>
);
}
