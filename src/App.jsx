import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/Index.css'
import Navbar from './components/Navbar'
import AboutUS from './pages/AboutUs';
import Services from './pages/Services';
import ContactUS from './pages/ContactUs';
import Phonebar from './components/Phonebar';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
 
  return (
   <Router>
      {/* Navbar is outside Routes so it shows on all pages */}
      <Navbar />
      
      <Phonebar/>


      <Routes>

        {/* Other page routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUS/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactUS/>} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
