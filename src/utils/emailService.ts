import emailjs from "@emailjs/browser";
import { contactEmail } from "./routes";

// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }
};

// Send email using EmailJS
export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const sendEmail = async (
  data: EmailData
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Validate configuration
    if (
      !EMAILJS_CONFIG.SERVICE_ID ||
      !EMAILJS_CONFIG.TEMPLATE_ID ||
      !EMAILJS_CONFIG.PUBLIC_KEY
    ) {
      throw new Error(
        "EmailJS configuration is missing. Please check your environment variables."
      );
    }

    // Prepare template parameters
    const templateParams = {
      to_email: contactEmail,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "Not provided",
      message: data.message,
      reply_to: data.email,
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to send email" };
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};
