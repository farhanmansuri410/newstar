import React from "react";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <main className="bg-white dark:bg-gray-800 relative overflow-hidden min-h-screen">
      {/* Header */}

      {/* Hero Body */}
      <div className="bg-white dark:bg-gray-800 flex items-center relative z-20 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row py-12 md:py-20">
          {/* Left Text Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center relative z-20">
            <span className="w-20 h-1 bg-[#271A70] dark:bg-white mb-6"></span>
            <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white">
              Reliable
              <span className="text-blue-600 block text-3xl sm:text-4xl md:text-5xl mt-2">
                <TypewriterText /> Repair
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
              Expert repair services for refrigerators, ovens, washing machines,
              and more — trusted and delivered at your doorstep.
            </p>
            <div className="flex mt-6">
              <a
                href="tel:+916367820171"
                className="uppercase py-2 px-6 rounded-lg bg-[#271A70] text-white text-sm hover:bg-blue-700 transition"
              >
                Book a Service
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-3/5 mb-10 lg:mb-0">
            <img
              src="./hero_1.jpg"
              alt="Repair Service"
              className="max-w-xs sm:max-w-sm lg:max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
