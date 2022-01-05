import React from 'react';
import Facilities from "../Facilities/Facilities";
import Products from "../Products/Products/Products";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Testimonial from "../Testimonials/Testimonial/Testimonial";
import TopSlider from "../TopSlider/TopSlider";

const Landing = () => {
    return (
        <div>
            <Header />
            <TopSlider />
            <Products />
            <Testimonial />
            <Facilities />
            <Footer />
        </div>
    );
};

export default Landing;