import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaSnowflake } from "react-icons/fa";
import { TbMicrowave } from "react-icons/tb"; // ✅ Correct import

const services = [
  {
    icon: <FaTools size={40} className="text-blue-600" />,
    title: "Washing Machine Repair",
    description:
      "We repair all types of washing machines – Manual, Automatic, and Dryers from all major brands including LG, Samsung, Whirlpool, IFB, Bosch, and more.",
  },
  {
    icon: <FaSnowflake size={40} className="text-cyan-600" />,
    title: "Refrigerator Repair",
    description:
      "Expert service for single door, double door, side-by-side refrigerators from all leading companies like Samsung, Haier, LG, Whirlpool, Godrej and others.",
  },
  {
    icon: <TbMicrowave size={40} className="text-yellow-600" />,
    title: "Microwave Oven Repair",
    description:
      "From solo to convection microwaves – we fix heating, spark, and door issues across all brands including IFB, Panasonic, LG, and more.",
  },
];

const OtherServices = () => {
  return (
    <section id="services" className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Our Expert Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-700 text-lg mb-4">
            Facing issues with your appliance?
          </p>
          <a
            href="https://wa.me/916367820171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
          >
            📞 Book a Repair on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
