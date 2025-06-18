import React from "react";
import AboutSection from "../components/AboutSection";
import AboutCompony from "../components/AboutCompny";
import TrustedSince from "../components/TrustedSince";

const AboutUS = () => {
  return (
    <div className="p-6">
      <div className="flex justify-center my-6">
        <img
          src="/newstarimg.jpg"
          alt="About New Star Service Center"
          className="w-full max-w-md h-auto rounded-lg shadow-md"
        />
      </div>

      <AboutCompony />
      <TrustedSince/>
      <AboutSection />
    </div>
  );
};

export default AboutUS;
