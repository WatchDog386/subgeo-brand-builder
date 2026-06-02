import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check, Clock, Phone } from "lucide-react";
import { branches } from "@/lib/branches";
import beautyImg from "@/assets/beauty.jpg";

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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Services</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl">Other Subgeo branches</h2>
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
    </div>
  );
}
