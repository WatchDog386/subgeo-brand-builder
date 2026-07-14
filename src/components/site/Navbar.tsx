"use client";

import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowRight, Pill, Sparkles, Wrench } from "lucide-react";

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
            {/* Company Name */}
            <Link to="/" className="flex items-center no-underline">
              <span 
                className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-bold tracking-[0.02em] leading-none" 
                style={{ fontFamily: "'Oswald', sans-serif", transform: "scaleY(1.15)", transformOrigin: "bottom" }}
              >
                SUBGEO HOLDING COMPANY LTD. 
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden h-10 w-10 flex items-center justify-center text-white rounded-md hover:bg-white/10 transition-colors focus:outline-none"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" strokeWidth={2.5} /> : <Menu className="h-6 w-6" strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Bottom Bar - Dark Navy Background (Hidden on Mobile) */}
        <div className="hidden lg:block bg-[#1e3a5f] relative">
          <div className="container-x h-16 flex items-center justify-between px-2 lg:px-8 relative z-50">
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
                    className="text-white/90 hover:text-white text-[11px] font-semibold no-underline flex items-center gap-1 uppercase tracking-[0.05em] h-full transition-colors"
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
                className="bg-[#e0292e] text-white text-[11px] font-semibold no-underline flex items-center gap-1.5 tracking-[0.05em] px-5 py-2.5 rounded-md hover:bg-[#c42428] transition-colors"
              >
                CONTACT US
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
          onClick={() => setOpen(false)} 
        />

        {/* Mobile Menu - Full height side drawer */}
        <div 
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white z-[60] lg:hidden shadow-2xl transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-full w-full flex flex-col overflow-y-auto">
            {/* Drawer Top bar */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <Link to="/" className="flex items-center no-underline" onClick={() => setOpen(false)}>
                <span className="text-[#be232a] text-xl font-bold tracking-[0.02em] leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  SUBGEO CO.
                </span>
              </Link>
              <button
                type="button"
                className="h-10 w-10 flex items-center justify-center text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 px-4 py-6">
              <nav className="flex flex-col gap-2">
                {nav.map((item) => (
                  item.links ? (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-[13px] font-bold uppercase tracking-wider rounded-xl transition-colors ${
                          openDropdown === item.label 
                            ? 'bg-gray-50 text-[#be232a]' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180 text-[#be232a]' : 'text-gray-400'}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === item.label ? 'max-h-[400px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col gap-1 pl-4 pr-2 pb-2">
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
                                className="flex items-center gap-3.5 px-3 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg no-underline transition-all group"
                                onClick={() => setOpen(false)}
                              >
                                <span className="flex-shrink-0 w-8 h-8 rounded-md bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#be232a]/30 transition-colors">
                                  <Icon className="w-4 h-4 text-gray-500 group-hover:text-[#be232a]" strokeWidth={2} />
                                </span>
                                <div className="flex flex-col">
                                  <span className="font-semibold text-gray-800 group-hover:text-[#be232a] transition-colors">{link.label}</span>
                                  <span className="text-[11px] text-gray-400 leading-tight mt-0.5">{description}</span>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.to}
                      to={item.to!}
                      className="block px-4 py-3.5 text-[13px] font-bold text-gray-700 hover:text-[#be232a] hover:bg-gray-50 uppercase tracking-wider no-underline rounded-xl transition-all"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
            </div>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <Link
                to="/contact"
                className="w-full bg-[#e0292e] hover:bg-[#c42428] text-white h-12 flex items-center justify-center gap-2 px-6 text-[13px] font-bold uppercase tracking-wider rounded-xl no-underline transition-all shadow-md shadow-red-500/20 active:scale-[0.98]"
                onClick={() => setOpen(false)}
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}