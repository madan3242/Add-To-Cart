import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/homePage/Home'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import Products from './admin/pages/Products'
import { ProductList } from './pages/productPage/ProductList'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/p' element={<ProductList />}  />
          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App