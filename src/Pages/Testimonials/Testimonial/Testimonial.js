import React, { useEffect, } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import styles from './Testimonial.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../redux/slices/reviewSlice';



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
    const dispatch = useDispatch();
    const { allReviews, isLoading } = useSelector(state => state.reviews);

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch])


    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-5 loading">
                <Spinner className="" animation="grow" variant="danger" />
                <Spinner className="" animation="grow" variant="warning" />
                <Spinner className="" animation="grow" variant="success" />
            </div>
        )
    }

    return (
        <div className="mx-auto my-5 py-5">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="">Testimonials and reviews</h5>
                    <h2 className="text-secondary fw-bold">What Our Customers Say</h2>
                </div>
                <div className="mx-3 py-3">
                    <Slider {...settings}>

                        {
                            allReviews?.map((testimonial, t_id) => (<SingleTestimonial key={t_id} testimonial={testimonial} />))
                        }

                    </Slider>


                </div>
            </Container>
        </div>
    );
};

export default Testimonial;