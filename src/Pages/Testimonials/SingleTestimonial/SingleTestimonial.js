import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hook/useAuth';
import styles from './SingleTestimonial.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const userIcon = <FontAwesomeIcon icon={faUserCircle} className='fs-2' />

const SingleTestimonial = ({ testimonial }) => {
    const { user } = useAuth();
    return (
        <Card className={`shadow-sm mx-2 my-5 text-center px-3 py-4 rounded-3 ${styles.testimonialCard}`}>
            <Row xs={1} md={1} lg={1} className='pb-3 d-flex justify-content-center align-items-center'>
                <Col xs={12} md={4} lg={4}>
                    {
                        user?.photoURL ? (
                            <div>
                                <img className='mx-auto img-fluid w-75 border border-3 rounded-circle border-secondary' src={user?.photoURL} alt="" />
                            </div>
                        ) : (
                            <div>
                                {userIcon}
                            </div>
                        )
                    }
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <h5 className={`fw-bold mx-auto ${styles.customerName}`}>{testimonial?.name}</h5>
                </Col>
            </Row>
            <div>
                <div className={`py-1 ${styles.commentSection}`}>
                    <small>{testimonial?.comment}</small>
                </div>
                <div className="py-3 mx-auto">
                    <Rating
                        className={`${styles.ratings}`}
                        readonly
                        initialRating={testimonial?.rating}
                        emptySymbol="far fa-star text-warning ms-1 p-0"
                        fullSymbol="fas fa-star text-warning ms-1 p-0"
                    ></Rating>

                </div>
            </div>
        </Card>


    );
};

export default SingleTestimonial;