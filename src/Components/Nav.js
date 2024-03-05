import "./nav.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import myContext from "../UseContext/Context";
import { TbLogout } from "react-icons/tb";
import { SiAdminer } from "react-icons/si";

function NavBar() {
  const { setSearch, cart, setLog, email, setEmail } = useContext(myContext);
  const Navigate = useNavigate();
  const Logout = () => {
    setEmail("");
    setLog("");
    Navigate("/");
  };
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
            <Navbar.Collapse
              className=" d-flex justify-content-between"
              id="navbarScroll"
              style={{ height: "70px" }}
            >
              <Nav
                className="me-auto my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link
                    to={"/Men"}
                    className="navhover"
                  >
                    MEN
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/woman"}
                    className="navhover"
                  >
                    WOMAN
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/Collection"}
                    className="navhover"
                  >
                    COLLECTION
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/Lookbook"}
                    className="navhover"
                  >
                    LOOKBOOK
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/Sale"}
                    className="navhover"
                  >
                    SALE
                  </Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
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
              <div></div>
              <div className="nav-left">
                <Link
                  to={"/Ourstory"}
                  className="navhover"
                >
                  OUR STORY
                </Link>
                <Link
                  to={"/Contact"}
                  className="navhover"
                >
                  CONTACT
                </Link>
                <Link
                  to={"/Cart"}
                  className="icons"
                >
                  <FaCartPlus />
                  <span>{cart.length}</span>
                </Link>
                <Link
                  to={"/Login"}
                  className="icons"
                  
                >
                  <RiContactsFill />
                </Link>
                <button onClick={Logout}>
                  <TbLogout />
                </button>
                <Link to={"/adminform"}>
                  <SiAdminer />
                </Link>
              </div>
              <span>{email}</span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
