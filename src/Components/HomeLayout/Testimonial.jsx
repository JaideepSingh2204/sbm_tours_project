import React from 'react';
import TestimonialCard from '../../CommonComponent/Cards/TestimonialCard';
import { Rajasthan, Tower, Herosections } from '../../Assets/Image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

    const testimonialData = [
        { image: Rajasthan, hadding: "Brittany Clark", headingParagraph: "San Francisco", reviews: "4.2", paragraph: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!" },
        { image: Herosections, hadding: "David Doe", headingParagraph: "Traveler", reviews: "4.6", paragraph: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!" },
        { image: Tower, hadding: "Jennth Norz", headingParagraph: "New York City", reviews: "4.1", paragraph: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!" },
        { image: Rajasthan, hadding: "Brittany Clark", headingParagraph: "San Francisco", reviews: "4.8", paragraph: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!" },
        { image: Herosections, hadding: "David Doe", headingParagraph: "Traveler", reviews: "4.0", paragraph: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!" },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='bg-slate-100 w-full py-20 mt-5'>
            <header className='text-center'>
                <h2 className='font-semibold text-6xl font-[poppins]'>
                    What our customers are saying <br /> about us
                </h2>
            </header>
            <div className='pt-10'>
                <Slider {...settings}>
                    {testimonialData.map((testimonial, index) => (
                        <div key={index} className='w-full'>
                            <TestimonialCard
                                image={testimonial.image}
                                hadding={testimonial.hadding}
                                headingParagraph={testimonial.headingParagraph}
                                reviews={testimonial.reviews}
                                paragraph={testimonial.paragraph}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
