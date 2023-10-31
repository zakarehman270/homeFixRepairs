import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { DeepServiceDetailsList } from "../Data";
import { useLocation } from "react-router-dom";
const DeepServiceDetails = () => {
  const [ActiveTas, setActiveTas] = useState("1");
  const [DataService, setDataService] = useState(null);
  const [TabsData, setTabsData] = useState(null)
  const location = useLocation();
  let userID = location?.search?.replace("?", "");
  useEffect(() => {
    for (let i = 0; i < DeepServiceDetailsList?.length; i++) {
      if (userID === DeepServiceDetailsList[i]?.id) {
        setDataService(DeepServiceDetailsList[i]);
        setTabsData(DeepServiceDetailsList[i]?.tabs[0])
        setActiveTas("1")
        break;
      }
    }
  }, [location?.search]);
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
              Professional {DataService?.title} in dubai
            </p>
            <p className="ServiceListSubHeading mt-1">
              {DataService?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="outerWrapperTabs mt-2 p-2 d-flex justify-content-center align-items-center gap-5">
        {DataService?.tabs?.map((item, index) => {
          return (
            <p
              key={index}
              className={`c_pointer tabsTitle ${
                ActiveTas === item?.id ? "activeTabs" : ""
              }`}
              onClick={() => {
                setActiveTas(item.id);
                setTabsData(item)
              }}
            >
              {item?.title}
            </p>
          );
        })}
      </div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-7">
            <p className="ourServiceHeading">
              Welcome to the furnature like asmble
            </p>
            <p className="ServiceListSubHeading mt-1">
              {TabsData?.description}
            </p>
            <Button className="button mt-2">Book Now</Button>
          </div>
          <div className="col-md-5">
            <div>
              <img
                src={TabsData?.img}
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
