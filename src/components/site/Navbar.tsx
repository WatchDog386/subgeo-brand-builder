import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Facebook, Twitter, Linkedin } from "lucide-react";
import logoSrc from "@/assets/logo.png";
import backImg from "@/assets/back.png";
import { branches } from "@/lib/branches";

type NavItem = { to: string; label: string; hasMenu?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/branches", label: "Branches", hasMenu: true },
  { to: "/contact", label: "Contact" },
];

const branchRouteBySlug: Record<string, string> = {
  pharmacy: "/pharmacy",
  clinic: "/clinic",
  laboratory: "/laboratory",
  wellness: "/wellness",
  barber: "/barber",
  beauty: "/beauty",
  "subgeo-industrial": "/subgeo-industrial",
};

const branchRoute = (slug: string) => branchRouteBySlug[slug] ?? `/branches/${slug}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
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
      {/* Top announcement strip */}
      <div className="bg-[#072235] text-sm text-white/90">
        <div className="container-x flex items-center justify-center h-9">
          <div className="text-xs flex items-center gap-1">
            🚀 Register your business and get a corporate bank account — <a href="#" className="underline hover:text-white">fast</a> →
          </div>
        </div>
      </div>

      {/* Main navigation - Same color as hero section */}
      <div className={`nav-main transition-all duration-300 bg-[#f0fdf7] relative overflow-visible ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="container-x relative z-10 !flex items-center h-20 gap-8">
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
              className="text-lg md:text-xl font-bold text-[#072235] hidden md:block"
              whileHover={{ scale: 1.02 }}
            >
              Subgeo
            </motion.span>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex ml-auto items-center justify-end gap-8 text-sm font-medium text-gray-700">
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
                  className="px-4 py-2 inline-flex items-center gap-1.5 text-gray-700 hover:text-[#072235] transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
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
                        <div className="bg-white rounded-lg shadow-lg p-3 grid grid-cols-2 gap-2">
                          {branches.map((b) => (
                              <motion.div key={b.slug} whileHover={{ scale: 1.02 }}>
                                <Link
                                  to={branchRoute(b.slug)}
                                  className="group flex items-start justify-between gap-3 rounded-lg p-4 hover:bg-[#f0fdf7] transition-all no-underline"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-[#072235]">
                                      {b.name}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1">
                                      {b.category}
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

                            {/* Add Subgeo Industrial as an extra item in the branches dropdown */}
                            <motion.div whileHover={{ scale: 1.02 }}>
                              <Link
                                to={branchRoute("subgeo-industrial")}
                                className="group flex items-start justify-between gap-3 rounded-lg p-4 hover:bg-[#f0fdf7] transition-all no-underline"
                              >
                                <div>
                                  <div className="text-sm font-semibold text-[#072235]">Subgeo Industrial</div>
                                  <div className="text-xs text-gray-600 mt-1">Industrial Services</div>
                                </div>
                                <motion.div className="text-[#28b463] group-hover:text-[#1f9a4f] transition-colors" whileHover={{ x: 2, y: -2 }}>
                                  <ArrowUpRight className="w-4 h-4" />
                                </motion.div>
                              </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              ) : (
              <motion.div key={item.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.4 }}>
                <Link
                  to={item.to}
                  className="px-4 py-2 text-gray-700 hover:text-[#072235] transition-colors font-medium no-underline block"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-[#072235]" }}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    {item.label}
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
                      className="hidden md:inline-flex h-10 px-5 rounded-full bg-[#28b463] text-white font-semibold shadow-[0_10px_24px_rgba(40,180,99,0.16)] transition-all hover:bg-[#1f9a4f] no-underline items-center justify-center"
                    >
                      <motion.span className="flex items-center gap-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
                        <span className="text-sm">Book</span>
                        <span className="text-sm font-semibold">appointment</span>
                      </motion.span>
                    </Link>
                  </motion.div>

            <motion.button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200/50 transition-colors"
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
                    <X className="w-5 h-5 text-gray-800" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                  >
                    <Menu className="w-5 h-5 text-gray-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t-0 bg-[#f0fdf7] overflow-hidden relative"
          >
            <div className="container-x relative z-10 py-6 flex flex-col space-y-1">
              {nav.map((item) =>
                !item.hasMenu ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-white/50 transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                ) : null,
              )}

              <div className="py-4 mt-2">
                <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 px-4 mb-3">
                  Branches
                </p>
                <div className="space-y-1">
                  {branches.map((b) => (
                    <Link
                      key={b.slug}
                      to={branchRoute(b.slug)}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-4 text-gray-900 text-sm rounded-lg hover:bg-white/50 transition-colors no-underline"
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center py-3 px-4 bg-[#28b463] text-white font-semibold rounded-full no-underline"
                  >
                  Book appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}