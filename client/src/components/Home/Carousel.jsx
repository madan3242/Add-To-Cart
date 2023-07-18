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
          <img
            className="d-block w-100"
            src={slide1}
            alt=""
            onClick={() => navigate("/products")}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
