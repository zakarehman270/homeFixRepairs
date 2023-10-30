import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookProfessional from "./Pages/BookProfessional";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import TermAndCondition from "./Pages/TermAndCondition";
import Blog from "./Pages/Blog";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ServiceDetails from "./Pages/ServiceDetails";
import DeepServiceDetails from "./Pages/DeepServiceDetails";
function App() {
  return (
    <div>
      <FloatingWhatsApp phoneNumber={"+971558504862"} accountName={"Ahmed"} 
      darkMode={true} 
      allowEsc={true}
      allowClickAway={true}
      statusMessage={"Contact as soon as possible"}
      notification={true}
      />
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book-professional" element={<BookProfessional />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/term-condition" element={<TermAndCondition />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/deep-service-details" element={<DeepServiceDetails />} />
        <Route exact path="/servicedetail" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
