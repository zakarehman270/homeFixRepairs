import React, { useState, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import CarouselBox from "./CarouselBox";
import CarouselInMobile from "./CarouselInMobile";
const getTouches = (evt) => {
  return evt.touches || evt.originalEvent.touches; // browser API
};

const CustomCarousel = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(true);
  const [enableSwipe] = useState(true);
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);
  console.log("goToSlide", goToSlide);
  let CarouselData = [
    {
      image: "/assets/images/carousel1.svg",
      des: "The Infinite Social Kickstarted the next stage of my life. I used to be too afraid to start conversations with new people, and now I feel confident and am surrounded by an entired new social gropu of friends. I learned valuable skills, but most importantly I am living a much happier life where I feel professionally and socially fulfilled.",
    },
    {
      image: "/assets/images/carousel2.svg",
      des: "The Infinite Social Kickstarted the next stage of my life. I used to be too afraid to start conversations with new people, and now I feel confident and am surrounded by an entired new social gropu of friends. I learned valuable skills, but most importantly I am living a much happier life where I feel professionally and socially fulfilled.",
    },
    {
      image: "/assets/images/carousel3.svg",
      des: "The Infinite Social Kickstarted the next stage of my life. I used to be too afraid to start conversations with new people, and now I feel confident and am surrounded by an entired new social gropu of friends. I learned valuable skills, but most importantly I am living a much happier life where I feel professionally and socially fulfilled.",
    },
  ]
  const slides = [
    {
      key: uuidv4(),
      content: (
        <CarouselBox
          title={"Greg Archbld, Founder & CEO"}
          imag={"/assets/images/carousel1.svg"}
          description={
            "The Infinite Social Kickstarted the next stage of my life. I used to be too afraid to start conversations with new people, and now I feel confident and am surrounded by an entired new social gropu of friends. I learned valuable skills, but most importantly I am living a much happier life where I feel professionally and socially fulfilled."
          }
          activeSlide={goToSlide == 0}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <CarouselBox
          title={"Greg Archbld, Founder & CEO"}
          imag={"/assets/images/carousel2.svg"}
          description={
            "The Infinite Social Kickstarted the next stage of my life. I used to be too afraid to start conversations with new people, and now I feel confident and am surrounded by an entired new social gropu of friends. I learned valuable skills, but most importantly I am living a much happier life where I feel professionally and socially fulfilled."
          }
          activeSlide={goToSlide == 1}
        />
      ),
    },
    // {
    //   key: uuidv4(),
    //   content: <img src="https://picsum.photos/600/803/?random" alt="3" />,
    // },
    // {
    //   key: uuidv4(),
    //   content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    // },
    // {
    //   key: uuidv4(),
    //   content: <img src="https://picsum.photos/800/804/?random" alt="5" />,
    // },
    // {
    //   key: uuidv4(),
    //   content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
    // },
    // {
    //   key: uuidv4(),
    //   content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
    // },
    {
      key: uuidv4(),
      content: (
        <CarouselBox
          title={"Greg Archbld, Founder & CEO"}
          imag={"/assets/images/carousel3.svg"}
          description={
            "The Infinite Social Kickstarted the next stage of my life. I used to be too afraid to start conversations with new people, and now I feel confident and am surrounded by an entired new social gropu of friends. I learned valuable skills, but most importantly I am living a much happier life where I feel professionally and socially fulfilled."
          }
          activeSlide={goToSlide == 2}
        />
      ),
    },
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

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(goToSlide + 1);
      } else {
        /* right swipe */
        setGoToSlide(goToSlide - 1);
      }
      setXDown(null);
      setYDown(null);
    }
  };

  return (
    <div className="outerWrapperCarousel">
      <h3 className="headingOurClients pt-5">Our Clients</h3>
      <div>
        <CarouselInMobile data={CarouselData} />
      </div>

      <div className="CarouselInMobile">
        <div
          style={{ width: "80%", height: "500px", margin: "0 auto" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showNavigation}
            animationConfig={config.gentle}
          />
        </div>
      </div>

    </div>
  );
};
export default CustomCarousel;
