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
import toast from "react-hot-toast";
import myContext from "../../UseContext/Context";

const Men = () => {
  const { productData, log, logedUser, setLogedUser, userData, setUserData } =
    useContext(myContext);
  UseTitle("Men");
  const navigate = useNavigate();
  const items = productData;
  const menItem = items.filter((item) => item.gender === "Men");

  const AddToCart = (datas) => {
    if (!log) {
      toast.error("Please login and continue");
      navigate("/login");
    } else {
      const itemIndex = logedUser.Cart.find((item) => item.id === datas.id);

      if (itemIndex) {
        setLogedUser({
          ...logedUser,
          Cart: logedUser.Cart.map((item) => {
            return item.id === datas.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        });
        setUserData(
          userData.map((item) =>
            logedUser.email === item.email ? logedUser : item
          )
        );
      } else {
        setLogedUser({
          ...logedUser,
          Cart: [...logedUser.Cart, { ...datas, quantity: 1 }],
        });
        setUserData(
          userData.map((item) =>
            logedUser.email === item.email ? logedUser : item
          )
        );
      }
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
        {menItem.map((item) => {
          return (
            <MDBCard style={{ width: "20em" }}>
              <MDBCardImage src={item.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardText>${item.price}</MDBCardText>
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
