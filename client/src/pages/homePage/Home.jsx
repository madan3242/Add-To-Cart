import React, { useState } from 'react'
import './Home.css'
import HomeNavbar from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import Login from '../../components/login/Login'
import MenDropdown from '../../components/Dropdowns/MenDropdown'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from '../../components/home/HomeContainer'
import Products from '../productPage/Products'
import Profile from '../profilePage/Profile'



export const Home = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(loggedIn ? false : true);
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
        {showLogin && <Login toggleLogin={toggleLogin} setIsLoggedIn={setIsLoggedIn} />}
        {showDropdown && <MenDropdown />}
        <HomeNavbar toggleDropdown={toggleDropdown} toggleLogin={toggleLogin} loggedIn={loggedIn} />

        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/products' element={<Products />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        
        <Footer />
      </div>
    </>
  )
}
