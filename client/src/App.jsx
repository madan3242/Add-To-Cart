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
import ForgotPassword from './components/Login/ForgotPassword'
import ResetPassword from './components/Login/ResetPassword'
import Cart from './components/Cart/Cart'
import { ToastContainer } from 'react-toast'

const App = () => {
  const user = useSelector(state => state.auth.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
      setIsAuthenticated(true);
    }
  })

  return (
    <>
      <>
      <Router >
        <Navbar 
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated} 
        />
        <Routes>
          <Route path='/' exact element={<Home />}  />
          <Route path='/login' element={ <Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/password/reset/:token' element={<ResetPassword />} />

          <Route path='/profile' element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='/admin/*' element={
            <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
              <Admin />
            </ProtectedRoute>
          } />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
    <ToastContainer delay={3000} />
    </>
  )
}

export default App