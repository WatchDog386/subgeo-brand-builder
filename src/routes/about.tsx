import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, HeartHandshake, UserCheck, Scale } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 md:pt-48 pb-16 md:pb-24 overflow-hidden">
        {/* Decorative Shapes matching the homepage vibe */}
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gray-50/50 -z-10 rounded-bl-[100px]" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-[#223a5c] opacity-5 -z-10" />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-8">
              <div className="font-bold text-[11px] uppercase tracking-widest text-[#e0292e] mb-4">
                About Subgeo
              </div>
              <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] text-[#223a5c] tracking-tight">
                A trusted Kenyan group, built around community.
              </h1>
              <div className="w-20 h-1 bg-[#e0292e] mt-8 mb-6" />
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Subgeo started as a single neighbourhood pharmacy with one promise — make quality
                healthcare and self-care accessible to everyone. Today we operate three standalone
                branches under one standard of care.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story Image Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#e0292e] z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#223a5c] z-0" />
            <img
              src={heroImg}
              alt="Subgeo team"
              width={1792}
              height={1024}
              loading="lazy"
              className="w-full h-auto rounded-none shadow-xl relative z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="pl-0 lg:pl-10">
              <div className="font-bold text-[11px] uppercase tracking-widest text-[#e0292e] mb-3">
                Our Story
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#223a5c] leading-tight mb-6">
                From one counter to three standalone branches.
              </h2>
              <div className="space-y-5 text-[15px] text-gray-600 leading-relaxed">
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <Reveal className="text-center mb-16">
            <div className="font-bold text-[11px] uppercase tracking-widest text-[#e0292e] mb-3">
              What We Stand For
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#223a5c]">
              Our Core Principles
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Trust",
                desc: "We earn it visit by visit, not in a slogan.",
              },
              {
                icon: UserCheck,
                title: "Professionalism",
                desc: "Qualified people, clean spaces, calm service.",
              },
              {
                icon: Scale,
                title: "Accessibility",
                desc: "Premium standards at fair, transparent prices.",
              },
              {
                icon: HeartHandshake,
                title: "Compassion",
                desc: "We treat every client like a member of our family.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group border border-gray-100 p-8 h-full flex flex-col hover:border-[#223a5c]/20 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="h-12 w-12 rounded-full bg-[#f8f9fb] text-[#223a5c] group-hover:bg-[#223a5c] group-hover:text-white flex items-center justify-center transition-colors mb-6">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#223a5c] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a2c4e] text-center relative overflow-hidden">
        {/* Subtle background red accent */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#e0292e] opacity-5 blur-3xl pointer-events-none" />
        
        <div className="container-x relative z-10">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-3xl mx-auto leading-tight text-white">
              Feel the Subgeo standard for yourself.
            </h2>
            <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
              Whether you need modern industrial solutions, expert healthcare consulting, or premier beauty services, our team is ready to serve.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="rounded-none bg-[#e0292e] hover:bg-[#c42428] text-white h-14 px-8 font-semibold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <Link to="/branches">
                  Browse branches <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-none border-white text-white hover:bg-white hover:text-[#1a2c4e] h-14 px-8 font-semibold text-sm uppercase tracking-wider transition-colors bg-transparent"
              >
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
