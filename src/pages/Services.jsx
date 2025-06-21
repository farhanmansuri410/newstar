import React from "react";
import RepairServices from "../components/RepairServices";
import OtherServices from "../components/OtherServices";
import ServiceArea from "../components/ServiceArea";

const Services = () => {
  return (
    <div className="p-6">
      <RepairServices/>
      <OtherServices/>
      <ServiceArea/>
    </div>
  );
};

export default Services;
