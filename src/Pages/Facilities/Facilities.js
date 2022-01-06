import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Facilities.module.css';

const facilities = [
    {
        image: "https://i.ibb.co/X5HCX9k/shipping-free-512-grande.png",
        status: "FREE SHIPPING",
        desc: "Free shipping on all order"
    },
    {
        image: "https://i.ibb.co/jGQSsD5/80630.png",
        status: "ONLINE SUPPORT",
        desc: "Online support 24 hours a day"
    },
    {
        image: "https://i.ibb.co/z5Pr6ds/3427751.png",
        status: "MONEY RETURN",
        desc: "Back guarantee under 7 days"
    },
    {
        image: "https://i.ibb.co/KNsZLhN/87255.png",
        status: "MEMBER DISCOUNT",
        desc: "On every order over $300"
    },
];

const Facilities = () => {
    return (
        <div className={`my-3 ${styles.statusSection}`}>
            <Container>
                <div className="text-center mx-auto">
                    <h5 className={`${styles.shortInfo}`}>Why ElectroHub</h5>
                    <h2 className="text-secondary fw-bold">Why You Choose Us For Buying Electronic Products</h2>
                </div>
                <div className="py-5 px-auto mx-auto">
                    <Row xs={1} md={2} lg={4}>
                        {
                            facilities?.map((facility, f_id) => (
                                <div key={f_id}>
                                    <Col className="mx-auto my-3">
                                        <div className={`d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white rounded-3 ${styles.status}`}>
                                            <img className="img-fluid mx-auto" width="30%" src={facility?.image} alt="" />
                                            <h5 className="pt-3">{facility?.status}</h5>
                                            <p>{facility?.desc}</p>
                                        </div>
                                    </Col>
                                </div>
                            ))
                        }

                    </Row>
                </div>
            </Container >
        </div >
    );
};

export default Facilities;