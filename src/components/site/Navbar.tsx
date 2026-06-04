import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, PhoneCall, MapPin } from "lucide-react";
import logoSrc from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/branches", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
];

const phoneTiles = [
  { phone: "(415) 942-6565", location: "Santa Rafael" },
  { phone: "(707) 452-3464", location: "Santa Rosa" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-white border-b border-[#e1e6ee] shadow-sm">
        <div className="container-x h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img src={logoSrc} alt="Subgeo" className="h-8 w-8 object-contain" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-primary">Subgeo Services, Inc.</span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Since 1989</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {phoneTiles.map((tile) => (
              <div key={tile.phone} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full border border-accent flex items-center justify-center text-accent">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-primary">{tile.phone}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 flex items-center justify-end gap-1">
                    <MapPin className="h-3 w-3" /> {tile.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="lg:hidden h-9 w-9 flex items-center justify-center rounded-md border border-gray-200"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="container-x h-16 flex items-center justify-between">
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em]">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white/90 hover:text-white no-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary inline-flex h-9 items-center px-5 text-[11px] no-underline"
            >
              Contact Us
            </Link>
          </div>

          <div className="lg:hidden text-xs uppercase tracking-[0.18em] font-semibold">
            Menu
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold uppercase tracking-[0.12em] text-primary no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary inline-flex h-10 items-center justify-center text-[11px] no-underline"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}