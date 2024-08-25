import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Nav";
import myContext from "../../UseContext/Context";
import UseTitle from "../Custum/CustumHook";
import toast from "react-hot-toast";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Axios } from "../Mainrouter";

const Cart = () => {
  UseTitle("Cart");

  const navigate = useNavigate();
  const { logedUser, cartItem, setCartItem } = useContext(myContext);
 

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await Axios.get("user/viewCart", { withCredentials: true });
        console.log("Cart Response:", response.data.cart);
        setCartItem(response.data.cart);
      } catch (error) {
        console.error("Cart fetching error:", error);
      }
    };

    fetchCart();
  }, []);


  const increaseQuantity=(itemId)=>{
    Axios.put(`/user/increase/${itemId.productId._id}`,
      {},{
        withCredentials:true
      }
    )
    .then((response)=>{
      setCartItem((prevItems)=>
        prevItems.map((item)=>
          item.productId._id === itemId.productId._id
          ?{...item,quantity:item.quantity +1}
          : item
        )
      )
    })
    .catch((error)=>{
      console.log("product increasing error",error)
    })
  }

  const decreaseQuantity = (itemId) => {
    Axios.put(
      `/user/decrease/${itemId.productId._id}`,
      {},
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        // console.log(response.data);

        setCartItem((prevItems) =>
          prevItems.map((item) =>
            item.productId._id === itemId.productId._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      })
      .catch((error) => {
        console.error("Cart decreasing error", error);
      });
  };

  const deleteCart = (Cart) => {
    Axios.delete(`/user/remove/${Cart.productId._id}`, {
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data);

        setCartItem((prevItems) =>
          prevItems.filter((item) => item.productId._id !== Cart.productId._id)
        );
      })
      .catch((error) => {
        console.error("Cart deleting error", error);
      });
  };

  const orderItem = async () => {
    if (cartItem.length > 0) {
      await Axios.post("/user/order",{}, { withCredentials: true })
        .then((response) => {
          const   paymentLink = response.data;
          window.open(paymentLink, "_blank");      
          // setCartItem((prevItems) =>
          //   prevItems.filter(
          //     (item) => item.productId._id !== Cart.productId._id,
             
          //   )
          // );
          toast.success(response.data.message)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <NavBar />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100 py-5 ">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                className="shopping-cart bg-secondary"
                style={{ borderRadius: "15px", width: "45rem" }}
              >
                <MDBCardBody className="text-black">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>
                      <div className="flex-shrink-0">
                        <p>
                          {cartItem.length} item
                          {cartItem.length === 0 && 1 ? "" : "s"} in your cart
                        </p>
                      </div>
                      <div>
                        {cartItem?.map((value) => {
                          console.log("ID",value)
                          return (
                            <div className="d-flex align-items-center mb-5">
                              <div className="flex-shrink-0">
                                <MDBCardImage
                                  src={value?.productId?.image}
                                  fluid
                                  style={{ width: "150px" }}
                                  alt="Generic placeholder image"
                                />
                              </div>

                              <div className="flex-grow-1 ms-3">
                                <a href="#!" className="float-end text-black">
                                  <MDBIcon fas icon="times" />
                                </a>
                                <MDBTypography
                                  tag="h5"
                                  className="text-primary"
                                >
                                  {value?.productId?.name}
                                </MDBTypography>

                                <div className="d-flex align-items-center">
                                  <p className="fw-bold mb-0 me-5 pe-3">
                                    ₹{value.productId.price}
                                  </p>

                                  <div className="def-number-input number-input safari_only">
                                    <MDBBtn
                                      className="minus"
                                      disabled={value.quantity === 1}
                                      onClick={() => decreaseQuantity(value)}
                                    >
                                      -
                                    </MDBBtn>
                                    <p className="lead d-flex fw-normal mb-0">
                                      {" "}
                                      {value.quantity || 1}{" "}
                                    </p>
                                    <MDBBtn className="plus"
                                    onClick={()=>increaseQuantity(value)}
                                    >+</MDBBtn>
                                  </div>
                                </div>
                              </div>
                              <hr
                                className="mb-4"
                                style={{
                                  height: "2px",
                                  backgroundColor: "#1266f1",
                                  opacity: 1,
                                }}
                              />

                              <div
                                className="d-flex justify-content-between p-2 mb-2"
                                style={{ backgroundColor: "#e1f5fe" }}
                              >
                                <MDBTypography
                                  tag="h5"
                                  className="fw-bold mb-0 "
                                >
                                  Total:
                                </MDBTypography>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-bold mb-0"
                                >
                                  ₹
                                  {(
                                    value.productId.price *
                                    (value.quantity || 1)
                                  ).toFixed(2)}
                                </MDBTypography>
                              </div>
                              <div>
                                <MDBBtn
                                  className="bg-danger m-2"
                                  onClick={() => deleteCart(value)}
                                >
                                  Delete
                                </MDBBtn>

                           
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {/* <h4>Total:{value.productId.price}</h4> */}

                      <MDBBtn
                        block
                        size="lg"
                        disabled={cartItem.length === 0}
                        onClick={() => {
                          orderItem();
                        }}
                      >
                        Buy now
                      </MDBBtn>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ bottom: "0" }}
                      >
                        <Link to={"/collection"}> Back to shopping</Link>
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Cart;
