import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, ArrowUpRight, Check, Clock, Phone } from "lucide-react";
import { branches } from "@/lib/branches";
import { useState } from "react";
import beautyImg from "@/assets/beauty.jpg";
import img04 from "@/assets/img-04.jpg";
import img05 from "@/assets/img-05.jpg";
import img06 from "@/assets/img-06.jpg";
import img07 from "@/assets/img-07.jpg";
import img08 from "@/assets/img-08.jpg";
=======
import { ArrowRight, ArrowUpRight, Check, Clock, Phone } from "lucide-react";
import { branches } from "@/lib/branches";
import beautyImg from "@/assets/salon.jpeg";
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396

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
<<<<<<< HEAD
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

=======
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
  const branch = {
    slug: "beauty",
    name: "Subgeo Beauty Salon",
    tagline: "Elevated self-care, every visit.",
    category: "Beauty",
    description:
      "A refined beauty studio offering facials, skincare, brows, lashes and hand & foot care — in a serene environment designed around comfort and discretion.",
    image: beautyImg,
    highlights: [
      { title: "Trained therapists", body: "Certified beauty professionals you can trust." },
      { title: "Premium products", body: "Carefully chosen, skin-friendly brands." },
      { title: "Calm interiors", body: "Designed for relaxation and privacy." },
    ],
    services: [
      "Signature facials",
      "Skin consultations",
      "Brows & lashes",
      "Manicure & pedicure",
      "Waxing & threading",
      "Bridal packages",
    ],
    hours: "Tue–Sun · 9:00 – 20:00",
    phone: "+254 700 000 007",
  };

  const others = branches.filter((b) => b.slug !== branch.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

<<<<<<< HEAD
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 border-b border-border">
        <div className="container-x">
          <Reveal>
            <Link to="/branches" className="text-sm text-muted-foreground hover:text-brand">
              ← All branches
            </Link>
            <div className="mt-6 eyebrow">{branch.category}</div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tight leading-[1.02] max-w-4xl">
              {branch.name}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl">{branch.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="aspect-[16/8] overflow-hidden rounded-sm bg-muted">
              <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
            </div>
          </Reveal>

          <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow">Overview</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                What this branch does, and how.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">{branch.description}</p>

              <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border border border-border">
                {branch.highlights.map((h) => (
                  <div key={h.title} className="bg-background p-6">
                    <h3 className="font-display text-lg">{h.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
                  </div>
                ))}
              </div>
=======
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-[1550px] mx-auto px-4 md:px-8">
          <div className="mb-6">
            <Link to="/branches" className="text-sm text-muted-foreground hover:text-[#e31837]">
              ← All branches
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* Left: Red Box */}
            <Reveal className="w-full md:w-[50%] lg:w-[55%] flex">
              <div className="bg-[#e31837] text-white p-8 md:p-10 lg:p-14 xl:p-16 h-full flex flex-col justify-center w-full z-10 lg:-mr-10 relative shadow-lg">
                <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/80 mb-3">{branch.category}</div>
                <h1 className="font-display font-medium text-[28px] md:text-[34px] xl:text-[40px] leading-[1.1] mb-5">
                  {branch.name}
                </h1>
                
                <p className="text-[13px] md:text-[14px] xl:text-[15px] leading-[1.6] mb-8 font-normal lg:pr-16 text-white/95">
                  {branch.description}
                </p>
                
                <div className="mt-auto">
                  <button className="bg-white text-[#e31837] font-bold text-[12px] tracking-wider py-3.5 px-6 inline-flex items-center hover:bg-gray-100 transition-colors shadow-sm">
                    BOOK APPOINTMENT
                    <svg className="w-4 h-4 ml-3 text-[#e31837]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Right: Image and Controls */}
            <Reveal className="w-full md:w-[50%] lg:w-[45%] flex flex-col pt-0 md:pt-10" delay={0.1}>
              <div className="h-full w-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative w-full h-[300px] md:h-full min-h-[350px] lg:min-h-[450px] border-[12px] border-white bg-gray-100 shadow-xl z-20">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Watch Video Red Play Box (Bottom Left, overlapping border) */}
                  <div className="absolute left-[-12px] bottom-[-12px] w-[130px] h-[150px] bg-[#e31837] flex flex-col items-center justify-center cursor-pointer group z-10 shadow-lg">
                    <div className="bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <div className="w-[16px] h-[16px] ml-1 bg-[#e31837]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }}></div>
                    </div>
                    <span className="text-white font-bold text-[11px] mt-4 tracking-widest text-center">
                      WATCH<br/>TOUR
                    </span>
                  </div>
                </div>
                
                {/* Navigation Arrows Row below the image */}
                <div className="flex justify-end gap-4 items-center bg-white py-5 pr-2">
                  <button aria-label="Previous slide" className="flex items-center group relative w-20 hover:opacity-80 transition-opacity">
                    <div className="absolute left-0 top-1/2 -mt-[5px] border-y-[5px] border-y-transparent border-r-[8px] border-r-gray-300"></div>
                    <div className="w-full h-[2px] bg-gray-300 ml-1"></div>
                  </button>
                  <button aria-label="Next slide" className="flex items-center group relative w-20 hover:opacity-80 transition-opacity">
                    <div className="w-full h-[2px] bg-[#e31837] mr-1"></div>
                    <div className="absolute right-0 top-1/2 -mt-[5px] border-y-[5px] border-y-transparent border-l-[8px] border-l-[#e31837]"></div>
                  </button>
                </div>

              </div>
            </Reveal>
            
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-32">
              <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-[#e31837] mb-3">Overview</div>
              <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] leading-[1.04] text-primary">
                What this branch<br />does, and how.
              </h2>
              <p className="mt-6 text-[14px] leading-relaxed text-gray-600 max-w-md">
                {branch.description}
              </p>
            </Reveal>

            <Reveal className="space-y-12" delay={0.1}>
              {branch.highlights.map((h, i) => (
                <div key={h.title} className="flex flex-col sm:grid sm:grid-cols-[60px_1fr] gap-6 sm:gap-8 items-start group">
                  <div className="h-[60px] w-[60px] flex items-center justify-center font-display font-bold text-[24px] bg-white text-[#cbd5e1] border-2 border-[#f1f5f9] group-hover:border-[#e31837] group-hover:text-[#e31837] transition-all duration-300">
                    0{i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[22px] md:text-[26px] font-bold font-display leading-[1.1] text-[#1a2c4e] transition-colors duration-300">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.7] font-medium text-[#64748b]">
                      {h.body}
                    </p>
                  </div>
                </div>
              ))}
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Services</div>
<<<<<<< HEAD
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
=======
            <h2 className="mt-3 font-display text-[clamp(26px,2.5vw,36px)] leading-tight text-primary">
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
              What you can book or walk in for.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {branch.services.map((s) => (
                <li key={s} className="flex items-start gap-3 border-b border-border pb-4">
                  <Check className="size-4 text-brand mt-1 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Featured Collection</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              Explore our curated selection.
            </h2>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src={img06}
                  alt="Featured image"
                  className="w-full h-auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Gallery</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              Experience our beauty sanctuary.
            </h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
            <Reveal delay={0.05}>
              <div 
                onClick={() => setSelectedImage(img05)}
                className="aspect-[4/3] overflow-hidden rounded-sm bg-muted group cursor-pointer"
              >
                <img
                  src={img05}
                  alt="Gallery image 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div 
                onClick={() => setSelectedImage(img04)}
                className="aspect-[4/3] overflow-hidden rounded-sm bg-muted group cursor-pointer lg:col-span-2 lg:row-span-2"
              >
                <img
                  src={img04}
                  alt="Gallery image 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div 
                onClick={() => setSelectedImage(img07)}
                className="aspect-[4/3] overflow-hidden rounded-sm bg-muted group cursor-pointer"
              >
                <img
                  src={img07}
                  alt="Gallery image 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div 
                onClick={() => setSelectedImage(img08)}
                className="aspect-[4/3] overflow-hidden rounded-sm bg-muted group cursor-pointer"
              >
                <img
                  src={img08}
                  alt="Gallery image 4"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="bg-foreground text-background rounded-sm p-10 md:p-14 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                Visit {branch.name}
              </h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-brand mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-background/60">Hours</div>
                    <div className="mt-1">{branch.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-brand mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-background/60">Phone</div>
                    <div className="mt-1">{branch.phone}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end justify-end">
              <Button
                asChild
                size="lg"
                className="rounded-sm bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6"
              >
                <a href={`tel:${branch.phone.replace(/\s/g, "")}`}>
                  Call branch <ArrowRight className="ml-1.5 size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-sm h-12 px-6 text-background hover:bg-background/10 hover:text-background"
              >
                <Link to="/contact">Get in touch</Link>
              </Button>
=======
      <section className="w-full relative bg-white py-12 md:py-16 font-sans overflow-hidden mt-10 border-t border-border">
        {/* Main CTA Container */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <div className="w-full bg-gradient-to-br from-[#1a0f44] via-[#12072b] to-[#0e0421] rounded-none overflow-hidden relative shadow-2xl">
            
            {/* --- SVG Isometric Background Elements --- */}
            
            {/* Dashed lines network */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <line x1="0" y1="70%" x2="40%" y2="85%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
              <line x1="30%" y1="90%" x2="80%" y2="10%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
              <line x1="70%" y1="20%" x2="100%" y2="40%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
              <line x1="10%" y1="30%" x2="60%" y2="10%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.08" />
            </svg>

            {/* Left Floating Diamond */}
            <div className="absolute -left-10 top-[25%] md:top-[15%] w-[340px] h-[340px] pointer-events-none opacity-80">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="leftPlaneGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9681e8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#9681e8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <polygon points="100,50 180,95 100,140 20,95" fill="url(#leftPlaneGrad2)" stroke="#a493e6" strokeWidth="0.5" strokeOpacity="0.5"/>
                <polygon points="60,110 100,132 140,110 100,88" fill="#5835b0" transform="translate(0, 40)"/>
              </svg>
            </div>

            {/* Right Top Isometric 3D Box */}
            <div className="absolute right-[12%] top-[10%] w-32 h-32 pointer-events-none drop-shadow-xl hidden md:block">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="50,25 75,37 50,49 25,37" fill="#8f73d6" />
                <polygon points="25,37 50,49 50,65 25,53" fill="#2d1668" />
                <polygon points="50,49 75,37 75,53 50,65" fill="#502fa6" />
              </svg>
            </div>

            {/* Right Bottom Purple Diamond Plane */}
            <div className="absolute right-[-4%] bottom-[5%] md:bottom-[10%] w-[260px] h-[260px] pointer-events-none drop-shadow-2xl">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="rightPlaneGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#673fcc" />
                    <stop offset="100%" stopColor="#432393" />
                  </linearGradient>
                </defs>
                <polygon points="100,60 160,95 100,130 40,95" fill="url(#rightPlaneGrad2)" />
              </svg>
            </div>

            {/* --- Content --- */}
            <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center">
              
              <h2 className="font-display text-[clamp(32px,4vw,48px)] leading-[1.04] text-white mb-5 max-w-4xl">
                Ready to experience {branch.name}?
              </h2>
              
              <p className="text-[#b2a4db] text-base md:text-lg mb-12 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide">
                Reach out to our specialists and discover how our {branch.category.toLowerCase()} services can elevate your experience.
              </p>

              <div className="flex gap-12 text-[#b2a4db] mb-12 flex-wrap justify-center text-left">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#d5fb46]" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#9681e8]">Hours</div>
                    <div className="text-sm text-white font-medium mt-1">{branch.hours}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#d5fb46]" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#9681e8]">Call Us</div>
                    <div className="text-sm text-white font-medium mt-1">{branch.phone}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mx-auto">
                <Button 
                  asChild
                  className="bg-[#d5fb46] hover:bg-[#cbf13e] text-[#110825] transition-colors rounded px-8 py-3 h-12 text-sm font-semibold uppercase tracking-wide w-full sm:w-auto shadow-[0_0_20px_rgba(213,251,70,0.1)]"
                >
                  <a href={`tel:${branch.phone.replace(/\s/g, "")}`}>
                    Call branch
                  </a>
                </Button>
                <Button 
                  asChild
                  className="bg-[#29175a] hover:bg-[#34206c] text-[#d5fb46] transition-colors rounded px-8 py-3 h-12 text-sm font-semibold uppercase tracking-wide w-full sm:w-auto shadow-none"
                >
                   <Link to="/contact">Get in touch</Link>
                </Button>
              </div>

              <p className="text-[#6d5b9d] text-[13px] mt-8 font-sans tracking-wide">
                Fast response guaranteed, no commitment required.
              </p>

>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
<<<<<<< HEAD
            <h2 className="font-display text-3xl md:text-4xl">Other Subgeo branches</h2>
=======
            <h2 className="font-display text-[clamp(26px,2.5vw,36px)] text-primary">Other Subgeo branches</h2>
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
            <Link to="/branches" className="text-sm text-brand link-underline">
              View all
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {others.map((b) => (
              <Link
                key={b.slug}
                to={`/${b.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand font-semibold">
                      {b.category}
                    </div>
                    <h3 className="mt-1 font-display text-xl group-hover:text-brand transition-colors">
                      {b.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-brand transition-colors shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
<<<<<<< HEAD

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
=======
    </div>
  );
}
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
