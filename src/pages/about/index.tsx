import React from "react";
import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import OurValues from "../../components/about/OurValues";
import OurLocation from "../../components/about/OurLocation";

const About: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurLocation />
    </div>
  );
};

export default About;
