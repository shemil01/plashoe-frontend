import React from "react";
import NavBar from "../Nav";
import "./home.css";
import {  useNavigate } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

const Home = () => {
  const btnNavigation=useNavigate()
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
          <MDBBtn outline color='light' onClick={()=>btnNavigation('/Men')} className="m-2">
         Shop Men
      </MDBBtn>
          <MDBBtn outline color='light'onClick={()=>btnNavigation('/Woman')}  className="m-2">
         Shop Woman
      </MDBBtn>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
