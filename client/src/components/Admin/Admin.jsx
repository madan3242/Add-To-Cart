import React from 'react'
import './admin.css'
import { Routes, Route } from 'react-router-dom'
import AdminNavbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import User from './components/Users/User'
import Products from './components/Products/Products'
import Orders from './components/Orders/Orders'

const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <Sidebar />
        <div className="admin-main">
          <Routes>
            <Route path='/users' element={<User />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Admin