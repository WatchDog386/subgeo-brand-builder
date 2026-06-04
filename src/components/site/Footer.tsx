import { PhoneCall, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const socials = [Facebook, Twitter, Instagram, Youtube, Linkedin];

export function Footer() {
  return (
    <footer className="bg-[#111315] text-white">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#171a1e] border border-white/10 p-6">
            <div className="text-lg font-semibold">San Rafael</div>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-accent" />(415) 942-6565</div>
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent" />4380 Redwood Hwy, Suite A8 San Rafael, CA 94903</div>
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Book Now →</div>
          </div>

          <div className="bg-[#171a1e] border border-white/10 p-6">
            <div className="text-lg font-semibold">Santa Rosa</div>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-accent" />(707) 452-3464</div>
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent" />4380 Redwood Hwy, Suite A8 San Rafael, CA 94903</div>
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Book Now →</div>
          </div>

          <div className="bg-[#171a1e] border border-white/10 p-6">
            <div className="text-lg font-semibold">Hours</div>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />Monday - Friday</div>
              <div className="text-white/60">7.30 AM - 5.30 PM</div>
            </div>
          </div>

          <div className="bg-[#171a1e] border border-white/10 p-6">
            <div className="text-lg font-semibold">Connect</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((Icon, index) => (
                <div key={index} className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white/70">
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.18em] text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© 2023 Reserved</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/80">Terms & Conditions</a>
            <a href="#" className="hover:text-white/80">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}