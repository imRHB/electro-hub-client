import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";

const dbArrowIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://desolate-beyond-60013.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6));
            });
    }, []);

    return (
        <div className="my-5 py-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Featured Products</h2>
                <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </Row>

                <div className="my-5 text-center">
                    <Link to="/shop">
                        <Button>EXPLORE MORE <span className="ms-3">{dbArrowIcon}</span></Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default FeaturedProducts;
