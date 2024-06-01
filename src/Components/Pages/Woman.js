import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Nav";
import { useNavigate } from "react-router-dom";
import UseTitle from "../Custum/CustumHook";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Footer from "../Footer";
import toast from "react-hot-toast";
import myContext from "../../UseContext/Context";
import { Axios } from "../Mainrouter";

const Woman = () => {
  const {  userData, setUserData, log, logedUser, setLogedUser } =
    useContext(myContext);
  const [WomenItem, setWomenItem] = useState([]);
  UseTitle("Woman");
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("/user/category/woman")
    .then((response)=>setWomenItem(response.data))
    .catch((error)=>{
console.error("Women item is empty",error)
    })
  }, []);

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
        {WomenItem.map((shoes) => {
          return (
            <MDBCard style={{ width: "20em" }}>
              <MDBCardImage src={shoes.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{shoes.name}</MDBCardTitle>
                <MDBCardText>₹{shoes.price}</MDBCardText>
                <MDBBtn onClick={() => AddToCart(shoes)}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Woman;
