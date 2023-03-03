import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
        <Link className="navbar-brand" to='/'>Add To Cart</Link>
        <div className="navbar-form">
            <input className="input-text" type="text" placeholder="Search for products" />
            <input className="btn" type="submit" />
        </div>
        <div className="buttons">
            <button>Login</button>
            <button>Signup</button>
        </div>
    </div>
  )
}
