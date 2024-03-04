import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './Nav/AdminNav'

const AdminHome = () => {
  return (
    <div>
      <AdminNav/>
      <div
      className="container"
      style={{
        backgroundImage: `url(https://media.gq.com/photos/62fd4d84bf2d3eb83a432b85/16:9/w_2560%2Cc_limit/nike-lede-full.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        width:'100%',
        height:'100vw'
      }}
    >
      <h1>Home</h1>
    </div>
      <Link to={'/allusers'}>User</Link>
    </div>
  )
}

export default AdminHome