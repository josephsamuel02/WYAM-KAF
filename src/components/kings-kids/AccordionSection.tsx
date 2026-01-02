import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

interface AccordionItem {
    id: string;
    title: string;
    content: string;
    icon?: React.ReactNode;
}

interface AccordionSectionProps {
    items: AccordionItem[];
    title?: string;
    subtitle?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ items, title, subtitle }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 sm:py-32 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 via-secondary-950 to-secondary-950" />
            
            <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-slate-300 max-w-2xl mx-auto"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                )}

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 ${
                                    openIndex === index
                                        ? "bg-gradient-to-r from-sky-500/20 to-emerald-500/20 border-2 border-sky-400/50 shadow-lg shadow-sky-500/10"
                                        : "bg-secondary-800/50 border-2 border-secondary-700 hover:border-sky-500/30 hover:bg-secondary-800"
                                }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4 flex-1">
                                        {item.icon && (
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                openIndex === index
                                                    ? "bg-sky-500 text-white"
                                                    : "bg-secondary-700 text-sky-400"
                                            }`}>
                                                {item.icon}
                                            </div>
                                        )}
                                        <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                                            openIndex === index ? "text-white" : "text-slate-200"
                                        }`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                            openIndex === index
                                                ? "bg-sky-500 text-white"
                                                : "bg-secondary-700 text-slate-300"
                                        }`}
                                    >
                                        <IoChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4">
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-lg text-slate-300 leading-relaxed"
                                            >
                                                {item.content}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccordionSection;

