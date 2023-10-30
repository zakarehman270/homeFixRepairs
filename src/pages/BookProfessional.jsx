import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import CustomCalendar from "../components/CustomCalendar";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
const BookProfessional = () => {
  const [Phone, setPhone] = useState();
  const [SelectedDate, setSelectedDate] = useState(0);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Validation functions for username and password
  const isUsernameValid = useMemo(
    () => formData.username.length >= 5,
    [formData.username]
  );

  const isPasswordValid = useMemo(
    () => formData.password.length >= 8,
    [formData.password]
  );

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
    event.preventDefault();
    if (isUsernameValid && isPasswordValid) {
      console.log("Form submitted:", formData);
      // You can send the data to a server here
    } else {
      console.log("Form validation failed");
    }
  };

  let DateArray = [
    { date: "12.00 Am" },
    { date: "01.00 Am" },
    { date: "02.00 Am" },
    { date: "03.00 Am" },
    { date: "04.00 Am" },
    { date: "05.00 Am" },
    { date: "06.00 Am" },
    { date: "07.00 Am" },
  ];
  return (
    <div className="outerContainerBookProfessional mb-5">
      <div className="container-fluid">
        <p className="text-center UpperHeadingInBookProfessional py-4">
          Take a Deep Breath
        </p>
        <h3 className="text-center headingInBookProfessional mb-4">
          Book Professionals
        </h3>
        <div className="outerWrapperForm p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <div>
                  <label htmlFor="username" className="FormLabel">
                    First Name*:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  {!isUsernameValid && (
                    <p className="error-message">
                      Username must be at least 5 characters long.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">
                    Last Name*
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">Phone*</label>
                  <PhoneInput
                    country={"us"}
                    value={Phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div> */}
              <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">
                    Email
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">
                    Address
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">
                    Address
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">
                    Choose Services
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="FormLabel">
                  Select a Date & Time
                </label>
                <CustomCalendar />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="FormLabel mt-4">
                  Wednesday, March 22
                </label>
                {DateArray.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className={`outerWrapper py-3 ${
                        SelectedDate === index ? "SelectedDate" : ""
                      } mt-2  c_pointer`}
                      onClick={() => {
                        setSelectedDate(index);
                      }}
                    >
                      {item?.date}
                    </p>
                  );
                })}
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">
                    Instruction
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="password" className="FormLabel">
                    Price Calculation
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {!isPasswordValid && (
                    <p className="error-message">
                      Password must be at least 8 characters long.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="" />I
                    agree terms & Policy
                  </label>
                </div>
              </div>
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
  );
};

export default BookProfessional;
