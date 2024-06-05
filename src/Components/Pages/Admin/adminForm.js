import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import myContext from "../../../UseContext/Context";
import { Axios } from "../../Mainrouter";
import Cookies from "js-cookie";

const AdminForm = () => {
  // const [loginEmail, setLoginEmail] = useState([]);
  const { setAdminData, setAdminLog } = useContext(myContext);
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  // const admin = AdminDetails[0];
  const Navigate = useNavigate();

  const handleSubmit = () => {
    if (!admin) {
      toast.error("Please fill all field");
    }
    Axios.post("/admin/login", admin, { withCredentials: true })
      .then((response) => {
        const { token, refreshToken,admin } = response.data;
console.log("res:",response.data)

        Cookies.set("token", token, { expires: 1 });
        localStorage.setItem("token", token);
        Cookies.set("refreshToken",refreshToken, { expires: 1 });
        localStorage.setItem("refreshToken",refreshToken);
        const adminInfo = JSON.stringify(admin);
        localStorage.setItem("adminInfo", adminInfo);
        toast.success(response.data.message);
        toast.success(response.data.message);
        setAdminData(admin);
        setAdminLog(true);
        Navigate("/adminhome");
      })
      .catch((error) => {
        console.error(error);
        toast.error("login failed",error)
      });
  };
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Admin</h2>

                <MDBInput
                  style={{ color: "white" }}
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={admin.email}
                  onChange={(e) =>
                    setAdmin({ ...admin, email: e.target.value })
                  }
                />
                <MDBInput
                  style={{ color: "white" }}
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={admin.password}
                  onChange={(e) =>
                    setAdmin({ ...admin, password: e.target.value })
                  }
                />

                <MDBBtn
                  outline
                  className="mx-2 px-5"
                  color="white"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Login
                </MDBBtn>

                <div className="d-flex flex-row mt-3 mb-5">
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AdminForm;
