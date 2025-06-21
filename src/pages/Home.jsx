import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSections from "../components/HeroSections";
import RepairServices from "../components/RepairServices";
import ServiceArea from "../components/ServiceArea";


const Home = () => {
  return (
    <>
      
      <HeroSections/>
      <RepairServices/>
      <AboutSection/>
      <ServiceArea/>
    </>
  );
};

export default Home;