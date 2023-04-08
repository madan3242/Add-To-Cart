import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/homePage/Home'
import Admin from './admin/App'
import Products from './pages/productPage/Products'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}  />
          <Route path='/' exact element={<Products />}  />

          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App