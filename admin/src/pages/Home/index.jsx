import Sidebar from '../../components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import User from '../Users';
import Products from '../Products';
import Orders from '../Orders';

const Home = () => {
  return (
    <div className='admin-container'>
      <Sidebar />
      <div className='admin-main'>
        <Routes>
          <Route path='/users' element={<User />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home;