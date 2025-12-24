import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`m-4  rounded-lg transition-all duration-300`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <BsSun size={22} /> : <BsMoon size={22} />}
    </button>
  );
};

export default DarkModeToggle;
