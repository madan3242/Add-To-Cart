import React, { useState } from 'react'
import './Home.css'
import HomeNavbar from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import HomeCarousel from '../../components/carousel/Carousel'
import Login from '../../components/login/Login'
import MenDropdown from '../../components/Dropdowns/MenDropdown'

import banner1 from '../../assets/images/banner-1.gif'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner-3.jpg'
import mensStore from '../../assets/images/mens-store.jpg'
import womensStore from '../../assets/images/womens-store.jpg'
import { Container } from 'react-bootstrap'

export const Home = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
      <div style={{ position: "relative"}}>
        {showLogin && <Login toggleLogin={toggleLogin} />}
        {showDropdown && <MenDropdown />}
        <HomeNavbar toggleDropdown={toggleDropdown} toggleLogin={toggleLogin} />
        <HomeCarousel />

        <Container>
          <div className="banner1 mb-4">
            <img className='w-100' src={banner1} alt="" />
          </div>

          <h2>Women's Store</h2>
          <div className="mb-4">
            <img className='w-100' src={womensStore} alt="" />
          </div>

          <div className="banner1 mb-4">
            <img className='w-100' src={banner2} alt="" />
          </div>

          <h2>Men's Store</h2>
          <div className="mb-4">
            <img className='w-100' src={mensStore} alt="" />
          </div>

          <div className="banner1 mb-4">
            <img className='w-100' src={banner3} alt="" />
          </div>
          
        </Container>
        <Footer />
      </div>
    </>
  )
}
