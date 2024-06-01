import React, { useContext, useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import myContext from "../../UseContext/Context";
import { Axios } from "../Mainrouter";

const Men = () => {
  const { productData, log, logedUser, setLogedUser, userData, setUserData } =
    useContext(myContext);
    UseTitle("Men");
    const navigate = useNavigate();
    // const items = productData;
    // const menItem = items.filter((item) => item.gender === "Men");
    const [menItem,setMenItem] = useState([]) 

useEffect(()=>{
Axios.get("/user/category/men")
.then((response)=>setMenItem(response.data))
.catch((error)=>{console.error("Men item is empty",error)})

},[])


const AddToCart = async (product) => {
  await Axios.post(
    "/user/addcart",
    { productId: product._id },

    { withCredentials: true }
  ).catch((error) => {
    toast.error("please login and continue");
    navigate("/login");
  });
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
        {menItem.map((item) => {
          return (
            <MDBCard style={{ width: "20em" }}>
              <MDBCardImage src={item.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardText>₹{item.price}</MDBCardText>
                <MDBBtn onClick={() => AddToCart(item)}>Add to Cart</MDBBtn>
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
