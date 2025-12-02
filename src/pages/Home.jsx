import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle,
  Shield, 
  Clock, 
  Wrench, 
  DollarSign, 
  Users, 
  Star, 
  CheckCircle,
  Heart,
  TrendingUp
} from "lucide-react";
import HeroSection from "../components/HeroSection";

const Home = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const reasons = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Experienced & Skilled Technicians",
      description: "Our technicians bring practical experience in repairing all types of home appliances. They follow industry-standard procedures and safety practices."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Transparent & Honest Pricing",
      description: "We share repair details and approximate charges before starting. No hidden fees—only clear communication."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely & Convenient Service",
      description: "We offer same-day or next-day service whenever possible, understanding the urgency when appliances break down."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Spare Parts",
      description: "We use compatible or brand-approved spare parts for long-term performance and durability."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer-Focused Approach",
      description: "Every step from booking to repair is handled with care, professionalism, and respect for your time."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Multi-Brand Repair Expertise",
      description: "We repair leading brands: LG, Samsung, Whirlpool, IFB, Bosch, Godrej, Haier, Panasonic, and many others."
    }
  ];

  const services = [
    {
      title: "Washing Machine Repair",
      description: "Front-load, top-load, semi-automatic & fully automatic washing machines. We fix noise, leaks, spinning issues, and error codes.",
      features: ["Noise Reduction", "Leak Fixing", "Motor Repair", "Drum Service"],
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Refrigerator Repair",
      description: "Single-door, double-door, and inverter models. We handle cooling issues, noise, water leakage, frost buildup, and thermostat failures.",
      features: ["Cooling Repair", "Compressor Service", "Gas Filling", "Thermostat Fix"],
      color: "from-green-50 to-green-100"
    },
    {
      title: "Microwave Oven Repair",
      description: "Solo, grill, and convection microwaves. We fix heating issues, turntable faults, control panel glitches, and sparking problems.",
      features: ["Heating Element", "Magnetron Repair", "Panel Service", "Turntable Fix"],
      color: "from-orange-50 to-orange-100"
    },
    {
      title: "Other Appliance Repair",
      description: "Air coolers, geysers, LED TVs, and other home appliances depending on technician availability.",
      features: ["Geyser Repair", "TV Service", "Cooler Maintenance", "General Repair"],
      color: "from-purple-50 to-purple-100"
    }
  ];

  const tips = [
    "Do not overload washing machines",
    "Keep refrigerators clean with proper ventilation",
    "Use microwave-safe utensils only",
    "Clean air vents and filters regularly",
    "Schedule occasional maintenance checks"
  ];

  const brands = [
    "LG", "Samsung", "Whirlpool", "IFB", "Bosch",
    "Godrej", "Haier", "Panasonic", "Voltas", "Blue Star"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <HeroSection/>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose New Star Service Centre?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choosing a repair service is an important decision. Here's why customers repeatedly trust us:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized repair services for all your essential home appliances
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl shadow-lg border border-gray-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Brands Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Trustworthy Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-gray-800 mb-6">
                What Makes Our Services Trustworthy?
              </motion.h3>
              
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="flex items-start mb-4">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Clear Explanations</h4>
                    <p className="text-gray-600">
                      Before starting any repair, we explain the issue, repair steps, and estimated charges in simple language.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <div className="flex items-start mb-4">
                  <Star className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Safe Handling</h4>
                    <p className="text-gray-600">
                      Our technicians follow strict safety procedures for electrical and mechanical components.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex items-start mb-4">
                  <Heart className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Satisfaction</h4>
                    <p className="text-gray-600">
                      We aim to create long-term trust. We value feedback and consistently improve our service quality.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Maintenance Tips */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-gray-800 mb-6">
                Tips to Maintain Your Home Appliances
              </motion.h3>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <p className="text-gray-700 mb-6">
                  Extend the lifespan of your appliances with these basic maintenance habits:
                </p>
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center text-gray-700"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      {tip}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Brands We Repair */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-16"
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-center text-gray-800 mb-8">
              Brands We Repair
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-5 gap-4"
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-lg font-semibold text-gray-800">{brand}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Home Appliance Repair Partner
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 opacity-90">
              Quality service, honest communication, and customer satisfaction—these values define who we are.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg mb-10 opacity-80">
              Whether your appliance has suddenly stopped working or shows signs of trouble, our team is here to help.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="tel:6367820171"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Instant Help: 6367820171
              </a>
              <a
                href="https://wa.me/916367820171"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Repair Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;