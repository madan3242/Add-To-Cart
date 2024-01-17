import React from "react";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-one text-center">
            <h1>Discounts you won't find anywhere else.</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-two text-center">
            <h1>Enhance your joy - of shopping.</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-three text-center">
            <h1>Keep smiling and carry on purchasing.</h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
