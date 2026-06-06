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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.123456789!2d36.874!3d-1.269!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a...!2sSUBGEO%20CHEMIST%20LTD!5e0!3m2!1sen!2ske!4v161234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              suppressHydrationWarning
            />
          </div>
        </div>
      </div>
    </PremiumSection>
  );
}