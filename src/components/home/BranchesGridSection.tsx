import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
  },
  {
    slug: "clinic",
    name: "Subgeo Medical Clinic",
    category: "Healthcare",
    tagline: "Comprehensive care from registered clinicians.",
    image: clinicImg,
  },
  {
    slug: "diagnostics",
    name: "Subgeo Diagnostics Lab",
    category: "Healthcare",
    tagline: "Accurate testing with rapid, same-day outcomes.",
    image: labImg,
  },
  {
    slug: "wellness",
    name: "Subgeo Wellness",
    category: "Lifestyle",
    tagline: "Holistic health counseling & lifestyle management.",
    image: wellnessImg,
  },
  {
    slug: "beauty",
    name: "Subgeo Beauty",
    category: "Lifestyle",
    tagline: "Premium beauty therapies and skincare routines.",
    image: beautyImg,
  },
  {
    slug: "barber",
    name: "Subgeo Executive Barber",
    category: "Lifestyle",
    tagline: "Sharp grooming and executive shaving setups.",
    image: barberImg,
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
    <section id="branches" className="py-24 md:py-32 section-hero-match">
      <div className="container-x">
        <CenteredContent
          eyebrow="OUR BRANCHES"
          title="Six Specialised Divisions, One Subgeo Standard"
          description="Each branch combines professional expertise with community care, connected by shared values of excellence and accessibility."
          maxWidth="max-w-2xl"
        />

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div />
            <div className="flex items-center gap-3">
              <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-white shadow-elevation-2 transition-transform hover:scale-105">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-white shadow-elevation-2 transition-transform hover:scale-105">
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <ParallaxSection offset={18} className="overflow-hidden">
            <AnimatePresence initial={false} custom={dir} mode="wait">
              <motion.div
                key={page}
                custom={dir}
                variants={sweepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                className="flex flex-col md:flex-row gap-8 justify-center"
                onMouseEnter={() => {
                  isPaused.current = true;
                }}
                onMouseLeave={() => {
                  isPaused.current = false;
                }}
              >
                {branches.slice(page * perPage, page * perPage + perPage).map((branch, index) => (
                  <div key={branch.slug} className="w-full md:w-[32%]">
                    <RevealOnScroll delay={index * 0.06}>
                      <Link to="/branches/$slug" params={{ slug: branch.slug }} className="block h-full no-underline">
                        <ImageCard
                          image={branch.image}
                          title={branch.name}
                          subtitle={branch.category}
                          description={branch.tagline}
                          cta={{ label: "Explore Branch", onClick: () => {} }}
                        />
                      </Link>
                    </RevealOnScroll>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
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
