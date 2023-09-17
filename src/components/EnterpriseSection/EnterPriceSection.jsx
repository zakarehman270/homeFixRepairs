import React from "react";
import { Button } from "react-bootstrap";

const EnterPriceSection = () => {
	return (
		<div className="d-flex ">
			<div className="outerWrapperEnterprise w-50 p-4">
				<p className="text-white mb-2">Enterprise Suite</p>
				<h2 className="text-white">This is how</h2>
				<h3 className="primaryColor TextHolderEnterprise">
					good companies Services you!
				</h3>
				<p className="text-white my-3 line_height">
					Access the top 1% of talent on UPwork, and a full suite of hybrid
					workforce managment tools. This is how innovation works now.
				</p>
				<div className="d-flex gap-2 align-items-center">
					<img src="/assets/icons/Pencil.svg" alt="pencil" />
					<p className="text-white">
						Access expert talent to fill your skill gaps.
					</p>
				</div>
				<div className="d-flex gap-2 align-items-center mt-2">
					<img src="/assets/icons/bag.svg" alt="pencil" />
					<p className="text-white">
						Control your workflow: hire, classify and pay your talent
					</p>
				</div>
				<div className="d-flex gap-2 align-items-center mt-2">
					<img src="/assets/icons/headPhone.svg" alt="pencil" />
					<p className="text-white">
						Partner with upwork for end-to-end support
					</p>
				</div>
				<Button className="LearnMoreButton mt-3">Learn More</Button>
			</div>
			<div className="w-50">
				<img
					src="/assets/images/electrian.jpg"
					alt="electrian"
					className="h-100 w-100"
				/>
			</div>
		</div>
	);
};

export default EnterPriceSection;
