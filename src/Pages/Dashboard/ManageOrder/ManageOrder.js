import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from "react-bootstrap";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://desolate-beyond-60013.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    /* 
        const handleUpdateStatus = productId => {
            fetch(`https://desolate-beyond-60013.herokuapp.com/orders/${productId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application.json'
                },
                body: JSON.stringify({ status: 'Shipped' })
            })
                .then(res => res.json())
                .then(result => {
    
                })
        };
         */

    const handleDeleteOrder = orderId => {
        const deleteConfirmation = window.confirm('Do you want delete the order?');

        if (deleteConfirmation) {
            const productUri = `https://desolate-beyond-60013.herokuapp.com/orders/${orderId}`;
            fetch(productUri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    alert('Order deleted successfully.');
                })
        }
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Manage Order</h3>
                </div>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Order Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img src={order.img} style={{ width: '72px', border: '1px solid gray', borderRadius: '4px' }} alt="" /></td>
                                <td>{order.title}</td>
                                <td>${order.price}</td>
                                <td>{order.displayName}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                <td>{/* <Button variant="success" size="sm" onClick={() => handleUpdateStatus(order._id)}>APPROVE</Button> */} <Button onClick={() => handleDeleteOrder(order._id)} variant="danger" size="sm">DELETE</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageOrder;