import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Woman from "./Pages/Woman";
import Men from "./Pages/Men";
import Collection from "./Pages/Collection";
import Lookbook from "./Pages/Lookbook";
import Sale from "./Pages/Sale";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Ourstory from "./Pages/Ourstory";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import myContext from "../UseContext/Context";
import ProductData from "./ProductData";
import Payment from "./Pages/Payment";
import AdminForm from "./Pages/Admin/adminForm";
import AdminHome from "./Pages/Admin/AdminHome";
import { Toaster } from "react-hot-toast";
import UserInfo from "./Pages/Admin/AllUsers";
import AdminNav from "./Pages/Admin/Nav/AdminNav";
import Product from "./Pages/Admin/Product";
import axios from "axios";
import SuccessPage from "./Pages/success";
import OrderDetails from "./Pages/Admin/Orders";
import OrderById from "./Pages/Admin/orderById";
import OrderTable from "./Datas/orderRecord";

export const Axios = axios.create({
  baseURL: "https://backend-project-1-xcal.onrender.com/api",
  // headers: {
  //   Authorization: Cookies.get("token"),
  // },
});

const Mainrouter = () => {
  const [log, setLog] = useState(false);
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState(ProductData);
  const [email, setEmail] = useState("");
  const [adminData, setAdminData] = useState("");
  const [adminLog, setAdminLog] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const details = {
    search,
    setSearch,
    productData,
    setProductData,
    userData,
    setUserData,
    email,
    setEmail,
    adminLog,
    setAdminLog,
    adminData,
    setAdminData,
    // logedUser,
    // setLogedUser,
    cartItem,
    setCartItem,
    log,
    setLog,
  };

  return (
    <div>
      <Toaster />
      <myContext.Provider value={details}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ourstory" element={<Ourstory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/adminform" element={<AdminForm />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/allusers/" element={<UserInfo />} />
          <Route path="/admin/orders" element={<OrderDetails />} />
          <Route path="/adiminnav" element={<AdminNav />} />
          <Route path="/product" element={<Product />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/user/orders" element={<OrderTable />} />
          <Route path="/admin/ordersid/:userId" element={<OrderById />} />
        </Routes>
      </myContext.Provider>
    </div>
  );
};

export default Mainrouter;
