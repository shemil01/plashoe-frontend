import React, { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";

import "./register.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import myContext from "../../UseContext/Context";
import toast from "react-hot-toast";

const Login = () => {
  const loginNavigate = useNavigate();
  const {  userData, setEmail, setLog ,log } =
    useContext(myContext);

  console.log(userData);
  const [value, setvalue] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
if(log){
  toast.error("you have already account")
}else{
    if (!value || !password) {
      toast.error("Please fill email and password ");
      return;
    }

    let UserDetail = userData.find(
      (user) => user.password === password && user.email === value
    );
    if (UserDetail === undefined) {
      toast.error("User not found");
    } else {
      toast.success("Login successful");
      loginNavigate("/");
      setEmail(value);
      setLog(true);
    }
  }
  };

  return (
    <>
      <div className="sign-item">
        <MDBContainer className="my-5 gradient-form">
          <MDBRow>
            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column ms-5">
                <div className="text-center">
                  <img
                    src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/cropped-favicon-180x180.png"
                    style={{ width: "185px" }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1">
                    We are The plashoe shoppy team
                  </h4>
                </div>

                <p>Please login to your account</p>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                    name="email"
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <MDBBtn className="mb-4 w-100 gradient-custom-2">
                    Login
                  </MDBBtn>
                </form>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn
                  outline
                  className="mx-2"
                  color="danger"
                  onClick={() => loginNavigate("/signup")}
                >
                  REGISER
                </MDBBtn>
              </div>
            </MDBCol>

            <MDBCol col="6" className="mb-5"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Login;
