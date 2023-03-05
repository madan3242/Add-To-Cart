import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/loginPage/Login'
import './App.css'

import { Home } from './pages/homePage/Home'
import { Signup } from './pages/loginPage/Signup'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Profile } from './pages/profilePage/Profile'
import Admin from './admin/Admin'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        <Footer />
        <Routes>
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App