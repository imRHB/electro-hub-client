import React from 'react';
import Facilities from "../Facilities/Facilities";
import ProductBrand from "../ProductBrand/ProductBrand";
import FeaturedProducts from "../Products/FeaturedProducts/FeaturedProducts";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Testimonial from "../Testimonials/Testimonial/Testimonial";
import TopSlider from "../TopSlider/TopSlider";

const Landing = () => {
    return (
        <div>
            <Header />
            <TopSlider />
            <ProductBrand />
            <FeaturedProducts />
            <Facilities />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Landing;