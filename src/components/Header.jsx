import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomDropdown from "./CustomDropdown";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setClearToken } from "../redux/AuthReducer";
function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [SelectedIdex, setSelectedIdex] = useState(0);
  const location = useLocation();
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
        { label: "Furniture assembly", value: "Furniture assembly", id: "1" },
        { label: "Furniture repair", value: "Furniture repair", id: "2" },
      ],
    },
    {
      is_open: isOpen2,
      setOpen: setIsOpen2,
      defaultSelected: "Electrician",
      options: [
        { label: "Wiring", value: "Wiring", id: "3" },
        { label: "Light bulbs", value: "Light bulbs", id: "4" },
        { label: "Switches change", value: "Switches change", id: "5" },
        {
          label: "Chandelier installation",
          value: "Chandelier installation",
          id: "6",
        },
        { label: "Power issue", value: "Power issue", id: "7" },
      ],
    },
    {
      is_open: isOpen3,
      setOpen: setIsOpen3,
      defaultSelected: "Handyman",
      options: [
        { label: "Curtains", value: "Curtains", id: "8" },
        { label: "Blinds Installation", value: "Blinds Installation", id: "9" },
        { label: "Drilling", value: "Drilling", id: "10" },
        { label: "Tv Mounting", value: "Tv Mounting", id: "11" },
      ],
    },
    {
      is_open: isOpen4,
      setOpen: setIsOpen4,
      defaultSelected: "Plumbing",
      options: [
        { label: "Leakage Fixing", value: "Leakage Fixing", id: "12" },
        { label: "Drainage Works", value: "Drainage Works", id: "13" },
        { label: "Plumbing", value: "Plumbing", id: "14" },
      ],
    },
  ];

  const { auth } = useSelector((state) => state.Auth);

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
            <Nav className="d-flex align-items-center">
              <Nav.Link
                as={Link}
                eventKey="/"
                to="/"
                className={`text-decoration-none headerLinks border-animation-header ${
                  location.pathname === "/" ? "ActiveLink" : ""
                }`}
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                eventKey="/blog"
                to="/blog"
                className={`text-decoration-none headerLinks border-animation-header ${
                  location.pathname === "/blog" ? "ActiveLink" : ""
                }`}
              >
                Blog{" "}
              </Nav.Link>

              <Nav.Link
                as={Link}
                eventKey="/book-professional"
                to={`/book-professional?${1}`}
                className={`text-decoration-none headerLinks border-animation-header ${
                  location.pathname === "/book-professional" ? "ActiveLink" : ""
                }`}
              >
                Book Professional
              </Nav.Link>

              <Nav.Link
                as={Link}
                eventKey="/about-us"
                to="/about-us"
                className={`text-decoration-none headerLinks border-animation-header ${
                  location.pathname === "/about-us" ? "ActiveLink" : ""
                }`}
              >
                About Us
              </Nav.Link>

              <Nav.Link
                as={Link}
                eventKey="/contact-us"
                to="/contact-us"
                className={`text-decoration-none headerLinks border-animation-header ${
                  location.pathname === "/contact-us" ? "ActiveLink" : ""
                }`}
              >
                Contact Us
              </Nav.Link>
              {auth?.AccessToken ? (
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src="/assets/images/timkozak.jpg" alt="Profile" />
                  </div>
                  <Nav.Link
                    as={Link}
                    eventKey="/dashboard"
                    to="/dashboard"
                    className={`text-decoration-none headerLinks border-animation-header ${
                      location.pathname === "/dashboard" ? "" : ""
                    }`}
                  >
                    <p className="mb-0 headerAdmin">{auth?.user?.first_name} {auth?.user?.last_name}</p>
                    <p>Admin</p>
                  </Nav.Link>
                  <p><img src="/assets/icons/logout.svg" className="c_pointer" alt="logout" 
                  onClick={()=>{
                    navigate("/")
                    localStorage.removeItem("token")
                    dispatch(setClearToken())
                  }}
                  /></p>
                </div>
              ) : (
                <div className="d-flex gap-3 ms-3">
                  <Link to={"/sign-up"} className="text-decoration-none">
                    <Button className="button SignUpButton   d-none d-lg-block">
                      Sign Up
                    </Button>
                  </Link>
                  <Link to={"/login"} className="text-decoration-none">
                    <Button className="button LoginButton d-none d-lg-block">
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="outerWrapperHeadingDropdown">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-wrap gap-3">
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
