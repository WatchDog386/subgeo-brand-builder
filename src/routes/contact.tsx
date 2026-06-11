import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { branches } from "@/lib/branches";
import whyImg from "@/assets/why.png";

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
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q=" alt="Contact Hero" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center">
          <Reveal>
            <h1 className="text-white font-display font-bold text-5xl md:text-6xl tracking-tight">
              Contact
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container-x text-center mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[#fc584e] text-sm font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#fc584e]"></span>
              Contact Info
              <span className="w-2 h-2 rounded-full bg-[#fc584e]"></span>
            </div>
            <h2 className="text-[#222] font-display font-bold text-4xl md:text-5xl tracking-tight">
              <span className="text-[#fc584e]">Contact</span> & Join Together
            </h2>
            <p className="mt-4 text-[#777] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Questions, partnerships, careers or branch enquiries — our team is ready to assist you. 
              We typically reply within one business day.
            </p>
          </Reveal>
        </div>

        <div className="container-x">
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 lg:px-0">
              
              {/* Location */}
              <div className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transform hover:-translate-y-1 transition-transform border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#202742] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Location..</h4>
                  <h3 className="text-[#fc584e] font-semibold text-lg mb-2">Visit Us At</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Subgeo Plumbing And Industrial Works Ltd<br/>P.O. Box, 48230 Nairobi</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transform hover:-translate-y-1 transition-transform border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
                  <Phone className="text-[#202742] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">24*7 Service..</h4>
                  <h3 className="text-[#fc584e] font-semibold text-lg mb-2">Call Us On</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Tel : 0733 699 441<br/>Mob : 0700 000 001</p>
                </div>
              </div>

              {/* Mail Address */}
              <div className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transform hover:-translate-y-1 transition-transform border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
                  <Mail className="text-[#202742] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Drop a Line..</h4>
                  <h3 className="text-[#fc584e] font-semibold text-lg mb-2">Mail Address</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">info@subgeo.co.ke<br/>support@subgeo.co.ke</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transform hover:-translate-y-1 transition-transform border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
                  <Clock className="text-[#202742] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Office Hours..</h4>
                  <h3 className="text-[#fc584e] font-semibold text-lg mb-2">Opening Time</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Mon - Fri : 8am - 6pm<br/>Saturday : 9am - 2pm</p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="pt-16 lg:pt-24 pb-0 bg-white relative z-10">
        <div className="container-x max-w-[1100px] mx-auto relative z-10 flex flex-col lg:flex-row items-end gap-16 lg:gap-12">
          
          {/* Left Side : Image & Info Box */}
          <div className="w-full lg:w-[45%] relative flex items-end justify-center lg:justify-end pt-32 lg:pt-0">
            
            {/* Floating Info Box (Behind the image on the left) */}
            <div className="absolute top-10 lg:-top-10 left-0 lg:left-0 xl:left-[-20px] z-10 bg-[#fc584e] rounded-[24px] text-white p-8 w-[240px] sm:w-[280px] shadow-2xl">
              <div className="bg-white text-[#fc584e] w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-center font-bold text-[18px] mb-3">Chat With Live !</h3>
              <p className="text-center text-[11px] leading-relaxed text-white/90 mb-8 pt-2">
                Porro. Erat gravida adipisci quibusdam faucibus diam molestiae? Ante, arcu commo do, ront Phasellus risus.
              </p>
              <div className="flex justify-center">
                <Button className="bg-white text-[#fc584e] hover:bg-gray-100 rounded-full px-6 py-2 h-9 text-[10px] font-extrabold uppercase tracking-widest">
                  LET'S CHAT
                </Button>
              </div>
            </div>

            {/* The Image (the transparent png standing in front) */}
            <div className="relative z-20 w-[260px] md:w-[320px] max-w-[380px] lg:mr-8 xl:mr-16">
               <img src={whyImg} alt="Customer Service" className="w-full h-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] block" />
            </div>
            
          </div>

          {/* Right Side : The Form */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center pb-12 lg:pb-16">
            
            <Reveal>
              {/* Heading */}
              <div className="inline-flex items-center gap-2 text-[#fc584e] text-[10px] font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fc584e]"></span>
                CONTACT US
                <span className="w-1.5 h-1.5 rounded-full bg-[#fc584e]"></span>
              </div>
              <h2 className="text-[#202742] font-display font-[900] text-[32px] md:text-[42px] leading-[1.1] mb-10">
                <span className="text-[#fc584e]">Reach</span> & Get In Touch<br />
                With Us !
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your name*" 
                    className="bg-[#f7f8f9] border-none rounded-full h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#fc584e]" 
                    required 
                  />
                  <Input 
                    placeholder="Your Email*" 
                    type="email" 
                    className="bg-[#f7f8f9] border-none rounded-full h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#fc584e]" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your number*" 
                    className="bg-[#f7f8f9] border-none rounded-full h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#fc584e]" 
                  />
                  <Input 
                    placeholder="Your Subject*" 
                    className="bg-[#f7f8f9] border-none rounded-full h-12 px-6 text-[13px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#fc584e]" 
                  />
                </div>
                <Textarea 
                  placeholder="Enter message" 
                  rows={5} 
                  className="bg-[#f7f8f9] border-none rounded-[20px] p-6 text-[13px] placeholder:text-gray-400 resize-none focus-visible:ring-1 focus-visible:ring-[#fc584e]" 
                />
                
                <div className="mt-2 text-left">
                  <Button 
                    type="submit" 
                    className="bg-[#fc584e] hover:bg-[#eb4a40] text-white rounded-full px-8 py-6 h-12 text-[11px] font-extrabold uppercase tracking-widest shadow-md transition-transform hover:-translate-y-0.5 w-[200px]"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </Reveal>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full relative z-0 mt-8 lg:mt-0">
        <div className="w-full bg-gray-100 overflow-hidden h-[450px]">
          <iframe
            title="Subgeo map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.123456789!2d36.874!3d-1.269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a...!2sSUBGEO%20CHEMIST%20LTD!5e0!3m2!1sen!2ske!4v161234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            suppressHydrationWarning
          />
        </div>
      </section>

      <Toaster />
      <Footer />
    </div>
  );
}

