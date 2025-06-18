import React from "react";

const TrustedSince = () => {
  const startYear = 2018; // Change this to your actual start year
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - startYear;

  return (
    <section className="bg-blue-50 py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Trusted Appliance Repair Since {startYear}
        </h2>
        <p className="text-lg text-gray-700">
          With over <span className="font-semibold text-blue-700">{totalYears}+</span> years of experience,
          New Star Service Center has been providing reliable and affordable
          home appliance repair services. Our skilled technicians ensure your
          appliances run like new.
        </p>
      </div>
    </section>
  );
};

export default TrustedSince;
