import React, { useState } from "react";
import { Button } from "react-bootstrap";

const DeepServiceDetails = () => {
  const [ActiveTas, setActiveTas] = useState(0);
  return (
    <div className="pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="pt-4 ">
              <div className="d-flex justify-content-end gap-2">
                <img
                  src="/assets/icons/facebookService.svg"
                  alt="facebookService"
                />
                <img
                  src="/assets/icons/whatsAppService.svg"
                  alt="whatsAppService"
                />
                <img src="/assets/icons/EmialService.svg" alt="EmialService" />
              </div>
            </div>
            <p className="ourServiceHeading headingColor text-start ">
              Professional handyman in dubai
            </p>
            <p className="ServiceListSubHeading mt-1">
              A professional handyman in Dubai is a skilled and versatile
              tradesperson who offers a wide range of repair, maintenance, and
              improvement services for residential, commercial, and industrial
              properties in the city of Dubai, United Arab Emirates. These
              individuals are essential for ensuring that properties are
              well-maintained, safe, and aesthetically pleasing. Here's a
              description of what you can expect from a professional handyman in
              Dubai:
            </p>
          </div>
        </div>
      </div>
      <div className="outerWrapperTabs mt-2 p-2 d-flex justify-content-center align-items-center gap-5">
        <p
          className={`c_pointer tabsTitle ${
            ActiveTas === 0 ? "activeTabs" : ""
          }`}
          onClick={() => {
            setActiveTas(0);
          }}
        >
          professional1
        </p>
        <p
          className={`c_pointer tabsTitle ${
            ActiveTas === 1 ? "activeTabs" : ""
          }`}
          onClick={() => {
            setActiveTas(1);
          }}
        >
          professional2
        </p>
        <p
          className={`c_pointer tabsTitle ${
            ActiveTas === 2 ? "activeTabs" : ""
          }`}
          onClick={() => {
            setActiveTas(2);
          }}
        >
          professional3
        </p>
      </div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-7">
            <p className="ourServiceHeading">
              Welcome to the furnature like asmble
            </p>
            <p className="ServiceListSubHeading mt-1">
              A professional handyman in Dubai is a skilled and versatile
              tradesperson who offers a wide range of repair, maintenance, and
              improvement services for residential, commercial, and industrial
              properties in the city of Dubai, United Arab Emirates. These
              individuals are essential for ensuring that properties are
              well-maintained, safe, and aesthetically pleasing. Here's a
              description of what you can expect from a professional handyman in
              Dubai:
            </p>
            <Button className="button mt-2">Book Now</Button>
          </div>
          <div className="col-md-5">
            <div>
              <img
                src="/assets/images/furnitureassembly.jpg"
                alt="furnitureassembly"
                className="DeepServiceDetailsImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepServiceDetails;
