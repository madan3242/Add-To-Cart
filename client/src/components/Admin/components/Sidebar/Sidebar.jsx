import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-list">
            <ul>
                <li>
                    <Link to={'/admin/users'}>Users</Link>
                </li>
                <li>
                    <Link to={'/admin/products'}>Products</Link>
                </li>
                <li>
                    <Link to={'/admin/orders'}>Orders</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar