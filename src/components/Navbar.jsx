import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  // Services data with proper routes based on your file names
  const services = [
    {
      title: "Washing Machine Repair Service",
      slug: "washing-machine-repair-service",
      path: "/services/WashingMachineRepair_page",
      description: "Expert repair for all types of washing machines",
      icon: "🧺"
    },
    {
      title: "Refrigerator Repair Service",
      slug: "refrigerator-repair-service",
      path: "/services/RefrigeratorRepair_page",
      description: "Professional refrigerator repair & maintenance",
      icon: "🧊"
    },
    {
      title: "Microwave Oven Repair Service",
      slug: "microwave-oven-repair-service",
      path: "/services/MicrowaveOvenRepair_page1",
      description: "Quick and reliable microwave oven repairs",
      icon: "🍽️"
    }
  ];

  // Check if current page is a service page
  const isServicePage = services.some(service => 
    location.pathname.includes(service.path) || 
    location.pathname.includes(service.slug)
  );

  // Get current service page name
  const getCurrentService = () => {
    const currentService = services.find(service => 
      location.pathname.includes(service.path) || 
      location.pathname.includes(service.slug)
    );
    return currentService ? currentService.title : "Services";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigation items - updated with your exact page names
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/AboutUs", label: "About Us" },
    { 
      path: "/Services", 
      label: isServicePage ? getCurrentService() : "Services",
      isService: true 
    },
    { path: "/ContactUs", label: "Contact Us" }
  ];

  return (
    <header className="bg-gradient-to-r from-[#1a1450] to-[#2d246b] shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          onClick={scrollToTop}
          aria-label="New Star Service Center Home"
        >
          <div className=" p-1 ">
            <img 
              src="/logo.png" 
              alt="New Star Service Center - Professional Appliance Repair" 
              className="h-12 w-auto"
              width="120"
              height="48"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 font-medium">
            {navItems.map((item) => (
              item.isService ? (
                // Services Dropdown
                <div key="services" className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center space-x-1 py-2 transition-colors duration-300 ${
                      isServicePage 
                        ? "text-white font-semibold border-b-2 border-white" 
                        : "text-white hover:text-blue-300"
                    }`}
                    aria-expanded={servicesOpen}
                    aria-label="Services"
                    aria-haspopup="true"
                  >
                    <span>{getCurrentService()}</span>
                    <motion.div
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        role="menu"
                        aria-label="Services menu"
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">
                            Our Repair Services
                          </h3>
                          <div className="space-y-2">
                            {services.map((service, index) => {
                              const isActive = location.pathname === service.path;
                              return (
                                <motion.div
                                  key={service.slug}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    to={service.path} 
                                    onClick={() => {
                                      scrollToTop();
                                      setServicesOpen(false);
                                    }}
                                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 group ${
                                      isActive 
                                        ? "bg-blue-600 text-white" 
                                        : "hover:bg-blue-50"
                                    }`}
                                    role="menuitem"
                                    aria-label={service.title}
                                  >
                                    <span className="text-2xl">{service.icon}</span>
                                    <div className="flex-1">
                                      <p className={`font-semibold group-hover:text-blue-600 ${
                                        isActive ? "text-white" : "text-gray-800"
                                      }`}>
                                        {service.title}
                                      </p>
                                      <p className={`text-sm ${
                                        isActive ? "text-blue-100" : "text-gray-600"
                                      }`}>
                                        {service.description}
                                      </p>
                                    </div>
                                    <ChevronDown 
                                      size={16} 
                                      className={`transform -rotate-90 group-hover:text-blue-600 ${
                                        isActive ? "text-white" : "text-gray-400"
                                      }`} 
                                    />
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                          <div className="mt-4 pt-4 border-t">
                            <Link
                              to="/Services"
                              onClick={() => {
                                scrollToTop();
                                setServicesOpen(false);
                              }}
                              className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                              aria-label="View All Services"
                            >
                              View All Services
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // Regular nav items
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={scrollToTop}
                  className={`transition-colors duration-300 py-2 ${
                    location.pathname === item.path 
                      ? "text-white font-semibold border-b-2 border-white" 
                      : "text-white hover:text-blue-300"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="flex items-center space-x-4 ml-6">
            <a
              href="tel:6367820171"
              className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Call us at 6367820171"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
            <a
              href="https://wa.me/916367820171"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-green-500 text-white px-4 py-2.5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="lg:hidden text-white p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
        >
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {navItems.map((item) => (
                  item.isService ? (
                    <div key="mobile-services" className="py-3 px-4">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full font-medium"
                        aria-expanded={mobileServicesOpen}
                        aria-label="Services"
                      >
                        <span className={`${
                          isServicePage ? "text-blue-600 font-semibold" : "text-gray-800"
                        }`}>
                          {getCurrentService()}
                        </span>
                        <motion.div
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 space-y-2 pl-4 border-l-2 border-blue-200"
                          >
                            {services.map((service) => {
                              const isActive = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.slug}
                                  to={service.path}
                                  onClick={() => {
                                    scrollToTop();
                                    closeNav();
                                    setMobileServicesOpen(false);
                                  }}
                                  className={`block py-2 px-4 rounded-lg transition-colors ${
                                    isActive 
                                      ? "text-blue-600 font-semibold bg-blue-50" 
                                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                  }`}
                                  aria-label={service.title}
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="text-xl">{service.icon}</span>
                                    <span>{service.title}</span>
                                  </div>
                                </Link>
                              );
                            })}
                            <Link
                              to="/Services"
                              onClick={() => {
                                scrollToTop();
                                closeNav();
                                setMobileServicesOpen(false);
                              }}
                              className="block py-2 px-4 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                              aria-label="View All Services"
                            >
                              View All Services →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        scrollToTop();
                        closeNav();
                      }}
                      className={`block py-3 px-4 rounded-lg transition-colors font-medium ${
                        location.pathname === item.path 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      aria-label={item.label}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>

              {/* Mobile Contact Buttons */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a
                  href="tel:6367820171"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-colors font-semibold"
                  aria-label="Call us at 6367820171"
                >
                  <Phone size={20} />
                  <span>Call: 6367820171</span>
                </a>
                <a
                  href="https://wa.me/916367820171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#25D366] to-green-500 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-colors font-semibold"
                  aria-label="Chat with us on WhatsApp"
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;