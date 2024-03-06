import React, { useContext } from "react";
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

const Cart = () => {
  UseTitle("Cart");
  // window.localStorage.setItem("isLogedIn", true);

  const navigate = useNavigate();
  const { cart, setCart, log } = useContext(myContext);

  const updateQuantity = (itemId, amount) => {
    if (!log) {
      setCart([]);
    } else {
      const updateCart = cart.map((item) =>
        itemId === item.id
          ? { ...item, quantity: (item.quantity || 1) + amount }
          : item
      );

      setCart(updateCart);
    }
  };
  const deleteItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const total = cart
    .reduce((val, item) => val + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <>
      <NavBar />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100 py-5 ">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                className="shopping-cart bg-secondary"
                style={{ borderRadius: "15px",width:'45rem' }}
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
                          {cart.length} item{cart.length == 0 ? "" : "s"} in
                          your cart
                        </p>
                      </div>
                      <div>
                        {cart.map((value) => {
                          const { image, name, price, quantity, id } = value;
                          return (
                            <div className="d-flex align-items-center mb-5">
                              <div className="flex-shrink-0">
                                <MDBCardImage
                                  src={image}
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
                                  {name}
                                </MDBTypography>

                                <div className="d-flex align-items-center">
                                  <p className="fw-bold mb-0 me-5 pe-3">
                                    ${price}
                                  </p>

                                  <div className="def-number-input number-input safari_only">
                                  <MDBBtn
                                      className="minus"
                                      onClick={() => updateQuantity(id, -1)}
                                    >
                                      -
                                    </MDBBtn>
                                    <p className="lead d-flex fw-normal mb-0">
                                      {" "}
                                      {quantity || 1}{" "}
                                    </p>
                                    <MDBBtn
                                      className="plus"
                                      onClick={() => updateQuantity(id, 1)}
                                    >
                                      +
                                    </MDBBtn>
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
                                  className="fw-bold mb-0"
                                >
                                  Total:
                                </MDBTypography>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-bold mb-0"
                                >
                                  ${(price * (quantity || 1)).toFixed(2)}
                                </MDBTypography>
                              </div>
                              <div><MDBBtn
                                className="bg-danger m-2"
                                onClick={() => deleteItem(id)}
                              >
                                Delete
                              </MDBBtn>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <MDBBtn
                     
                        block
                        size="lg"
                        onClick={() => {
                          if (cart.length === 0) {
                            toast.error("Your cart is empty");
                          } else {
                            navigate("/payment");
                          }
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
