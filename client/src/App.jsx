import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/homePage/Home'
import { setAuthToken } from './services/setAuthToken'
import Admin from './admin/Admin'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' exact element={<Home />}  />
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App