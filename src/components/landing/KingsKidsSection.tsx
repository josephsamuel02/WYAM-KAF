import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";

const images = [
    {
        url: "/kings_kids_worship_1766602589013.png",
        title: "Worship & Celebration",
        description: "Leading children into a deeper encounter with God through joyful worship.",
    },
    {
        url: "/kings_kids_outreach_1766602611673.png",
        title: "Creative Outreach",
        description: "Equipping young people to serve and share God's love in their communities.",
    },
    {
        url: "/kings_kids_family_discipleship_1766602636629.png",
        title: "Family Discipleship",
        description: "Walking together as families and generations to follow Jesus.",
    },
];

const KingsKidsSection: React.FC = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="relative isolate overflow-hidden bg-secondary-900 py-24 sm:py-32">
            {/* Background Ornaments */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-sky-400 to-emerald-400 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-sky-400"
                    >
                        Family & Youth Ministry
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        King's Kids Kafanchan
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-slate-300"
                    >
                        Leading children, teenagers, and families into a deeper knowledge of God, bringing Him joy, and making His Kingdom known to all peoples. We believe children are significant in the present for establishing God's kingdom.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-10"
                    >
                        <Link
                            to={routes.kings_kids_page}
                            className="rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                        >
                            Explore King's Kids
                        </Link>
                    </motion.div>
                </div>

                {/* Image Accordion / Slider */}
                <div className="relative w-full max-w-5xl">
                    <div className="grid h-[500px] gap-4 md:grid-cols-3">
                        {images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                layout
                                onClick={() => setActiveIdx(idx)}
                                className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out ${activeIdx === idx ? "md:col-span-2" : "md:col-span-1"
                                    }`}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="absolute inset-0 h-full w-full object-cover brightness-75 transition-all duration-700 hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <AnimatePresence mode="wait">
                                        {activeIdx === idx ? (
                                            <motion.div
                                                key="active-content"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h3 className="text-2xl font-bold">{img.title}</h3>
                                                <p className="mt-2 max-w-md text-slate-200">{img.description}</p>
                                            </motion.div>
                                        ) : (
                                            <motion.h3
                                                key="inactive-content"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-lg font-semibold"
                                            >
                                                {img.title}
                                            </motion.h3>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dots for Mobile Navigation */}
                    <div className="mt-6 flex justify-center gap-2 md:hidden">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`h-2 w-2 rounded-full transition-all ${activeIdx === idx ? "w-6 bg-sky-500" : "bg-slate-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KingsKidsSection;
