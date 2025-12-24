import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Schools opened to the Gospel",
    body: "Weekly teams share the Word, pray with students, and mentor emerging leaders in nearby towns.",
    tag: "Outreach",
  },
  {
    title: "Prayer on the hills",
    body: "Sunrise intercession over Southern Kaduna—worship, repentance, and blessing spoken over villages.",
    tag: "Prayer",
  },
  {
    title: "Mercy for displaced families",
    body: "Food, blankets, and trauma-healing circles with IDP communities alongside local church partners.",
    tag: "Compassion",
  },
];

const StoriesSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-secondary-900 via-secondary-900/95 to-secondary-900 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-linear-to-r from-secondary-900/90 via-secondary-900/80 to-secondary-800/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
            Stories from the Field
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Jesus is moving across Kaduna through youth, prayer, and simple obedience.
          </h2>
          <p className="mt-3 text-base text-slate-100 sm:text-lg">
            Here’s a glimpse of what God is doing through outreach teams, prayer circles, and community classrooms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story, idx) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-200">{story.tag}</p>
              <p className="mt-3 text-xl font-semibold text-white">{story.title}</p>
              <p className="text-sm text-slate-100 leading-relaxed">{story.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;

