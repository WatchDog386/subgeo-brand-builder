import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, MapPin, ChevronDown, ArrowRight } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/branches", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
];

const phoneTiles = [
  { phone: "+254 700 000 002", location: "Subgeo Pharmacy" },
  { phone: "0733 699 441", location: "Subgeo Industrial" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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
      <div className="bg-[#1e3a5f]">
        <div className="container-x h-12 flex items-center justify-between px-4 lg:px-8">
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white/90 hover:text-white text-[11px] font-semibold no-underline flex items-center gap-1 uppercase tracking-[0.05em]"
              >
                {item.label}
                <ChevronDown className="h-3 w-3" />
              </Link>
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

          {/* Mobile Menu Text */}
          <div className="lg:hidden text-white text-sm font-semibold uppercase tracking-wider">
            Menu
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
                <Link
                  key={item.to}
                  to={item.to}
                  className="block py-3 text-sm font-semibold text-gray-800 hover:text-red-600 no-underline border-b border-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
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
  );
}