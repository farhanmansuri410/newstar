import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, CheckCircle, Wrench, Zap } from "lucide-react";

const RepairServices = () => {
  const services = [
    {
      title: "Washing Machine Repair",
      image: "/washing.jpg",
      message: "Hello, I need help with Washing Machine Repair service.",
      alt: "Professional washing machine repair service by New Star Service Center",
      features: ["Front-Load & Top-Load", "Automatic Models", "Motor & Drum Repair", "Leakage Fixing"],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Refrigerator Repair",
      image: "/refrigerator.jpg",
      message: "Hello, I have an issue with my Refrigerator that needs professional repair.",
      alt: "Expert refrigerator repair and maintenance services",
      features: ["Single & Double Door", "Inverter Models", "Cooling Issues", "Compressor Repair"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Microwave Oven Repair",
      image: "/microoven.jpg",
      message: "Hi, I need Microwave Oven Repair service from New Star Service Center.",
      alt: "Microwave oven repair technician at work",
      features: ["Solo & Convection", "Heating Issues", "Turntable Repair", "Panel Service"],
      icon: <MessageCircle className="w-6 h-6" />
    },
  ];

  const whatsappNumber = "916367820171";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Home Appliance Repair Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert repair services for all major home appliances with genuine parts and professional workmanship
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)"
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent z-10"></div>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Service Icon Badge */}
                <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group/btn relative inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                  aria-label={`Get ${service.title} service via WhatsApp`}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <MessageCircle className="w-5 h-5 mr-3" />
                  <span>Quick Enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent -translate-y-16 translate-x-16"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-100"
        >
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Same Day Service</h4>
              <p className="text-sm text-gray-600">Quick response & repair</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">6 Month Warranty</h4>
              <p className="text-sm text-gray-600">On service & parts</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Expert Technicians</h4>
              <p className="text-sm text-gray-600">Certified professionals</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Need repair for another appliance? Contact us directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6367820171"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Call us for appliance repair"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call: 6367820171
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#25D366] to-green-500 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp General Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add missing icon imports
import { Shield, Users, Phone } from "lucide-react";

export default RepairServices;