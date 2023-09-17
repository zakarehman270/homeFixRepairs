// Box.js
import React from "react";

const Box = ({ title, isActive, img, des }) => {
	console.log("isActive,,", isActive);
	return (
		<div
			className={`box bg-white py-5 px-4 ${isActive ? "activeCarousel" : ""}`}
		>
			<div className="outerWrapperCarouselImage d-flex justify-content-center">
				<img src={img} alt="image" />
			</div>
			<h3 className="text-center">{title}</h3>
			<div className="d-flex justify-content-center gap-2">
				<img src="/assets/images/star.png" className="StarImages" alt="" />
				<img src="/assets/images/star.png" className="StarImages" alt="" />
				<img src="/assets/images/star.png" className="StarImages" alt="" />
				<img src="/assets/images/star.png" className="StarImages" alt="" />
				<img src="/assets/images/star.png" className="StarImages" alt="" />
			</div>

			<p className="mt-2 carouselContent">{des}</p>
		</div>
	);
};

export default Box;
