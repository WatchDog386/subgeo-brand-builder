import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import { 
  Droplets, 
  Flame, 
  Thermometer, 
  Snowflake, 
  Wrench, 
  Gauge 
} from "lucide-react";
import subgeo2Img from "@/assets/subgeo2.jpeg";

const caseStudies = [
  {
    title: "How Subgeo Plumbing handled large scale installations",
    description: "Subgeo scaled deliverables using our proven techniques—providing on-time results that keep clients returning.",
    logo: "SUBGEO",
    logoHasIcon: true,
    href: "/case-studies/subgeo-plumbing",
    bannerBg: "bg-[#2dd4a8]",
    bannerTextColor: "text-white",
    accentColor: "purple",
    bannerAccent: "bg-purple-600",
  },
  {
    title: "Glee Hotel's extensive water systems, powered by Subgeo",
    description: "Glee Hotel used Subgeo for robust plumbing across projects—faster, maintaining safety control and quality.",
    logo: "GLEE HOTEL",
    logoHasIcon: true,
    href: "/case-studies/glee-hotel",
    bannerBg: "bg-[#1a1a1a]",
    bannerTextColor: "text-white",
    accentColor: "orange",
    bannerAccent: "bg-orange-500",
  },
  {
    title: "How Qwetu reinvented their facilities with Subgeo",
    description: "This major university turned to Subgeo for technical support—helping with compliance, sanitary upgrades, and rapid delivery.",
    logo: "QWETU",
    logoSubtext: "UNIVERSITY",
    logoHasIcon: false,
    href: "/case-studies/qwetu",
    bannerBg: "bg-[#fdf6f0]",
    bannerTextColor: "text-gray-900",
    accentColor: "orange",
    bannerAccent: "bg-orange-500",
  },
];

export function BranchesGridSection() {
  return (
    <section className="section-shell py-16 md:py-20 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {caseStudies.map((study, index) => {
            return (
              <RevealOnScroll key={study.title} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  {/* Banner Image */}
                  <div 
                    className={`relative ${study.bannerBg} overflow-hidden mb-6 aspect-[4/3]`}
                    style={{
                      backgroundImage: index === 0 ? `url(${subgeo2Img})` : index === 1 ? `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSng9IGFdWfGE8ao8hzAnLaHEgF0aLmtDsyPHby7v3-VuTZXm3w0GpY01&s=10)` : index === 2 ? `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhX5iKhaPXggpzUsTPzlGcPpGeMRQi5Q6sSJb1bamj8Q3vuOnULH4NYG8&s=10)` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Decorative curved lines - top left */}
                    <svg 
                      className="absolute top-3 left-3 w-8 h-8 text-yellow-400 opacity-80" 
                      viewBox="0 0 32 32" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M4 16C4 16 8 8 16 8C24 8 28 16 28 16" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Decorative circles - right side */}
                    {index === 0 && (
                      <>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-90"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600 rounded-full translate-y-1/2 -translate-x-1/2 opacity-90"></div>
                        {/* Mock cards */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-2">
                          <div className="bg-white shadow-xl p-3 w-28 transform -rotate-3">
                            <div className="h-2 w-16 bg-gray-300 mb-2"></div>
                            <div className="h-14 w-full bg-gray-200"></div>
                          </div>
                          <div className="bg-white shadow-xl p-3 w-28 transform rotate-3 translate-y-2">
                            <div className="h-2 w-20 bg-gray-300 mb-2"></div>
                            <div className="h-14 w-full bg-gray-200"></div>
                          </div>
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500 rounded-full -translate-y-1/2 translate-x-1/4 opacity-90"></div>
                        <svg 
                          className="absolute bottom-4 left-4 w-8 h-8 text-yellow-400 opacity-80" 
                          viewBox="0 0 32 32" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M4 16C4 16 8 8 16 8C24 8 28 16 28 16" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round"
                          />
                        </svg>
                        {/* Mock catalog */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2">
                          <div className="bg-white shadow-xl p-3 w-36 transform rotate-2">
                            <div className="bg-purple-600 text-white text-[8px] font-bold p-1 mb-2 text-center">
                              QUALITY INSTALLATIONS
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              <div className="h-10 bg-gray-200"></div>
                              <div className="h-10 bg-gray-200"></div>
                              <div className="h-10 bg-gray-200"></div>
                              <div className="h-10 bg-gray-200"></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 opacity-90"></div>
                        {/* Tote bag mock */}
                        <div className="absolute right-12 top-1/2 -translate-y-1/2">
                          <div className="bg-white shadow-xl p-4 w-28 h-36 flex flex-col items-center justify-center">
                            <div className="w-8 h-10 border-2 border-orange-500 mb-2"></div>
                            <div className="text-orange-600 font-bold text-[10px] text-center leading-tight">
                              QWETU<br/>UNIVERSITY
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className={`font-display text-[clamp(22px,2.5vw,32px)] leading-[1.04] ${study.bannerTextColor}`}>
                        {study.title.split(" ").map((word, i) => {
                          if (
                            (index === 0 && (word === "Subgeo" || word === "Plumbing")) ||
                            (index === 1 && (word === "Glee" || word === "Subgeo" || word === "Hotel's")) ||
                            (index === 2 && (word === "Qwetu" || word === "Subgeo"))
                          ) {
                            return (
                              <span key={i} className={index === 2 ? "text-orange-600" : "text-orange-500"}>
                                {word}{" "}
                              </span>
                            );
                          }
                          return <span key={i}>{word} </span>;
                        })}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 font-sans text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                    {study.description}
                  </p>

                  {/* Logo and Button */}
                  <div className="flex items-center justify-between mt-auto gap-4">
                    {/* Company Logo */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        {index === 1 && (
                          <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                        )}
                        <span className="text-lg font-extrabold text-gray-900 tracking-tight uppercase">
                          {study.logo}
                        </span>
                        {index === 0 && (
                          <span className="inline-block w-4 h-4 bg-[#e31837] ml-1"></span>
                        )}
                      </div>
                      {study.logoSubtext && (
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">
                          — {study.logoSubtext} —
                        </span>
                      )}
                    </div>

                    {/* See Case Study Button */}
                    <Button 
                      className="rounded-none bg-[#e31837] hover:bg-red-700 text-white font-bold uppercase tracking-widest px-6 py-3 transition-colors text-sm whitespace-nowrap"
                      onClick={() => window.location.href = study.href}
                    >
                      See Project
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
