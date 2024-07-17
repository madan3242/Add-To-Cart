import { Route, Routes } from 'react-router-dom';
import './App.css'
import AdminNavbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setAuthToken } from './services/setAuthToken';
import Login from "./pages/Login";
import Orders from './pages/Orders';
import User from './pages/Users';
import Products from './pages/Products';

function App() {
  const { user } = useSelector(state => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
      setIsAuthenticated(true)
    }
  }, [user]);

  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <Sidebar />
        <div className="admin-main">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<User />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
