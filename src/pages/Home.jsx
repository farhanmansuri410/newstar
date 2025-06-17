import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSections from "../components/HeroSections";
import RepairServices from "../components/RepairServices";


const Home = () => {
  return (
    <>
      
      <HeroSections/>
      <RepairServices/>
      <AboutSection/>
    </>
  );
};

export default Home;