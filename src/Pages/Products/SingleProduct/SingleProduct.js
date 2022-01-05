import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './SingleProduct.module.css';

const SingleProduct = (props) => {
    const { _id, img, title, description, price } = props.product;

    return (
        <Col>
            <Card className={`${'h-100 border-0 rounded-3 text-center'} ${styles.productCard}`}>
                <Card.Img variant="top" src={img} style={{ width: '75%', margin: '0 auto' }} className="p-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{description?.slice(0, 60)} . . .</p>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between fs-3 fw-bold">
                            <p className="text-info">${price}</p>
                            <Link to={`/product/${_id}`}>
                                <Button
                                    variant="secondary">Details</Button>
                            </Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;