import React from 'react'
import {Link} from "react-router-dom"
import "./AdminNav.css"
import AdminDetails from '../AdminDetails'


const AdminNav = () => {
    const data = AdminDetails[0]
  return (
    <div className="sidenav">
        <span>{data.image}</span>
        <span>{data.email}</span>
    <Link to="/">Home</Link>
    <Link to={'/product'}>products</Link>
    <Link to="/allusers">Users</Link>
   
  </div>
  )
}

export default AdminNav