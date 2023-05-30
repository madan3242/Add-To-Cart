import React, { useState } from 'react'
import './Home.css'
import HomeNavbar from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import Login from '../../components/login/Login'
import MenDropdown from '../../components/Dropdowns/MenDropdown'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from '../../components/home/HomeContainer'
import Products from '../productPage/Products'



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

        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        

        <Footer />
      </div>
    </>
  )
}
