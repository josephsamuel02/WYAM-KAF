import React from "react";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default Contact;
