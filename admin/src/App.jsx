import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setAuthToken } from './services/setAuthToken';
import Login from "./pages/Login";
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer/Footer';

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
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/admin/*' element={
                <ProtectedRoute user={user} isAdmin={true} >
                  <Home />
                </ProtectedRoute>
            }/>
      </Routes>
      <Footer />
      <Toaster position='top-center' />
    </>
  )
}

export default App;
