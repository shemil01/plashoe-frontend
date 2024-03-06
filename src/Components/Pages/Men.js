import React, { useContext } from "react";
import NavBar from "../Nav";
import UseTitle from "../Custum/CustumHook";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import myContext from "../../UseContext/Context";

const Men = () => {
  const {productData}=useContext(myContext)
  UseTitle("Men")
  const itemNavigate = useNavigate();
  const items = productData;
  const menItem = items.filter((item) => item.gender === 'Men');
  console.log(menItem)
  return (
    <div>
      <NavBar />
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:'space-around'}}>
      {menItem.map((item) => {
        return (
          <MDBCard style={{ width: "20em" }}>
            <MDBCardImage src={item.image} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardText>${item.price}</MDBCardText>
              <MDBBtn onClick={() => itemNavigate("/Cart")}>Add to Cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        );
      })}
      </div>
      <Footer />
    </div>
  );
};

export default Men;
