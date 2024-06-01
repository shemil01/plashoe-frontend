import React, { useEffect, useState } from "react";
// import myContext from "../../../UseContext/Context";
import AdminNav from "./Nav/AdminNav";

import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { Axios } from "../../Mainrouter";
import { Link, useParams } from "react-router-dom";

const UserInfo = () => {
  // const { userData } = useContext(myContext);
  const [userData, setUserData] = useState([]);
  const { userId } = useParams()

  useEffect(() => {
    Axios.get("/admin/allusers", { withCredentials: true })
      .then((response) => {setUserData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("User fetching error", error);
      });
  }, []);

  return (
    <>
      <div>
        <AdminNav />
      </div>
      <MDBTable
        align="middle"
        style={{
          backgroundColor: "GrayText",
          color: "white",
          marginLeft: "200px",
          width: "1330px",
        }}
      >
        <MDBTableHead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {userData?.map((user, index) => {
            return (
              <tr key={index.id}>
                <td>
                  <MDBBadge color="primary" pill>
                    {index + 1}
                  </MDBBadge>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://cdn.vectorstock.com/i/1000x1000/18/36/user-avatar-flat-icon-isolated-on-white-background-vector-50331836.webp"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                  </div>
                </td>

                <td>
                  <div className="ms-1">
                    <p className="fw-bold mb-1">{user.name}</p>
                  </div>
                </td>

                <td>
                  <div className="ms-1">
                    <p className="fw-bold mb-1">{user.email}</p>
                  </div>
                </td>
                <div className="ms-1">
                  <p className="fw-bold mb-1">
                  <Link to={`/admin/ordersid/${user._id}`}>orders</Link>

                  </p>
                </div>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default UserInfo;
