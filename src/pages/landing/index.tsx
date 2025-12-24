import React from "react";
import HeroSection from "../../components/landing/HeroSection";
import MissionSection from "../../components/landing/MissionSection";
import ProgramsSection from "../../components/landing/ProgramsSection";
import StoriesSection from "../../components/landing/StoriesSection";
import CTASection from "../../components/landing/CTASection";

const Landing: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <StoriesSection />
      <CTASection />
    </div>
  );
};

export default Landing;
