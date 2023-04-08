import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/Dashboard'

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}  />
      </Routes>
    </>
  )
}

export default Admin