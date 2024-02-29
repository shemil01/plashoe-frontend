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

const Signup = () => {
  const signNavigate = useNavigate();
  const { userData, setUserData } = useContext(myContext);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const initialValues = { username: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValues);

  if (!userData) {
    setUserData([]);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  const datasStore = () => {
    userData.push({
      username: formValue.username,
      password: formValue.password,
      email: formValue.email,
    });
    //
    setUserData(userData.slice());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValue);
    setFormError(validate(formValue));
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      datasStore();
      signNavigate("/login");
    } 
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formError);
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be less than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }
    if (!values.password1) {
      errors.password1 = "password is required";
    } else if (values.password1 !== values.password) {
      errors.password1 = "Password is not match";
    }

    return errors;
  };
  console.log("userData:", userData);

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
                      name="username"
                      type="text"
                      className="w-100"
                      value={formValue.username}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formError.username}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      name="email"
                      type="email"
                      value={formValue.email}
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
                      value={formValue.password}
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
                      name="password1"
                      type="password"
                      value={formValue.password1}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formError.password1}</p>
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
