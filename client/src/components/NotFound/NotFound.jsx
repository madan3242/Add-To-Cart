import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className="text-center" style={{ paddingTop: "4rem"}}>
            <h1>Error 404: Page Not Found</h1>
            <p onClick={() => navigate('/')}>To Home</p>
        </div>
    </>
  )
}

export default NotFound