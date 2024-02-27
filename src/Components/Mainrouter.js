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

const Mainrouter = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [productData, setProductData] = useState(ProductData);
  const initialValues = { username: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [log,setLog] = useState()
  const details = {
    search,
    setSearch,
    productData,
    setProductData,
    formValue,
    setFormValue,
    cart,
    setCart,
    log,
    setLog
  };

  return (
    <div>
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
          <Route  path="/payment" element={<Payment/>} />
        </Routes>
      </myContext.Provider>
    </div>
  );
};

export default Mainrouter;
