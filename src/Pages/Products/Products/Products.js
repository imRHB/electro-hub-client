import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import SingleProduct from "../SingleProduct/SingleProduct";
import styles from './Products.module.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://desolate-beyond-60013.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {
                loading ? <div className={`${styles.spinnerContainer}`}><Spinner animation="grow" variant="primary" /></div>
                    :
                    <>
                        <Header />
                        <Container className="my-5 pb-5">
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
                        <Footer />
                    </>
            }
        </div>
    );
};

export default Products;