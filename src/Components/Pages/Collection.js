import React, { useCallback, useContext, useEffect, useState } from "react";
import NavBar from "../Nav";
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

const Collection = () => {
  const mapNavigate = useNavigate();
  const {search,productData,cart,setCart}=useContext(myContext)
  const [proData,setProdata]=useState(productData)

  const searchFilter = useCallback(
    (itemname) => {
      const result = itemname.filter((val) => {
        return search === ""
          ? val
          : val.name.toLowerCase().includes(search.toLowerCase());
      });
      setProdata(result);
    },
    [search]
  );
  
useEffect(()=>{
  searchFilter(productData)
},[search,productData,searchFilter])

const AddToCart = (datas) => {
  const itemIndex = cart.findIndex((item) => item.id === datas.id);

  if (itemIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity = (updatedCart[itemIndex].quantity || 1) + 1;
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...datas, quantity: 1 }]);
  }
};


  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {proData.map((product) => {
          return (
            <MDBCard style={{ width: "20em" }}>
              <MDBCardImage src={product.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardText>${product.price}</MDBCardText>
                <MDBBtn onClick={() =>AddToCart (product)}>
                  Add to Cart
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
