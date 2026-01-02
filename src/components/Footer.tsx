import React from "react";
import { Link } from "react-router-dom";
import { routes, contactEmail } from "../utils/routes";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { 
    IoMailOutline, 
    IoCallOutline, 
    IoLocationOutline,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoYoutube
} from "react-icons/io5";

const Footer: React.FC = () => {
    const { isDarkMode } = useTheme();

    const footerLinks = {
        quickLinks: [
            { name: "Home", path: routes.Landing_page },
            { name: "About", path: routes.about_page },
            { name: "King's Kids", path: routes.kings_kids_page },
            { name: "Staff", path: routes.staff_page },
            { name: "Contact", path: routes.contact_page },
        ],
        ministries: [
            { name: "Discipleship Training School", path: routes.Landing_page },
            { name: "King's Kids", path: routes.kings_kids_page },
            { name: "Prayer Circles", path: routes.Landing_page },
            { name: "Outreach Programs", path: routes.Landing_page },
        ],
    };

    const socialLinks = [
        { icon: IoLogoFacebook, href: "#", label: "Facebook" },
        { icon: IoLogoInstagram, href: "#", label: "Instagram" },
        { icon: IoLogoTwitter, href: "#", label: "Twitter" },
        { icon: IoLogoYoutube, href: "#", label: "YouTube" },
    ];

    return (
        <footer className={`relative border-t transition-colors duration-300 ${
            isDarkMode 
                ? "border-white/5 bg-secondary-950" 
                : "border-secondary-200 bg-secondary-50"
        }`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10">
                <div className={`absolute inset-0 ${
                    isDarkMode 
                        ? "bg-gradient-to-b from-secondary-900/50 to-secondary-950" 
                        : "bg-gradient-to-b from-white to-secondary-100"
                }`} />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to={routes.Landing_page} className="flex items-center gap-3 mb-6">
                            <img 
                                src="/Logo.png" 
                                alt="YWAM Kafanchan Logo" 
                                className="h-12 w-12 object-contain"
                            />
                            <div>
                                <p className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest ${
                                    isDarkMode ? "text-secondary-400" : "text-secondary-500"
                                }`}>
                                    Frontier Missions
                                </p>
                                <p className={`text-base sm:text-lg md:text-xl font-bold ${
                                    isDarkMode ? "text-white" : "text-secondary-900"
                                }`}>
                                    <span>YWAM </span>
                                    <span className="bg-gradient-to-r from-primary-400 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                                        Kafanchan
                                    </span>
                                </p>
                            </div>
                        </Link>
                        <p className={`text-sm leading-relaxed mb-6 ${
                            isDarkMode ? "text-secondary-300" : "text-secondary-600"
                        }`}>
                            Knowing God. Making Him Known.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                                            isDarkMode
                                                ? "bg-white/5 hover:bg-white/10 text-secondary-300 hover:text-white border border-white/5"
                                                : "bg-white hover:bg-secondary-100 text-secondary-600 hover:text-secondary-900 border border-secondary-200 shadow-sm"
                                        }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1">
                        <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${
                            isDarkMode ? "text-white" : "text-secondary-900"
                        }`}>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`text-sm transition-colors duration-200 hover:translate-x-1 inline-block ${
                                            isDarkMode
                                                ? "text-secondary-300 hover:text-white"
                                                : "text-secondary-600 hover:text-secondary-900"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ministries */}
                    <div className="lg:col-span-1">
                        <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${
                            isDarkMode ? "text-white" : "text-secondary-900"
                        }`}>
                            Ministries
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.ministries.map((ministry) => (
                                <li key={ministry.name}>
                                    <Link
                                        to={ministry.path}
                                        className={`text-sm transition-colors duration-200 hover:translate-x-1 inline-block ${
                                            isDarkMode
                                                ? "text-secondary-300 hover:text-white"
                                                : "text-secondary-600 hover:text-secondary-900"
                                        }`}
                                    >
                                        {ministry.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${
                            isDarkMode ? "text-white" : "text-secondary-900"
                        }`}>
                            Get in Touch
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`mailto:${contactEmail}`}
                                    className={`flex items-start gap-3 text-sm transition-colors duration-200 group ${
                                        isDarkMode
                                            ? "text-secondary-300 hover:text-white"
                                            : "text-secondary-600 hover:text-secondary-900"
                                    }`}
                                >
                                    <IoMailOutline className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span>{contactEmail}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+2348000000000"
                                    className={`flex items-start gap-3 text-sm transition-colors duration-200 group ${
                                        isDarkMode
                                            ? "text-secondary-300 hover:text-white"
                                            : "text-secondary-600 hover:text-secondary-900"
                                    }`}
                                >
                                    <IoCallOutline className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span>+234 800 000 0000</span>
                                </a>
                            </li>
                            <li>
                                <div className={`flex items-start gap-3 text-sm ${
                                    isDarkMode ? "text-secondary-300" : "text-secondary-600"
                                }`}>
                                    <IoLocationOutline className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span>Kafanchan, Kaduna State<br />Nigeria</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`mt-12 pt-8 border-t ${
                    isDarkMode ? "border-white/5" : "border-secondary-200"
                }`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className={`text-sm ${
                            isDarkMode ? "text-secondary-400" : "text-secondary-500"
                        }`}>
                            © {new Date().getFullYear()} YWAM Kafanchan. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link
                                to={routes.contact_page}
                                className={`transition-colors duration-200 ${
                                    isDarkMode
                                        ? "text-secondary-400 hover:text-white"
                                        : "text-secondary-500 hover:text-secondary-900"
                                }`}
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to={routes.contact_page}
                                className={`transition-colors duration-200 ${
                                    isDarkMode
                                        ? "text-secondary-400 hover:text-white"
                                        : "text-secondary-500 hover:text-secondary-900"
                                }`}
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

