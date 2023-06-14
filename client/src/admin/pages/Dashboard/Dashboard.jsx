import React from 'react'
import AdminNavbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Dashboard.css'
import { Route, Routes } from 'react-router-dom'
import User from '../Users/User'
import Products from '../Products/Products'

const Dashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <Sidebar />
        <div className="admin-main">
          <Routes>
            <Route path='/users' element={<User />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Dashboard