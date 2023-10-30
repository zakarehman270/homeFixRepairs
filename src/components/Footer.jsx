import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="outerWrapperFooter text-white pt-5 pb-3 px-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img
              src="/assets/icons/logo.svg"
              className="logoInFooter"
              alt="logo"
            />
            <p className="descriptionInFooter mt-3">
              This is the version of our website addressed to speakers of
              English in the United States, your country or region in the
              drop-down menu. more
            </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <p className="headingInFooter">Customer Services</p>
                <p className="mt-3 SubHeadingInFooter">Contact Us</p>
                <p className="mt-2 SubHeadingInFooter">Shipping</p>
                <p className="mt-2 SubHeadingInFooter">Return Policy</p>
                <Link className="text-decoration-none" to={"/term-condition"}> 
                  <p className="mt-2 SubHeadingInFooter">Term and Condition</p>
                </Link>
              </div>
              <div className="col-md-4">
                <p className="headingInFooter">Popular Services</p>
                <p className="mt-3 SubHeadingInFooter">Carpenter</p>
                <p className="mt-2 SubHeadingInFooter">Electrician</p>
                <p className="mt-2 SubHeadingInFooter">Handyman</p>
                <p className="mt-2 SubHeadingInFooter">Plumbing</p>
                <p className="mt-2 SubHeadingInFooter">
                  Electrical Maintenance
                </p>
              </div>
              <div className="col-md-4">
                <p className="headingInFooter">Contact Information</p>
                <p className="mt-3 SubHeadingInFooter">760-393-4773</p>
                <p className="mt-2 SubHeadingInFooter">info@maleartese.art</p>
                <div className="mt-3">
                  <p className="textHolderFollowUp">Follow Us</p>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <img src="/assets/icons/insta.svg" alt="insta" />
                    <img src="/assets/icons/apple.svg" alt="apple" />
                    <img src="/assets/icons/facebook.svg" alt="facebook" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="FooterLine" />
      </div>
    </div>
  );
};

export default Footer;
