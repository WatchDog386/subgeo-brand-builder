import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wrench, FileText, Settings, Home, RefreshCw, Funnel, Clock, Apple } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PremiumHero, PremiumSection, PremiumButton } from "@/components/premium/PremiumLayout";
import { CenteredContent, GridContainer, ImageCard } from "@/components/premium/PremiumGrid";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import heroImg from "@/assets/corporate-hero.jpg";
import bgImg from "@/assets/background.png";

export const Route = createFileRoute("/subgeo-industrial")({
  head: () => ({
    meta: [
      { title: "Subgeo Plumbing & Industrial Works Ltd" },
      { name: "description", content: "Subgeo Plumbing & Industrial Works Ltd — plumbing, installations and industrial services." },
    ],
  }),
  component: SubgeoIndustrial,
});

function SubgeoIndustrial() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />

      <div className="relative w-full">
        <img src={bgImg} alt="Hero background" className="absolute inset-0 w-full h-screen object-cover object-top" />
        <div className="relative z-10">
          <PremiumHero
            eyebrow={"SUBGEO PLUMBING & INDUSTRIAL WORKS LTD."}
            title={<span className="hero-magazine-title whitespace-nowrap">Subgeo Plumbing And Industrial Works Ltd.</span>}
            subtitle={"Our fleet are well maintained reliable vehicles, company branded and extremely neat."}
            background="light"
            layout="magazine"
            fullscreen={true}
            cta={{ label: "Explore Our Branches", onClick: () => document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" }) }}
            showDots={false}
          />
        </div>
      </div>

      {/* Trusted testimonials — placed immediately below the hero */}
      <PremiumSection
        variant="dark"
        title="Trusted by Our Community"
        subtitle="Real experiences from people who've used Subgeo services."
        titleStyle={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.04em" }}
      >
        <GridContainer columns={3} gap="lg">
          {[
            {
              quote:
                "Subgeo has transformed how we access quality healthcare. The professionalism across all their branches is remarkable.",
              author: "Sarah Mwangi",
              title: "Community Member",
            },
            {
              quote:
                "Working with Subgeo means working with a team that understands healthcare excellence and community care.",
              author: "Dr. James Kipchoge",
              title: "Medical Professional",
            },
            {
              quote:
                "Every visit to Subgeo feels premium but accessible. That's the difference they bring to our neighborhood.",
              author: "Amina Hassan",
              title: "Regular Client",
            },
          ].map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.12} direction="up">
              <div className="glass-dark rounded-sm p-8 h-full flex flex-col justify-between">
                <p className="text-white/90 text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </GridContainer>
      </PremiumSection>
      

      <PremiumSection className="py-12" title={undefined} subtitle={undefined}>
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-sm">
                    <img src={heroImg} alt={`industries-${i}`} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Subgeo Plumbing & Industrial Works : Industries we Serve!</h2>

              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Commercial Industry</li>
                <li>Residential Homes</li>
                <li>Estate and Rental Agents</li>
                <li>Landlords</li>
                <li>Developers</li>
                <li>Industrial Industry</li>
                <li>Construction Industry</li>
                <li>Hospitality Industry</li>
                <li>Fitness Industry</li>
              </ul>

              <p className="mt-6 text-muted-foreground max-w-xl">Maecenas eget magna volutpat, tincidunt urna id, imperdiet mi. Suspendisse dignissim eros sit amet nulla faucibus tristique quis ac libero. Vestibulum molestie maximus felis, rhoncus dignissim metus.</p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection className="py-20" title={"About Us"} subtitle={undefined}>
        <div id="about" className="container-x">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-6">
              SUBGEO PLUMBING & INDUSTRIAL WORKS is a Private Limited Company, established in the 2012 and
              incorporated in 24th/06/ 2018. It is registered under the Registrar of Companies. Its business
              scope includes Plumbing, Sanitary ware Installation, Drainage, Fire fighting System
              installation, and Regular Service maintenance.
            </p>
            <p>
              To all the services provided by Subgeo Plumbing & Industrial Works Ltd have been of high
              standard and quality, satisfactory to all involved parties that include Project Managers,
              Engineers, Architects, various consultants and the clients.
            </p>
          </div>

          <div className="mt-12 container-x">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                  <Home className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Quality Service</h4>
                <p className="mt-3 text-sm text-muted-foreground">Quality service is a non-negotiable at Subgeo Plumbing Works. Many of our larger clients know our team members by first name already – they know we will be there on time and we will sort out their plumbing issues right first-time round.</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                  <Clock className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">24/7 Availability</h4>
                <p className="mt-3 text-sm text-muted-foreground">Our emergency number is manned 24/7 by a dedicated team member. Our standby teams are ready day or night to attend to your plumbing emergencies with a smile.</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                  <Apple className="size-6 text-white" />
                </div>
                <h4 className="font-semibold">Dynamic & Innovative</h4>
                <p className="mt-3 text-sm text-muted-foreground">Our dynamic management team ensures that the company is utilizing the very latest systems, methods and tools in the market to ensure speed and efficiency to clients.</p>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={"Our Services"} subtitle={"We offer professional and reliable plumbing services to meet all your residential and commercial needs."}>
        <div className="mt-8 container-x">
          <GridContainer columns={3} gap="lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                <Wrench className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">All Plumbing Maintenance Requirements</h3>
              <p className="text-sm text-muted-foreground">We offer regular, comprehensive maintenance services, including leak checks, pipe inspections, and routine servicing of taps, toilets, and drainage systems.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                <FileText className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Plumbing for Insurance Claims</h3>
              <p className="text-sm text-muted-foreground">We assist homeowners and businesses with plumbing-related insurance claims and repairs covered by providers.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                <Settings className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Electric Geysers Installation, Relocation, Repair</h3>
              <p className="text-sm text-muted-foreground">We install, relocate and repair electric geysers to ensure safe and reliable hot water supply.</p>
            </div>
          </GridContainer>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                <Home className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Kitchen & Bathroom Installations/Renovations</h4>
              <p className="text-sm text-muted-foreground">Planning a kitchen or bathroom upgrade? We provide expert plumbing services for renovations, ensuring proper installation of sinks, taps, toilets, showers, and more.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                <RefreshCw className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Shower Head Cleaning & Replacement</h4>
              <p className="text-sm text-muted-foreground">We provide thorough cleaning and replacement services to ensure your shower operates at peak performance.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#f45b6b] rounded-full mb-6">
                <Funnel className="size-6 text-white" />
              </div>
              <h4 className="font-semibold">Irrigation & Waste Pipe Leak Repairs</h4>
              <p className="text-sm text-muted-foreground">Professional leak detection and repair services to keep irrigation and waste pipes functioning properly.</p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={undefined} subtitle={undefined}>
        <div className="container-x">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#f45b6b]">Our Projects</h2>
            <p className="mt-4 max-w-3xl mx-auto text-sm text-muted-foreground">Between 2012 and 2024, we’ve successfully completed a wide range of plumbing projects, each showcasing our commitment to excellence and customer satisfaction. From residential renovations, including full kitchen and bathroom overhauls, to large-scale commercial plumbing installations, we have handled it all. Notable projects include comprehensive plumbing systems, leak detection and repair for high-end homes, and installation of state-of-the-art electric geysers.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#f45b6b] text-white px-4 py-2 rounded-t-full rounded-br-full text-sm">03/2018</div>
              <div className="overflow-hidden rounded-sm">
                <img src={heroImg} alt="project-glee" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#f45b6b] font-semibold">GLEE HOTEL |Installation of Fire pump.</h3>
              <p className="mt-2 text-sm text-muted-foreground">In 2018, we undertook a major renovation for a luxury residence, which involved extensive plumbing, drainage, and sanitary installations. Our team reworked the entire plumbing system to accommodate new fixtures in the kitchen, bathrooms, and laundry room. We also installed a state-of-the-art drainage system to ensure smooth water flow throughout the property. Additionally, we worked closely with fire safety experts to implement a robust fire fighting system, including fire sprinklers and emergency water supply lines.</p>
            </article>

            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#efefef] text-[#333] px-4 py-2 rounded-t-full rounded-br-full text-sm">02/2023</div>
              <div className="overflow-hidden rounded-sm">
                <img src={heroImg} alt="project-qwetu" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#f45b6b] font-semibold">Qwetu Catholic University| Installation of Water Reservior Tanks</h3>
              <p className="mt-2 text-sm text-muted-foreground">In 2023, we were contracted for a large-scale plumbing and drainage upgrade in a commercial office building. Our team was tasked with replacing outdated piping and improving the drainage system to meet modern standards. We installed new sanitary systems across multiple floors, including eco-friendly solutions like low-flow toilets and water-saving faucets. As part of the building's fire safety compliance, we also designed and implemented a new fire fighting system.</p>
            </article>

            <article className="relative">
              <div className="absolute -top-4 left-4 bg-[#efefef] text-[#333] px-4 py-2 rounded-t-full rounded-br-full text-sm">04/2024</div>
              <div className="overflow-hidden rounded-sm">
                <img src={heroImg} alt="project-kenya-marine" className="w-full h-56 object-cover" />
              </div>
              <h3 className="mt-4 text-[#f45b6b] font-semibold">Kenya Marine Fisheries and Socio-Economic Development | Liwatoni Project</h3>
              <p className="mt-2 text-sm text-muted-foreground">In 2024, we completed the plumbing, drainage, sanitary, and fire fighting installations for a mixed-use complex, combining residential and commercial spaces. This ambitious project involved extensive underground plumbing and drainage work, with precise calculations for water pressure and flow rates. Our team handled the installation of high-quality sanitary fixtures across apartments, office spaces, and retail areas, and implemented an advanced fire fighting system, including hydrants and emergency water supplies.</p>
            </article>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="dark" title={"Our Testimonies"} subtitle={"What our customers say"}>
        <div className="container-x">
          <div className="text-center text-white max-w-3xl mx-auto">
            <p className="mb-6">"I needed a new geyser installed and called Subgeo Plumbing for the job. Their team arrived on time, explained the process, and installed the geyser quickly and efficiently. I'm really happy with the results and the quality of their work. Highly recommend them!"</p>
            <p className="font-semibold">— Stephen Kamau</p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection title={"Contact & Location"} subtitle={"Find or contact us"}>
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 font-semibold">Get in touch</h3>
            <p className="text-muted-foreground">Phone: +254 700 000 010</p>
            <p className="text-muted-foreground">Email: info@subgeo.co.ke</p>
            <div className="mt-6">
              <Link to="/contact" className="inline-block">
                <PremiumButton variant="primary" size="lg">Contact Us</PremiumButton>
              </Link>
            </div>
          </div>

          <div>
            <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden rounded-sm">
              <iframe
                title="Subgeo map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.123456789!2d36.874!3d-1.269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a...!2sSUBGEO%20CHEMIST%20LTD!5e0!3m2!1sen!2ske!4v161234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection variant="default" title={undefined} subtitle={undefined} className="py-12">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#f45b6b] mb-4">About</h3>
              <p className="text-sm text-muted-foreground">SUBGEO PLUMBING & INDUSTRIAL WORKS is a Private Limited Company, established in the 2012 and incorporated in 24th/06/ 2018. It is registered under the Registrar of Companies. Its business scope includes Plumbing, Sanitary ware Installation, Drainage, Fire fighting System installation, and Regular Service maintenance.</p>

              <div className="mt-6 flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#1da1f2] flex items-center justify-center text-white">t</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#e60023] flex items-center justify-center text-white">p</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#db4437] flex items-center justify-center text-white">g</a>
              </div>

              <p className="mt-6 text-xs">© 2025 Subgeo Plumbing And Industrial Works Ltd</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#f45b6b] mb-4">Email US <span className="text-[#1f6feb]">info@subgeo.co.ke</span></h3>
              <p className="text-sm text-muted-foreground">All the services provided by Subgeo Plumbing & Industrial Works Ltd have been of high standard and quality, satisfactory to all involved parties that include Project Managers, Engineers, Architects, various consultants and the clients</p>

              <div className="mt-6 flex items-center gap-4">
                <input type="email" placeholder="Enter Email" className="px-4 py-3 border rounded-sm flex-1" />
                <button className="bg-[#f45b6b] text-white px-4 py-3 rounded-sm">EMAIL : info@subgeo.co.ke</button>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <Footer />
    </div>
  );
}
