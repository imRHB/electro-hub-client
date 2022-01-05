import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from "react-bootstrap";

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://desolate-beyond-60013.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    const handleDeleteProduct = productId => {
        const deleteConfirmation = window.confirm('Do you want to delete product?');

        if (deleteConfirmation) {
            const productUri = `https://desolate-beyond-60013.herokuapp.com/product/${productId}`;

            fetch(productUri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    alert('Product deleted successfully.');
                })
        }
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Manage Products</h3>
                </div>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((product, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img src={product.img} style={{ width: '72px', border: '1px solid gray', borderRadius: '4px' }} alt="" /></td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>In Stock</td>
                                <td><Button onClick={() => handleDeleteProduct(product._id)} variant="danger" size="sm">DELETE</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageProduct;