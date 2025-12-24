import React from "react";
import { motion } from "framer-motion";
import { BsHeart, BsGlobe, BsPeople, BsHeartFill } from "react-icons/bs";

const values = [
  {
    title: "Knowing God",
    description: "We prioritize intimacy with Jesus through prayer, worship, and studying His Word. Everything flows from our relationship with Him.",
    icon: BsHeart,
    accent: "text-emerald-200",
  },
  {
    title: "Making Him Known",
    description: "We are called to share the gospel with boldness and compassion, serving communities and reaching the unreached.",
    icon: BsGlobe,
    accent: "text-amber-200",
  },
  {
    title: "Discipleship",
    description: "We invest in young people, walking alongside them as they grow in faith, character, and calling.",
    icon: BsPeople,
    accent: "text-sky-200",
  },
  {
    title: "Community Transformation",
    description: "We serve with practical compassion—education, mercy ministry, and community development—bringing God's kingdom to earth.",
    icon: BsHeartFill,
    accent: "text-emerald-200",
  },
];

const OurValues: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary-900 via-secondary-900/95 to-secondary-800 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/80 to-secondary-800/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
            Our Core Values
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            What We Stand For
          </h2>
          <p className="mt-4 text-base text-slate-100 sm:text-lg">
            These foundational values guide everything we do at YWAM Kafanchan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ${value.accent}`}>
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className={`text-lg font-semibold ${value.accent}`}>{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;

