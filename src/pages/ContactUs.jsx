import React from "react";
import ContactForm from "../components/ContectForm";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaUser,
  FaGoogle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUS = () => {
  const contactInfo = [
    {
      icon: <FaUser className="w-5 h-5" />,
      title: "Contact Person",
      content: "Mr. Narendra Chaudhary",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Call Us",
      content: "+91 63678 20171",
      link: "tel:+916367820171",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: "WhatsApp",
      content: "Chat Now",
      link: "https://wa.me/916367820171?text=Hi%2C%20I%20need%20repair%20service.",
      color: "from-[#25D366] to-green-500",
    },
    {
      icon: <FaGoogle className="w-5 h-5" />,
      title: "Google Business",
      content: "View Profile",
      link: "https://maps.app.goo.gl/pDikvZTriQMYvEVk8",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Address",
      content: (
        <>
          G-3, Gopal Shopping Centre, <br />
          Opp. H.B. Kapadia School, <br />
          Near Rosewood Tower, Prernatirth Derasar Road, <br />
          Satellite, Jodhpur, <br />
          Gujarat, Ahmedabad - 380015
        </>
      ),
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Get in Touch With Us
          </motion.h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help with all your appliance repair needs. Contact us for fast, reliable service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-1 shadow-lg`}>
                  <div className="bg-white rounded-xl p-6 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mr-4`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 group"
                      >
                        <div className="text-gray-700 hover:text-blue-600 transition-colors">
                          {item.content}
                        </div>
                        <div className="w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300 mt-1"></div>
                      </a>
                    ) : (
                      <div className="text-gray-700 mt-2">
                        {item.content}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map/Address Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        G-3, Gopal Shopping Centre, Opp. H.B. Kapadia School, <br />
                        Near Rosewood Tower, Prernatirth Derasar Road, <br />
                        Satellite, Jodhpur, Gujarat, Ahmedabad - 380015
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-2">📍 Location Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Easily accessible from all parts of Ahmedabad
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Ample parking space available
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Home service available across Ahmedabad
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 min-h-[300px] flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-4">
                    <FaMapMarkerAlt className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Google Maps Location</h4>
                  <p className="text-gray-600 mb-4">Click below to view our exact location</p>
                  <a
                    href="https://maps.app.goo.gl/pDikvZTriQMYvEVk8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    <FaGoogle className="w-5 h-5 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Send us a Message
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            {/* Contact Form (kept as is per your request) */}
            <ContactForm />
            
            {/* Quick Contact Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Quick Contact Options
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+916367820171"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  <FaPhoneAlt className="w-5 h-5 mr-3" />
                  Call Now: 6367820171
                </a>
                <a
                  href="https://wa.me/916367820171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#25D366] to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all"
                >
                  <FaWhatsapp className="w-5 h-5 mr-3" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUS;