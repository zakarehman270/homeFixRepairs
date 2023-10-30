import React from "react";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  location = useLocation();
  let id = location.search.replace("?", "");
  console.log("helo", id);
  return <div>ServiceDetails</div>;
};

export default ServiceDetails;
