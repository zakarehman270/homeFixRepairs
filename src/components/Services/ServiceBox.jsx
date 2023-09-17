import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceBox = ({ image, heading, description, id }) => {
	return (
		<div className="outerWrapperServiceBox">
			<Link to={`/service-detail?${id}`}>
				<img src={image} alt={image} className="ServiceImage" />
			</Link>
			<p className="text-center py-2 ServiceBoxHeading">{heading}</p>
			<Link className="text-decoration-none" to={`/service-detail?${id}`}>
				<p className="mb-3 ServiceBoxDescription MaxNumberOfLine">{description}</p>
			</Link>
			<div className="d-flex justify-content-center">
				<Button className="button">Book Now</Button>
			</div>
		</div>
	);
};

export default ServiceBox;
