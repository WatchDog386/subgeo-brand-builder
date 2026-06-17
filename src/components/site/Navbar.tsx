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
];

export function Navbar() {
  const [open, setOpen] = useState(false);
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
  {/* Top Bar - Match footer social icon section color */}
  <div className="bg-[#1e2532]">
        <div className="container-x h-16 flex items-center justify-between px-4 lg:px-8">
        {/* Company Name (Logo removed) */}
        <Link to="/" className="flex items-center no-underline">
          <span className="text-white text-[20px] lg:text-[24px] font-bold tracking-[0.02em] leading-none" style={{ fontFamily: "'Oswald', sans-serif", transform: "scaleY(1.15)", transformOrigin: "bottom" }}>
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
              <div className="text-[13px] font-semibold text-white leading-tight">{tile.phone}</div>
              <div className="text-[10px] text-gray-300 flex items-center gap-1 leading-tight">
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
                  <button className="text-white text-[11px] font-semibold flex items-center gap-1 uppercase tracking-[0.05em] focus:outline-none cursor-pointer h-full">
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
              className="bg-[#e0292e] text-white text-[11px] font-semibold no-underline flex items-center gap-1.5 tracking-[0.05em] px-4 py-2 rounded-md hover:bg-[#c42428] transition-colors"
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
          </div>
        </div>
      </div>

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
  );
}