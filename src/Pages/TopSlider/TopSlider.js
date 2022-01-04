import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Typical from 'react-typical';
import styles from './TopSlider.module.css';

const TopSlider = () => {
    return (
        <div>
            <Carousel className={`${styles.carouselSection}`}>
                <Carousel.Item className={`${styles.singleCarouselItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/ZXdjpKV/oxana-melis-Bu-Auu-EI2ub-M-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>Upcoming Sports Bikes
                            <Typical
                                steps={[' Yamaha R14 V4', 1000, ' Royal Enfield 500', 1000, ' KTM Duke 200', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />

                        </h1>
                        <p className="fs-4 ">Prebook is gooing on</p>
                        <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Prebook Now <i className="fas fa-angle-double-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={`${styles.singleCarouselItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/vxt79pk/harley-davidson-ee-TJKC-wz34-unsplash.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>Latest Offers
                            <Typical
                                steps={[' In Sports Bikes', 1000, ' And Commuter Bikes', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1>
                        <p className="fs-4">Upto 15% discount is ongoing</p>
                        <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={`${styles.singleCarouselItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/648Ljzk/kirill-petropavlov-f-g-Cjl-Nc-VWo-unsplash-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>
                            <Typical
                                steps={['Best Bike Collections', 1000, 'Best After Sales Service', 1000, 'Best Price', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1>
                        <p className="fs-4">We have best and unique bikes.</p>
                        <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={`${styles.singleCarouselItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/Tbvq9HF/vikram-sundaramoorthy-Xp-OWm-X2-CBTQ-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>Largest Motorcycle Store</h1>
                        <p className="fs-4">All kinds of Bikes is available here.</p>
                        <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopSlider;