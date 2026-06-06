<<<<<<< HEAD
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { branchBySlug } from "@/lib/branches";
import { PremiumButton, PremiumSection } from "@/components/premium/PremiumLayout";

export function VisitUsTodaySection() {
  const branch = branchBySlug("pharmacy");

  if (!branch) return null;

  return (
    <PremiumSection variant="default" className="bg-[#dfe1e3]" title={"Visit Us Today"} subtitle={"Get the pharmaceutical care you deserve"}>
      <div className="container-x grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="mb-4 font-semibold">Contact Information</h3>
          <p className="text-muted-foreground mb-2"><Phone className="inline mr-2 size-4" />Phone: {branch.phone}</p>
          <p className="text-muted-foreground mb-2">Hours: {branch.hours}</p>
          <div className="mt-6">
            <Link to="/contact" className="inline-block">
              <PremiumButton variant="primary" size="lg">Book Appointment</PremiumButton>
            </Link>
          </div>
        </div>

        <div>
          <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden rounded-sm">
            <iframe
              title="Subgeo Pharmacy map"
=======
import { PhoneCall, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

export function VisitUsTodaySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
        <RevealOnScroll direction="left">
          <div className="card-elevated p-7">
            <h3 className="text-xl font-bold text-primary">Visit Us Today</h3>
            <p className="mt-3 text-gray-600">
              Get the care and service you deserve. Call, schedule, or drop by one of our locations.
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-primary">
                <PhoneCall className="h-4 w-4" />
                <span className="text-sm font-semibold">+254 700 000 002</span>
              </div>
              <div className="flex items-center gap-3 text-primary">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold">Mon-Sat: 8am - 6pm</span>
              </div>
            </div>
            <div className="mt-6">
              <Button className="btn-primary h-11 px-6">Book Appointment</Button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Service area map"
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.123456789!2d36.874!3d-1.269!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a...!2sSUBGEO%20CHEMIST%20LTD!5e0!3m2!1sen!2ske!4v161234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              suppressHydrationWarning
            />
          </div>
<<<<<<< HEAD
        </div>
      </div>
    </PremiumSection>
=======
        </RevealOnScroll>
      </div>
    </section>
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
  );
}