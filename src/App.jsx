import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/Index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUS from './pages/AboutUs';
import Services from './pages/Services';
import ContactUS from './pages/ContactUs';
function App() {
 
  return (
   <Router>
      {/* Navbar is outside Routes so it shows on all pages */}
      <Navbar />

      <Routes>
        {/* Homepage route shows HeroSection */}
        <Route path="/" element={<HeroSection />} />

        {/* Other page routes */}
        <Route path="/about" element={<AboutUS/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactUS/>} />
      </Routes>
    </Router>
  )
}

export default App
