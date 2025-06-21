import React from "react";

const ServiceArea = () => {
 const locations = [
  "Satellite",
  "Jodhpur",
  "Sarkhej",
  "C.G. Road",
  "S.G. Highway",
  "Ambli",
  "Navrangpura",
  "Naranpura",
  "Prahladnagar",
  "Parimal Garden",
  "Gota",
  "Relief Road"
];


  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Our Service Areas in Ahmedabad
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-10 max-w-3xl mx-auto">
          We provide expert appliance repair services across major neighborhoods
          in Ahmedabad, ensuring fast and reliable service at your doorstep.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-800 dark:text-gray-200">
          {locations.map((area, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-sm sm:text-base hover:shadow-md transition"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
