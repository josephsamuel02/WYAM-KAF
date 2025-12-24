import React from "react";
import { motion } from "framer-motion";

const heroHighlights = [
  {
    heading: "Descipleship training",
    body: "Biblical worldview and literacy sessions facilitated by DTS alumni and volunteer teachers.",
    tag: "Education Focus",
  },
  {
    heading: "Prayer Circles",
    body: "Morning intercession beside, inviting God’s heart for Kaduna State.",
    tag: "Prayer + Worship",
  },
  {
    heading: "Outreach Route",
    body: "Teams serving schools, markets, and IDP camps across Southern Kaduna.",
    tag: "Community Service",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate min-h-screen bg-linear-to-b from-secondary-900 via-secondary-900/95 to-secondary-800 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-african-town-9933/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-secondary-800/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(247,241,227,0.35),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="h-full w-full bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/pw_maze_white.png')]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 pl-4 pr-6 pb-8 pt-8 sm:pl-6 sm:pr-10 lg:flex-row lg:items-center lg:justify-between lg:pl-4 lg:pr-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-100 sm:px-4 sm:tracking-[0.35em]">
            Kaduna State • Youth With A Mission
          </span>
          <h1 className="text-5xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-6xl">
            Knowing God. Making Him Known.
          </h1>
          <p className="mt-6 text-xl text-slate-100 sm:text-xl">
            Raising passionate followers of Jesus and equipping young people to impact
            communities, cultures, and nations. Starting from Kafanchan.
          </p>
          <p className="mt-4 text-base font-semibold tracking-wide text-amber-100">
            Discipleship • Missions • Community Transformation
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-emerald-500/90 px-7 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-900 focus-visible:ring-white/70">
              Join the Mission
            </button>
            <button className="rounded-full border border-white/30 bg-white/5 px-7 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              Learn More About YWAM Kafanchan
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative w-full max-w-md self-stretch mt-6 lg:mt-10"
        >
          <div className="absolute -left-6 top-4 hidden w-28 rounded-2xl border border-white/30 bg-white/15 p-3 text-white backdrop-blur lg:block lg:z-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-200">Next DTS</p>
            <p className="mt-1.5 text-xl font-semibold">Jan 10th 2026</p>
          </div>

          <div className="relative rounded-[34px] border border-white/20 bg-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur">
            <div className="overflow-hidden rounded-[26px] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80"
                alt="YWAM Kafanchan youth gathering"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-6 space-y-4">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight.heading}
                  className="rounded-2xl border border-white/15 bg-secondary-900/40 p-3.5"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200">
                    {highlight.tag}
                  </p>
                  <p className="mt-1.5 text-base font-semibold">{highlight.heading}</p>
                  <p className="text-xs text-slate-100">{highlight.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 right-0 hidden rounded-2xl border border-white/30 bg-white/15 px-5 py-4 text-white backdrop-blur md:flex md:flex-col md:items-start md:z-20">
            <p className="text-xs font-semibold text-emerald-200">Weekly Outreach</p>
            <p className="text-[10px] text-slate-100">Schools • Markets • IDP Camps</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="relative z-10 mx-auto mb-0 flex items-center justify-center text-white"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100">
          Scroll to discover the story
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-xs">
            ↓
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
