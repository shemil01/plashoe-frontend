import React from "react";
import NavBar from "../Nav";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import ProductData from "../ProductData";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const mapNavigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:'space-around'}}>
        {ProductData.map((product) => {
          return (
            <MDBCard style={{width:"20em" }}>
              <MDBCardImage src={product.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardText>${product.price}</MDBCardText>
                <MDBBtn onClick={() => mapNavigate('/Cart')}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
