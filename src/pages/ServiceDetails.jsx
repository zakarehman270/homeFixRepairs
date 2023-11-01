import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { serviceDetailsList } from "../Data";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
const ServiceDetails = () => {
  const [DataService, setDataService] = useState(null);
  const location = useLocation();
  let userID = location?.search?.replace("?", "");
  useEffect(() => {
    for (let i = 0; i < serviceDetailsList?.length; i++) {
      if (userID === serviceDetailsList[i]?.id) {
        setDataService(serviceDetailsList[i]);
        break;
      }
    }
  }, [location?.search]);

  console.log("name,, data", DataService);

  return (
    <div className="pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="pt-4 d-flex align-items-center justify-content-between">
              <p className="ourServiceHeading headingColor text-start ">
                {DataService?.title}
              </p>
              <div className=" ">
                <div className="d-flex justify-content-end gap-2">
                  <img
                    src="/assets/icons/facebookService.svg"
                    alt="facebookService"
                  />
                  <img
                    src="/assets/icons/whatsAppService.svg"
                    alt="whatsAppService"
                  />
                  <img
                    src="/assets/icons/EmialService.svg"
                    alt="EmialService"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="ServiceListSubHeading">{DataService?.description1}</p>
            <Button className="button mt-2">Book Now</Button>
          </div>
          <div className="col-md-6">
            <img
              src={DataService?.img}
              alt="imageInServiceDetails"
              className="imageInServiceDetails"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3">
              <h1 className="TitleDetailService">{DataService?.title2}</h1>
              <p className="ServiceListSubHeading">
                {DataService?.description2}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ReactPlayer
              url={DataService?.video}
              width={"100%"}
              className="w-100 imageInServiceDetails"
            />
          </div>
          <div className="col-md-6">
            <h1 className="TitleDetailService">{DataService?.title3}</h1>
            <p className="ServiceListSubHeading">{DataService?.description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
