import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function PremiumCTASection() {
  return (
    <section className="bg-[#dfe1e3] py-20 md:py-24 px-4 font-sans">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-sm p-12 md:p-16 text-center section-dark-nav bg-gray-900"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3), transparent 50%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-white/90 text-sm uppercase tracking-widest mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Experience Subgeo?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Visit any of our branches or get in touch to learn more about our services and
              community programs.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-sm hover:bg-gray-100 transition-all no-underline w-full sm:w-auto"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/branches"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-all no-underline w-full sm:w-auto"
              >
                Find a Branch <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
