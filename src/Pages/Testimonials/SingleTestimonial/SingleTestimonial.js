import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import styles from './SingleTestimonial.module.css';



const SingleTestimonial = ({ testimonial }) => {
    return (
        <Card className={`shadow-sm mx-2 my-5 p-3 text-center rounded-3 ${styles.testimonialCard}`}>
            <Row xs={1} md={2} lg={2} className='pb-2 d-flex justify-content-center align-items-center'>
                <Col>
                    <div>
                        <img className='img-fluid w-75 border border-3 rounded-circle border-secondary' src="https://i.ibb.co/GkL35xk/Ellipse-91.png" alt="" />
                    </div>
                </Col>
                <Col>
                    <h5 className={`fw-bold ${styles.customerName}`}>{testimonial?.name}</h5>
                </Col>
            </Row>
            <div>
                <small>{testimonial?.review}</small>
                <div className="py-3 mx-auto">
                    <Rating
                        className={`${styles.ratings}`}
                        readonly
                        initialRating={testimonial?.rating}
                        emptySymbol="far fa-star text-warning m-0 p-0"
                        fullSymbol="fas fa-star text-warning m-0 p-0"
                    ></Rating>

                </div>
            </div>
        </Card>


    );
};

export default SingleTestimonial;