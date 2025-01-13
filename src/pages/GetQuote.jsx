import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    workDescription: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    workDescription: false,
    phone: false,
    address: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      workDescription: formData.workDescription.trim() === "",
      phone: formData.phone.trim() === "",
      address: formData.address.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return; 
    setLoading(true);
    emailjs
      .sendForm(
        "service_zennb2u",
        "template_oqzis21",
        event.target,
        "ng0MaJFLD-mYiEWhw"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: "Thank You!",
            text: "Our team will review your details and get back to you as soon as possible.",
            icon: "success",
          }).then(() => navigate("/"));
        },
        () => {
          setLoading(false);
          Swal.fire({
            title: "Error",
            text: "Something went wrong. Please try again later.",
            icon: "error",
          });
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="form-section">
        <h1>Get Free Quote</h1>
        <p>
          Our experienced and knowledgeable team is dedicated to providing
          exceptional customer service.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-container mb-4">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={`custom-input ${errors.name ? "input-error" : ""}`}
            />
            {errors.name && (
              <small className="error-text">Name is required.</small>
            )}
          </div>

          <div className="input-container mb-4">
            <label htmlFor="phone" className="input-label">
              Phone Number
            </label>
            <PhoneInput
              country={"ae"}
              value={formData.phone}
              enableSearch
              name={formData.phone}
              id={formData.phone}
              className={errors.phone ? "input-error" : ""}
              onChange={(phone) =>
                setFormData((prev) => ({
                  ...prev,
                  phone,
                }))
              }
            />
            {errors.phone && (
              <small className="error-text">Phone is required.</small>
            )}
          </div>

          <div className="input-container mb-4">
            <label htmlFor="address" className="input-label">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="123 Main Street"
              className={`custom-input ${errors.address ? "input-error" : ""}`}
            />
            {errors.address && (
              <small className="error-text">Address is required.</small>
            )}
          </div>

          <div className="input-container mb-4">
            <label htmlFor="workDescription" className="input-label">
              Work Description
            </label>
            <textarea
              id="workDescription"
              name="workDescription"
              value={formData.workDescription}
              onChange={handleInputChange}
              placeholder="Write your work Description here..."
              className={`custom-textarea ${
                errors.workDescription ? "input-error" : ""
              }`}
              rows="4"
            ></textarea>
            {errors.workDescription && (
              <small className="error-text">Work Description is required.</small>
            )}
          </div>

          <div className="d-none">
            <textarea
              name="message"
              value={`
                      Name:             ${formData.name} 
											Phone:            ${formData.phone}  
                      Message:          ${formData.workDescription}
                      Address :         ${formData.address}
														`}
              onChange={() => {}}
            />
          </div>

          <button
            type="submit"
            className="send-button w-100"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="info-section">
        <div className="image-container">
          <img src="/assets/images/contactus.png" alt="Contact Graphic" className="w-100" />
        </div>
        <div className="info-details">
          <div className="outerWrapperMediaIconsInContactUS">
            <div className="d-flex gap-2 align-items-center mb-3">
              <img
                src="/assets/icons/locationpin.svg"
                alt="location"
                className="MediaIcons"
              />
              <p className="address">Office 316, Jessco building, Albraha, Dubai</p>
            </div>
            <div className="d-flex gap-2 align-items-center mb-3">
              <img
                src="/assets/icons/email.svg"
                alt="email"
                className="MediaIcons"
              />
              <p>Info@homefixrepairs.com</p>
            </div>
            <div className="d-flex gap-2 align-items-center mb-3">
              <img
                src="/assets/icons/phonecalling.svg"
                alt="phone"
                className="phoneIcons"
              />
              <p>+971 55 3068247</p>
            </div>
            <div className="d-flex gap-2 align-items-center mb-3">
              <img
                src="/assets/icons/phonecalling.svg"
                alt="phone"
                className="phoneIcons"
              />
              <p>+971 55 8504862</p>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100083605351014"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/facebooklogo.svg" alt="facebook" />
          </a>
          <a href="#">
            <img
              src="/assets/icons/instagram.svg"
              alt="instagram"
              className="instagramIcons"
            />
          </a>
          <a href="#">
            <img src="/assets/icons/twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
