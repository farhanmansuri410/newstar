import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // If using Helmet
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUS from "./pages/ContactUs";
import WashingMachineRepair_page from "./pages/services/WashingMachineRepair_page";
import RefrigeratorRepair_page from "./pages/services/RefrigeratorRepair_page";
import MicrowaveRepair_page1 from "./pages/services/MicrowaveRepair_page1";





function App() {
  return (
    <HelmetProvider> {/* If using react-helmet-async */}
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home/>} /> {/* This is where Home should be */}
              <Route path="/aboutUs" element={<AboutUs/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/contactUs" element={<ContactUS/>} />

              {/* Service Pages */}
              <Route path="/services/WashingMachineRepair_page" element={<WashingMachineRepair_page/>} />
              <Route path="/services/RefrigeratorRepair_page" element={<RefrigeratorRepair_page/>} />
              <Route path="/services/MicrowaveOvenRepair_page1" element={<MicrowaveRepair_page1/>} />

             
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;