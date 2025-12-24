import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Discipleship",
    body: "Forming Christ-centered lifestyles through DTS, prayer circles, and intentional mentoring.",
    accent: "text-emerald-200",
  },
  {
    title: "Missions",
    body: "Sending teams into schools, markets, and unreached villages across Southern Kaduna and beyond.",
    accent: "text-amber-200",
  },
  {
    title: "Community Transformation",
    body: "Community classrooms, literacy pods, and mercy outreach for families and IDP communities.",
    accent: "text-sky-200",
  },
];

const MissionSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary-900 via-secondary-900/90 to-secondary-800 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/80 to-secondary-800/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
            Our Mission
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Knowing God and making Him known through prayer, training, and outreach.
          </h2>
          <p className="mt-4 text-base text-slate-100 sm:text-lg">
            We disciple young people to love Jesus deeply and serve communities across Kaduna
            State with courage, humility, and practical compassion.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <p className={`text-xs uppercase tracking-[0.25em] ${item.accent}`}>
                {item.title}
              </p>
              <p className="mt-3 text-base font-semibold text-white">{item.title}</p>
              <p className="text-sm text-slate-100 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
