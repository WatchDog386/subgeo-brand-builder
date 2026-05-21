import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import plumbingImg from "@/assets/plumbing.png";
import { RevealOnScroll, FloatingGradientOrb } from "@/components/premium/PremiumAnimations";

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
    <section className="relative overflow-hidden py-16 md:py-24 bg-[radial-gradient(circle_at_top_left,rgba(243,106,44,0.12),transparent_34%),linear-gradient(180deg,#f8f6f1_0%,#f1ede4_100%)]">
      <FloatingGradientOrb className="top-[-5rem] left-[-8rem] opacity-60" size={420} delay={0.2} intensity={26} />
      <FloatingGradientOrb className="bottom-[-5rem] right-[-8rem] opacity-40" size={360} delay={1.1} intensity={20} />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-12 md:gap-16">
          <RevealOnScroll direction="left">
            <div className="max-w-[760px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-[#d7b86a]/50 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#244f86] shadow-sm backdrop-blur"
              >
                Why Subgeo
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                viewport={{ once: true }}
                className="mt-5 font-serif text-[clamp(4.8rem,10vw,9.6rem)] leading-[0.84] tracking-[-0.06em] text-[#111111] whitespace-nowrap"
              >
                Why Choose <span className="bg-gradient-to-r from-[#f36a2c] via-[#244f86] to-[#111827] bg-clip-text text-transparent">
                  Subgeo
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                viewport={{ once: true }}
                className="mt-7 max-w-[58ch] text-[16px] md:text-[18px] leading-relaxed text-[#4a4a4a] font-medium"
              >
                Local expertise, consistent clinical standards, and community-first service — all under one trusted Kenyan brand.
              </motion.p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-3xl">
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
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl border border-white/70 bg-white/75 px-4 py-4 shadow-[0_12px_30px_rgba(17,24,39,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-[#f36a2c]/30 hover:shadow-[0_18px_45px_rgba(243,106,44,0.12)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f36a2c] transition-transform duration-300 group-hover:scale-125" />
                      <p className="text-sm md:text-[15px] leading-relaxed text-[#3d3d3d]">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/branches"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#f36a2c] px-7 text-sm font-semibold text-white no-underline shadow-[0_12px_30px_rgba(243,106,44,0.28)] transition-all hover:bg-[#e85e1d] hover:shadow-[0_16px_34px_rgba(243,106,44,0.36)]"
                  >
                    Explore Branches
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7b86a] bg-white/85 px-7 text-sm font-semibold tracking-tight text-[#111111] no-underline shadow-sm backdrop-blur transition-all hover:border-[#f36a2c]/35 hover:bg-white hover:shadow-[0_12px_28px_rgba(17,24,39,0.08)]"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.15}>
            <div className="relative mx-auto w-full max-w-[680px] lg:mr-0 lg:justify-self-end lg:translate-x-16 xl:translate-x-24 2xl:translate-x-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.015 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/65 p-4 shadow-[0_24px_70px_rgba(17,24,39,0.14)] backdrop-blur"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_42%)] opacity-70" />

                <div className="relative overflow-hidden rounded-[22px]">
                  <motion.img
                    src={plumbingImg}
                    alt="Subgeo plumbing and industrial services"
                    className="h-[360px] md:h-[520px] w-full object-cover object-[72%_center] lg:object-[78%_center]"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                    viewport={{ once: true }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#244f86] shadow-sm backdrop-blur"
                  >
                    Built for communities
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2"
                  >
                    {[
                      { label: "Trusted care", value: "100%" },
                      { label: "Service focus", value: "6 branches" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/40 bg-white/85 px-4 py-3 text-left shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1"
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b7280]">{stat.label}</div>
                        <div className="mt-1 text-lg font-semibold text-[#111111]">{stat.value}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((reason, index) => (
            <RevealOnScroll key={reason.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group h-full rounded-[24px] border border-white/60 bg-white/75 p-6 shadow-[0_14px_34px_rgba(17,24,39,0.07)] backdrop-blur-sm transition-all duration-300 hover:border-[#f36a2c]/30 hover:shadow-[0_20px_48px_rgba(243,106,44,0.14)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#f36a2c]">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-xl font-semibold text-[#111111]">{reason.title}</h4>
                <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-[#4b5563]">{reason.description}</p>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}