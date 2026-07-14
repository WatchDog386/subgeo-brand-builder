import { PhoneCall, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

// Social icons with their real brand colors
const socials = [
  { Icon: Facebook, color: "text-[#1877F2]", label: "Facebook" },
  { Icon: Twitter, color: "text-[#1DA1F2]", label: "Twitter" },
  { Icon: Instagram, color: "text-[#E4405F]", label: "Instagram" },
  { Icon: Youtube, color: "text-[#FF0000]", label: "Youtube" },
  { Icon: Linkedin, color: "text-[#0A66C2]", label: "Linkedin" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#161a1e] lg:bg-white text-white lg:text-gray-800 font-sans">
      {/* ──────────────── MOBILE FOOTER (As per Image 3) ──────────────── */}
      <div className="block lg:hidden w-full px-4 py-8">
        
        {/* Logo and Email Subscription */}
        <div className="bg-[#161a1e] mb-6">
          <a href="/" className="no-underline block mb-6">
            <span className="text-white text-[24px] font-bold tracking-[0.02em] leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
              SUBGEO HOLDING CO.
            </span>
          </a>
          
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="w-full px-4 py-3.5 bg-[#1f242b] border border-gray-700/50 rounded-sm text-[13px] text-white focus:outline-none focus:border-gray-500 uppercase tracking-widest placeholder:text-gray-500"
            />
            <button className="w-full bg-[#e0292e] text-white h-[50px] font-bold text-[13px] tracking-widest flex items-center justify-center gap-2 hover:bg-[#c42428] transition-colors rounded-sm uppercase">
              Book Now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Location & Info Cards - side by side on mobile */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Location 1: Pharmacy */}
          <div className="bg-[#1a1e23] p-4 rounded-sm border border-gray-800/50">
            <h3 className="text-white font-bold text-[14px] mb-4">Subgeo Pharmacy</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[12px] text-gray-300">
                <div className="h-6 w-6 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="h-3 w-3 text-red-500" />
                </div>
                <span className="font-semibold tracking-wide">+254 700 000 002</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] text-gray-300">
                <div className="h-6 w-6 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3 w-3 text-red-500" />
                </div>
                <span className="leading-snug underline decoration-gray-600 underline-offset-4 decoration-1">Nairobi Central<br />Nairobi, Kenya</span>
              </li>
              <li className="pt-1">
                <a href="/pharmacy" className="text-[11px] font-bold uppercase tracking-widest text-[#e0292e] flex items-center gap-1">
                  Book Now 
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Location 2: Industrial */}
          <div className="bg-[#1a1e23] p-4 rounded-sm border border-gray-800/50">
            <h3 className="text-white font-bold text-[14px] mb-4">Subgeo Industrial</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[12px] text-gray-300">
                <div className="h-6 w-6 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="h-3 w-3 text-red-500" />
                </div>
                <span className="font-semibold tracking-wide">0733 699 441</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] text-gray-300">
                <div className="h-6 w-6 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3 w-3 text-red-500" />
                </div>
                <span className="leading-snug underline decoration-gray-600 underline-offset-4 decoration-1">P.O. Box, 48230-00100<br />Nairobi, Kenya</span>
              </li>
              <li className="pt-1">
                <a href="/subgeo-industrial" className="text-[11px] font-bold uppercase tracking-widest text-[#e0292e] flex items-center gap-1">
                  Book Now 
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="bg-[#1a1e23] p-4 rounded-sm border border-gray-800/50">
            <h3 className="text-white font-bold text-[14px] mb-4">Hours</h3>
            <div className="flex items-center gap-2 text-[12px] text-gray-300">
              <div className="h-6 w-6 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                <Clock className="h-3 w-3 text-red-500" />
              </div>
              <span className="tracking-wide">Monday - Friday<br />7.30 AM - 5.30 PM</span>
            </div>
          </div>

          {/* Connect (Socials) */}
          <div className="bg-[#1a1e23] p-4 rounded-sm border border-gray-800/50">
            <h3 className="text-white font-bold text-[14px] mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socials.map((s, i) => (
                <a key={i} href="#" className="h-8 w-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <s.Icon className="h-3.5 w-3.5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="flex justify-between items-center text-[12px] mb-4">
            <span className="text-[#e0292e]">Akib Tanjil</span>
            <span className="text-gray-500">© 2026 Reserved</span>
          </div>
          <div className="flex justify-between text-[12px] text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* ──────────────── DESKTOP FOOTER (Hidden on mobile) ──────────────── */}
      <div className="hidden lg:block w-full">
      <div className="container mx-auto px-6 py-12 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Logo Area */}
          <div className="flex items-center">
            <a href="/" className="no-underline">
              <span className="text-[#be232a] text-[20px] lg:text-[24px] font-bold tracking-[0.02em] leading-none" style={{ fontFamily: "'Oswald', sans-serif", transform: "scaleY(1.15)", transformOrigin: "bottom", display: "inline-block" }}>
                SUBGEO HOLDING COMPANY LTD.
              </span>
            </a>
          </div>

          {/* Right Side: Newsletter & Apps */}
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-auto">
            {/* Newsletter */}
            <div>
              <h4 className="text-base font-display font-bold text-[#223a5c] mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 border border-gray-200 rounded text-sm w-64 focus:outline-none focus:border-[#223a5c] text-gray-600"
                />
                <button className="px-6 py-3 bg-[#e0292e] text-white text-sm font-semibold rounded hover:bg-[#c42428] uppercase tracking-wide transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

  
          </div>
        </div>
      </div>

      {/* Middle Section: Link Columns (Using your content) */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Pharmacy */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-[#223a5c]">Subgeo Pharmacy</h3>
            <ul className="space-y-4 text-[15px] text-gray-600">
              <li className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-[#e0292e]" />
                +254 700 000 002
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#e0292e] mt-1" />
                Nairobi Central<br />Nairobi, Kenya
              </li>
              <li className="pt-3">
                <a href="/pharmacy" className="text-[11px] font-bold uppercase tracking-wider text-[#e0292e] hover:text-[#c42428] transition-colors">
                  Book Now &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Industrial */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-[#223a5c]">Subgeo Industrial</h3>
            <ul className="space-y-4 text-[15px] text-gray-600">
              <li className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-[#e0292e]" />
                0733 699 441
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#e0292e] mt-1" />
                P.O. Box, 48230-00100<br />Nairobi, Kenya
              </li>
              <li className="pt-3">
                <a href="/subgeo-industrial" className="text-[11px] font-bold uppercase tracking-wider text-[#e0292e] hover:text-[#c42428] transition-colors">
                  Book Now &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-[#223a5c]">Hours</h3>
            <ul className="space-y-4 text-[15px] text-gray-600">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#e0292e]" />
                Monday - Friday
              </li>
              <li className="pl-7 text-gray-500">
                7.30 AM - 5.30 PM
              </li>
            </ul>
          </div>

          {/* Column 4: Information (From your original copyright links) */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-[#223a5c]">Information</h3>
            <ul className="space-y-3 text-[15px] text-gray-600">
              <li><a href="#" className="hover:text-[#e0292e] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#e0292e] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#e0292e] transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-[#e0292e] transition-colors">Shipping Info</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Dark Bar (Matching Zalora's help section) */}
      <div className="bg-[#1e2532] text-white">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Help Text */}
            <div className="md:col-span-1">
              <p className="text-sm font-bold text-white mb-1">We're always here to help you...</p>
              <p className="text-xs text-gray-400">Reach out to us through any of these support channels</p>
            </div>
            
            {/* Hotline (Using your San Rafael number) */}
            <div>
              <p className="text-xs text-gray-400 mb-1">Hotline:</p>
              <p className="text-sm font-medium text-white">0733 699 441</p>
            </div>
            
            {/* Email */}
            <div>
              <p className="text-xs text-gray-400 mb-1">Email:</p>
              <p className="text-sm font-medium text-white">info@subgeo.co.ke</p>
            </div>
            
            {/* Connect with us (Colored Icons) */}
            <div>
              <p className="text-xs text-gray-400 mb-3">Connect with us</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, color, label }, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    aria-label={label}
                    className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className={`h-4 w-4 ${color}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Very Bottom Copyright Bar */}
      <div className="bg-white border-t border-gray-100 py-4">
        <div className="container mx-auto px-6 text-[11px] text-gray-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>&copy; 2026 Subgeo Holding Ltd. All Rights Reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
      </div>
    </footer>
  );
}