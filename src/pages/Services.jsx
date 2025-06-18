import React from "react";
import RepairServices from "../components/RepairServices";
import OtherServices from "../components/OtherServices";

const Services = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Services Page</h1>
      <RepairServices/>
      <OtherServices/>
    </div>
  );
};

export default Services;
