import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const ProductDetails = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    const { _id, title, img, specifications, description, price } = product;

    useEffect(() => {
        fetch(`https://desolate-beyond-60013.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    return (
        <div className="my-5">
            <Header />
            <Container>
                {/* <h2 className="text-center fs-1 fw-bold text-secondary my-5">Product Details</h2> */}

                <Row xs={1} md={1} xl={2} className="g-5">
                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <div className="rounded-3">
                            <img className="img-fluid rounded-3 w-100" src={img} alt="" />
                        </div>
                    </Col>

                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <h1 className="fs-2 fw-bold text-info text-uppercase">{title}</h1>

                        <div className="bg-light rounded-3 p-4 my-4">
                            <p>{specifications}</p>
                        </div>

                        <div className="bg-light rounded-3 p-4 my-4">
                            <h4>Description</h4>
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
            <Footer />
        </div>
    );
};

export default ProductDetails;