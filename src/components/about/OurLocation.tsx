import React from "react";
import { motion } from "framer-motion";
import { contactEmail } from "../../utils/routes";

const OurLocation: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary-800 via-secondary-900/95 to-secondary-900 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(34,197,94,0.12),transparent_50%)]" />
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
            Our Location
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Serving from the Heart of Kaduna State
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <h3 className="mb-3 text-xl font-semibold text-emerald-200">Kafanchan, Kaduna State</h3>
              <p className="text-base leading-relaxed text-slate-100">
                Located in the heart of Southern Kaduna, Kafanchan serves as our base of operations. This strategic
                location allows us to reach both urban and rural communities across the region.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <h3 className="mb-3 text-xl font-semibold text-amber-200">Our Reach</h3>
              <p className="text-base leading-relaxed text-slate-100">
                From Kafanchan, we serve schools, markets, IDP camps, and villages across Southern Kaduna. Our teams
                also go out to other states in Nigeria and beyond, carrying the mission of knowing God and making Him
                known.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <h3 className="mb-4 text-xl font-semibold text-sky-200">Visit Us</h3>
            <div className="space-y-4 text-base text-slate-100">
              <p>
                <span className="font-semibold text-white">Address:</span>
                <br />
                YWAM Kafanchan Base
                <br />
                Kafanchan, Kaduna State
                <br />
                Nigeria
              </p>
              <p>
                <span className="font-semibold text-white">Contact:</span>
                <br />
                Email: <a href={`mailto:${contactEmail}`} className="text-sky-300 hover:text-sky-200 transition-colors">{contactEmail}</a>
                <br />
                Phone: +234 (0) 800 000 0000
              </p>
              <p className="pt-2 text-sm text-slate-200">
                We welcome visitors, short-term teams, and those interested in joining our community. Contact us to
                arrange a visit or learn more about our programs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;




