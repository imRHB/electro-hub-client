import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Typical from 'react-typical';
import styles from './TopSlider.module.css';

const TopSlider = () => {
    return (
        <div className=''>
            <Carousel className={`${styles.slider}`}>
                <Carousel.Item className={`${styles.sliderItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/LdzmtsQ/asusrog.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>Upcoming Laptop
                            <Typical
                                steps={[' MacBook Pro', 1000, ' HP Envy x360', 1000, ' Razer Book 13', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />

                        </h1>
                        <p className="fs-4 ">Prebook is gooing on</p>
                        <Link to="/shop">
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Prebook Now <i className="fas fa-angle-double-right"></i></Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={`${styles.sliderItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/9yHDsVk/iphone.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>Latest Offers
                            <Typical
                                steps={[' In Mobile Phones', 1000, ' and Computers ', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1>
                        <p className="fs-4">Upto 15% discount is ongoing</p>
                        <Link to="/shop">
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={`${styles.sliderItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/6cQFSnb/speaker.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>
                            <Typical
                                steps={['Best Collections', 1000, 'Best After Sales Service', 1000, 'Best Price', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1>
                        <p className="fs-4">We have best and unique bikes.</p>
                        <Link to="/shop">
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default TopSlider;