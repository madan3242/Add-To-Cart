import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../assets/images/carousel/slide-1.gif";
import slide2 from "../../assets/images/carousel/slide-2.gif";
import slide3 from "../../assets/images/carousel/slide-3.gif";
import { useNavigate } from "react-router-dom";

const HomeCarousel = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-one">
            <h1>Discounts you won't find anywhere else.</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-two">
            <h1>Enhance your joy - of shopping.</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-three">
            <h1>Keep smiling and carry on purchasing.</h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
