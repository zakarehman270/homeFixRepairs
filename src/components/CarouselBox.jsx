import React from "react";

const CarouselBox = ({title , imag , description , activeSlide}) => {
  return (
    <div className={`outerWrapperCarouselBox c_pointer position-relative p-4 w-100 ${activeSlide ? "activeSlide" :""}`}>
      <img
        src={imag}
        className="outerWrapperCarouselImage"
        alt="carousel1"
      />
      <p className={`CarouselHeading mt-4 ${activeSlide ? "text-white" :""}`}>{title}</p>
      <p className={`CarouselDescription mt-2 ${activeSlide ? "text-white" :""}`}>
        {description}
      </p>
    </div>
  );
};

export default CarouselBox;
