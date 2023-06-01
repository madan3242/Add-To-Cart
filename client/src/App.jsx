import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/homePage/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' exact element={<Home />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App