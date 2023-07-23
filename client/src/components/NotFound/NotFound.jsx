import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="text-center" style={{ padding: "6rem", height: "475px", }}>
            <h1>Error 404: Page Not Found</h1>
            <Link to='/' style={{ textDecoration: "none", color: "#000"}}>To Home</Link>
        </div>
    </>
  )
}

export default NotFound