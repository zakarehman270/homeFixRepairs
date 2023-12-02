import React from "react";
import { Button } from "react-bootstrap";
import OurServices from "../components/ourServices";
import { services } from "../Data";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomCarousel from "../components/CustomCarousel";
const Home = () => {
  return (
    <div className="mb-5">
      <div className="">
        <div
          style={{ backgroundImage: 'url("/assets/images/header.png")' }}
          className="outerWrapperHome"
        >
          <div className="container-fluid text-white">
            <div className="row">
              <div className="col-6 ">
                <h3 className="MarginTop HomeHeading">Home Fix Repair</h3>
                <p className="SubHeadingInHome">
                  Home Fix Repair is your trusted partner for all your home
                  improvement needs. Our team of skilled professionals is
                  dedicated to delivering top-notch repair and maintenance
                  services. Whether it's a leaky faucet, a faulty electrical
                  system, or a renovation project, we're here to make your home
                  a better place. With Home Fix Repair, your home is in capable
                  hands.
                </p>
                <div className="my-3  outerWrapperSearchInHomeInHome py-2 px-3">
                  <p className="textInSearchHome mb-1">
                    Where would you like to receive your services?
                  </p>
                  <div className="d-flex align-items-baseline gap-2">
                    <div className="d-flex justify-content-between outerWrapperSearchInHome">
                      <input type="text" className="SearchInHome" />
                      <img
                        src="/assets/icons/Search.svg"
                        className="SearchIcons"
                        alt="Search"
                      />
                    </div>
                    <div>
                      <Button className="button">Book Now</Button>
                      <p className="TextHolderAdvanceSearch mt-1">
                        Advance Search
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 mb-4">
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
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="mt-5">
              <OurServices />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 pe-0">
            <div className="outerWrapperInterPriseSection py-4 px-3">
              <p className="text-white textHolderEnterPrise">
                Enterprise Suite
              </p>
              <p className="text-white textHolderThis my-3">This is how </p>
              <p className="textHolderGoodCompany">
                good companies Services you!
              </p>
              <p className="text-white descriptionInEnterPriseSuit my-3">
                Access the top 1% of talent on UPwork, and a full suite of
                hybrid workforce managment tools. This is how innovation works
                now.
              </p>
              <div className="d-flex gap-2 align-items-center mt-2">
                <img src="/assets/icons/Pencil.svg" alt="Pencil" />
                <p className="text-white descriptionInEnterPriseSuit">
                  Access expert talent to fill your skill gaps.
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <img src="/assets/icons/bag.svg" alt="bag" />
                <p className="text-white descriptionInEnterPriseSuit">
                  Control your workflow: hire, classify and pay your talent
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <img src="/assets/icons/headPhone.svg" alt="headPhone" />
                <p className="text-white descriptionInEnterPriseSuit">
                  Partner with upwork for end-to-end support
                </p>
              </div>
              <div className="mt-3">
                <Button className="ButtonLearnMore">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 ps-0">
            <div className="outerWrapperEnterpriseSuiteRightSection"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mt-5">
              <WhyChooseUs />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CustomCarousel />
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="d-flex gap-1 justify-content-center mb-3">
            <h3 className="HeadingPickService">Pick from </h3>
            <h3 className="HeadingPickService headingColor">
              over 5000 services{" "}
            </h3>
            <h3 className="HeadingPickService">list for your home</h3>
          </div>
          <div className="col-md-3">
            <p className="ServiceListHeading">Moving & Storage</p>
            <p className="ServiceListSubHeading mt-2">Local moving in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              International moving from Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Villa moving in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Furniture moving in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Office moving in Dubai</p>
            <p className="ServiceListSubHeading mt-2">Storage in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Furniture Storage in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Car Shipping in Dubai</p>
          </div>

          <div className="col-md-3">
            <p className="ServiceListHeading">AC Services</p>
            <p className="ServiceListSubHeading mt-2">AC Cleaning in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              AC Duct Cleaning in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">
              AC Installation in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">
              AC Maintenance in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">AC Repair in Dubai</p>
          </div>
          <div className="col-md-3">
            <p className="ServiceListHeading">Cleaning Services</p>
            <p className="ServiceListSubHeading mt-2">Home Cleaning Services</p>
            <p className="ServiceListSubHeading mt-2">Carpet Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Deep Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Laundry Services</p>
            <p className="ServiceListSubHeading mt-2">Mattress Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Office Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Sofa Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Water Tank Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Window Cleaning</p>
          </div>
          <div className="col-md-3">
            <p className="ServiceListHeading">Maintenance & Handyman</p>
            <p className="ServiceListSubHeading mt-2">Handyman in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Home Maintenance in Dibai
            </p>
            <p className="ServiceListSubHeading mt-2">
              Annual Maintenance in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">
              Building & Flooring in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Carpentry in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Curtains & blinds in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Electrician in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Furniture Assembly in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Plumber in Dubai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
