import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const FurnitureServiceDetails = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	const tabs = [
		{
			label: "Custom Made Furniture",
			content: <div>Content for Tab 1</div>,
		},
		{
			label: "Furniture Assembly",
			content: <div>Content for Tab 2</div>,
		},
		{
			label: "Furniture Repair",
			content: <div>Content for Tab 2</div>,
		},
		// Add more tabs as needed
	];
	return (
		<div className="my-5">
			<div className="container">
				<div className="d-flex gap-1 align-items-center justify-content-between mt-3 mb-1">
					<div></div>
					<div className="d-flex gap-2">
						<img
							className="w-100"
							src="/assets/icons/facebookService.svg"
							alt="fb"
						/>
						<img
							className="w-100"
							src="/assets/icons/whatsAppService.svg"
							alt="whatsApp"
						/>
						<img
							className="w-100"
							src="/assets/icons/EmialService.svg"
							alt="email"
						/>
					</div>
				</div>
				<h2 className="headingColor">
					Emergency Custom Made Furniture Services | Get Your Dream Furniture
					Today
				</h2>
				<p className="ServiceBoxDescription">
					Get your dream furniture designed and built with our emergency custom
					made furniture services. We offer wardrobe, cabinet, table, counter,
					kids bed, pergola and bed designing and manufacturing services.
				</p>
				<Link to={"/book-professional"}>
					<Button className="button mt-2">Book Now</Button>
				</Link>
			</div>
			<div className="outerWrapperTabs d-flex justify-content-center my-4 py-3">
				<div className="d-flex gap-5">
					{tabs.map((tab, index) => (
						<p
							key={index}
							onClick={() => handleTabClick(index)}
							className={`tabsButton ${index === activeTab ? "active" : ""}`}
						>
							{tab.label}
						</p>
					))}
				</div>
			</div>
			<div className="container">
				<div>{tabs[activeTab].content}</div>
				<div className="row">
					<div className="col-md-8">
						<p className="ServiceBoxDescription">
							Are you starting to get bored with how your house looks inside and
							out? If so consider top carpenter service Dubai as your preference
							in this spectrum. If you have an idea or a plan that has been
							brewing in your head for a few months, or even a year, about how
							to breathe new life into your home but do not have the carpentry
							skills to turn your ideas into reality, it is time to look for
							carpenter services to assist you. In every city and every town,
							there are a good number skilled professionals working under banner
							of top notch carpenter service Dubai like us. And these carpenters
							have a diverse set of skills, which vary according to their
							experience and the size of the company. For example, a lone
							carpenter who has been in his trade for only a couple of years
							must just be specializing in home repairs. That is for things like
							fixing your door and window, fixing a creaking floor, or building
							a nice tree house for your kids. There are also the big-time guys,
							the carpenters, who can work on every carpentry and construction
							project, and for the typical homeowner customer, they are offering
							home improvement services. These are the guys that you would want
							to contact if your home remodeling ideas consist of putting up an
							addition to your house, re-roofing, or completely remodeling the
							inside of your home.
						</p>
						<Button className="button mt-2">Book Now</Button>
					</div>
					<div className="col-md-4">
						<img
							className="ServiceImage"
							src="/assets/images/carpenterService.jpeg"
							alt="carpenter"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FurnitureServiceDetails;
