// import React, { useContext, useEffect, useState } from "react";
// import NavBar from "../Nav";
// import "./home.css";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Footer";
// import UseTitle from "../Custum/CustumHook";
// import toast from "react-hot-toast";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import myContext from "../../UseContext/Context";
// import { Axios } from "../Mainrouter";

import { useContext, useEffect, useState } from "react";
import myContext from "../../UseContext/Context";
import UseTitle from "../Custum/CustumHook";
import { useNavigate } from "react-router-dom";
import { Axios } from "../Mainrouter";
import toast from "react-hot-toast";
import NavBar from "../Nav";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import Footer from "../Footer";

// const Home = () => {
//   const { logedUser, setLogedUser, userData, setUserData, log } =
//     useContext(myContext);
//   const [product, setProduct] = useState([]);
//   UseTitle("Home");
//   const navigate = useNavigate();
//   // const homeItems= productData

//   useEffect(() => {
//     Axios.get("/user/product", {
//       withCredentials: true,
//     })
//       .then((response) => {
//         setProduct(response.data);
//       })
//       .catch((error) => {
//         console.error("Product fetching error", error);
//       });
//   }, []);

//   const AddToCart = async (product) => {
//     await Axios.post(
//       "/user/addcart",
//       { productId: product._id },

//       { withCredentials: true }
//     ).catch((error) => {
//       toast.error("please login and continue");
//       navigate("/login");
//     });
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="col-12 pt-4 main-image pe-5 ps-5">
//         <div>
//           <img
//             src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg);"
//             className="image-dec img-fluid img-thumbnail"
//           />
//           <div className="img-text">
//             <p>
//               Love the planet
//               <br />
//               We walk on
//             </p>
//           </div>

//           <p className="img-text2">
//             Bibendum fermentum, aenean donec pretium aliquam blandit
//             <br />
//             tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
//           </p>
//           <div className="shop-btn">
//             <MDBBtn
//               outline
//               color="light"
//               onClick={() => navigate("/Men")}
//               className="m-2"
//               id="mhovbtn"
//             >
//               Shop Men
//             </MDBBtn>
//             <MDBBtn
//               outline
//               color="light"
//               onClick={() => navigate("/Woman")}
//               className="m-2"
//               id="mhovbtn2"
//             >
//               Shop Woman
//             </MDBBtn>
//           </div>
//         </div>
//       </div>
//       <div className="homeItem">
//         <h4>Collection</h4>
//         <div className="productsItem">
//           {product.map((products) => {
//             return (
//               <MDBCard style={{ width: "20em" }}>
//                 <MDBCardImage src={products.image} position="top" alt="..." />
//                 <MDBCardBody>
//                   <MDBCardTitle>{products.name}</MDBCardTitle>
//                   <MDBCardText>₹{products.price}</MDBCardText>
//                   <MDBBtn onClick={() => AddToCart(products)}>
//                     Add to Cart
//                   </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             );
//           })}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default Home;

const Home = () => {
  const { logedUser, setLogedUser, userData, setUserData, log } =
    useContext(myContext)
  const [product, setProduct] = useState([]);
  UseTitle("Home");
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("/user/product", {
      withCredentials: true,
    })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Product fetching error", error);
      });
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
      <div className="col-12 pt-4 main-image pe-5 ps-5">
        <div className="image-dec">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"
            className="image-dec img-fluid img-thumbnail"
          />
          {/* <div className="img-text">
            <p>
              Love the planet
              <br />
              We walk on
            </p>
          </div>
          <p className="img-text2">
            Bibendum fermentum, aenean donec pretium aliquam blandit
            <br />
            tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
          </p> */}
          <div className="shop-btn" id="shop-btn">
            <MDBBtn
              outline
              color="light"
              onClick={() => navigate("/Men")}
              className="m-2"
              id="mhovbtn"
            >
              Shop Men
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              onClick={() => navigate("/Woman")}
              className="m-2"
              id="mhovbtn2"
            >
              Shop Woman
            </MDBBtn>
          </div>
        </div>
      </div>
      <div className="homeItem">
        <h4>Collection</h4>
        <div className="productsItem">
          {product.map((products) => (
            <MDBCard style={{ width: "20em" }} key={products._id}>
              <MDBCardImage src={products.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{products.name}</MDBCardTitle>
                <MDBCardText>₹{products.price}</MDBCardText>
                <MDBBtn onClick={() => AddToCart(products)}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
