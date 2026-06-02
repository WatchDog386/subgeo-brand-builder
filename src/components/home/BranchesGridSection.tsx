import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import pharmacyImg from "@/assets/pharmacy.jpg";
import clinicImg from "@/assets/clinic.jpg";
import labImg from "@/assets/lab.jpg";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const branches = [
  {
    slug: "pharmacy",
    name: "Subgeo Pharmacy",
    tagline: "Quality-assured medications & expert advice.",
    image: pharmacyImg,
    theme: "#060047",
  },
  {
    slug: "clinic",
    name: "Subgeo Medical Clinic",
    tagline: "Comprehensive care from registered clinicians.",
    image: clinicImg,
    theme: "#0b6d6c",
  },
  {
    slug: "diagnostics",
    name: "Subgeo Diagnostics Lab",
    tagline: "Accurate testing with rapid, same-day outcomes.",
    image: labImg,
    theme: "#7027b9",
  },
];

export function BranchesGridSection() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <RevealOnScroll direction="up">
            <h2 className="font-display text-[1.4rem] leading-[1.06] tracking-[-0.02em] text-[#22324c] md:text-[2.2rem] lg:text-[2.6rem]">
              Now three standalone and publicly traded companies
            </h2>
          </RevealOnScroll>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {branches.map((branch, index) => (
            <RevealOnScroll key={branch.slug} delay={index * 0.08}>
              <Link to="/branches/$slug" params={{ slug: branch.slug }} className="group block h-full no-underline">
                <div className="overflow-hidden">
                  <div className="relative aspect-[1.6] overflow-hidden bg-[#d9dde3]">
                    <motion.img
                      src={branch.image}
                      alt={branch.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="min-h-[120px] px-4 py-4 md:px-5 md:py-5 text-white" style={{ backgroundColor: branch.theme }}>
                    <h3 className="max-w-[12ch] font-display text-[1.05rem] leading-[1.18] tracking-[-0.02em] md:text-[1.2rem]">
                      {index === 0
                        ? "The future is our starting point"
                        : index === 1
                          ? "The energy to change the world"
                          : "Every patient has a story to tell"}
                    </h3>

                    <p className="mt-2 max-w-md font-sans text-[0.92rem] leading-[1.45] text-white/90 md:text-[0.95rem]">
                      {branch.tagline}
                    </p>

                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 font-sans text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/95 transition-transform duration-300 group-hover:translate-x-1">
                        VISIT {branch.name.replace("Subgeo ", "").toUpperCase()}
                        <ArrowUpRight className="size-4 shrink-0" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
