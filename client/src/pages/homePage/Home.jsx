import React from 'react'
import './Home.css'
import HomeNavbar from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import HomeCarousel from '../../components/carousel/Carousel'

export const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeCarousel />
      <Footer />
    </>
  )
}
