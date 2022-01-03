import React, { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Available Products</h2>
                <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;