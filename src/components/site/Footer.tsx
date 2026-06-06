<<<<<<< HEAD
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart } from "lucide-react";
import bgFooter from "../../assets/background.png";
import logoSrc from "@/assets/logo.png";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Branches", href: "/branches" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
    ],
  },
];

const branchLinks = [
  { label: "Subgeo Pharmacy", href: "/pharmacy" },
  { label: "Subgeo Beauty Salon", href: "/beauty" },
  { label: "Subgeo Industrial", href: "/subgeo-industrial" },
=======
import { PhoneCall, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

// Social icons with their real brand colors
const socials = [
  { Icon: Facebook, color: "text-[#1877F2]", label: "Facebook" },
  { Icon: Twitter, color: "text-[#1DA1F2]", label: "Twitter" },
  { Icon: Instagram, color: "text-[#E4405F]", label: "Instagram" },
  { Icon: Youtube, color: "text-[#FF0000]", label: "Youtube" },
  { Icon: Linkedin, color: "text-[#0A66C2]", label: "Linkedin" },
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
];

export function Footer() {
  return (
<<<<<<< HEAD
    <footer className="relative border-t border-gray-200 dark:border-gray-800">
      {/* Background image */}
      <img src={bgFooter} alt="Footer background" className="absolute inset-0 w-full h-full object-cover" />
      {/* Lighter overlay so image is clearer */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container-x py-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-flex items-center gap-3 group no-underline">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={logoSrc}
                alt="Subgeo logo"
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
              <span className="font-display text-xl font-bold text-white">
                Subgeo
              </span>
            </Link>

            <p className="mt-6 text-sm text-white/90 leading-relaxed max-w-sm">
              Bringing trusted healthcare, pharmacy and lifestyle services together under one
              professional brand — built around the communities we serve.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -4 }}
                    className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/10 hover:text-white transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerSections[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href as any}
                    className="text-sm text-white/90 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Branches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
              Our Branches
            </h4>
            <ul className="space-y-3">
              {branchLinks.map((branch) => (
                <li key={branch.href}>
                  <Link
                    to={branch.href as any}
                    className="text-sm text-white/90 hover:text-white transition-colors no-underline"
                  >
                    {branch.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">
                  Umoja, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+254700000001" className="text-sm text-white/90 hover:text-white no-underline">
                  +254 700 000 001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@subgeo.co.ke" className="text-sm text-white/90 hover:text-white no-underline">
                  hello@subgeo.co.ke
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/20" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/80"
        >
          <div className="flex items-center gap-2">
            © {new Date().getFullYear()} Subgeo Group. Made with <Heart className="w-3 h-3 text-red-500 inline" /> for healthier communities.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors no-underline">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors no-underline">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
=======
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

        {/* Location 1: Pharmacy */}
        <div className="bg-[#1a1e23] p-6 mb-4 rounded-sm border border-gray-800/50">
          <h3 className="text-white font-bold text-[18px] mb-6">Subgeo Pharmacy</h3>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 text-[14px] text-gray-300">
              <div className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                <PhoneCall className="h-3.5 w-3.5 text-red-500" />
              </div>
              <span className="font-semibold tracking-wide">+254 700 000 002</span>
            </li>
            <li className="flex items-start gap-4 text-[14px] text-gray-300">
              <div className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="h-3.5 w-3.5 text-red-500" />
              </div>
              <span className="leading-snug underline decoration-gray-600 underline-offset-4 decoration-1">Nairobi Central<br />Nairobi, Kenya</span>
            </li>
            <li className="pt-2">
              <a href="/pharmacy" className="text-[12px] font-bold uppercase tracking-widest text-[#e0292e] flex items-center gap-2">
                Book Now 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Location 2: Industrial */}
        <div className="bg-[#1a1e23] p-6 mb-4 rounded-sm border border-gray-800/50">
          <h3 className="text-white font-bold text-[18px] mb-6">Subgeo Industrial</h3>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 text-[14px] text-gray-300">
              <div className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                <PhoneCall className="h-3.5 w-3.5 text-red-500" />
              </div>
              <span className="font-semibold tracking-wide">0733 699 441</span>
            </li>
            <li className="flex items-start gap-4 text-[14px] text-gray-300">
              <div className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="h-3.5 w-3.5 text-red-500" />
              </div>
              <span className="leading-snug underline decoration-gray-600 underline-offset-4 decoration-1">P.O. Box, 48230-00100<br />Nairobi, Kenya</span>
            </li>
            <li className="pt-2">
              <a href="/subgeo-industrial" className="text-[12px] font-bold uppercase tracking-widest text-[#e0292e] flex items-center gap-2">
                Book Now 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="bg-[#1a1e23] p-6 mb-4 rounded-sm border border-gray-800/50">
          <h3 className="text-white font-bold text-[18px] mb-6">Hours</h3>
          <div className="flex items-center gap-4 text-[14px] text-gray-300">
            <div className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
              <Clock className="h-3.5 w-3.5 text-red-500" />
            </div>
            <span className="tracking-wide">Monday - Friday<br />7.30 AM - 5.30 PM</span>
          </div>
        </div>

        {/* Connect (Socials) */}
        <div className="bg-[#1a1e23] p-6 mb-4 rounded-sm border border-gray-800/50">
          <h3 className="text-white font-bold text-[18px] mb-6">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((s, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <s.Icon className="h-4 w-4 text-gray-400" />
              </a>
            ))}
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

            {/* App Download */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Download our App</h4>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] text-gray-300">Download on the</div>
                    <div className="text-xs font-semibold -mt-0.5">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] text-gray-300">Get it on</div>
                    <div className="text-xs font-semibold -mt-0.5">Google Play</div>
                  </div>
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
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
