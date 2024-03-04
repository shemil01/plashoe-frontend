import React, { useState } from "react";
import { MDBBtn,MDBCol, MDBInput, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Payment = () => {
    const [paymentValue,setPaymentValue] =useState({number:'',name:'',expiration:'',cvv:''})
    const navigate=useNavigate()
    const handleChange=((e)=>{
      const {name,value}=e.target
      setPaymentValue({...paymentValue,[name]:value})
      console.log(paymentValue)
    })

    const handleSubmit = (e) => {
      if (!paymentValue.number || !paymentValue.name || !paymentValue.cvv) {
        alert("Please fill in the input");
      } else {
        toast.success('Payment successfull!')
        navigate('/')
      } 
    };
      
  return (
    
    <div>
      <MDBCol lg="5" className="px-5 py-4">
        <MDBTypography
          tag="h3"
          className="mb-5 pt-2 text-center fw-bold text-uppercase"
        >
          Payment
        </MDBTypography>

        <form className="mb-5" onSubmit={handleSubmit}>
          <MDBInput
            className="mb-5"
            label="Card number"
            type="text"
            name="number"
            size="lg"
            value={paymentValue.number}
            onChange={handleChange}
          />

          <MDBInput
            className="mb-5"
            label="Name on card"
            type="text"
            size="lg"
            name="name"
            placeholder="enter your name"
            value={paymentValue.name}
            onChange={handleChange}
            
          />

          <MDBRow>
            <MDBCol md="6" className="mb-5">
              <MDBInput
                className="mb-4"
                label="Expiration"
                type="text"
                size="lg"
                name="expiration"
                minLength="7"
                maxLength="7"
                placeholder="MM/YYYY"
                value={paymentValue.expiration}
                onChange={handleChange}
              />
            </MDBCol>
            <MDBCol md="6" className="mb-5">
              <MDBInput
                className="mb-4"
                label="Cvv"
                type="text"
                size="lg"
                minLength="3"
                maxLength="3"
                placeholder="&#9679;&#9679;&#9679;"
                name="cvv"
                value={paymentValue.cvv}
                onChange={handleChange}
              />
            </MDBCol>
            <MDBBtn>Proceed To Buy</MDBBtn>
          </MDBRow>
        </form>
      </MDBCol>
    </div>
  );
};

export default Payment;
