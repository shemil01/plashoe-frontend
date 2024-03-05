import React, { useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./AdminNav.css"
import { BiLogOutCircle } from "react-icons/bi";
import AdminDetails from '../AdminDetails'
import myContext from '../../../../UseContext/Context';


const AdminNav = () => {
  const navigate = useNavigate();
  const {adminLog, setAdminLog, setAdminEmail } = useContext(myContext);
  const data = AdminDetails[0];

  const adminLogout = () => {
    setAdminLog(false);
    setAdminEmail(''); 
    navigate('/')
    
  };

  return (
    
    <div className="sidenav">
      {adminLog ?(<span>{data.email}</span>):null}
     
      
      <button onClick={adminLogout}><BiLogOutCircle /></button>
      <Link to="/">Home</Link>
      <Link to={'/product'}>Products</Link>
      <Link to="/allusers">Users</Link>
    </div>
    
  );
};

export default AdminNav;
