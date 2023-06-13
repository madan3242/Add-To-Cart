import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/homePage/Home'
import { setAuthToken } from './services/setAuthToken'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

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