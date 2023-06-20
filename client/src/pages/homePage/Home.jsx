import React, { useEffect, useState } from 'react'
import './Home.css'
import HomeNavbar from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import Login from '../../components/login/Login'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from '../../components/home/HomeContainer'
import Products from '../productPage/Products'
import Cart from '../cartPage/Cart'
import WishList from '../wishlistPage/WishList'
import { setAuthToken } from '../../services/setAuthToken'
import Profile from '../profilePage/Profile'

export const Home = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
      setIsLoggedIn(true);
      setShowLogin(false)
    }
  })

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  return (
    <>
      <div style={{ position: "relative"}}>
        {showLogin && <Login toggleLogin={toggleLogin} setIsLoggedIn={setIsLoggedIn} />}

        <HomeNavbar 
          toggleLogin={toggleLogin} 
          isloggedIn={isloggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
        />

        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<Products />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
        <Footer />
      </div>
    </>
  )
}
