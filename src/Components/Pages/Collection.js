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

import { Axios } from "../Mainrouter";     

const Collection = () => {
 
  UseTitle("collection");

  const { search, log } = useContext(myContext);
  const [proData, setProdata] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function Data() {
      await Axios.get("/user/product")
        .then((response) => {
          if (search === "") {
            setProdata(response.data);
          }
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching Product", error);
        });
    }
    Data();
  }, []);

  useEffect(() => {
    const result = products.filter((element) => {
      return element.name.toLowerCase().includes(search.toLowerCase());
    });
    search === "" ? setProdata(products) : setProdata(result);
  }, [search]);

  const AddToCart = async (product) => {
    if (log) {
      await Axios.post(
        "/user/addcart",
        { productId: product._id },

        { withCredentials: true }
      )
        .then((response) => {
          toast.success("Product added to cart");
        })
        .catch((error) => {
          toast.error("please login and continue");
          
        });
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
                <MDBCardText>₹{product.price}</MDBCardText>
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
