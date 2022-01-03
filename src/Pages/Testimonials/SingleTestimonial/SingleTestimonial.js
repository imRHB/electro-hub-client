import React from 'react';


const SingleTestimonial = ({ testimonial }) => {
    return (
        <div className="bg-warning shadow-sm mx-2 my-5 p-3 text-center rounded-3">
            <h4 className="fw-bold">{testimonial?.name}</h4>
            <p className="customer fw-bold">Customer</p>
            <small>{testimonial?.review}</small>
            <div className="py-3 mx-auto">
                {/* <Rating
                            className="ratings"
                            readonly
                            initialRating={testimonial?.rating}
                            emptySymbol="far fa-star text-warning m-0 p-0"
                            fullSymbol="fas fa-star text-warning m-0 p-0"
                        ></Rating> */}

                <h6>Rating:{testimonial?.rating}</h6>
            </div>
        </div>


    );
};

export default SingleTestimonial;