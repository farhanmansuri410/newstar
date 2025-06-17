import React from "react";

const services = [
  {
    title: "Washing Machine Repair",
    image: "/washing.jpg", // Replace with your image path
    message: "Hello, I need help with Washing Machine Repair.",
    alt: "Technician repairing a washing machine",
  },
  {
    title: "Refrigerator Repair",
    image: "/refrigerator.jpg", // Replace with your image path
    message: "Hello, I have an issue with my Refrigerator.",
    alt: "Technician repairing a refrigerator",
  },
  {
    title: "Microwave Oven Repair",
    image: "/microoven.jpg", // Replace with your image path
    message: "Hi, I need Microwave Oven Repair service.",
    alt: "Technician checking a microwave oven",
  },
];

const whatsappNumber = "918849390320"; // Client's number without +

const RepairServices = () => {
  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Home Appliance Repair Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md text-center p-6 hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  service.message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition"
                aria-label={`Enquiry for ${service.title} via WhatsApp`}
              >
                Enquiry on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairServices;
