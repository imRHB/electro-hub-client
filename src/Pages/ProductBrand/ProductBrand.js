import React from 'react';
// import luxury from '../../../Images/car-type/luxury.png'
// import pickup from '../../../Images/car-type/pickup-truck.png'
// import sedans from '../../../Images/car-type/sedans.png'
// import sports from '../../../Images/car-type/sports.png'
// import suvs from '../../../Images/car-type/suvs.png'
// import vans from '../../../Images/car-type/vans.png'
import './ProductBrand.css';

const ProductBrand = () => {
    return (
        <div>
            <section class="vehicles-types">
                <div class="text-center mx-auto section-title">
                    <h1>TYPES OF PRODUCTS</h1>
                    <p>THAT WE ARE CURRENTLY DEALING</p>
                </div>
                <div class="type-car-card cartype">
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src="https://i.ibb.co/8d3V0kd/asset-23.jpg" alt="" />
                        </div>
                        <div class="item-name">
                            <p>Laptop</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src="https://i.ibb.co/BGcRkLv/asset-12.jpg" alt="" />
                        </div>
                        <div class="item-name">
                            <p>Phone</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src="https://i.ibb.co/Mc80rX2/asset-6.jpg" alt="" />
                        </div>
                        <div class="item-name">
                            <p>Headphone</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src="https://i.ibb.co/wCVQjDP/s2.jpg" alt="" />
                        </div>
                        <div class="item-name">
                            <p>Speaker</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src="https://i.ibb.co/92BxnjX/asset-3.jpg" alt="" />
                        </div>
                        <div class="item-name">
                            <p>Gaming</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src="https://i.ibb.co/429y6XY/9-dfd0a96f-7b86-40a1-8a6b-ec90fae36a46-425x.jpg" alt="" />
                        </div>
                        <div class="item-name">
                            <p>Drone</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductBrand;