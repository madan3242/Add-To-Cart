import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import { setAuthToken } from './services/setAuthToken'
import NotFound from './components/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { useSelector } from 'react-redux'
import Product from './components/Products/Product'

const App = () => {
  const user = useSelector(state => state.auth.user);
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
        <Navbar 
          toggleLogin={toggleLogin} 
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated} 
        />
        <Routes>
          <Route path='/' exact element={<Home />}  />
          <Route path='/profile' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />

          <Route path='/admin/*' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  )
}

export default App