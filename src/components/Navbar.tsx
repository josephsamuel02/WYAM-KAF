import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/routes";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: routes.Landing_page },
  { name: "About", path: routes.about_page },
  { name: "King's Kids", path: routes.kings_kids_page },
  { name: "Staff", path: routes.staff_page },
  { name: "Contact", path: routes.contact_page },

];

const Navbar: React.FC = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const renderLinks = (extraClasses = "") =>
    navLinks.map((link) => {
      const isActive = location.pathname === link.path;
      return (
        <Link
          key={link.name}
          to={link.path}
          className={`relative font-semibold transition-colors duration-200 ${extraClasses} ${isActive
            ? "text-primary-400"
            : isDarkMode
              ? "text-secondary-200 hover:text-white"
              : "text-secondary-700 hover:text-secondary-900"
            }`}
          aria-current={isActive ? "page" : undefined}
        >
          {link.name}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-linear-to-r from-primary-500 to-amber-400 transition-transform duration-200 ${isActive ? "scale-x-100" : "group-hover:scale-x-100"
              }`}
          />
        </Link>
      );
    });

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${isDarkMode
          ? "border-white/5 bg-secondary-950/80"
          : "border-secondary-200/60 bg-white/80"
          }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to={routes.Landing_page} className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-primary-600 via-emerald-500 to-amber-500 text-xl font-bold text-white shadow-lg shadow-emerald-500/20 sm:h-12 sm:w-12 sm:text-2xl">
              Y
            </div>
            <div>
              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${isDarkMode ? "text-secondary-200" : "text-secondary-500"
                  } sm:text-xs sm:tracking-[0.35em]`}
              >
                Frontier Missions
              </p>
              <p
                className={`text-lg font-bold sm:text-xl md:text-2xl ${isDarkMode ? "text-white" : "text-secondary-900"
                  }`}
              >
                <span>YWAM </span>
                <span className="bg-linear-to-r from-primary-400 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                  Kafanchan
                </span>
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-8 text-sm">
              {renderLinks("group text-sm font-medium")}
            </div>
            <div className="flex items-center gap-4">
              <Link
                to={routes.contact_page}
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Join the Mission
              </Link>
              <DarkModeToggle />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <DarkModeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition focus-visible:outline-none focus-visible:ring-2 ${isDarkMode
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/50"
                : "border-secondary-200 bg-white text-secondary-900 hover:bg-secondary-50 focus-visible:ring-secondary-500/40"
                }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="text-lg">{isMenuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-white/15 bg-secondary-900/90 p-6 text-white shadow-2xl backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
            >
              <div className="space-y-4 text-lg">{renderLinks("block")}</div>
              <Link
                to={routes.contact_page}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
              >
                Join the Mission
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
