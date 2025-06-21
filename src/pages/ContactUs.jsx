import React from "react";
import ContactForm from "../components/ContectForm";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaUser, FaGoogle } from "react-icons/fa";

const ContactUS = () => {
  return (
    <div className="p-6">
      <section className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Get in Touch With Us
          </h1>

          <div className="space-y-6 text-left text-gray-700 dark:text-gray-200">
            {/* Contact Person */}
            <div className="flex items-center gap-3">
              <FaUser className="text-blue-600" />
              <span className="font-medium">
                Contact Person: Mr. Narendra Chaudhary
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600" />
              <a href="tel:+916367820171" className="hover:underline">
                +91 63678 20171
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/916367820171?text=Hi%2C%20I%20need%20repair%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Google My Business */}
            <div className="flex items-center gap-3">
              <FaGoogle className="text-red-500" />
              <a
                href="https://maps.app.goo.gl/pDikvZTriQMYvEVk8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View on Google Business Profile
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <p>
                New Star Service Centre, <br />
                Satellite, Ahmedabad, Gujarat - 380015
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ContactUS;
