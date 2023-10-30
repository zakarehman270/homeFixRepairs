import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";

const ContactUs = () => {
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
  return (
    <div className="outerContainerBookProfessional mb-5">
      <div className="container-fluid">
        <div className="row">
          <p className="text-center my-5 headingInBookProfessional">Contact Us</p>
          <div className="col-md-9">
            <h3 className="headingInContactUs">Feel Free To Contact Us</h3>
            <p className="SubheadingInContactUs">
              Let us help you become even greater at what you do. Fill out the
              following form and we will get back to you in the next 24 hours.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row g-3 mt-3">
                <div className="col-md-12">
                  <div>
                    <label htmlFor="username" className="FormLabel mb-3">
                      What's your name?
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control-contact-us"
                      placeholder="Type Your Full Name"
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
                <div className="col-md-12">
                  <div>
                    <label htmlFor="password" className="FormLabel mb-3">
                      What's your email address?
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control-contact-us"
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
                  <div>
                    <label htmlFor="password" className="FormLabel mb-3">
                      What's your phone number?
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control-contact-us"
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
                  <div>
                    <label htmlFor="password" className="FormLabel mb-3">
                      What's services are you looking for?
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control-contact-us"
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
                  <div>
                    <label htmlFor="password" className="FormLabel mb-3">
                      What's your Instructions?
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control-contact-us"
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
                  <div>
                    <label htmlFor="password" className="FormLabel mb-3">
                      What you Suggest?
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control-contact-us"
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
          <div className="col-md-3">
            <div>
              <p className="labelContactUs mb-2">CALL US</p>
              <p className="subLabel">+971558504862</p>
              <p className="subLabel">+971558504862</p>
            </div>
            <div>
              <p className="labelContactUs mb-2 mt-2">Email</p>
              <p className="subLabel">babalqatya4@gmail.com</p>
            </div>
            <div>
              <p className="labelContactUs mb-2 mt-2">ADDRESS</p>
              <p className="subLabel">Office 204, Albraha area, Jessco market building Dubai, UAE</p>
            </div>
            <img src="/assets/icons/map.svg" className="mt-3" alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
