import React, { useState, useEffect, useMemo } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import CarouselBox from "./CarouselBox";
import CarouselInMobile from "./CarouselInMobile";

const CustomCarousel = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const carouselData = useMemo(() => [
    {
      title: "Greg Archbld, Founder & CE",
      image: "/assets/images/carousel1.svg",
      des: "If HomeFixRepairs is a real company, you may want to check online reviews, testimonials, and other sources to gather information about their reputation and services. You could also visit their official website, social media profiles, or contact them directly for the most accurate and up-to-date information.",
    },
    {
      title: "Timkozak",
      image: "/assets/images/carousel2.svg",
      des: "HomeFixRepairs did a solid job addressing my plumbing concerns. The positives outweigh the minor inconveniences, and I would consider using their services again. Recommended for their professionalism and quality work.",
    },
    {
      title: "Charlie",
      image: "/assets/images/carousel3.svg",
      des: "HomeFixRepairs exceeded my expectations in every aspect. I highly recommend them for their professionalism, skilled workforce, and commitment to customer satisfaction. If you're looking for a reliable home improvement partner, HomeFixRepairs is the way to go.",
    },
  ], []);

  const slides = useMemo(() => {
    return carouselData.map((data, index) => ({
      key: uuidv4(),
      content: (
        <CarouselBox
          title={data.title}
          imag={data.image}
          description={data.des}
          activeSlide={goToSlide === index}
        />
      ),
      onClick: () => setGoToSlide(index),
    }));
  }, [carouselData, goToSlide]);

  const handleTouchStart = (evt) => {
    const firstTouch = evt.touches[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) return;

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      setGoToSlide((prev) => {
        if (xDiff > 0) {
          // Left swipe
          return (prev + 1) % slides.length;
        } else {
          // Right swipe
          return (prev - 1 + slides.length) % slides.length;
        }
      });
    }

    setXDown(null);
    setYDown(null);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoScroll) {
        setGoToSlide((prevGoToSlide) => (prevGoToSlide + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [autoScroll, slides.length]);

  return (
    <div className="position-relative">
      <img
        src="/assets/images/CarouselBackImage.jpg"
        className="BackImagesInCarousel"
        alt="Background"
      />
      <div className="outerContainerCarousel">
        <div className="outerWrapperHeaderClients">
          <h3 className="headingOurClients">Our Clients Reviews</h3>
        </div>
        <div className="carouselInFullSize">
          <CarouselInMobile data={carouselData} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="CarouselInMobile CarouselSize">
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={2}
                showNavigation={true}
                animationConfig={config.slow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
