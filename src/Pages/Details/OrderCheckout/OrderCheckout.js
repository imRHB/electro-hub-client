import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from "../../../Hook/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import styles from './OrderCheckout.module.css';
// orderCheckout

const OrderCheckout = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
    const [orderedProduct, setOrderedProduct] = useState({});

    useEffect(() => {
        fetch(`https://desolate-beyond-60013.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setOrderedProduct(data));
    }, [productId]);

    const onSubmit = data => {
        fetch('https://desolate-beyond-60013.herokuapp.com/orders/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...orderedProduct, ...data, status: 'Pending' })
        })
            .then(res => res.json())
            .then(result => {
                alert('Your order is successfull. You can track or manage order from dashboard.');
                reset();
                navigate('');
            })
    };

    return (
        <div className={`${''} ${styles.checkoutContainer}`}>
            <Header />
            <Container>
                <div>
                    <h2 className="text-center fw-bold text-success py-4">Order Checkout</h2>
                </div>

                <Row xs={1} sm={1} md={1} lg={2} xl={2}>
                    <Col>
                        <div className="bg-light py-5 rounded-3 border">
                            <p className="fs-4 fw-bold text-center text-info">Product Information</p>

                            <div className="mx-3">
                                <div className="">
                                    <img src={orderedProduct.img} alt="" className="mx-auto w-50 border rounded-3" />
                                </div>
                                <Row xs={2} sm={2} md={2} lg={2} className="my-4">
                                    <Col className="col-3 col-sm-3 col-md-3 col-lg-3">
                                        <p className="fs-5 fw-bold">Name</p>
                                        <p className="fs-5 fw-bold">Category</p>
                                        <p className="fs-5 fw-bold">Price</p>
                                    </Col>

                                    <Col className="col-9 col-sm-9 col-md-9 col-lg-9">
                                        <p className="fs-5">{orderedProduct.title}</p>
                                        <p className="fs-5">{orderedProduct.category}</p>
                                        <p className="fs-5">${orderedProduct.price}</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        {/* <div className="my-3 px-2 py-4 rounded-3 border">
                            <p className="text-center fs-4 fw-bold text-warning">Product Disclaimer <span>{disclaimerIcon}</span></p>
                            <ul className="text-muted">
                                <li>The actual product may vary from the images shown on the website</li>
                                <li>The actual colours may be vary from those shown depending on the device you are using to view the product or the angle of the item is photographed</li>
                            </ul>
                        </div> */}
                    </Col>

                    <Col>
                        <div className="bg-light py-5 rounded-3 border" style={{ position: 'sticky', top: '100px' }}>
                            <p className="fs-4 fw-bold text-center text-info">User Information</p>

                            <form onSubmit={handleSubmit(onSubmit)} className={`${'pb-4'} ${styles.orderCheckout}`}>
                                <input {...register("displayName", { required: true })} value={user.displayName} readOnly />

                                <input {...register("email", { required: true })} value={user.email} readOnly />

                                <textarea {...register("shippingAddress", { required: true })} placeholder="Enter shipping address" />

                                <input type="number" {...register("phone", { required: true })} placeholder="Phone number" />

                                <input type="submit" value="Place Order" className="btn btn-secondary" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default OrderCheckout;