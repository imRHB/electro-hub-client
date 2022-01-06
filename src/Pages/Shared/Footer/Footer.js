import React from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const pages = [
    {
        pageTitle: "Home",
        pageLink: "/home"
    },
    {
        pageTitle: "About",
        pageLink: "/about"
    },
    {
        pageTitle: "Contact",
        pageLink: "/contact"
    },
    {
        pageTitle: "Login",
        pageLink: "/login"
    }
]

const Footer = () => {
    return (
        <div className={`${styles.footer} mx-auto`}>
            <Container>
                <Row xs={1} md={4} lg={4} className="py-5 mx-auto">
                    <Col>
                        <div className={`mb-3 ${styles.footerLogo}`}>
                            <img className="img-fluid w-75" src="https://i.ibb.co/jv7BsTW/electrologo2.png" alt="" />
                        </div>
                        <p><small>Our main concern is to provide best customer service and after sales service.</small></p>
                        <h4 className="text-white">Social Links</h4>
                        <div className="d-flex justify-content-start align-items-center my-3">

                            <FaFacebookSquare className={`${styles.social} me-4 fs-4`} />
                            <FaInstagram className={`${styles.social} me-4 fs-4`} />
                            <FaYoutube className={`${styles.social} me-4 fs-4`} />

                        </div>
                    </Col>
                    <Col className="mx-auto">
                        <h5 className="text-white">Quick Navigation</h5>
                        <ul className={`${styles.quickNav}`}>

                            {
                                pages?.map((page, p_id) => (
                                    <li key={p_id}>
                                        <NavLink className={`${styles.menuItem}`} to={page?.pageLink}>{page?.pageTitle}</NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </Col>
                    <Col>
                        <h5 className="text-white mb-3">Working Hours</h5>
                        <p>Sat to Fri: 9.00 AM to 8.00 PM</p>
                        <p>24 hours online service.</p>

                        <address>
                            <i>Lake Circus, Kolabagan</i><br />
                            <i>Dhanmondi, Dhaka-1215</i>
                        </address>
                    </Col>
                    <Col >
                        <h5 className="text-white mb-3">Subscribe Us</h5>

                        <InputGroup className="my-4">
                            <FormControl
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-warning" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <p>Subscribe To Our Newsletter For Latest Update</p>
                    </Col>

                </Row>

            </Container>
            <div className={`${styles.footerEnd} p-4 text-center fw-lighter`} >
                <p>Copyright 2021 | All Rights Reserved By ElectroHub LTD.</p>
            </div>
        </div>
    );
};

export default Footer;