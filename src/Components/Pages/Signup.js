import React, { useState, useEffect, useContext } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import myContext from "../../UseContext/Context";
import toast from "react-hot-toast";
import { Axios } from "../Mainrouter";

const Signup = () => {
  const signNavigate = useNavigate();
  const { userData, setUserData } = useContext(myContext);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const initialValues = {
  //   name: " ",
  //   email: " ",
  //   password: " ",
  //   confirmPass: "",
  // };
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  // console.log(formValue);

  const handleSubmit =async (e) => {
    e.preventDefault();

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formValue.name.trim() === "") {
      errors.name = "Username is required";
    }
    if (formValue.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!regex.test(formValue.email)) {
      errors.email = "this is not a valid email";
    }
    if (formValue.password.trim() === "") {
      errors.password = "password is required";
    } else if (formValue.password.length < 4) {
      errors.password = "Password must be less than 4 characters";
    } else if (formValue.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }
    if (formValue.confirmPass.trim() === "") {
      errors.confirmPass = "conform password is required";
    } else if (formValue.confirmPass !== formValue.password) {
      errors.confirmPass = "Password is not match";
    }
    setFormError(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await Axios.post("/user/register", formValue, {
          withCredentials: true,
        });
        setUserData(formValue);
        toast.success(response.data.message);
        signNavigate('/');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      name="name"
                      type="text"
                      className="w-100"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formError.name}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formError.email}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formError.password}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="confirm Password"
                      id="form4"
                      name="confirmPass"
                      type="password"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formError.confirmPass}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                  </div>

                  <div className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="agree with continue?"
                    />
                  </div>

                  <MDBBtn className="mb-4" size="lg">
                    register
                  </MDBBtn>
                </form>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Signup;
