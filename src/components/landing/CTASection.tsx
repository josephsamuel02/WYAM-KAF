import React from "react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-secondary-900 via-secondary-900/90 to-secondary-800 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-linear-to-r from-secondary-900/90 via-secondary-900/75 to-secondary-800/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl lg:max-w-xl">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-100 lg:px-3 lg:py-0.5">
                Ready to move?
              </p>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-2xl">
                Join the mission from Kafanchan pray, serve, send, or come for DTS.
              </h3>
              <p className="mt-2 text-sm text-slate-100 sm:text-base lg:text-sm">
                We’ll help you plug into prayer circles, outreach teams, or an upcoming school so you can live
                “Knowing God. Making Him Known.”
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="mailto:info@ywamkafanchan.org"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:text-xs lg:px-5 lg:py-2.5"
              >
                Email the Base
                <span className="text-base lg:text-sm">✉</span>
              </a>
              <a
                href="tel:+2348000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:text-xs lg:px-5 lg:py-2.5"
              >
                Call or WhatsApp
                <span className="text-base lg:text-sm">↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

