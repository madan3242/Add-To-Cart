import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import HomeNavbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import { setAuthToken } from './services/setAuthToken'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
      setIsAuthenticated(true);
      setShowLogin(false)
    }
  })

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }
  return (
    <>
      <div style={{ position: "relative" }}>
      <Router >
        {showLogin && <Login toggleLogin={toggleLogin} setIsAuthenticated={setIsAuthenticated} />}
        <HomeNavbar />
        <Routes>
          <Route path='/' exact element={<Home />}  />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<Products />} />

          
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  )
}

export default App