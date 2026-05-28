import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import whyImg from "@/assets/why.png";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality Service",
    description: "Reliable, professional service across every branch with care built into every interaction.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency response and support when your community needs it most.",
  },
  {
    icon: Zap,
    title: "Dynamic & Innovative",
    description: "Continuous improvement, modern tools, and a team that adapts to local needs.",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#dfe1e3] py-4 md:py-6 font-sans">
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-8 md:gap-12">
          <RevealOnScroll direction="left">
            <div className="max-w-[760px]">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                viewport={{ once: true }}
                className="mt-2 font-hero text-[32px] md:text-[56px] leading-[0.95] tracking-[-0.04em] text-[#111111]"
              >
                Why Choose Subgeo
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                viewport={{ once: true }}
                className="mt-3 max-w-[58ch] text-[14px] md:text-[16px] leading-relaxed text-[#222] font-normal"
              >
                Local expertise, consistent clinical standards, and community-first service — all under one trusted Kenyan brand.
              </motion.p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 max-w-3xl">
                {[
                  "Community teams who know local needs and neighbourhoods.",
                  "One standard of safety, quality, and professionalism.",
                  "Integrated branches that make access easier for families.",
                  "Measured outcomes with follow-up care and accountability.",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.16 + index * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="group rounded-2xl border border-black/10 bg-[#dfe1e3] px-4 py-4 shadow-[0_12px_30px_rgba(17,24,39,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-[#d32f2f]/30 hover:shadow-[0_18px_45px_rgba(211,47,47,0.12)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d32f2f] transition-transform duration-300 group-hover:scale-125" />
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-[#222] font-normal">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/branches"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[#d32f2f] px-7 text-sm font-medium text-white no-underline shadow-[0_12px_30px_rgba(211,47,47,0.28)] transition-all hover:bg-[#b71c1c] hover:shadow-[0_16px_34px_rgba(211,47,47,0.36)]"
                  >
                    Explore Branches
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-[#dfe1e3] px-7 text-sm font-medium tracking-tight text-[#111111] no-underline shadow-sm backdrop-blur transition-all hover:border-[#d32f2f]/35 hover:bg-[#dfe1e3] hover:shadow-[0_12px_28px_rgba(17,24,39,0.08)]"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.15}>
            <div className="relative w-full max-w-[600px] lg:ml-auto lg:mr-0 lg:justify-self-stretch lg:translate-y-4 xl:max-w-[640px] xl:translate-y-6 2xl:translate-y-8">
              <motion.img
                src={whyImg}
                alt="Why choose Subgeo"
                className="h-[320px] md:h-[440px] w-full object-contain object-center lg:ml-auto"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true }}
              />
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((reason, index) => (
            <RevealOnScroll key={reason.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group h-full rounded-[24px] border border-black/10 bg-[#dfe1e3] p-6 shadow-[0_14px_34px_rgba(17,24,39,0.07)] backdrop-blur-sm transition-all duration-300 hover:border-[#d32f2f]/30 hover:shadow-[0_20px_48px_rgba(211,47,47,0.14)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#d32f2f]">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-[16px] md:text-[18px] font-medium text-[#222]">{reason.title}</h4>
                <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-[#222] font-normal">{reason.description}</p>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}