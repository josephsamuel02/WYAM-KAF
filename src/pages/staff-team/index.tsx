import React from "react";
import { motion } from "framer-motion";
import { contactEmail } from "../../utils/routes";

const team = [
  {
    name: "Gloria Kure",
    role: "Base leader",
    focus: "Leading the YWAM Kafanchan base with vision and dedication.",
    avatarUrl: "/base_leader.png",
  },
  {
    name: "Lawrence Samuel",
    role: "DTS School Leader",
    focus: "Leading the Discipleship Training School program.",
    avatarUrl: "/Lawrence.JPG",
  },
  {
    name: "Mr & Mrs Joseph",
    role: "Admin & IT staff",
    focus: "Managing administration and IT support for the base.",
    avatarUrl: "/IMG_20260104_095547[1].JPG",
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
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
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
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur hover:border-white/20 transition-all duration-300"
            >
              {person.avatarUrl ? (
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={person.avatarUrl}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-red-500 via-white to-blue-500 text-6xl font-bold text-secondary-900">
                  {person.name.charAt(0)}
                </div>
              )}
              <div className="flex flex-col p-6">
                <p className="text-2xl font-semibold text-white mb-1">{person.name}</p>
                <p className="text-base font-semibold text-green-400 mb-3">{person.role}</p>
                <p className="text-sm text-slate-200 leading-relaxed">{person.focus}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4 rounded-3xl border border-white/15 bg-white/5 px-6 py-4 text-sm text-slate-100 backdrop-blur"
        >
          <div 
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-white font-bold shadow-lg"
            style={{
              backgroundColor: "var(--gradient-green, rgb(3, 155, 59))",
              boxShadow: "0 10px 30px rgba(3, 155, 59, 0.35)",
            }}
          >
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
