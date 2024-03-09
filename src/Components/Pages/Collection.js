import React, { useCallback, useContext, useEffect, useState } from "react";
import UseTitle from "../Custum/CustumHook";
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
import toast from "react-hot-toast";

const Collection = () => {
  UseTitle("collection");
  const navigate = useNavigate();
  const {
    search,
    productData,
    log,
    userData,
    setUserData,
    logedUser,
    setLogedUser,
  } = useContext(myContext);
  const [proData, setProdata] = useState(productData);

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

  useEffect(() => {
    searchFilter(productData);
  }, [search, productData, searchFilter]);

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
        // setUserData([...userData])
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
        {proData.map((product) => {
          return (
            <MDBCard style={{ width: "20em" }} key={product.id}>
              <MDBCardImage src={product.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardText>${product.price}</MDBCardText>
                <MDBBtn onClick={() => AddToCart(product)}>Add to Cart</MDBBtn>
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
