import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminNav.css";
import { BiLogOutCircle } from "react-icons/bi";
import AdminDetails from "../AdminDetails";
import { RiAdminFill } from "react-icons/ri";
import myContext from "../../../../UseContext/Context";
import Cookies from "js-cookie";

const AdminNav = () => {
  const navigate = useNavigate();
  const { adminLog, setAdminLog, setAdminEmail } = useContext(myContext);
  const data = AdminDetails[0];

  const adminLogout = () => {
    setAdminLog(false);
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    navigate("/");
  };

  return (
    <div className="sidenav">
      <RiAdminFill className="adminIcon" />
      {/* <div style={{marginLeft:'30px'}}>
      {adminLog ? <span>{data.email}</span> : null}
     
      </div> */}
      <Link to="/">Home</Link>
      <Link to={"/product"}>Products</Link>
      <Link to="/allusers">Users</Link>
      <Link to={`/admin/orders`}>orders</Link>

      <div className="logoutBtn"></div>
    </div>
  );
};

export default AdminNav;
