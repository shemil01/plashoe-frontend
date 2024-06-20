// import "./nav.css";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { FaCartPlus } from "react-icons/fa";
// import { RiContactsFill } from "react-icons/ri";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useEffect, useState } from "react";
// import myContext from "../UseContext/Context";
// import { TbLogout } from "react-icons/tb";
// import { SiAdminer } from "react-icons/si";
// import Cookies from "js-cookie";

// function NavBar() {
//   const {
//     setSearch,
//     setLog,
//     email,
//     setUserData,

//     log,

//     cartItem,
//   } = useContext(myContext);
//   const Navigate = useNavigate();

//   const logout = () => {
//     Cookies.remove("token");
//     setLog(false);
//     localStorage.removeItem("token");
//     localStorage.removeItem("userInfo");
//     setUserData(' ');
//   };
// useEffect(()=>{
//   if(localStorage.getItem('token')){
//     setLog(true)
//   }
//   const userInfoString = localStorage.getItem("userInfo");
//     if (userInfoString) {
//       const userData = JSON.parse(userInfoString);
//       setUserData(userData);
//       setLog(true);
//     }
// },[])
//   return (
//     <>
//       <div className="navbarRespons">
//         <div className="nav-one p-1">
//           <p>Free Express Shipping on all orders with all duties included</p>
//         </div>
//         <Navbar expand="lg" className="bg-body-tertiary">
//           <Container fluid>
//             <Navbar.Brand>
//               <Link to={"/"}>
//                 <img
//                   className="logo-img"
//                   src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg"
//                   alt="logo"
//                 />
//               </Link>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse
//               className=" d-flex justify-content-between"
//               id="navbarScroll"
//               style={{ height: "70px" }}
//             >
//               <Nav
//                 className="me-auto my-lg-0"
//                 navbarScroll
//                 style={{ maxHeight: "100px" }}
//               >
//                 <Nav.Link>
//                   <Link to={"/Men"} className="navhover">
//                     MEN
//                   </Link>
//                 </Nav.Link>
//                 <Nav.Link>
//                   <Link to={"/woman"} className="navhover">
//                     WOMAN
//                   </Link>
//                 </Nav.Link>
//                 <Nav.Link>
//                   <Link to={"/Collection"} className="navhover">
//                     COLLECTION
//                   </Link>
//                 </Nav.Link>
//                 <Nav.Link>
//                   <Link to={"/Lookbook"} className="navhover">
//                     LOOKBOOK
//                   </Link>
//                 </Nav.Link>
//                 <Nav.Link>
//                   <Link to={"/Sale"} className="navhover">
//                     SALE
//                   </Link>
//                 </Nav.Link>
//               </Nav>
//               <Form className="d-flex">
//                 <Form.Control
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                   onChange={(e) => {
//                     setSearch(e.target.value);
//                   }}
//                   onClick={() => Navigate("/collection")}
//                 />
//               </Form>

//               <div className="nav-left">
//                 <Link to={"/Ourstory"} className="navhover">
//                   OUR STORY
//                 </Link>
//                 <Link to={"/Contact"} className="navhover">
//                   CONTACT
//                 </Link>
//                 <Link to={"/Cart"} className="icons">
//                   <FaCartPlus />
//                   <span>{cartItem.length}</span>
//                 </Link>

//                 {!log && (
//                   <Link to={"/Login"} className="icons">
//                     <RiContactsFill />
//                   </Link>
//                 )}

//                 {log && <TbLogout onClick={() => logout()} />}

//                 <Link to={"/adminform"}>
//                   {}
//                   <SiAdminer />
//                 </Link>
//               </div>
//               <span>{email}</span>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>
//     </>
//   );
// }

// export default NavBar;

import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { SiAdminer } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import myContext from "../UseContext/Context";
import './nav.css'

function NavBar() {
  const {
    setSearch,
    setLog,
    email,
    setUserData,
    log,
    cartItem,
  } = useContext(myContext);
  const Navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    setLog(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setUserData(' ');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLog(true);
    }
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      const userData = JSON.parse(userInfoString);
      setUserData(userData);
      setLog(true);
    }
  }, [setLog, setUserData]);

  return (
    <div className="navbarRespons">
      <div className="nav-one p-1">
        <p>Free Express Shipping on all orders with all duties included</p>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="logo-img"
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/" className="navhover">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/Men" className="navhover">
                MEN
              </Nav.Link>
              <Nav.Link as={Link} to="/Women" className="navhover">
                WOMEN
              </Nav.Link>
              <Nav.Link as={Link} to="/Collection" className="navhover">
                COLLECTION
              </Nav.Link>
            </Nav>
            <Form className="d-flex search-bar">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onClick={() => Navigate("/collection")}
              />
            </Form>
            <Nav className="nav-left">
              <Nav.Link as={Link} to="/Login" className="icons">
                <RiContactsFill />
              </Nav.Link>
              <Nav.Link as={Link} to="/Cart" className="icons">
                <FaCartPlus />
                {/* <span className="cart-count">{cartItem.length}</span> */}
              </Nav.Link>
              {log && (
                <Nav.Link as="span" className="icons" onClick={logout}>
                  <TbLogout />
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/adminform" className="icons">
                <SiAdminer />
              </Nav.Link>
            </Nav>
            {email && <span className="user-email">{email}</span>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

