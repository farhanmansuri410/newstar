import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          {/* HOME Mega Menu */}
          
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600 transition">
            About us
          </Link>

          {/* SERVICES Mega Menu */}
          <Link
            to="/services"
            className="relative group"
            onMouseEnter={() => {
              if (!servicesMenuPinned) setServicesMegaMenuOpen(true);
            }}
            onMouseLeave={() => {
              if (!servicesMenuPinned) setServicesMegaMenuOpen(false);
            }}
          >
            <button
              className="flex items-center hover:text-blue-600 transition"
              onClick={() => {
                setServicesMegaMenuOpen((prev) => !prev);
                setServicesMenuPinned((prev) => !prev);
              }}
            >
              Services
              <ChevronRight
                className={`ml-1 transform transition ${
                  servicesMegaMenuOpen ? "rotate-90" : ""
                }`}
                size={16}
              />
            </button>

            {servicesMegaMenuOpen && (
              <div className="absolute top-10 left-0 w-[450px] bg-white shadow-lg rounded-lg p-5 grid grid-cols-2 gap-4 z-40">
                <div>
                  <h4 className="font-bold text-gray-700">Home Appliance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      <a href="#refrigerator" className="hover:text-blue-500">
                        Refrigerator Repairing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#washing-machine"
                        className="hover:text-blue-500"
                      >
                        Washing Machine Repairing
                      </a>
                    </li>
                  </ul>
                </div>
               
              </div>
            )}
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact Us
          </Link>
        </div>

        {/* Contact Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:9876543210"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/918849390320"
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
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          {/* Home Mobile Dropdown */}
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer hover:text-blue-600">
              Home
              <ChevronRight
                className="transform group-open:rotate-90 transition duration-200"
                size={16}
              />
            </summary>
            <div className="pl-4 pt-2 space-y-2 text-sm text-gray-700">
              <p className="font-semibold text-blue-500">Intro & Banner</p>
              <a href="#home" className="block hover:text-blue-600">
                Business Intro
              </a>
              <a href="#home" className="block hover:text-blue-600">
                Hero Banner
              </a>

              <p className="pt-3 font-semibold text-blue-500">Highlights</p>
              <a href="#home" className="block hover:text-blue-600">
                Service Highlights
              </a>
              <a href="#home" className="block hover:text-blue-600">
                Service Area
              </a>
            </div>
          </details>

          <a
            href="#about"
            className="block hover:text-blue-600"
            onClick={closeNav}
          >
            About
          </a>

          {/* Services Mobile Dropdown */}
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer hover:text-blue-600">
              Services
              <ChevronRight
                className="transform group-open:rotate-90 transition duration-200"
                size={16}
              />
            </summary>
            <div className="pl-4 pt-2 space-y-2 text-sm text-gray-700">
              <a href="#refrigerator" className="block hover:text-blue-600">
                Refrigerator Repairing
              </a>
              <a href="#oven" className="block hover:text-blue-600">
                Oven Repairing
              </a>
              <a href="#washing-machine" className="block hover:text-blue-600">
                Washing Machine Repairing
              </a>
            </div>
          </details>

          <a
            href="#contact"
            className="block hover:text-blue-600"
            onClick={closeNav}
          >
            Contact
          </a>
          <a
            href="tel:9876543210"
            className="block text-blue-600 font-semibold"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/918849390320"
            className="block text-green-600 font-semibold"
          >
            💬 WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
