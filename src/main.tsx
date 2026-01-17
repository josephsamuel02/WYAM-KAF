import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { initEmailJS } from "./utils/emailService";
import { initializeThemeFromLogo } from "./utils/logoColorExtractor";

// Initialize EmailJS
initEmailJS();

// Initialize theme colors from logo
initializeThemeFromLogo('/Logo.png').catch(console.error);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
