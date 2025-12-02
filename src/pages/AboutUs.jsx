import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - startYear;

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  // Refs for scroll animations
  const refs = {
    main: useRef(null),
    trusted: useRef(null),
    intro: useRef(null),
    grid: useRef(null),
    cta: useRef(null)
  };

  const inView = {
    main: useInView(refs.main, { once: true, amount: 0.3 }),
    trusted: useInView(refs.trusted, { once: true, amount: 0.3 }),
    intro: useInView(refs.intro, { once: true, amount: 0.3 }),
    grid: useInView(refs.grid, { once: true, amount: 0.3 }),
    cta: useInView(refs.cta, { once: true, amount: 0.3 })
  };

  return (
    <motion.section
      id="about"
      className="bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      ref={refs.main}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-blue-700"
          variants={itemVariants}
        >
          About New Star Service Center
        </motion.h2>

        {/* Trusted Since Section */}
        <motion.div
          ref={refs.trusted}
          variants={cardVariants}
          initial="hidden"
          animate={inView.trusted ? "visible" : "hidden"}
          className="bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-6 rounded-2xl mb-12 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-blue-800 mb-4"
            variants={itemVariants}
          >
            Trusted Appliance Repair Since {startYear}
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700"
            variants={itemVariants}
          >
            With over{" "}
            <motion.span
              className="font-semibold text-blue-700 text-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              {totalYears}+
            </motion.span>{" "}
            years of experience, New Star Service Center, founded and operated by{" "}
            <strong className="text-blue-800">Mr. Narendra Chaudhary</strong>, has been
            providing reliable, transparent, and professional appliance repair
            services. Our skilled technicians ensure your appliances run like new.
          </motion.p>
        </motion.div>

        {/* Introduction Paragraph */}
        <motion.div
          ref={refs.intro}
          initial="hidden"
          animate={inView.intro ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            variants={itemVariants}
          >
            Your one-stop solution for{" "}
            <motion.span
              className="font-bold text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              reliable and affordable home appliance repair
            </motion.span>{" "}
            in{" "}
            <motion.span
              className="font-bold text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              Satellite, Ahmedabad
            </motion.span>
            . We understand how essential appliances like{" "}
            <strong>washing machines</strong>,{" "}
            <strong>refrigerators</strong>, <strong>microwave ovens</strong>,
            and other household appliances are in your daily life. When they
            break down, we're here to help — fast and professionally.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Our team of experienced technicians provides{" "}
            <strong>quick doorstep service</strong>, using only{" "}
            <strong>genuine or brand-approved spare parts</strong> and offering{" "}
            <strong>cost-effective solutions</strong>. We're committed to{" "}
            <strong>100% customer satisfaction</strong>, and our reputation is
            built on{" "}
            <strong>trust, transparency, and ethical practices</strong>.
          </motion.p>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          ref={refs.grid}
          initial="hidden"
          animate={inView.grid ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Mission and Vision */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
          >
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600"
              variants={itemVariants}
            >
              Our Mission & Vision
            </motion.h3>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div
                className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500"
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-blue-700 mb-2">Mission</h4>
                <p className="text-gray-700">
                  To provide honest, safe, and professional appliance repair
                  services that customers can rely on. We aim to deliver fast,
                  transparent, and expert repair solutions without compromising
                  on ethics or quality.
                </p>
              </motion.div>
              <motion.div
                className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500"
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-blue-700 mb-2">Vision</h4>
                <p className="text-gray-700">
                  To become the most trusted and reliable appliance repair
                  service provider, known for our integrity, customer-centric
                  approach, and skilled workmanship.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us / What We Stand For */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white to-green-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
          >
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600"
              variants={itemVariants}
            >
              Why Choose Us?
            </motion.h3>
            <motion.ul
              className="space-y-4"
              variants={containerVariants}
            >
              {[
                "Transparency: Clear pricing & honest communication before every repair",
                "Professional Expertise: Trained technicians for all brands & models",
                "Customer-Focused: Quick response & convenient scheduling",
                "Ethical Practices: No misleading claims or deceptive pricing",
                "Quality Workmanship: Genuine spare parts & thorough testing",
                "24/7 Support: Always here when you need us"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  custom={index}
                  variants={listItemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.span
                    className="text-green-600 mr-3 mt-1 text-xl flex-shrink-0"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-700">
                    <strong className="text-blue-700">
                      {item.split(":")[0]}:
                    </strong>
                    {item.split(":")[1]}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          ref={refs.cta}
          initial="hidden"
          animate={inView.cta ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.p
            className="text-gray-600 mb-6 text-lg md:text-xl"
            variants={itemVariants}
          >
            Need expert repair for your appliance? We follow a clear 6-step process
            for your satisfaction.
          </motion.p>
          <motion.a
            href="https://wa.me/916367820171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="mr-2 text-2xl"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
            >
              📞
            </motion.span>
            Contact Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;