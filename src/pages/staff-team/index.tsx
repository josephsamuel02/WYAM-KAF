import React from "react";
import { motion } from "framer-motion";
import { contactEmail } from "../../utils/routes";

const team = [
  {
    name: "Samuel Luka",
    role: "Base Leader • DTS Director",
    focus: "Discipleship, strategy, and intercession for Kaduna State.",
    location: "Kafanchan, Kaduna",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Grace Yakubu",
    role: "Outreach Coordinator",
    focus: "Leads weekly school/market teams and IDP outreach logistics.",
    location: "Kafanchan, Kaduna",
    avatarUrl: "https://images.unsplash.com/photo-1524504542391-127872011665?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Emeka Udo",
    role: "Training Lead • FMS",
    focus: "Equips youth in frontier missions, evangelism, and Bible engagement.",
    location: "Kaduna & Jos corridor",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Maryam Danjuma",
    role: "Prayer & Worship",
    focus: "Hosts 24/7 prayer circles and worship nights across the base.",
    location: "Kafanchan, Kaduna",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Joseph Oche",
    role: "Community Development",
    focus: "Coordinates literacy pods and community classroom initiatives.",
    location: "Southern Kaduna",
    avatarUrl: "https://images.unsplash.com/photo-1524504542391-127872011665?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Ruth Ali",
    role: "Hospitality & Member Care",
    focus: "Welcomes visiting teams and cares for resident missionaries.",
    location: "Kafanchan, Kaduna",
    avatarUrl: "",
  },
];

const StaffTeam: React.FC = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-secondary-900 via-secondary-900/95 to-secondary-800 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(247,241,227,0.22),_transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-secondary-900/80 to-secondary-800/70" />
        <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay">
          <div className="h-full w-full bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/pw_maze_white.png')]" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-20 pt-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
            Staff Team • YWAM Kafanchan
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Serving Kaduna with prayer, discipleship, and community outreach.
          </h1>
          <p className="mt-4 text-lg text-slate-100 sm:text-xl">
            Meet the leaders and volunteers carrying the vision of “Knowing God. Making Him Known.” across schools,
            markets, and communities in Northern Nigeria.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">{person.location}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{person.name}</p>
                </div>
                {person.avatarUrl ? (
                  <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/15 shadow-lg shadow-emerald-500/20">
                    <img
                      src={person.avatarUrl}
                      alt={person.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 via-emerald-500 to-amber-400 text-base font-bold text-white shadow-lg shadow-emerald-500/20">
                    {person.name.charAt(0)}
                  </div>
                )}
              </div>
              <p className="mt-3 text-sm font-semibold text-amber-100">{person.role}</p>
              <p className="mt-2 text-sm text-slate-100 leading-relaxed">{person.focus}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4 rounded-3xl border border-white/15 bg-white/5 px-6 py-4 text-sm text-slate-100 backdrop-blur"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/90 text-white font-bold shadow-lg shadow-emerald-500/30">
            ✉
          </div>
          <div className="flex-1 min-w-[240px]">
            <p className="text-base font-semibold text-white">Join a team or send a visiting outreach</p>
            <p className="text-sm text-slate-100">
              Reach out to coordinate DTS placements, outreach trips, or prayer visits to Kaduna State.
            </p>
          </div>
          <a
            href={`mailto:${contactEmail}`}
            className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Email the Base
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffTeam;
