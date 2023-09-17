import React, { useState, useEffect } from "react";
import CustomDropdown from "../components/CustomDropdown/CustomDropdown";
import Services from "../components/Services/Services";
import EnterPriceSection from "../components/EnterpriseSection/EnterPriceSection";
import WhyChooseUs from "../components/WhyChooseUS/WhyChooseUs";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import FooterServiceList from "../components/FooterServiceList/FooterServiceList";
import { Button } from "react-bootstrap";

const HomePage = () => {
	function handlerSelectStatusOptions(option) {
		console.log("first", option);
	}

	return (
		<div>
			<div className="container">
				<div className="d-flex mt-3 gap-3 flex-wrap">
					<CustomDropdown
						options={[
							{ value: "Carpenter", label: "Carpenter" },
							{ value: "Furniture assembly", label: "Furniture assembly" },
							{ value: "Furniture repair", label: "Furniture repair" },
						]}
						cssStyle={{
							color: "#94A3B8",
							height: "40px",
							border: "#CBD5E1",
							borderRadius: "8px",
							fontWeight: "600",
							with: "50%",
						}}
						outerIndex={null}
						validationBorderColorRed={false}
						defaultSelect={"Carpenter"}
						selectOption={handlerSelectStatusOptions}
					/>
					<CustomDropdown
						options={[
							{ value: "Electrician", label: "Electrician" },
							{ value: "Wiring", label: "Wiring" },
							{
								value: "Light bulbs and switches change",
								label: "Light bulbs and switches change",
							},
							{
								value: "Chandelier installation ",
								label: "Chandelier installation ",
							},
							{ value: "Power issue", label: "Power issue" },
						]}
						cssStyle={{
							color: "#94A3B8",
							height: "40px",
							border: "#CBD5E1",
							borderRadius: "8px",
							fontWeight: "600",
							with: "50%",
						}}
						outerIndex={null}
						validationBorderColorRed={false}
						defaultSelect={"Electrician"}
						selectOption={handlerSelectStatusOptions}
					/>
					<CustomDropdown
						options={[
							{ value: "Handyman", label: "Handyman" },
							{
								value: "Curtains and blinds installation",
								label: "Curtains and blinds installation",
							},
							{ value: "Drilling", label: "Drilling" },
						]}
						cssStyle={{
							color: "#94A3B8",
							height: "40px",
							border: "#CBD5E1",
							borderRadius: "8px",
							fontWeight: "600",
							with: "50%",
						}}
						outerIndex={null}
						validationBorderColorRed={false}
						defaultSelect={"Handyman"}
						selectOption={handlerSelectStatusOptions}
					/>
					<CustomDropdown
						options={[
							{ value: "Plumbing", label: "Plumbing" },
							{ value: "Leakage fixing", label: "Leakage fixing" },
							{ value: "Drainage works", label: "Drainage works" },
						]}
						cssStyle={{
							color: "#94A3B8",
							height: "40px",
							border: "#CBD5E1",
							borderRadius: "8px",
							fontWeight: "600",
							with: "50%",
						}}
						outerIndex={null}
						validationBorderColorRed={false}
						defaultSelect={"Plumbing"}
						selectOption={handlerSelectStatusOptions}
					/>
					<CustomDropdown
						options={[
							{
								value: "Cleaning",
								label: "Cleaning",
							},
							{
								value: "Regular House Cleaning",
								label: "Regular House Cleaning",
							},
							{ value: "Deep Cleaning", label: "Deep Cleaning" },
							{
								value: "Move-In/Move-Out Cleaning",
								label: "Move-In/Move-Out Cleaning",
							},
							{ value: "Carpet Cleaning", label: "Carpet Cleaning" },
							{ value: "Upholstery Cleaning", label: "Upholstery Cleaning" },
							{ value: "Window Cleaning", label: "Window Cleaning" },
							{ value: "Office Cleaning", label: "Office Cleaning" },
							{ value: "Commercial Cleaning", label: "Commercial Cleaning" },
							{
								value: "Post-Construction Cleaning",
								label: "Post-Construction Cleaning",
							},
							{
								value: "Green Cleaning (Eco-Friendly)",
								label: "Green Cleaning (Eco-Friendly)",
							},
						]}
						cssStyle={{
							color: "#94A3B8",
							height: "40px",
							border: "#CBD5E1",
							borderRadius: "8px",
							fontWeight: "600",
							with: "50%",
						}}
						outerIndex={null}
						validationBorderColorRed={false}
						defaultSelect={"Cleaning"}
						selectOption={handlerSelectStatusOptions}
					/>
				</div>
			</div>
			<div className="outerContainerHomeImage mt-2">
				<div className="container contentHomeFixRepairHomeImage pt-5 text-white">
					<div className="ContainerContentHomeFixRepair pt-5">
						<p className="headingHomeFixRepair">Home Fix Repair</p>
						<p className="contentInHomePage">
							HomeFixRepair is a trusted and customer-focused home improvement
							company dedicated to making your living space better. With a team
							of skilled professionals, we offer a wide range of services, from
							minor repairs to major renovations, ensuring your home is
							comfortable, safe, and beautiful. Whether it's fixing a leaky
							faucet or completely remodeling your space, HomeFixRepair is your
							partner in creating a home you'll love. Quality workmanship,
							reliability, and a commitment to customer satisfaction are at the
							core of everything we do. Your home deserves the best, and that's
							exactly what we provide at HomeFixRepair
						</p>
						<div className="outerWrapperSearchHomePage mt-2 p-3">
							<p>Where would you like to receive your services?</p>
							<div className="d-flex gap-2 mt-2">
								<div className="outerWrapperSearchField d-flex justify-content-between bg-white">
									<input
										className="SearchField"
										placeholder="Search"
										type="text"
									/>
									<img src="/assets/icons/Search.svg" alt="" />
								</div>
								<div>
									<Button className="button">Book Now</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-4">
				<Services />
				<div className="mt-4">
					<EnterPriceSection />
				</div>
				<div className="mt-4">
					<WhyChooseUs />
				</div>
			</div>
			<div className="mt-4">
				<CarouselSlider />
			</div>
			<div className="container">
				<div className="mt-4 mb-4">
					<FooterServiceList />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
