import React, { useContext } from 'react'
import NavBar from '../Nav'
import { useNavigate } from 'react-router-dom'
import UseTitle from '../Custum/CustumHook';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Footer from '../Footer';
import toast from "react-hot-toast";
import myContext from '../../UseContext/Context';


const Woman = () => {
  const {productData,userData,setUserData,log,logedUser,setLogedUser} = useContext(myContext)
  UseTitle('Woman')
  const navigate=useNavigate()
  const products=productData
  const data=products.filter((shoes)=>shoes.gender==='Women')
  
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
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:'space-around'}}>
      {data.map((shoes) => {
        return (
          <MDBCard style={{ width: "20em" }}>
            <MDBCardImage src={shoes.image} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{shoes.name}</MDBCardTitle>
              <MDBCardText>${shoes.price}</MDBCardText>
              <MDBBtn onClick={() =>AddToCart(shoes)}>Add to Cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        );
      })}
      </div>
      <Footer />
      </div>
      
  )
}

export default Woman