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
    <header className="fixed top-6 inset-x-0 z-50">
      {/* Top thin strip with social icons */}
      <div className="nav-topstrip text-xs text-white/80">
        <div className="container-x flex items-center justify-between h-8">
          <div />
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline hidden sm:inline-flex items-center gap-2">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:underline hidden sm:inline-flex items-center gap-2">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:underline hidden sm:inline-flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`nav-main transition-all duration-300 ${scrolled ? 'shadow-elevation-2' : ''}`}>
        <div className="container-x grid grid-cols-3 items-center h-20">
        {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={logoSrc}
            alt="Subgeo logo"
            className="w-56 h-14 md:w-72 md:h-20 object-contain -mb-3"
            style={{ zIndex: 60 }}
          />
        </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 text-sm uppercase tracking-widest">
          {nav.map((item, idx) =>
            item.hasMenu ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setBranchOpen(true)}
                onMouseLeave={() => setBranchOpen(false)}
              >
                <motion.button
                  className="px-4 py-2 inline-flex items-center gap-1.5 text-white hover:opacity-90 transition-colors font-medium"
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
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[640px]"
                    >
                        <div className="glass rounded-sm shadow-elevation-4 p-3 grid grid-cols-2 gap-2">
                          {branches.map((b) => (
                              <motion.div key={b.slug} whileHover={{ scale: 1.02 }}>
                                <Link
                                  to={`/${b.slug}`}
                                  className="group flex items-start justify-between gap-3 rounded-sm p-4 hover:bg-white/5 transition-all no-underline"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-primary">
                                      {b.name}
                                    </div>
                                    <div className="text-xs text-gray-700 mt-1">
                                      {b.category}
                                    </div>
                                  </div>
                                  <motion.div
                                    className="text-primary group-hover:text-primary/80 transition-colors"
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
                                to={`/subgeo-industrial`}
                                className="group flex items-start justify-between gap-3 rounded-sm p-4 hover:bg-white/5 transition-all no-underline"
                              >
                                <div>
                                  <div className="text-sm font-semibold text-primary">Subgeo Industrial</div>
                                  <div className="text-xs text-gray-700 mt-1">Industrial Services</div>
                                </div>
                                <motion.div className="text-primary group-hover:text-primary/80 transition-colors" whileHover={{ x: 2, y: -2 }}>
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
                  className="px-4 py-2 text-white hover:opacity-90 transition-colors font-medium no-underline block"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-white" }}
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
                      className="hidden md:inline-flex h-12 px-7 rounded-full bg-[#f36a2c] text-white font-semibold shadow-[0_12px_30px_rgba(243,106,44,0.28)] transition-all hover:bg-[#e85e1d] hover:shadow-[0_16px_34px_rgba(243,106,44,0.36)] no-underline items-center justify-center"
                    >
                      <motion.span className="flex items-center gap-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
                        <span className="text-sm">Book</span>
                        <span className="text-sm font-semibold">Appointment</span>
                      </motion.span>
                    </Link>
                  </motion.div>

            <motion.button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
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
            className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 overflow-hidden"
          >
            <div className="container-x py-6 flex flex-col space-y-1">
              {nav.map((item) =>
                !item.hasMenu ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                ) : null,
              )}

              <div className="py-4 mt-2">
                <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400 px-4 mb-3">
                  Branches
                </p>
                <div className="space-y-1">
                  {branches.map((b) => (
                    <Link
                      key={b.slug}
                      to={`/${b.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-4 text-gray-900 text-sm rounded-lg hover:bg-gray-100 transition-colors no-underline"
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center py-3 px-4 bg-gradient-premium text-white font-semibold rounded-sm no-underline"
                  >
                  Get in touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Floating button removed; Book Appointment moved into navbar right side */}
    </header>
  );
}
