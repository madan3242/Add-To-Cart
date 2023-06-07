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
import WomensDropdown from '../../components/Dropdowns/WomensDropdown'
import KidsDropdown from '../../components/Dropdowns/KidsDropdown'

export const Home = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(loggedIn ? false : true);

  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);
  const [showKidsDropdown, setShowKidsDropdown] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  const toggleMenDropdown = () => {
    setShowMenDropdown(!showMenDropdown);
    setShowWomenDropdown(false);
    setShowKidsDropdown(false)
  }

  const toggleWomenDropdown = () => {
    setShowWomenDropdown(!showWomenDropdown);
    setShowMenDropdown(false)
    setShowKidsDropdown(false)
  }

  const toggleKidsDropdown = () => {
    setShowKidsDropdown(!showKidsDropdown);
    setShowMenDropdown(false)
    setShowWomenDropdown(false)
  }

  return (
    <>
      <div style={{ position: "relative"}}>
        {showLogin && <Login toggleLogin={toggleLogin} setIsLoggedIn={setIsLoggedIn} />}

        {showMenDropdown && <MenDropdown toggleMenDropdown={toggleMenDropdown} />}
        {showWomenDropdown && <WomensDropdown toggleWomenDropdown={toggleWomenDropdown} />}
        {showKidsDropdown && <KidsDropdown toggleKidsDropdown={toggleKidsDropdown} />}

        <HomeNavbar toggleMenDropdown={toggleMenDropdown} toggleLogin={toggleLogin} loggedIn={loggedIn} toggleWomenDropdown={toggleWomenDropdown} toggleKidsDropdown={toggleKidsDropdown} />

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
