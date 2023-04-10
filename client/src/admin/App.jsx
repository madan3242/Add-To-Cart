import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/Dashboard'
import './App.css'
import CreateProduct from './components/products/CreateProduct'
import Navbar from './components/Navbar/Navbar'

const Admin = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}  />
        <Route path='/create' element={<CreateProduct />} />
      </Routes>
    </>
  )
}

export default Admin