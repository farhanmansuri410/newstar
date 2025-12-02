import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, Shield, Clock, Zap } from "lucide-react";

const HeroSection 
= () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const features = [
    { icon: <Clock className="w-5 h-5" />, text: "Same Day Service" },
    { icon: <Shield className="w-5 h-5" />, text: "6 Month Warranty" },
    { icon: <Star className="w-5 h-5" />, text: "Expert Technicians" },
    { icon: <Zap className="w-5 h-5" />, text: "24/7 Support" }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#2d246b] to-[#3a3080] text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Large floating circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full border border-blue-400/10"
            style={{
              left: `${10 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Trusted Since 2018</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="block text-white">Welcome to</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                New Star Service
              </span>
              <span className="block text-white">Centre</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed"
            >
              Reliable Home Appliance Repair Services You Can Trust
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-blue-200/90 mb-8 max-w-2xl"
            >
              When essential appliances stop working, your daily routine gets disrupted. 
              We provide trusted, professional, and transparent repair services to get your 
              appliances working efficiently again.
            </motion.p>

            {/* Feature Tags */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:flex md:flex-wrap gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10"
                >
                  <div className="text-blue-300">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="tel:6367820171"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Phone className="w-5 h-5 mr-3" />
                Call Now: 6367820171
              </a>

              <a
                href="https://wa.me/916367820171"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#25D366] to-green-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Chat
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeIn}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9/5</p>
                  <p className="text-sm text-blue-200">Customer Rating</p>
                </div>
              </div>

              <div className="h-12 w-px bg-white/20"></div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2,500+</p>
                  <p className="text-sm text-blue-200">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Main image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm"
              >
                <img
                  src="./Hero_new.jpeg"
                  alt="Professional Appliance Repair Service"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29]/60 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating card 1 */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="absolute -left-4 -top-4 md:-left-6 md:-top-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Quick</p>
                    <p className="text-sm text-blue-200">Response</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Genuine</p>
                    <p className="text-sm text-blue-200">Parts</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-blue-200">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
