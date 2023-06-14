import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'

const Admin = () => {
  return (
        <Routes>
          <Route path='/*' exact element={<Dashboard />}  />
        </Routes>
  )
}

export default Admin