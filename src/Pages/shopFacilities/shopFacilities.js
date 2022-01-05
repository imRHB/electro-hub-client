import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ShopFacilities.module.css';

const facilities = [
    {
        id: "s1001",
        image: "https://i.ibb.co/X5HCX9k/shipping-free-512-grande.png",
        status: "FREE SHIPPING",
        desc: "Free shipping on all order"
    },
    {
        id: "s1002",
        image: "https://i.ibb.co/jGQSsD5/80630.png",
        status: "ONLINE SUPPORT",
        desc: "Online support 24 hours a day"
    },
    {
        id: "s1003",
        image: "https://i.ibb.co/z5Pr6ds/3427751.png",
        status: "MONEY RETURN",
        desc: "Back guarantee under 7 days"
    },
    {
        id: "s1004",
        image: "https://i.ibb.co/KNsZLhN/87255.png",
        status: "MEMBER DISCOUNT",
        desc: "On every order over $300"
    },
]

const ShopFacilities = () => {
    return (
        <div className={`my-3 ${styles.statusSection}`}>

            <Container>
                <div className="text-center mx-auto">
                    <h5 className={`${styles.shortInfo}`}>Why Two Wheels Zone</h5>
                    <h2 className="text-secondary fw-bold">Why You Choose Us For Buying Bike</h2>
                </div>
                <div className="py-5 px-auto mx-auto">
                    <Row xs={1} md={2} lg={4}>
                        {
                            facilities?.map(facility => <div key={facility?.id}>
                                <Col className="mx-auto my-3">
                                    <div className={`d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white rounded-3 ${styles.status}`}>
                                        <img className="img-fluid mx-auto" width="30%" src={facility?.image} alt="" />
                                        <h5 className="pt-3">{facility?.status}</h5>
                                        <p>{facility?.desc}</p>
                                    </div>
                                </Col>
                            </div>)
                        }

                    </Row>
                </div>
            </Container >
        </div >
    );
};

export default ShopFacilities;