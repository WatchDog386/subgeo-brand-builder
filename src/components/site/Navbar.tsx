<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Facebook, Twitter, Linkedin } from "lucide-react";
import logoSrc from "@/assets/logo.png";

type NavItem = { to: string; label: string; hasMenu?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/branches", label: "Branches", hasMenu: true },
  { to: "/contact", label: "Contact" },
];

const branchLinks = [
  { to: "/pharmacy", label: "Subgeo Pharmacy", category: "Pharmacy" },
  { to: "/beauty", label: "Subgeo Beauty Salon", category: "Beauty" },
  { to: "/subgeo-industrial", label: "Subgeo Industrial", category: "Industrial Works" },
=======
"use client";

import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, Phone, MapPin, ChevronDown, ArrowRight, Pill, Sparkles, Wrench } from "lucide-react";
import { branches } from "@/lib/branches";

const nav: { label: string; to?: string; links?: { label: string; to: string }[] }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { 
    label: "Our Branches", 
    links: [
      { to: "/pharmacy", label: "Pharmacy" },
      { to: "/beauty", label: "Beauty" },
      { to: "/subgeo-industrial", label: "Subgeo Industrial" }
    ] 
  },
  { to: "/contact", label: "Contact" },
];

const phoneTiles = [
  { phone: "+254 700 000 002", location: "Subgeo Pharmacy" },
  { phone: "0733 699 441", location: "Subgeo Industrial" },
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
];

export function Navbar() {
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const [branchOpen, setBranchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={`relative overflow-visible bg-[#203a72]/95 text-white backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-[0_8px_30px_rgba(2,8,23,0.35)]" : ""}`}>
        <div className="container-x hidden lg:flex h-12 items-center justify-end border-b border-white/25 text-sm">
          <div className="flex items-center gap-4 text-[#cbd5e1]">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>

        <div className="container-x relative z-10 grid h-[84px] grid-cols-[auto_1fr_auto] items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group" aria-label="Home">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={logoSrc}
              alt="Subgeo logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
              style={{ zIndex: 60 }}
            />
            <motion.span
              className="hidden md:block font-sans text-[18px] md:text-[19px] font-semibold tracking-normal text-white"
              whileHover={{ scale: 1.02 }}
            >
              Subgeo
            </motion.span>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-9 font-sans text-[13px] font-semibold uppercase tracking-[0.06em]">
          {nav.map((item, idx) =>
            item.hasMenu ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setBranchOpen(true)}
                onMouseLeave={() => setBranchOpen(false)}
              >
                <motion.button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2 py-2 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white hover:text-white/85 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <span>{item.label.toUpperCase()}</span>
                  <motion.div
                    animate={{ rotate: branchOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {branchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[640px] z-50"
                    >
                        <div className="bg-white rounded-md shadow-xl p-3 grid grid-cols-2 gap-2">
                            {branchLinks.map((branch) => (
                              <motion.div key={branch.to} whileHover={{ scale: 1.02 }}>
                                <Link
                                  to={branch.to}
                                  className="group flex items-start justify-between gap-3 rounded-md p-4 hover:bg-[#ecf3ff] transition-all no-underline"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-[#072235]">
                                      {branch.label}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1">
                                      {branch.category}
                                    </div>
                                  </div>
                                  <motion.div
                                    className="text-[#28b463] group-hover:text-[#1f9a4f] transition-colors"
                                    whileHover={{ x: 2, y: -2 }}
                                  >
                                    <ArrowUpRight className="w-4 h-4" />
                                  </motion.div>
                                </Link>
                              </motion.div>
                            ))}
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              ) : (
              <motion.div key={item.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.4 }}>
                <Link
                  to={item.to}
                  className="block px-2 py-2 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white hover:text-white/85 transition-colors no-underline"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-white" }}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    {item.label.toUpperCase()}
                  </motion.span>
                </Link>
              </motion.div>
            ),
          )}
          </nav>

          {/* Right: CTA + Mobile Menu */}
          <div className="flex items-center justify-end gap-3">
              <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <Link
                      to="/contact"
                      className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-[#1fc95a] px-6 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white no-underline shadow-[0_10px_24px_rgba(31,201,90,0.24)] transition-all hover:bg-[#16b94f]"
                    >
                      <motion.span className="flex items-center gap-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
                        <span>Book appointment</span>
                      </motion.span>
                    </Link>
                  </motion.div>

            <motion.button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors"
              aria-label="Menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
=======
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <>
      {/* Backdrop for Mega Menu - covers the rest of the page */}
      <div 
        className={`fixed inset-0 top-[112px] bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 pointer-events-none
          ${activeMegaMenu ? 'opacity-100' : 'opacity-0'}
        `}
      />

      <header className="fixed top-0 inset-x-0 z-50">
      {/* Top Bar - White Background (Original height kept at h-20) */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-x h-16 flex items-center justify-between px-4 lg:px-8">
          {/* Company Name (Logo removed) */}
          <Link to="/" className="flex items-center no-underline">
            <span className="text-[#be232a] text-[20px] lg:text-[24px] font-bold tracking-[0.02em] leading-none" style={{ fontFamily: "'Oswald', sans-serif", transform: "scaleY(1.15)", transformOrigin: "bottom" }}>
              SUBGEO HOLDING COMPANY LTD.
            </span>
          </Link>

          {/* Phone Numbers - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {phoneTiles.map((tile) => (
              <div key={tile.phone} className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[13px] font-semibold text-gray-900 leading-tight">{tile.phone}</div>
                  <div className="text-[10px] text-gray-500 flex items-center gap-1 leading-tight">
                    <MapPin className="h-2.5 w-2.5" /> {tile.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden h-8 w-8 flex items-center justify-center rounded-md border border-gray-300"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Bottom Bar - Dark Navy Background (Height increased to h-16) */}
      <div className="bg-[#1e3a5f] relative">
        <div className="container-x min-h-[64px] py-3 lg:py-0 lg:h-16 flex items-center justify-between px-2 lg:px-8 relative z-50">
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-5 h-full">
            {nav.map((item) => (
              item.links ? (
                <div 
                  key={item.label}
                  onMouseEnter={() => setActiveMegaMenu(item.label)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                  className="flex items-center h-full py-4 lg:py-0"
                >
                  <button className="text-white/90 hover:text-white text-[11px] font-semibold flex items-center gap-1 uppercase tracking-[0.05em] focus:outline-none cursor-pointer h-full">
                    {item.label}
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMegaMenu === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50 cursor-default transition-all duration-200 origin-top
                      ${activeMegaMenu === item.label ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}
                    `}
                  >
                    <div className="container-x px-8 py-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 max-w-[1000px] mx-auto">
                        {item.links.map(link => {
                          const branchSlug = link.to.replace('/', '');
                          let Icon = Pill;
                          let description = "Expert pharmacists and trusted medicines.";
                          if (branchSlug === 'beauty') {
                            Icon = Sparkles;
                            description = "Elevated self-care and premium treatments.";
                          }
                          if (branchSlug === 'subgeo-industrial') {
                            Icon = Wrench;
                            description = "Reliable plumbing and industrial solutions.";
                          }

                          return (
                            <Link 
                              key={link.to} 
                              to={link.to as any} 
                              className="group flex gap-4 p-4 rounded-xl no-underline outline-none focus:outline-none transition-all duration-300 hover:bg-gray-50/80" 
                              onClick={() => setActiveMegaMenu(null)}
                            >
                              <div className="mt-1 flex-shrink-0">
                                <Icon className="w-5 h-5 text-gray-500 transition-colors duration-300 group-hover:text-[#be232a]" strokeWidth={2} />
                              </div>
                              <div className="flex flex-col">
                                <h3 className="text-[15px] font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-[#be232a]">{link.label}</h3>
                                <p className="text-[13px] text-gray-500 leading-snug">
                                  {description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to!}
                  className="text-white/90 hover:text-white text-[11px] font-semibold no-underline flex items-center gap-1 uppercase tracking-[0.05em] h-full"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Us Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="text-white hover:text-white/90 text-[11px] font-semibold no-underline flex items-center gap-1.5 tracking-[0.05em]"
            >
              CONTACT US
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Phone Numbers - Shown only on Mobile */}
          <div className="flex w-full justify-between items-center lg:hidden gap-2">
            {phoneTiles.map((tile) => (
              <div key={tile.phone} className="flex items-center gap-1.5 flex-1 justify-center">
                <div className="h-5 w-5 lg:h-8 lg:w-8 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="h-[10px] w-[10px] lg:h-3.5 lg:w-3.5" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[10px] lg:text-[13px] font-semibold text-white leading-tight">{tile.phone}</div>
                  <div className="text-[8px] lg:text-[10px] text-white/70 flex items-center gap-0.5 leading-tight uppercase tracking-wider">
                    {tile.location}
                  </div>
                </div>
              </div>
            ))}
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/20 bg-[#1d3768] overflow-hidden relative"
          >
            <div className="container-x relative z-10 py-6 flex flex-col space-y-1">
              {nav.map((item) =>
                !item.hasMenu ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="py-3 px-4 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-white/90 rounded-md hover:bg-white/10 transition-colors no-underline"
                  >
                    {item.label.toUpperCase()}
                  </Link>
                ) : null,
              )}

              <div className="py-4 mt-2">
                <p className="text-xs uppercase tracking-widest font-semibold text-white/60 px-4 mb-3">
                  Branches
                </p>
                <div className="space-y-1">
                  {branchLinks.map((branch) => (
                    <Link
                      key={branch.to}
                      to={branch.to}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-4 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-white/90 rounded-md hover:bg-white/10 transition-colors no-underline"
                    >
                      {branch.label.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center py-3 px-4 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-white rounded-md bg-[#1fc95a] no-underline"
                  >
                  Book appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
=======
      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="container-x py-4 px-4 flex flex-col gap-4">
            {/* Phone Numbers - Mobile */}
            {phoneTiles.map((tile) => (
              <div key={tile.phone} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-semibold text-gray-900">{tile.phone}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {tile.location}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="border-t border-gray-200 pt-4 mt-2">
              {nav.map((item) => (
                item.links ? (
                  <div key={item.label} className="border-b border-gray-100">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full py-3 text-sm font-semibold text-gray-800 uppercase flex items-center justify-between hover:text-red-600"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="flex flex-col pb-2">
                        {item.links.map(link => (
                          <Link
                            key={link.to}
                            to={link.to as any}
                            className="block py-2 pl-4 text-sm text-gray-600 hover:text-red-600 no-underline"
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to!}
                    className="block py-3 text-sm font-semibold text-gray-800 hover:text-red-600 no-underline border-b border-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                className="mt-4 bg-red-600 text-white inline-flex h-11 items-center justify-center px-6 text-sm font-semibold rounded-lg no-underline w-full"
                onClick={() => setOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
  );
}