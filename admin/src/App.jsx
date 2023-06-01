import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/*' exact element={<Dashboard />}  />
        </Routes>
    </Router>
  )
}

export default App