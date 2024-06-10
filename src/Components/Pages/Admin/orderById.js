import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import { Axios } from "../../Mainrouter";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const OrderById = () => {
  const [allOrders, setAllOrders] = useState([]);

  const { userId } = useParams();
  // console.log(userId);
  useEffect(() => {
    Axios.get(`/admin/ordersid/${userId}`, { withCredentials: true })
      .then((response) => {
        // console.log(response);

        setAllOrders(response.data);
      })
      .catch((error) => {
        console.log("Orders fetching error", error);
      });
  }, []);

  if (!allOrders) {
    return <CircularProgress />;
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Admin Dashboard - User Orders
          </Typography>
        </Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>User Id</TableCell>
              <TableCell>Product name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total price</TableCell>
              <TableCell>Order Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.products[0].productId.name}</TableCell>
                <TableCell>
                  <img
                    src={order.products[0].productId.image}
                    alt={order.products[0].productId.name}
                    style={{ width: 100, height: 100 }}
                  />
                </TableCell>
                <TableCell>{order.totalItems}</TableCell>
                <TableCell>{order.totalPrice}</TableCell>
                <TableCell>
                  {new Date(order.purchaseDate).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderById;
