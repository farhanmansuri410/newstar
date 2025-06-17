import React from "react";
import TypewriterText from "./TypewriterText";

const HeroSections = () => {
  return (
    <section className="relative bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen items-center">
        {/* Left Text Content */}
        <div className="px-6 md:px-12 lg:px-20 z-10">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Reliable{" "}<br/>
              <span className="text-blue-600"><TypewriterText/><br/> Repair</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert repair services for refrigerators, ovens, washing machines,
              and more — trusted and delivered at your doorstep.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <button className="bg-[#271A70] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                Book a Service
              </button>
             
            </div>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative hidden lg:block">
          <img
            src="./hero_1.jpg"
            alt="Repair Service Illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white" />
        </div>
      </div>

      {/* SVG Shape Divider */}
      <div className="absolute inset-y-0 right-1/2 w-full lg:block hidden">
        <svg
          className="h-full w-full text-white"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,0 C50,100 50,0 0,100 L100,100 Z"
            fill="white"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSections;
