import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
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
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    },
    {
        name: "Test User",
        review: "Good quality products.",
        rating: 4
    }
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


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
                <div className="mx-auto py-3">
                    <Slider {...settings}>
                        {/* <Row xs={1} md={2} lg={3}> */}
                        {
                            testimonials?.map((testimonial, t_id) => (<SingleTestimonial key={t_id} testimonial={testimonial} />))
                        }
                        {/* </Row> */}
                    </Slider>

                </div>
            </Container>
        </div>
    );
};

export default Testimonial;