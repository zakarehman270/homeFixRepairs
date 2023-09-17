import React from "react";
import ServiceBox from "./ServiceBox";

const Services = () => {
	let serviceArray = [
		{
			image: "./assets/images/Service1.svg",
			heading: "Carpenter",
			url: "/service-detail",
			id: "carpenter12332556716",
			description:
				"A Carpenter at HomeFixRepair is a skilled professional dedicated to crafting and maintaining high-quality wooden structures and fixtures. With expertise in woodworking and construction techniques, our carpenters excel in creating custom furniture, cabinets, doors, and more. They bring precision, craftsmanship, and attention to detail to every project, ensuring the best results for our clients. HomeFixRepair's carpenters are a vital part of our team, enhancing both the functionality and aesthetics of homes and spaces.",
		},
		{
			image: "./assets/images/Service2.svg",
			heading: "Electrician",
			url: "/service-detail",
			id: "Electrician122178wyq78212",
			description:
				"An Electrician at HomeFixRepair is a highly trained expert in electrical systems, dedicated to ensuring safety and efficiency in every project. Our electricians are skilled in wiring, installation, maintenance, and repairs, providing reliable solutions for residential and commercial properties. They possess a deep understanding of electrical codes and regulations, guaranteeing that all work is compliant and secure. At HomeFixRepair, our electricians play a vital role in keeping homes and businesses powered and safe, offering top-notch electrical services for our valued clients.",
		},
		{
			image: "./assets/images/Service3.svg",
			heading: "Handyman",
			url: "/service-detail",
			id: "Handyman122jnskj8981212",
			description:
				"A Handyman at HomeFixRepair is a versatile and skilled professional who takes care of a wide range of household and property maintenance tasks. Our handymen are experienced in plumbing, carpentry, electrical work, and general repairs. They are your go-to experts for fixing leaks, installing fixtures, patching up walls, and more. With their knowledge and attention to detail, our handymen ensure that your property remains in top-notch condition. HomeFixRepair's handymen are the reliable problem-solvers you can count on to keep your home or business running smoothly and looking its best.",
		},
		{
			image: "./assets/images/Service4.svg",
			heading: "Plumbing",
			url: "/service-detail",
			id: "Plumbing1221xjnjksdnk7828212",
			description:
				"A Plumbing expert at HomeFixRepair is a dedicated professional specializing in the installation, maintenance, and repair of plumbing systems. Our plumbers are highly skilled in handling everything from fixing leaky faucets and unclogging drains to installing complex piping systems. With a deep knowledge of plumbing codes and regulations, they ensure that all work is done safely and efficiently. At HomeFixRepair, our plumbers are committed to keeping your water and sanitation systems in optimal condition, providing reliable plumbing solutions for your residential and commercial needs.",
		},
		{
			image: "./assets/images/Service5.svg",
			heading: "Electrical Maintenance",
			url: "/service-detail",
			id: "Electricaljsdsj98392Maintenance1221212",
			description:
				"Electrical Maintenance specialists at HomeFixRepair are highly trained professionals focused on the ongoing care and upkeep of electrical systems. Our experts are skilled in routine inspections, troubleshooting, and repairs, ensuring that your electrical systems remain safe and efficient. They have a comprehensive understanding of electrical components, codes, and safety standards, guaranteeing that your property is always in compliance. At HomeFixRepair, our Electrical Maintenance team is dedicated to preventing issues and providing prompt solutions to keep your home or business running smoothly and your electrical systems in top-notch condition",
		},
		{
			image: "./assets/images/Service6.svg",
			heading: "Cleaning",
			url: "/service-detail",
			id: "Cleaning122dksdjskdj8992381212",
			description:
				"The Cleaning team at HomeFixRepair is a group of dedicated professionals committed to creating clean, healthy, and inviting spaces. Our experts use top-quality cleaning products and equipment to ensure thorough and efficient cleaning services for homes and businesses. From regular maintenance to deep cleaning projects, they leave no corner untouched. At HomeFixRepair, our Cleaning team takes pride in delivering spotless and sanitized environments, contributing to a safer and more comfortable living and working experience for our valued clients.",
		},
	];
	return (
		<div className="container">
			<div className="row">
				<div className="d-flex gap-1 align-items-center justify-content-center">
					<h2>Our</h2>
					<h2 className="headingColor">Services</h2>
				</div>
				<p className="text-center textColor mb-3">
					Check out some of our top home services
				</p>
				<div className="d-flex gap-4 flex-wrap">
					{serviceArray?.map((item, index) => {
						return (
							<ServiceBox
								key={index}
								image={item?.image}
								heading={item?.heading}
								description={item?.description}
								id={item.id}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Services;
