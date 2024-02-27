import "./nav.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import ProductData from "./ProductData";
import { useContext, useState } from "react";
import myContext from "../UseContext/Context";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";


function NavBar() {
  const {setSearch}=useContext(myContext)
  const termsNavigate=useNavigate()

  return (
    <>
    <div>
      <div className="nav-one p-1">
        <p>Free Express Shipping on all orders with all duties included</p>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to={"/"}>
             
              <img
                className="logo-img"
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className=" d-flex justify-content-between" id="navbarScroll" style={{height:'70px'}}>
            <Nav className="me-auto my-lg-0"
            style={{maxHeight:'100px'}}
            navbarScroll>
              <Nav.Link>
                <Link to={"/Men"} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>MEN</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/woman"} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>WOMAN</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Collection"} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>COLLECTION</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Lookbook"} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>LOOKBOOK</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Sale"} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>SALE</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" 
                onChange={(e)=>{setSearch(e.target.value)}}
                onClick={()=>termsNavigate("/collection")}
              />
            </Form>
            <div>
         
            </div>
            <div className="nav-left">
              
            <Link to={'/Ourstory'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>OUR STORY</Link>
                <Link to={'/Contact'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>CONTACT</Link>
                <Link to={'/Cart'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><FaCartPlus /></Link>
                <Link to={'/Login'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><RiContactsFill /></Link>
              
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    
    </>
  );
}

export default NavBar;
