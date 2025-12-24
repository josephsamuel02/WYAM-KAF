import React from "react";
import { motion } from "framer-motion";
import KingsKidsSection from "../../components/landing/KingsKidsSection";
import CTASection from "../../components/landing/CTASection";

const KingsKidsPage: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-secondary-950">
            {/* Hero / Header for the page */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(88,185,255,0.15),transparent_50%)]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        Leading the Next Generation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto"
                    >
                        King's Kids is more than a program; it's a movement of children, youth, and families
                        who desire to know God and make Him known through their unique gifts and talents.
                    </motion.p>
                </div>
            </section>

            {/* Reuse the accordion section but maybe with a slightly different title or context if needed */}
            <KingsKidsSection />

            {/* Additional Content Section */}
            <section className="py-24 sm:py-32 bg-secondary-900/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Vision</h2>
                            <p className="mt-6 text-lg text-slate-300">
                                We aim to see every child and teenager discovering their identity in Christ and walking
                                in their God-given purpose. Through worship, discipleship, and creative missions,
                                we foster a generation that is unashamed of the Gospel.
                            </p>
                            <ul className="mt-8 space-y-4 text-slate-300">
                                <li className="flex gap-x-3">
                                    <span className="text-sky-400 font-bold">✓</span>
                                    <span>Spiritual Growth through prayer and Bible study.</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="text-sky-400 font-bold">✓</span>
                                    <span>Community Service and local outreaches.</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="text-sky-400 font-bold">✓</span>
                                    <span>Global Awareness of God's heart for all nations.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <div className="relative">
                            <img
                                src="/kings_kids_outreach_1766602611673.png"
                                alt="Join the movement"
                                className="rounded-3xl shadow-2xl brightness-90"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default KingsKidsPage;
