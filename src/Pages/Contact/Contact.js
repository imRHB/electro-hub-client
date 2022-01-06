import React from 'react';
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <Header />
            <Container className="my-5">
                <div className={`${styles.contactContainer}`}>
                    <div className={`${styles.contactBox}`}>
                        <div className={`${styles.left1}`}></div>
                        <div className={`${styles.right1}`}>
                            <h2>Contact Us</h2>
                            <input type="text" className={`${styles.field}`} placeholder="Your Name " />
                            <input type="text" className={`${styles.field}`} placeholder="Your Email " />
                            <input type="text" className={`${styles.field}`} placeholder="Phone" />
                            <textarea placeholder="Message" className={`${styles.field}`}></textarea>
                            <button className={`${styles.btn1}`}>Send</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;