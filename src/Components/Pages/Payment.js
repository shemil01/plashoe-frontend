import React from "react";
import { MDBBtn,MDBCol, MDBInput, MDBRow, MDBTypography } from "mdb-react-ui-kit";

const Payment = () => {
    
  return (
    <div>
      <MDBCol lg="5" className="px-5 py-4">
        <MDBTypography
          tag="h3"
          className="mb-5 pt-2 text-center fw-bold text-uppercase"
        >
          Payment
        </MDBTypography>

        <form className="mb-5">
          <MDBInput
            className="mb-5"
            label="Card number"
            type="text"
            size="lg"
          />

          <MDBInput
            className="mb-5"
            label="Name on card"
            type="text"
            size="lg"
            placeholder="enter your name"
          />

          <MDBRow>
            <MDBCol md="6" className="mb-5">
              <MDBInput
                className="mb-4"
                label="Expiration"
                type="text"
                size="lg"
                minLength="7"
                maxLength="7"
                placeholder="MM/YYYY"
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
              />
            </MDBCol>
            <MDBBtn>Proceed</MDBBtn>
          </MDBRow>
        </form>
      </MDBCol>
    </div>
  );
};

export default Payment;
