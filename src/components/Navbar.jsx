import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [homeMegaMenuOpen, setHomeMegaMenuOpen] = useState(false);
  const [servicesMegaMenuOpen, setServicesMegaMenuOpen] = useState(false);
  const [homeMenuPinned, setHomeMenuPinned] = useState(false);
  const [servicesMenuPinned, setServicesMenuPinned] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  return (
    <header className="bg-[#271A70] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <div className="text-2xl font-bold text-blue-100">
          <img src="/logo.png" alt="New Star Logo" className="h-14 w-34" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-blue-100 relative">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-blue-600 transition"
          >
            About us
          </Link>

          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-blue-600 transition"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:6367820171"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/916367820171"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleNav}>
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden p-4 bg-white">
          <AnimatePresence>
            {navOpen && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-4 space-y-4"
              >
                <motion.a
                  href="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeNav();
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Home
                </motion.a>

                <motion.a
                  href="/about"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeNav();
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="block text-gray-800 hover:text-blue-600"
                >
                  About
                </motion.a>

                <motion.a
                  href="/services"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeNav();
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Services
                </motion.a>

                <motion.a
                  href="/contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeNav();
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Contact
                </motion.a>

                <motion.a
                  href="tel:9876543210"
                  whileHover={{ scale: 1.05 }}
                  className="block text-blue-600 font-semibold"
                >
                  📞 Call Now
                </motion.a>

                <motion.a
                  href="https://wa.me/916367820171"
                  whileHover={{ scale: 1.05 }}
                  className="block text-green-600 font-semibold"
                >
                  💬 WhatsApp
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </header>
  );
};

export default Navbar;
