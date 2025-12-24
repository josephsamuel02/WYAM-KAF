import React from "react";
import { motion } from "framer-motion";

const ContactHero: React.FC = () => {
  return (
    <section className="relative isolate min-h-[35vh] overflow-hidden bg-gradient-to-b from-secondary-900 via-secondary-900/95 to-secondary-800 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,197,94,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-secondary-800/70" />
        <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay">
          <div className="h-full w-full bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/pw_maze_white.png')]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 py-12 text-center sm:px-10 lg:px-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-0.5 text-[9px] font-semibold uppercase tracking-[0.35em] text-amber-100">
            Get in Touch
          </span>
          <h1 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            We'd Love to Hear from You
          </h1>
          <p className="mt-3 text-sm text-slate-100 sm:text-base">
            Whether you're interested in joining DTS, partnering with us, or simply want to connect, we're here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;

