import React from "react";

const AboutCompony = () => {
  return (
    <section
      id="about"
      className="bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700">
          About New Star Service Center
        </h2>

        {/* Introduction */}
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-10">
          New Star Service Center is your trusted solution for expert and affordable home appliance repair. Based in [Your City], we offer 24/7 service for washing machines, refrigerators, ACs, and other major household appliances.
        </p>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Mission and Vision */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              Our mission is to deliver fast, honest, and expert repair
              services that keep your home running smoothly. We aim to ensure
              100% customer satisfaction through top-quality service and
              support.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become the most trusted and reliable appliance repair service
              provider across India, offering innovation and integrity with
              every job we do.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✅ 24/7 Customer Support</li>
              <li>✅ Certified & Skilled Technicians</li>
              <li>✅ Fast Response & On-Time Service</li>
              <li>✅ Genuine Spare Parts Used</li>
              <li>✅ Affordable & Transparent Pricing</li>
              <li>✅ 100% Customer Satisfaction Guarantee</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 text-lg">
            Need help with your appliance?
          </p>
          <a
            href="https://wa.me/916367820171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
          >
            📞 Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCompony;
