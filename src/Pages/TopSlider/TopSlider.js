import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Typical from 'react-typical';
import styles from './TopSlider.module.css';

const TopSlider = () => {
    return (
        <div>
            <Carousel className={`${styles.carouselSection}`}>
                <Carousel.Item>
                    <div className={`${styles.singleCarouselItem}`}>
                        <img
                            className={`d-block w-100 ${styles.sliderImg}`}
                            src="https://i.ibb.co/wShSkB4/laptop.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className={`${styles.caption}`}>
                            <h1>Upcoming Laptop
                                <Typical
                                    steps={[' MacBook Pro 13', 1000, ' HP Envy x360', 1000, ' Razer Book 13', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />

                            </h1>
                            <p className="fs-4 ">Prebook is gooing on</p>
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Prebook Now <i className="fas fa-angle-double-right"></i></Button>
                        </Carousel.Caption>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className={`${styles.singleCarouselItem}`}>
                        <img
                            className={`d-block w-100 ${styles.sliderImg}`}
                            src="https://i.ibb.co/9yHDsVk/iphone.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className={`${styles.caption}`}>
                            <h1>Latest Offers
                                <Typical
                                    steps={[' In Mobile Phones', 1000, ' And Computers ', 1000]}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </h1>
                            <p className="fs-4">Upto 15% discount is ongoing</p>
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`${styles.singleCarouselItem}`}>
                        <img
                            className={`d-block w-100 ${styles.sliderImg}`}
                            src="https://i.ibb.co/6cQFSnb/speaker.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className={`${styles.caption}`}>
                            <h1>Largest
                                <Typical
                                    steps={[' Electronics Store']}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </h1>
                            <p className="fs-4">All electronics Accessories is available</p>
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                        </Carousel.Caption>
                    </div>

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopSlider;