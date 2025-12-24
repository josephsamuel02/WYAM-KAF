import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsSend, BsPerson, BsEnvelope, BsTelephone, BsChatDots } from "react-icons/bs";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary-800 via-secondary-900/95 to-secondary-900 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/80 to-secondary-800/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
            Send us a Message
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Let's Start a Conversation
          </h2>
          <p className="mt-4 text-base text-slate-100 sm:text-lg">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <BsPerson className="h-4 w-4 text-emerald-200" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <BsEnvelope className="h-4 w-4 text-emerald-200" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <BsTelephone className="h-4 w-4 text-emerald-200" />
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <BsChatDots className="h-4 w-4 text-emerald-200" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <BsSend className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold text-emerald-200">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20">
                    <BsEnvelope className="h-5 w-5 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a
                      href="mailto:info@ywamkafanchan.org"
                      className="text-sm text-slate-200 transition hover:text-emerald-200"
                    >
                      info@ywamkafanchan.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20">
                    <BsTelephone className="h-5 w-5 text-amber-200" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <a
                      href="tel:+2348000000000"
                      className="text-sm text-slate-200 transition hover:text-amber-200"
                    >
                      +234 (0) 800 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/20">
                    <BsChatDots className="h-5 w-5 text-sky-200" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">WhatsApp</p>
                    <a
                      href="https://wa.me/2348000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-200 transition hover:text-sky-200"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold text-amber-200">Visit Us</h3>
              <p className="text-sm leading-relaxed text-slate-200">
                YWAM Kafanchan Base
                <br />
                Kafanchan, Kaduna State
                <br />
                Nigeria
              </p>
              <p className="mt-4 text-xs text-slate-300">
                We welcome visitors and short-term teams. Please contact us in advance to arrange your visit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;



