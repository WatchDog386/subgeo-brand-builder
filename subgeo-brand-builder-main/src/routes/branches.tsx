import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { branches } from "@/lib/branches";

const cardThemes = [
  { panel: "#07004a" },
  { panel: "#056a67" },
  { panel: "#6f2dbd" },
  { panel: "#8a5c14" },
  { panel: "#1f2937" },
  { panel: "#0f766e" },
];

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Subgeo Branches — Pharmacy, Clinic, Lab, Wellness, Barber, Beauty" },
      {
        name: "description",
        content: "Explore the six specialised branches that make up the Subgeo group.",
      },
      { property: "og:title", content: "Subgeo Branches" },
      { property: "og:description", content: "Six specialised divisions, one Subgeo standard." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="min-h-screen bg-white text-[#14213d]">
      <Navbar />

      <section className="pt-20 md:pt-28 pb-10 md:pb-12">
        <div className="container-x text-center">
          <Reveal>
            <div className="eyebrow justify-center">OUR BRANCHES</div>
            <h1 className="mx-auto mt-5 max-w-5xl font-display text-[2.5rem] leading-[1.08] tracking-[-0.04em] text-[#22324c] md:text-[3.7rem] lg:text-[4.4rem]">
              Six specialised branches under one Subgeo standard.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-sans text-[1.02rem] leading-[1.8] text-[#667085] md:text-[1.15rem]">
              Each branch combines professional expertise, a calm client experience, and a distinct service focus while keeping the same Subgeo standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {branches.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.04}>
              <Link to="/branches/$slug" params={{ slug: b.slug }} className="group block h-full no-underline">
                <div className="overflow-hidden bg-white shadow-[0_18px_48px_rgba(16,24,40,0.08)] transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="relative aspect-[1.06] overflow-hidden bg-[#e5e7eb]">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                </div>
                  <div
                    className="flex min-h-[230px] flex-col justify-between px-6 py-6 text-white md:px-7 md:py-7"
                    style={{ backgroundColor: cardThemes[i % cardThemes.length].panel }}
                  >
                    <div>
                      <h2 className="max-w-[10ch] font-display text-[1.7rem] leading-[1.18] tracking-[-0.03em] md:text-[1.95rem]">
                        {b.name}
                      </h2>
                      <p className="mt-4 max-w-md font-sans text-[1.02rem] leading-[1.65] text-white/88 md:text-[1.08rem]">
                        {b.tagline}
                      </p>
                    </div>

                    <div className="pt-8">
                      <span className="inline-flex items-center gap-2 font-sans text-[0.76rem] font-bold uppercase tracking-[0.26em] text-white/92 transition-transform duration-300 group-hover:translate-x-1">
                        VISIT {b.name.replace("Subgeo ", "").toUpperCase()}
                        <ArrowUpRight className="size-4 shrink-0" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container-x">
          <div className="rounded-none border border-[#d9dee8] bg-[#f7f8fb] px-6 py-7 md:px-8 md:py-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">SERVICE PROMISE</div>
                <h2 className="mt-3 font-display text-2xl leading-tight tracking-[-0.03em] text-[#22324c] md:text-3xl">
                  Consistent care, every branch.
                </h2>
              </div>
              <p className="max-w-2xl font-sans text-[1rem] leading-[1.75] text-[#667085]">
                From pharmacy and clinic services to diagnostics, wellness, barbering, and beauty, every location is designed to feel premium, calm, and dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
