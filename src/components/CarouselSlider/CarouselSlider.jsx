import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";

import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Box from "./Box";

const getTouches = (evt) => {
	return evt.touches || evt.originalEvent.touches; // browser API
};

const CarouselSlider = () => {
	const [goToSlide, setGoToSlide] = useState(0);
	const [offsetRadius, setOffsetRadius] = useState(2);
	const [showNavigation, setShowNavigation] = useState(true);
	const [enableSwipe, setEnableSwipe] = useState(true);
	const [configState, setConfigState] = useState(config.gentle);
	const [xDown, setXDown] = useState(null);
	const [yDown, setYDown] = useState(null);

	const slides = [
		{
			key: uuidv4(),
			content: (
				<Box
					title={"Emily Davis"}
					img={"/assets/images/carousel1.svg"}
					des={
						"I can't express how delighted I am with the home cleaning service I received from HOMEFIXREPAIRS. From the moment I contacted them, they were extremely professional and accommodating. The team arrived on time and immediately got to work. They paid meticulous attention to every detail, ensuring that every corner of my home was spotless. I was particularly impressed with their eco-friendly cleaning products, which left my home smelling fresh and chemical-free. The best part? They completed the job in record time without compromising on quality. I highly recommend HOMEFIXREPAIRS to anyone in need of top-notch home cleaning services. They truly exceeded my expectations!"
					}
					isActive={goToSlide === 0}
				/>
			),
		},
		{
			key: uuidv4(),
			content: (
				<Box
					title={"John Smith"}
					img={"/assets/images/carousel2.svg"}
					des={
						"I've had my fair share of cleaning services in the past, but HOMEFIXREPAIRS has set a new standard for excellence. The crew they sent to clean my home was not only skilled and efficient but also incredibly courteous. They listened to my specific requests and paid close attention to the areas that needed extra care. I was especially impressed by their attention to detail in cleaning my kitchen appliances, which looked brand new after their service. I've already scheduled regular cleanings with them, and I can confidently say that they are the best in the business. Thank you, HOMEFIXREPAIRS, for making my home sparkle!"
					}
					isActive={goToSlide === 1}
				/>
			),
		},
		{
			key: uuidv4(),
			content: (
				<Box
					title={"Sarah Johnson"}
					img={"/assets/images/carousel3.svg"}
					des={
						"I recently hired HOMEFIXREPAIRS for a deep cleaning of my home, and I couldn't be happier with the results. Right from the initial inquiry, their customer service was outstanding, and they were able to accommodate my schedule. The cleaning team that arrived was not only punctual but also incredibly thorough in their work. My carpets, floors, and countertops were left gleaming, and they even took the time to organize some cluttered areas. The team's professionalism and dedication were truly commendable. I'm now a loyal customer, and I highly recommend HOMEFIXREPAIRS for anyone looking for top-quality home cleaning services. They've made my life so much easier!"
					}
					isActive={goToSlide === 2}
				/>
			),
		},
		// {
		// 	key: uuidv4(),
		// 	content: <Box title={"Greg Archbld, Founder & CEO"} isActive={true} />,
		// },
		// {
		// 	key: uuidv4(),
		// 	content: <Box title={"Greg Archbld, Founder & CEO"} isActive={true} />,
		// },
		// {
		// 	key: uuidv4(),
		// 	content: <Box title={"Greg Archbld, Founder & CEO"} isActive={true} />,
		// },
		// {
		// 	key: uuidv4(),
		// 	content: <Box title={"Greg Archbld, Founder & CEO"} isActive={true} />,
		// },
		// {
		// 	key: uuidv4(),
		// 	content: <Box title={"Greg Archbld, Founder & CEO"} isActive={true} />,
		// },
	].map((slide, index) => {
		return { ...slide, onClick: () => setGoToSlide(index) };
	});
	const handleTouchStart = (evt) => {
		if (!enableSwipe) {
			return;
		}

		const firstTouch = getTouches(evt)[0];
		setXDown(firstTouch.clientX);
		setYDown(firstTouch.clientY);
	};

	const handleTouchMove = (evt) => {
		if (!enableSwipe || (!xDown && !yDown)) {
			return;
		}

		const xUp = evt.touches[0].clientX;
		const yUp = evt.touches[0].clientY;

		const xDiff = xDown - xUp;
		const yDiff = yDown - yUp;
		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				/* left swipe */
				setGoToSlide(goToSlide + 1);
			} else {
				/* right swipe */
				setGoToSlide(goToSlide - 1);
			}
		}
	};
	console.log("goToSlide", goToSlide);
	return (
		<div
			className="outerWrapperCarousel"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
		>
			<h2 className="text-center text-white">Our Clients</h2>
			<Carousel
				slides={slides}
				goToSlide={goToSlide}
				offsetRadius={offsetRadius}
				showNavigation={showNavigation}
				animationConfig={configState}
			/>
		</div>
	);
};
export default CarouselSlider;
