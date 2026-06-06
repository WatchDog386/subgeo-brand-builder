import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/corporate-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Subgeo — Our story and purpose" },
      {
        name: "description",
        content: "How Subgeo grew from a neighbourhood pharmacy into a Kenyan multi-service group.",
      },
      { property: "og:title", content: "About Subgeo" },
      {
        property: "og:description",
        content: "Our story, purpose and the people behind the Subgeo group.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-border">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-8">
            <div className="eyebrow">About Subgeo</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
              A trusted Kenyan group, built around community.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Subgeo started as a single neighbourhood pharmacy with one promise — make quality
              healthcare and self-care accessible to everyone. Today we operate three standalone
              branches under one standard of care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <img
              src={heroImg}
              alt="Subgeo team"
              width={1792}
              height={1024}
              loading="lazy"
              className="w-full h-auto rounded-sm"
            />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="eyebrow">Our story</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              From one counter to three standalone branches.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                What began in Umoja as a small, well-loved pharmacy has grown into a coordinated
                group of services. Each Subgeo branch was added in response to what our customers
                asked for — a trusted pharmacy, a calm beauty space, and dependable industrial
                services.
              </p>
              <p>
                The thread that runs through all of it is professionalism. The same care a Subgeo
                pharmacist brings to a prescription is the care our beauty and industrial teams bring to
                every chair and every consultation room.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">What we stand for</div>
          </Reveal>
          <div className="lg:col-span-8 space-y-10">
            {[
              { t: "Trust", d: "We earn it visit by visit, not in a slogan." },
              { t: "Professionalism", d: "Qualified people, clean spaces, calm service." },
              { t: "Accessibility", d: "Premium standards at fair, transparent prices." },
              { t: "Compassion", d: "We treat every client like a member of our family." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="grid md:grid-cols-12 gap-6 border-t border-border pt-8">
                  <div className="md:col-span-4 font-display text-2xl">{v.t}</div>
                  <div className="md:col-span-8 text-muted-foreground leading-relaxed">{v.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
              Visit any of our branches and feel the Subgeo standard for yourself.
            </h2>
            <div className="mt-8 flex justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-sm bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6"
              >
                <Link to="/branches">
                  Browse branches <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm h-12 px-6">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
