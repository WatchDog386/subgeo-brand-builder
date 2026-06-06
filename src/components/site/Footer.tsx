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
];

export function Footer() {
  return (
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
