import React from 'react'
import { Navbar } from 'react-bootstrap'
import './Navbar.css'

const AdminNavbar = () => {
  return (
    <Navbar style={{padding: "0 1rem"}}>
      <Navbar.Brand>
        Add To Cart - Admin
      </Navbar.Brand>
    </Navbar>
  )
}

export default AdminNavbar