import React from "react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Discipleship Training School (DTS)",
    detail: "6 month encounter with God: lecture phase + outreach across Kaduna State.",
    badge: "Next DTS",
    meta: "Jan 10th 2026 • Kafanchan Base",
  },
  {
    title: "Frontier Missions School (FMS)",
    detail: "Equips pioneers for unreached contexts with prayer, language, and cross-cultural tools.",
    badge: "Frontier",
    meta: "Rolling cohorts • Apply to join",
  },
  {
    title: "Community Work",
    detail: "Literacy, Bible engagement, OMT and mentorship  hosted in local community.",
    badge: "Ongoing",
    meta: "Weekly • Southern Kaduna",
  },
];

const ProgramsSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-secondary-800 via-secondary-850 to-secondary-900 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(88,185,255,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-linear-to-l from-secondary-900/85 via-secondary-900/70 to-secondary-800/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-100">
            Training & Programs
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Step into formation and mission.</h2>
          <p className="mt-3 text-base text-slate-100 sm:text-lg">
            Whether you are discerning next steps or ready to go, find a pathway to grow, serve, and be sent from
            Kafanchan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-100">
                  {program.badge}
                </p>
                <p className="text-[11px] text-slate-200">{program.meta}</p>
              </div>
              <p className="text-xl font-semibold text-white">{program.title}</p>
              <p className="text-sm text-slate-100 leading-relaxed">{program.detail}</p>
              <button className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                Learn more
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

