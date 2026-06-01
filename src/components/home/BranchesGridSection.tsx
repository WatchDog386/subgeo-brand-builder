import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Clock } from "lucide-react";
import pharmacyImg from "@/assets/pharmacy.jpg";
import clinicImg from "@/assets/clinic.jpg";
import labImg from "@/assets/lab.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import beautyImg from "@/assets/beauty.jpg";
import barberImg from "@/assets/barber.jpg";
import { ImageCard, CenteredContent } from "@/components/premium/PremiumGrid";
import { ParallaxSection, RevealOnScroll } from "@/components/premium/PremiumAnimations";

const branches = [
  {
    slug: "pharmacy",
    name: "Subgeo Pharmacy",
    category: "Healthcare",
    tagline: "Quality-assured medications & expert advice.",
    image: pharmacyImg,
    date: "15 November, 2022",
    readTime: "4 mins read",
  },
  {
    slug: "clinic",
    name: "Subgeo Medical Clinic",
    category: "Healthcare",
    tagline: "Comprehensive care from registered clinicians.",
    image: clinicImg,
    date: "20 October, 2022",
    readTime: "4 mins read",
  },
  {
    slug: "diagnostics",
    name: "Subgeo Diagnostics Lab",
    category: "Healthcare",
    tagline: "Accurate testing with rapid, same-day outcomes.",
    image: labImg,
    date: "15 November, 2022",
    readTime: "4 mins read",
  },
  {
    slug: "wellness",
    name: "Subgeo Wellness",
    category: "Lifestyle",
    tagline: "Holistic health counseling & lifestyle management.",
    image: wellnessImg,
    date: "10 September, 2022",
    readTime: "3 mins read",
  },
  {
    slug: "beauty",
    name: "Subgeo Beauty",
    category: "Lifestyle",
    tagline: "Premium beauty therapies and skincare routines.",
    image: beautyImg,
    date: "01 August, 2022",
    readTime: "5 mins read",
  },
  {
    slug: "barber",
    name: "Subgeo Executive Barber",
    category: "Lifestyle",
    tagline: "Sharp grooming and executive shaving setups.",
    image: barberImg,
    date: "22 July, 2022",
    readTime: "2 mins read",
  },
];

export function BranchesGridSection() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const intervalRef = useRef<number | null>(null);
  const isPaused = useRef(false);
  const perPage = 3;
  const pages = Math.max(1, Math.ceil(branches.length / perPage));

  const next = () => {
    setDir(1);
    setPage((current) => (current + 1) % pages);
  };

  const prev = () => {
    setDir(-1);
    setPage((current) => (current - 1 + pages) % pages);
  };

  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (!isPaused.current) next();
    }, 4000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [pages]);

  const sweepVariants = {
    enter: (currentDir: number) => ({ x: currentDir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (currentDir: number) => ({ x: currentDir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section
      id="branches"
      className="relative overflow-hidden py-12 md:py-16 section-hero-match font-sans"
      style={{ background: "#f0fdf7" }}
    >
      <div className="container-x relative z-10">
        <CenteredContent
          eyebrow="OUR BRANCHES"
          title="Our branches country wide"
          description="Each branch combines professional expertise with community care, connected by shared values of excellence and accessibility."
          maxWidth="max-w-2xl"
        />

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div />
            <div className="flex items-center gap-3">
              <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-[#dfe1e3] shadow-elevation-2 transition-transform hover:scale-105">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-[#dfe1e3] shadow-elevation-2 transition-transform hover:scale-105">
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <ParallaxSection offset={18} className="relative">
            <AnimatePresence initial={false} custom={dir} mode="wait">
              <motion.div
                key={page}
                custom={dir}
                variants={sweepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                className="flex flex-col md:flex-row gap-8 justify-center items-stretch"
                onMouseEnter={() => {
                  isPaused.current = true;
                }}
                onMouseLeave={() => {
                  isPaused.current = false;
                }}
              >
                {branches.slice(page * perPage, page * perPage + perPage).map((branch, index) => (
                  <div key={branch.slug} className="w-full md:w-1/3">
                    <RevealOnScroll delay={index * 0.06}>
                      <Link to="/branches/$slug" params={{ slug: branch.slug }} className="block h-full no-underline">
                        <div className="bg-[#dfe1e3] border border-gray-200 rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
                          <div className="overflow-hidden">
                            <img src={branch.image} alt={branch.name} className="w-full h-48 md:h-56 object-cover" />
                          </div>

                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-semibold text-primary mb-3 hover:underline">
                              {branch.name}
                            </h3>

                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-3">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span className="text-xs">{branch.date}</span>
                              </div>

                              <div className="flex items-center gap-2 ml-auto">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-xs">{branch.readTime}</span>
                              </div>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 mb-4">{branch.tagline}</p>

                            <div className="mt-auto">
                              <span className="text-sm text-primary font-semibold inline-flex items-center gap-2">READ MORE <ArrowUpRight className="w-3 h-3" /></span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </RevealOnScroll>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Left/Right arrows positioned center */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none md:pl-6">
              <button onClick={prev} aria-label="Previous" className="pointer-events-auto p-3 rounded-full bg-[#dfe1e3] shadow-elevation-2 transition-transform hover:scale-105">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none md:pr-6">
              <button onClick={next} aria-label="Next" className="pointer-events-auto p-3 rounded-full bg-[#dfe1e3] shadow-elevation-2 transition-transform hover:scale-105">
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="mt-6 flex justify-center w-full">
              <div className="flex items-center gap-3">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`w-3 h-3 rounded-full ${i === page ? 'bg-primary' : 'bg-gray-300'} transition-all`}
                  />
                ))}
              </div>
            </div>
          </ParallaxSection>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/branches"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity no-underline"
          >
            View All Branches <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
