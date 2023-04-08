import React from 'react'
import './Home.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Navbar />
        <div className="homeContainer">
          <Link to={'/products'} >Products</Link>
        </div>
      <Footer />
    </>
  )
}
