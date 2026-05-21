import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { branches } from "@/lib/branches";

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 md:pt-44 pb-16 border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Our branches</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
              Six specialised branches under one Subgeo standard.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl">
              Each Subgeo branch is staffed by qualified professionals and held to the same standard
              of care, hygiene and service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid md:grid-cols-2 gap-12 md:gap-16">
          {branches.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.04}>
              <Link to="/branches/$slug" params={{ slug: b.slug }} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-muted">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand font-semibold">
                      {b.category}
                    </div>
                    <h2 className="mt-2 font-display text-2xl md:text-3xl group-hover:text-brand transition-colors">
                      {b.name}
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-md">{b.tagline}</p>
                  </div>
                  <ArrowUpRight className="size-6 text-muted-foreground group-hover:text-brand group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
