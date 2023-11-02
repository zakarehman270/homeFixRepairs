import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CustomDropdown from "./CustomDropdown";
function Header() {
  const [SelectedIdex, setSelectedIdex] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const HeaderDropDown = [
    {
      is_open: isOpen1,
      setOpen: setIsOpen1,
      defaultSelected: "Carpenter",
      options: [
        { label: "Furniture assembly", value: "Furniture assembly",id:"1" },
        { label: "Furniture repair", value: "Furniture repair",id:"2" },
      ],
    },
    {
      is_open: isOpen2,
      setOpen: setIsOpen2,
      defaultSelected: "Electrician",
      options: [
        { label: "Wiring", value: "Wiring" ,id:"3" },
        { label: "Light bulbs", value: "Light bulbs",id:"4" },
        { label: "switches change", value: "switches change",id:"5" },
        { label: "Chandelier installation", value: "Chandelier installation",id:"6" },
        { label: "Power issue", value: "Power issue",id:"7" },
      ],
    },
    {
      is_open: isOpen3,
      setOpen: setIsOpen3,
      defaultSelected: "Handyman",
      options: [
        { label: "Curtains", value: "Curtains" , id:"8"  },
        { label: "blinds Installation", value: "blinds Installation" , id:"9"  },
        { label: "Drilling", value: "Drilling" , id:"10"  },
        { label: "Tv Mounting", value: "Tv Mounting" , id:"11"  },
      ],
    },
    {
      is_open: isOpen4,
      setOpen: setIsOpen4,
      defaultSelected: "Plumbing",
      options: [
        { label: "Leakage Fixing", value: "Leakage Fixing" , id:"12"  },
        { label: "Drainage Works", value: "Drainage Works" , id:"13"  },
        { label: "Plumbing", value: "Plumbing" , id:"14"  },
      ],
    },
  ];
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="HeaderContainer">
        <Container fluid>
          <Link to={"/"}>
            <div>
              <img
                src="/assets/icons/logo.svg"
                alt="logo"
                className="HeaderLogo"
              />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex align-items-center gap-4">
              <Link className="text-decoration-none headerLinks">Home</Link>
              <Link className="text-decoration-none headerLinks">Services</Link>
              <Link className="text-decoration-none headerLinks" to={"/blog"}>
                Blog
              </Link>
              <Link
                className="text-decoration-none headerLinks"
                to={"/book-professional"}
              >
                Instant Booking
              </Link>
              <Link
                className="text-decoration-none headerLinks"
                to={"/about-us"}
              >
                About Us
              </Link>
              <Link
                className="text-decoration-none headerLinks"
                to={"/contact-us"}
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="outerWrapperHeadingDropdown">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="d-flex gap-3">
                {HeaderDropDown?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedIdex(index);
                      }}
                    >
                      <CustomDropdown
                        selected={SelectedIdex === index}
                        options={item?.options}
                        isOpen={item.is_open}
                        setIsOpen={item.setOpen}
                        defaultSelected={item.defaultSelected}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
