import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Facebook, Twitter, Linkedin } from "lucide-react";
import logoSrc from "@/assets/logo.png";
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
                          {branches.map((b) => (
                              <motion.div key={b.slug} whileHover={{ scale: 1.02 }}>
                                <Link
                                  to={branchRoute(b.slug)}
                                  className="group flex items-start justify-between gap-3 rounded-md p-4 hover:bg-[#ecf3ff] transition-all no-underline"
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
                                className="group flex items-start justify-between gap-3 rounded-md p-4 hover:bg-[#ecf3ff] transition-all no-underline"
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
                  {branches.map((b) => (
                    <Link
                      key={b.slug}
                      to={branchRoute(b.slug)}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-4 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-white/90 rounded-md hover:bg-white/10 transition-colors no-underline"
                    >
                      {b.name.toUpperCase()}
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
  );
}