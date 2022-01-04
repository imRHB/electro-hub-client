import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    const { _id, title, img, description, price } = product;

    useEffect(() => {
        fetch(`/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    return (
        <div>
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Product Details</h2>

                <Row xs={1} md={1} xl={2} className="g-5">
                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <div className="rounded-3">
                            <img className="img-fluid rounded-3" src={img} alt="" />
                        </div>
                    </Col>

                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <h1 className="fs-2 fw-bold text-info text-uppercase">{title}</h1>

                        <div className="bg-light rounded-3 p-4 my-4">
                            <p>{description}</p>
                        </div>

                        <div className="bg-light p-4 rounded-3">
                            <h2>${price}</h2>
                            <Link to={`/place-order/${_id}`}>
                                <Button
                                    variant="success"
                                >
                                    Buy Now
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;