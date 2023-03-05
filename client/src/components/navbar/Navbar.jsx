import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
        <Link className="navbar-brand" to='/'>Add To Cart</Link>
        <div className="navbar-form">
            <input className="input-text" type="text" placeholder="Search for products" />
            <input className="btn" type="submit" value="Search" />
        </div>
        <div className="buttons">
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Signup</button>
        </div>
    </div>
  )
}
