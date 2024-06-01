import React, { useEffect, useRef, useState } from "react";
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

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const hasExecuted = useRef(false)
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasExecuted.current) return;
    hasExecuted.current = true;

    Axios.get("/admin/orders", { withCredentials: true })
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Orders fetching error", error);
      });
  }, []);

  if (!orders) {
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
              <TableCell>image</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total price</TableCell>
              <TableCell>Order Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.products[0].productId.name}</TableCell>
                <TableCell>
                  <img
                    src={order.products[0].productId.image}
                    alt={order.products[0].productId.name}
                    style={{ width: 100, height: 100 }} // Adjust size as needed
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

export default OrderDetails;
