import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const GetQuoteMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
      email: !validateEmail(formData.email),
      message: formData.message.trim() === "",
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
              Your Name
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
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="xxxxx@gmail.com"
              className={`custom-input ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && (
              <small className="error-text">Enter a valid email address.</small>
            )}
          </div>
          <div className="input-container mb-4">
            <label htmlFor="message" className="input-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              className={`custom-textarea ${
                errors.message ? "input-error" : ""
              }`}
              rows="4"
            ></textarea>
            {errors.message && (
              <small className="error-text">Message is required.</small>
            )}
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
          <img src="/assets/images/contactus.png" alt="Contact Graphic" />
        </div>
        <div className="info-details">
          <div className="outerWrapperMediaIconsInContactUS">
            <div className="d-flex gap-2 align-items-center mb-3">
              <img
                src="/assets/icons/locationpin.svg"
                alt="location"
                className="MediaIcons"
              />
              <p>Office 316, Jessco building, Albraha, Dubai</p>
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
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/icons/instagram.svg"
              alt="instagram"
              className="instagramIcons"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteMessage;
