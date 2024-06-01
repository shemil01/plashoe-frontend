// src/OrderTable.js
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const  OrderTable = () => {
    const [orders, setOrders] = useState([]);

    useEffect((userId) => {
        // Fetch order data from an API
        axios.get( `user/orderData/${userId}`)
            .then(response => {
                setOrders(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching order data:', error);
            });
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.productName}</td>
                        <td>{order.quantity}</td>
                        <td>${order.price.toFixed(2)}</td>
                        <td>{new Date(order.date).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default OrderTable;
