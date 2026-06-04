import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import teamImg from "@/assets/beauty.jpg";

const jobs = [
  "Lead HVAC Installer",
  "HVAC Install Assistant",
  "HVAC/Plumbing Parts Specialist",
  "Warehouse Clerk/Delivery Driver",
  "Duct Cleaning Technician",
  "Service Plumber",
];

export function NewsAndInsightsSection() {
  return (
    <section className="section-shell py-16 md:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <RevealOnScroll direction="left">
          <div className="relative">
            <img
              src={teamImg}
              alt="Team"
              className="w-full h-[360px] md:h-[420px] object-cover rounded-md shadow-lg"
            />
            <div className="absolute bottom-6 left-6 bg-accent text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
              We’re Hiring
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Careers At Subgeo Services, Inc.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Apprentice to advanced job positions available. Work for a company that cares.
          </p>
          <div className="mt-6">
            <div className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">Job Listings</div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {jobs.map((job) => (
                <div key={job} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  {job}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <Button className="btn-primary h-11 px-6">Apply Now</Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}