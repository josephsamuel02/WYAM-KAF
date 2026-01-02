import React from "react";
import { motion } from "framer-motion";
import PhotoSlider from "../../components/kings-kids/PhotoSlider";
import AccordionSection from "../../components/kings-kids/AccordionSection";
import CTASection from "../../components/landing/CTASection";
import { IoHeart, IoPeople, IoGlobe, IoMusicalNotes, IoHandRight, IoHappy, IoPeopleCircle, IoHeartCircle } from "react-icons/io5";

const photos = [
    {
        url: "/kings_kids_worship_1766602589013.png",
        title: "Worship & Celebration",
        description: "Leading children into a deeper encounter with God through joyful worship and heartfelt praise.",
    },
    {
        url: "/kings_kids_outreach_1766602611673.png",
        title: "Creative Outreach",
        description: "Equipping young people to serve and share God's love in their communities through creative expression.",
    },
    {
        url: "/kings_kids_family_discipleship_1766602636629.png",
        title: "Family Discipleship",
        description: "Walking together as families and generations to follow Jesus and build lasting faith foundations.",
    },
];

const accordionItems = [
    {
        id: "vision",
        title: "Our Vision",
        content: "We aim to see every child and teenager discovering their identity in Christ and walking in their God-given purpose. Through worship, discipleship, and creative missions, we foster a generation that is unashamed of the Gospel and passionate about making God known.",
        icon: <IoGlobe className="w-6 h-6" />,
    },
    {
        id: "spiritual-growth",
        title: "Spiritual Growth",
        content: "We provide opportunities for children and youth to grow in their relationship with God through prayer, Bible study, worship, and discipleship. Our programs are designed to help young people develop a strong foundation of faith that will guide them throughout their lives.",
        icon: <IoHeart className="w-6 h-6" />,
    },
    {
        id: "community-service",
        title: "Community Service",
        content: "We believe in putting faith into action. Our young people participate in local outreaches, community service projects, and creative missions that demonstrate God's love in practical ways. Through these experiences, they learn to serve others and make a positive impact in their communities.",
        icon: <IoHandRight className="w-6 h-6" />,
    },
    {
        id: "worship-arts",
        title: "Worship & Creative Arts",
        content: "We celebrate the unique gifts and talents of each child. Through music, dance, drama, and other creative expressions, we help young people discover how they can use their God-given abilities to glorify Him and share His love with others.",
        icon: <IoMusicalNotes className="w-6 h-6" />,
    },
    {
        id: "global-awareness",
        title: "Global Awareness",
        content: "We cultivate a heart for the nations by teaching children about God's love for all peoples. Through stories, missions education, and cross-cultural experiences, we help young people understand their role in God's global mission and develop a passion for reaching the world.",
        icon: <IoPeople className="w-6 h-6" />,
    },
];

const KingsKidsPage: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-secondary-950">
            {/* Hero / Header for the page */}
            <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Images Layer */}
                <div className="absolute inset-0 -z-10">
                    {/* Primary Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/kings_kids_worship_1766602589013.png"
                            alt="Kings Kids Worship"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/95 via-secondary-950/85 to-secondary-950/95" />
                    </div>
                    
                    {/* Secondary Background Image - Right Side */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5">
                            <img
                                src="/kings_kids_outreach_1766602611673.png"
                                alt="Kings Kids Outreach"
                                className="w-full h-full object-cover mix-blend-overlay"
                            />
                        </div>
                    </div>

                    {/* Tertiary Background Image - Left Side */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 lg:w-1/4">
                            <img
                                src="/kings_kids_family_discipleship_1766602636629.png"
                                alt="Kings Kids Family"
                                className="w-full h-full object-cover mix-blend-soft-light"
                            />
                        </div>
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(88,185,255,0.25),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-950/40 to-secondary-950/80" />
                    
                    {/* Pattern Overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay">
                        <div className="h-full w-full bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/pw_maze_white.png')]" />
                    </div>

                    {/* Animated Gradient Orbs */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, -40, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sky-200 shadow-lg shadow-sky-500/20"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                            </span>
                            Children & Youth Ministry
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-tight"
                        >
                            <span className="block bg-gradient-to-r from-white via-sky-100 to-emerald-100 bg-clip-text text-transparent">
                                Leading the Next
                            </span>
                            <span className="block mt-2 bg-gradient-to-r from-sky-300 via-white to-emerald-200 bg-clip-text text-transparent">
                                Generation
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mt-8 text-xl sm:text-2xl leading-relaxed text-slate-200 max-w-3xl mx-auto font-light"
                        >
                            King's Kids is more than a program; it's a movement of children and youth
                            who desire to <span className="font-semibold text-white">know God</span> and{" "}
                            <span className="font-semibold text-sky-300">make Him known</span> through their unique gifts and talents.
                        </motion.p>

                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="mt-12 flex items-center justify-center gap-4"
                        >
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                            <div className="w-2 h-2 rounded-full bg-sky-400" />
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Floating Cards with Glass Effect */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { 
                                icon: <IoMusicalNotes className="w-10 h-10" />, 
                                text: "Worship & Celebration",
                                gradient: "from-sky-500/20 to-blue-500/20"
                            },
                            { 
                                icon: <IoPeopleCircle className="w-10 h-10" />, 
                                text: "Community Outreach",
                                gradient: "from-emerald-500/20 to-teal-500/20"
                            },
                            { 
                                icon: <IoHappy className="w-10 h-10" />, 
                                text: "Kids Discipleship",
                                gradient: "from-purple-500/20 to-pink-500/20"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group rounded-2xl overflow-hidden"
                            >
                                {/* Glass Effect Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} backdrop-blur-xl border border-white/20 shadow-2xl`} />
                                
                                {/* Glass Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Content */}
                                <div className="relative p-6">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <p className="text-sm font-semibold text-white">{item.text}</p>
                                </div>
                                
                                {/* Border Glow on Hover */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-slate-400"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </section>

            {/* Photo Slider Section */}
            <section className="py-16 sm:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-950 via-secondary-900 to-secondary-950" />
                <div className="relative">
                    <PhotoSlider photos={photos} autoPlayInterval={6000} />
                </div>
            </section>

            {/* Accordion Section */}
            <AccordionSection
                items={accordionItems}
                title="What We Offer"
                subtitle="Discover the various ways we nurture and equip the next generation of believers"
            />

            {/* Vision & Impact Section */}
            <section className="py-24 sm:py-32 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-950 via-secondary-900/50 to-secondary-950" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6">
                                Our Impact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                                Building Tomorrow's Leaders Today
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                We believe children are significant in the present for establishing God's kingdom. 
                                Our ministry focuses on raising up a generation that knows their identity in Christ, 
                                walks in their purpose, and impacts their world for eternity.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                                        <IoHeart className="w-6 h-6 text-sky-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Heart Transformation</h3>
                                        <p className="text-slate-300">
                                            We focus on heart-level change, not just behavior modification, helping children develop a genuine love for God.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                        <IoPeople className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Community Building</h3>
                                        <p className="text-slate-300">
                                            We create safe spaces where children can build meaningful relationships and grow together in faith.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                        <IoGlobe className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Global Perspective</h3>
                                        <p className="text-slate-300">
                                            We help children see beyond themselves and understand their role in God's global mission.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/kings_kids_outreach_1766602611673.png"
                                    alt="Join the movement"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Join the Movement</h3>
                                    <p className="text-slate-200">
                                        Be part of a generation that's changing the world for Christ.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default KingsKidsPage;
