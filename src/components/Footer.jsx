import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & Description */}
        <div>
          <img
            src="/logo.png"
            alt="New Star Service Center Logo"
            className="w-32 h-auto mb-4"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            New Star Service Center is your trusted expert for home appliance
            repair. We provide 24/7 customer support and reliable services.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col gap-4">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            aria-label="Call New Star Service Center"
          >
            <FaPhoneAlt />
            Call Now
          </a>
          <a
            href="https://wa.me/916367820171"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* Social & Location */}
        <div className="flex flex-col gap-4">
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram page"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-400 text-base transition"
          >
            <FaInstagram />
            Follow on Instagram
          </a>
          <a
            href="https://www.google.com/maps/place/Your+Business+Location"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find us on Google Maps"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-base transition"
          >
            <FaMapMarkerAlt />
            Google My Business
          </a>
        </div>
      </div>

      {/* Divider & Footer Note */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} New Star Service Center. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
