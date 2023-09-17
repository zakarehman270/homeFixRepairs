import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/HeaderFooters/Footer";
import Header from "./components/HeaderFooters/Headers";
import ServiceDetail from "./pages/ServiceDetail";
import FurnitureServiceDetails from "./pages/FurnitureServiceDetails";
import BookProfessional from "./pages/BookProfessional";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/service-detail" element={<ServiceDetail />} />
				<Route path="/furniture-service-details" element={<FurnitureServiceDetails />} />
				<Route path="/book-professional" element={<BookProfessional />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/about-us" element={<AboutUs />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
