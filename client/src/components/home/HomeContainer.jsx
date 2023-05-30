import React from "react";
import HomeCarousel from '../carousel/Carousel'

import banner1 from '../../assets/images/banner-1.gif'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner-3.jpg'
import mensStore from '../../assets/images/mens-store.jpg'
import womensStore from '../../assets/images/womens-store.jpg'
import { Container } from 'react-bootstrap'

const HomeContainer = () => {
  return (
    <>
      <HomeCarousel />
      <Container>
        <div className="banner1 mb-4">
          <img className="w-100" src={banner1} alt="" />
        </div>

        <h2>Women's Store</h2>
        <div className="mb-4">
          <img className="w-100" src={womensStore} alt="" />
        </div>

        <div className="banner1 mb-4">
          <img className="w-100" src={banner2} alt="" />
        </div>

        <h2>Men's Store</h2>
        <div className="mb-4">
          <img className="w-100" src={mensStore} alt="" />
        </div>

        <div className="banner1 mb-4">
          <img className="w-100" src={banner3} alt="" />
        </div>
      </Container>
    </>
  );
};

export default HomeContainer;
