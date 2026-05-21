import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { branches } from "@/lib/branches";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Subgeo — Get in touch" },
      { name: "description", content: "Reach the Subgeo team or any of our branches in Nairobi." },
      { property: "og:title", content: "Contact Subgeo" },
      { property: "og:description", content: "Reach the Subgeo team or any of our branches." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [branch, setBranch] = useState<string>("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received — we'll get back to you within one business day.");
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 md:pt-44 pb-16 border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Contact</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl tracking-tight leading-[1.02] max-w-3xl">
              Talk to the Subgeo team.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl">
              Questions, partnerships, careers or branch enquiries — we'll get back to you within
              one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x text-center">
          <h2 className="text-xl font-semibold text-[#f45b6b]">Contact us</h2>
          <p className="mt-4 text-lg">Email US : <span className="text-[#1f6feb]">info@subgeo.co.ke</span></p>
          <p className="mt-2 text-base">or Call us</p>

          <div className="mt-6 flex flex-col items-center gap-2">
            {branches.map((b) => (
              <div key={b.slug} className="flex items-center gap-4">
                <Phone className="text-[#f45b6b]" />
                <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="text-[#1f6feb] font-medium">{b.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Phone" />
                </div>

                <Textarea placeholder="Message.." rows={8} />

                <div>
                  <Button type="submit" className="bg-[#f45b6b] text-white px-6 py-3">Email : info@subgeo.co.ke</Button>
                </div>
              </form>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#f45b6b]">Address</h4>
              <p className="mt-3 text-sm text-muted-foreground">Subgeo Plumbing And Industrial Works Ltd,<br />P.O. BOX, 48230-00100.</p>

              <h4 className="text-lg font-semibold text-[#f45b6b] mt-6">Address1</h4>
              <p className="mt-3 text-sm text-muted-foreground">P.O. Box, 48230 NAIROBI TEL: 0733699441.<br />Email: info@subgeo.co.ke</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="w-full bg-gray-100 overflow-hidden rounded-sm">
            <iframe
              title="Subgeo map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.123456789!2d36.874!3d-1.269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a...!2sSUBGEO%20CHEMIST%20LTD!5e0!3m2!1sen!2ske!4v161234567890"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Toaster />
      <Footer />
    </div>
  );
}
