import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="outerContainerFooter p-3 text-white">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Link to={"/"}>
							<img src="/assets/icons/logo.svg" alt="" className="LogoImage" />
						</Link>
						<p className="footerParagraph mt-3">
							This is the version of our website addressed to speakers of
							English in the United States, your country or region in the
							drop-down menu. more
							<span>Learn More</span>
						</p>
					</div>
					<div className="col-md-3">
						<p className="mb-2 footerHeading">Customer Services</p>
						<p className="mb-1 footerLinks">Contact Us</p>
						<p className="mb-1 footerLinks">Shipping</p>
						<p className="mb-1 footerLinks">Return Policy</p>
						<p>My Accounts</p>
					</div>
					<div className="col-md-3">
						<p className="mb-2 footerHeading">Popular Services</p>
						<p className="mb-1 footerLinks">Carpenter</p>
						<p className="mb-1 footerLinks">Electrician</p>
						<p className="mb-1 footerLinks">Handyman</p>
						<p className="mb-1 footerLinks">Plumbing</p>
						<p className="footerLinks">Electrical Maintenance</p>
					</div>
					<div className="col-md-3">
						<p className="mb-2 footerHeading">Contact Information</p>
						<p className="mb-1 footerLinks">760-393-4773</p>
						<p className="footerLinks">info@maleartese.art</p>
						<div className="mt-3">
							<p className="mb-2 footerHeading">Follow Us</p>
							<div className="d-flex gap-2">
								<img src="/assets/icons/insta.svg" alt="" />
								<img src="/assets/icons/apple.svg" alt="" />
								<img src="/assets/icons/facebook.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
				<hr className="text-white opacity_1" />
			</div>
		</div>
	);
};

export default Footer;
