import React from "react";
import { motion } from "framer-motion";

const OurStory: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary-800 via-secondary-900/95 to-secondary-900 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/80 to-secondary-800/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
            Our Story
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Rooted in Kafanchan, Reaching the Nations
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed text-slate-100 sm:text-lg">
              Youth With A Mission Kafanchan was established as a response to God's call to raise up passionate
              followers of Jesus in Northern Nigeria. Starting from the heart of Kaduna State, we've been discipling
              young people, training missionaries, and serving communities since our founding.
            </p>
            <p className="text-base leading-relaxed text-slate-100 sm:text-lg">
              Our base serves as a training ground where young people encounter God deeply through prayer, worship, and
              biblical teaching. We equip them to serve in schools, markets, IDP camps, and unreached villages across
              Southern Kaduna and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed text-slate-100 sm:text-lg">
              We believe that transformation happens when young people are equipped with both spiritual depth and
              practical skills. Our programs combine intensive discipleship training with hands-on outreach, preparing
              participants to impact their communities long after they leave our base.
            </p>
            <p className="text-base leading-relaxed text-slate-100 sm:text-lg">
              Today, YWAM Kafanchan continues to be a beacon of hope, training missionaries who go out to serve across
              Nigeria and around the world, while also investing deeply in the local communities of Kaduna State.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;




