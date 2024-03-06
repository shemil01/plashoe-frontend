import React, { useContext, useState } from "react";
import myContext from "../../../UseContext/Context";
import AdminNav from "./Nav/AdminNav";

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";


const UserInfo = () => {
  const { userData } = useContext(myContext);
  const [blockUser,setBolockUser]=useState()
  return (
    <>
    <div>

      <AdminNav/>
    </div>
    <MDBTable align="middle" style={{backgroundColor:"GrayText",color:'white',marginLeft:'200px',width:'1330px'}}>
      <MDBTableHead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">User</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody >
        {userData.map((user, index) => {
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
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{user.username}</p>
                    <p className="text-muted mb-0">{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{user.username}</p>
              </td>
              <td>
                <MDBBadge color="primary" pill>
                  {user.email}
                </MDBBadge>
              </td>
              <td>
                <MDBBadge color="primary" pill onClick={()=>setBolockUser( )} >
                  block
                </MDBBadge>
              </td>
             
              {/* <td>{user.password}</td> */}
              
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
    </>
  );
};

export default UserInfo;
