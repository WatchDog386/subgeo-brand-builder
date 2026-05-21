import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { branchBySlug } from "@/lib/branches";
import { PremiumButton } from "@/components/premium/PremiumLayout";

export function VisitUsTodaySection() {
  const branch = branchBySlug("pharmacy");

  if (!branch) return null;

  return (
    <section className="relative overflow-hidden bg-[#dfe1e3] py-24 md:py-32 font-sans">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[10%] w-[28rem] h-[28rem] rounded-full bg-[#244f86]/10 blur-3xl" />
        <div className="absolute bottom-10 left-[-8rem] w-72 h-72 rounded-full bg-[#f36a2c]/10 blur-3xl" />
        <div className="absolute top-20 left-[52%] w-[32rem] h-px bg-[#f36a2c]/30 rotate-[-56deg] origin-left" />
      </div>

      <div className="relative z-10 w-full px-[5cm]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16 items-start">
          <div className="max-w-xl">
            <p className="text-[#244f86] font-semibold tracking-tight text-sm md:text-base mb-2 uppercase">OUR PURPOSE</p>
            <h2 className="font-hero text-4xl md:text-6xl leading-tight tracking-tight text-[#111827] mb-4">
              Visit Us Today
            </h2>

            <p className="mt-4 text-lg md:text-lg text-slate-700 leading-relaxed max-w-prose">
              Get the pharmaceutical care you deserve
            </p>

            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#111827] mb-4">Contact Information</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-2">
                <Phone className="inline mr-2 size-4 align-[-2px] text-[#244f86]" />Phone: {branch.phone}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-2">Hours: {branch.hours}</p>
              <div className="mt-8">
                <Link to="/contact" className="no-underline inline-flex">
                  <PremiumButton variant="primary" size="lg">
                    Book Appointment
                  </PremiumButton>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative pl-0 lg:pl-6 lg:flex lg:justify-end lg:items-start">
            <div className="absolute -top-6 left-[12%] hidden md:block h-24 w-24 rounded-full bg-[#244f86] opacity-90" />
            <div className="absolute top-24 -right-10 hidden md:block h-64 w-64 rounded-full bg-[#9bc0f2] opacity-90" />

            <div className="relative mx-0 w-full max-w-[640px] lg:ml-auto">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-none shadow-xl bg-gray-100">
                <iframe
                  title="Subgeo Pharmacy map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.123456789!2d36.874!3d-1.269!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a...!2sSUBGEO%20CHEMIST%20LTD!5e0!3m2!1sen!2ske!4v161234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}