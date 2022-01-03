import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
// import useAuth from '../../hooks/useAuth';
// import styles from './Testimonial.module.css';

const testimonials = [
    {
        name: "Nasim Bin Kamal ",
        review: "Good quality products.",
        rating: 5
    },
    {
        name: "Nasim Sagar ",
        review: "Good quality products.",
        rating: 4
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    }
]

const Testimonial = () => {
    // const [reviews, setReviews] = useState([]);
    // const { isLoading } = useAuth();

    // useEffect(() => {
    //     fetch('https://serene-fjord-11430.herokuapp.com/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data));
    // }, []);
    // if (isLoading) {
    //     return (
    //         <div className="d-flex justify-content-center my-5 loading">
    //             <Spinner className="" animation="grow" variant="danger" />
    //             <Spinner className="" animation="grow" variant="warning" />
    //             <Spinner className="" animation="grow" variant="success" />
    //         </div>
    //     )
    // }

    return (
        <div className="my-5 py-5">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="">Testimonials and reviews</h5>
                    <h2 className="text-secondary fw-bold">What Our Customers Say</h2>
                </div>
                <div className="py-5">
                    <Row xs={1} md={2} lg={3}>
                        {
                            testimonials?.map((testimonial, t_id) => (<SingleTestimonial key={t_id} testimonial={testimonial} />))
                        }
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Testimonial;