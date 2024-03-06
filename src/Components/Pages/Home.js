import React, { useContext } from "react";
import NavBar from "../Nav";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import UseTitle from "../Custum/CustumHook";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import myContext from "../../UseContext/Context";

const Home = () => {
  const {productData}=useContext(myContext)
  UseTitle("Home")
  const btnNavigation = useNavigate();
  const homeItems= productData
  return (
    <div>
      <NavBar />
      <div className="col-12 pt-4 main-image pe-5 ps-5">
        <div>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg);"
            className="image-dec"
          />
          <div className="img-text">
            <p>
              Love the planet
              <br />
              We walk on
            </p>
          </div>

          <p className="img-text2">
            Bibendum fermentum, aenean donec pretium aliquam blandit
            <br />
            tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
          </p>
          <div className="shop-btn">
            <MDBBtn
              outline
              color="light"
              onClick={() => btnNavigation("/Men")}
              className="m-2"
              id="mhovbtn"
            >
              Shop Men
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              onClick={() => btnNavigation("/Woman")}
              className="m-2"
              id="mhovbtn2"
            >
              Shop Woman
            </MDBBtn>
          </div>
        </div>
      </div>
<div className="homeItem">
<h4>Collection</h4>
<div className="productsItem">
  {homeItems.map((products)=>{
    return(
      <MDBCard style={{ width: "20em" }}>
      <MDBCardImage src={products.image} position="top" alt="..." />
      <MDBCardBody>
        <MDBCardTitle>{products.name}</MDBCardTitle>
        <MDBCardText>${products.price}</MDBCardText>
        <MDBBtn onClick={() =>  btnNavigation("/Cart")}>Add to Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    )
  })}
</div>
</div>
      <Footer />
    </div>
  );
};

export default Home;
