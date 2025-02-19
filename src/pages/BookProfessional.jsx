import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
// import CustomCalendar from "../components/CustomCalendar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import moment from "moment";
import { services } from "../Data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

const BookProfessional = () => {
  const [Phone, setPhone] = useState();
  // const [SelectedDate, setSelectedDate] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [Loading, setLoading] = useState(false);
  const [SelectTime, setSelectTime] = useState();
  const [SelectedOptionNumberOfHour, setSelectedOptionNumberOfHour] = useState([
    { label: "1 Hour", value: "1" },
  ]);
  const location = useLocation();
  const navigate = useNavigate();
  let userID = location?.search?.replace("?", "");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    instruction: "",
    date: moment().format("dddd, MMMM DD"),
    time: "08.00 - 08.30",
    price: "",
    numberOfHour: "1",
  });
  const [validate, setValidate] = useState({
    name: false,
    phone: false,
    email: false,
    address: false,
    service: false,
    numberOfHour: false,
    terms: false,
  });
  const [isTermsChecked, setIsTermsChecked] = useState(false); // Track checkbox state

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Event handler for form submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // Perform form validation
    const newValidate = {
      name: formData.name === "",
      phone: Phone === "",
      email: formData.email === "",
      address: formData.address === "",
      numberOfHour: formData.numberOfHour === "",
      service: selectedOption === null,
      terms: !isTermsChecked,
    };
    setValidate(newValidate);
    // Check if there are any validation errors
    if (Object.values(newValidate).some((error) => error)) {
      // Handle validation errors, e.g., show an alert
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setLoading(true);
    // If validation passes, proceed with form submission
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    emailjs
      .sendForm(
        "service_zennb2u",
        "template_oqzis21",
        event.target,
        "ng0MaJFLD-mYiEWhw"
      )
      .then(
        (result) => {
          setLoading(false);
          Swal.fire({
            title: "Thank You !",
            text: "Our team will review your details and get back to you as soon as possible.",
            icon: "success",
          }).then(() => {
            navigate("/");
          });
        },
        (error) => {}
      );
    // navigate("/thank-you-message");
  };

  let DateArray = [
    { date: "08.00 - 08.30" },
    { date: "09.00 - 09.30" },
    { date: "10.00 - 10.30" },
    { date: "11.00 - 11.30" },
    { date: "12.00 - 12.30" },
    { date: "13.00 - 13.30" },
    { date: "14.00 - 14.30" },
    { date: "15.00 - 15.30" },
    { date: "16.00 - 16.30" },
    { date: "17.00 - 17.30" },
  ];
  useEffect(() => {
    services?.map((item) => {
      if (item.id === userID) {
        setSelectedOption([
          {
            label: item.title,
            value: item.id,
          },
        ]);
      }
    });
  }, [location.pathname]);

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        borderColor: validate.numberOfHour ? "BorderRed" : "",
      };
    },
  };

  const colourStylesForService = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        borderColor: validate.service ? "BorderRed" : "",
      };
    },
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {};
  }, [location.pathname]);

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setMinDate(formattedDate);
  }, []);

  return (
    <div className="outerContainerBookProfessional position-relative pb-5">
      <div className="">
        {Loading && (
          <div className="BackHover d-flex justify-content-center pt-5">
            <ReactLoading
              type={"spinningBubbles"}
              color={"Black"}
              height={"10%"}
              width={"10%"}
            />
          </div>
        )}
      </div>
      <div className="container-fluid FormContainer">
        {/* <p className="text-center UpperHeadingInBookProfessional py-4">
          Take a Deep Breath
        </p> */}
        <h3 className="text-center headingInBookProfessional mb-4 mt-4  mb-4">
          Book A Professional
        </h3>
        <div className="d-flex justify-content-center">
          <div className="outerWrapperForm">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div>
                    <label htmlFor="name" className="FormLabel">
                      Name<span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${
                        validate.name ? "BorderRed" : ""
                      }`}
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {validate.name && (
                      <Alert variant="danger">Name is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="phone" className="FormLabel">
                      Phone<span className="text-red">*</span>
                    </label>
                    <PhoneInput
                      country={"ae"}
                      value={Phone}
                      enableSearch
                      className={`${validate.phone ? "BorderRed" : ""}`}
                      onChange={(phone) => {
                        setPhone(phone);
                        formData.phone = phone;
                        setFormData({ ...formData });
                      }}
                    />
                    {validate.phone && (
                      <Alert variant="danger">Phone is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="email" className="FormLabel">
                      Email<span className="text-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${
                        validate.email ? "BorderRed" : ""
                      }`}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {validate.email && (
                      <Alert variant="danger">Email is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="address" className="FormLabel">
                      Address<span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      className={`form-control ${
                        validate.address ? "BorderRed" : ""
                      }`}
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    {validate.address && (
                      <Alert variant="danger">Address is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="service" className="FormLabel">
                      Choose Services
                    </label>
                    <Select
                      styles={colourStylesForService}
                      value={selectedOption}
                      onChange={(options) => {
                        setSelectedOption(options);
                        formData.service = options.label;
                        setFormData({ ...formData });
                      }}
                      options={services?.map((item) => ({
                        label: item.title,
                        value: item.id,
                      }))}
                    />
                    {validate.service && (
                      <Alert variant="danger">Service is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Date" className="FormLabel">
                    Select a Date & Time
                  </label>
                  {/* <CustomCalendar
                    setDate={(date) => {
                      formData.date = date;
                      setFormData({ ...formData });
                    }}
                  /> */}
                  <div>
                    <input
                      type="date"
                      className="form-control"
                      min={minDate}
                      onChange={(date) => {
                        formData.date = date.target.value;
                        setFormData({ ...formData });
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* <label htmlFor="Date" className="FormLabel mt-4">
                    {formData.date}
                  </label>
                  <p>
                    <label htmlFor="Date" className="FormLabel mt-2">
                      Start Time From : {formData.time}
                    </label>
                  </p> */}
                    <label htmlFor="service" className="FormLabel">
                      Select Time
                    </label>
                    <Select
                      className="w-100"
                      styles={colourStylesForService}
                      value={SelectTime}
                      onChange={(options) => {
                        // setSelectedOption(options);
                        // formData.service = options.label;
                        // setFormData({ ...formData });

                        setSelectTime(options);
                        formData.time = options.label;
                        setFormData({ ...formData });
                      }}
                      options={DateArray?.map((item) => ({
                        label: item.date,
                        value: item.date,
                      }))}
                    />
                    {validate.service && (
                      <Alert variant="danger">Service is required.</Alert>
                    )}
                  {/* <div className="row">
                    {DateArray.map((item, index) => {
                      return (
                        <div className="col-6" key={index}>
                          <p
                            className={`outerWrapper py-3 ${
                              SelectedDate === index ? "SelectedDate" : ""
                            } mt-2  c_pointer`}
                            onClick={() => {
                              setSelectedDate(index);
                              formData.time = item.date;
                              setFormData({ ...formData });
                            }}
                          >
                            {item?.date}
                          </p>
                        </div>
                      );
                    })}
                  </div> */}
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="service" className="FormLabel">
                      How many hours do you have professional
                    </label>
                    <Select
                      styles={colourStyles}
                      value={SelectedOptionNumberOfHour}
                      onChange={(options) => {
                        setSelectedOptionNumberOfHour(options);
                        formData.numberOfHour = options.value;
                        setFormData({ ...formData });
                      }}
                      options={[
                        {
                          label: "1 Hour",
                          value: "1",
                        },
                        {
                          label: "2 Hour",
                          value: "2",
                        },
                        {
                          label: "3 Hour",
                          value: "3",
                        },
                        {
                          label: "4 Hour",
                          value: "4",
                        },
                        {
                          label: "5 Hour",
                          value: "5",
                        },
                        {
                          label: "6 Hour",
                          value: "6",
                        },
                        {
                          label: "7 Hour",
                          value: "7",
                        },
                        {
                          label: "8 Hour",
                          value: "8",
                        },
                      ]}
                    />
                    {validate.service && (
                      <Alert variant="danger">Service is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <label htmlFor="instruction" className="FormLabel">
                      Instruction
                    </label>
                    <textarea
                      type="text"
                      id="instruction"
                      className={`form-control`}
                      name="instruction"
                      value={formData.instruction}
                      onChange={handleInputChange}
                      rows={5}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className={`form-check-input ${
                          validate.terms ? "BorderRed" : ""
                        }`}
                        value=""
                        checked={isTermsChecked}
                        onChange={(e) => setIsTermsChecked(e.target.checked)}
                      />
                      I Agree{" "}
                      <Link
                        className="text-decoration-none"
                        to="/term-condition"
                      >
                        Terms & Policy
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="FormLabel">
                  Total Price :
                </label>{" "}
                <span className="AEDTextHolder">AED</span>{" "}
                <span className="TotalPrice">
                  {parseInt(99) *
                    parseInt(
                      SelectedOptionNumberOfHour.value
                        ? SelectedOptionNumberOfHour.value
                        : 1
                    )}
                </span>
              </div>
              <div className="d-none">
                <textarea
                  name="message"
                  value={`
                      First Name:       ${formData.name} 
								      Email:            ${formData.email} 
											Phone:            ${formData.phone}  
                      Number Of Hours:  ${
                        formData.numberOfHour + " " + "hours"
                      } 
                      Service:          ${formData.service} 
                      Address:          ${formData.address} 
                      Date:             ${formData.date} 
                      Message:          ${formData.instruction}
                      Start Time:       ${formData.time} 
                      Price:            ${
                        "AED" +
                        " " +
                        parseInt(99) *
                          parseInt(
                            SelectedOptionNumberOfHour.value
                              ? SelectedOptionNumberOfHour.value
                              : 1
                          )
                      } 
											SubmittedFrom:  ${"Booking Form"}
														`}
                  onChange={() => {}}
                />
              </div>
              <div className="d-flex gap-2 mt-4">
                <Button className="CancelButton" type="submit">
                  Cancel
                </Button>
                <Button className="SubmitButton" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProfessional;
