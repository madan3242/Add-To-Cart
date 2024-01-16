import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { Spinner } from 'react-bootstrap'

import Admin from './components/Admin/Admin'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

import Products from './components/Products/Products'
import Product from './components/Products/Product'
import Cart from './components/Cart/Cart'
import Shipping from './components/Cart/Shipping'
import ConfirmOrder from './components/Cart/ConfirmOrder'
import Payment from './components/Cart/Payment'
import OrderSuccess from './components/Cart/OrderSuccess'

import Login from './components/Login/Login'
import ForgotPassword from './components/Login/ForgotPassword'
import ResetPassword from './components/Login/ResetPassword'
import Profile from './components/Profile/Profile'

import { setAuthToken } from './services/setAuthToken'
import NotFound from './components/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {
  const { user } = useSelector(state => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
      setIsAuthenticated(true)
    }
  }, [user])
  
  return (
    <>
        <Router >
          <Suspense 
            fallback={<Spinner />}
          >
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Routes>
                <Route path='/process/payment' element={
                  <ProtectedRoute user={user}>
                      <Payment />
                  </ProtectedRoute>
                } />
<<<<<<< HEAD

=======
              
>>>>>>> 2eb1f644df7735217e8963fc4368ecda5474662c
              <Route path='/' exact element={<Home />}  />
              <Route path='/login' element={ <Login />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/password/reset/:token' element={<ResetPassword />} />

              <Route path='/profile' element={
                  <ProtectedRoute user={user}>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
<<<<<<< HEAD

=======
              
>>>>>>> 2eb1f644df7735217e8963fc4368ecda5474662c
              <Route path='/products' element={<Products />} />
              <Route path='/products/:keyword' element={<Products />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/shipping' element={
                <ProtectedRoute user={user}>
                  <Shipping />
                </ProtectedRoute>
              } />

              <Route path='/order/confirm' element={
                <ProtectedRoute user={user}>
                  <ConfirmOrder />
                </ProtectedRoute>
              } />
              <Route path='/order/success' element={
                <ProtectedRoute user={user}>
                  <OrderSuccess />
                </ProtectedRoute>
              } />

              {/* Admin Routes */}
              <Route path='/admin/*' element={
                <ProtectedRoute user={user} isAdmin={true}>
                  <Admin />
                </ProtectedRoute>
              } />

              {/* Route not found */}
              <Route element={window.location.pathname === '/process/payment' ? null : <NotFound /> }  />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <Toaster position='top-center'  />
          </Suspense>
        </Router>
    </>
  )
}

export default App