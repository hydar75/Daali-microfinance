import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import './testimonial.css';
import Jane from '../image/lady-1.jpg'
import John from '../image/man-2.jpg'
import Alice from '../image/lady-2.jpg'
import Mike from '../image/man-3.jpg'
import Emily from '../image/lady-3.jpg'
import Chris from '../image/man-4.jpg'


// Testimonials data
const testimonials = [
    {
        name: 'Jane Mykel',
        image: Jane,
        text: 'This service was fantastic! Highly recommend to anyone looking for quality and professionalism.',
    },
    {
        name: 'John Smith',
        image: John,
        text: 'A wonderful experience from start to finish. The team was attentive and exceeded expectations.',
    },
    {
        name: 'Alice Johnson',
        image: Alice,
        text: 'Exceptional service with great attention to detail. I will definitely be coming back for more.',
    },
    {
        name: 'Mike Williams',
        image: Mike,
        text: 'I was impressed with the high-quality work and excellent customer service throughout the entire process.',
    },
    {
        name: 'Emily Davis',
        image: Emily,
        text: 'They went above and beyond to meet our needs, and the results were outstanding!',
    },
    {
        name: 'Chris Taylor',
        image: Chris,
        text: 'A truly unique and rewarding experience. Would recommend it to anyone seeking quality services.',
    },
];

const TestimonialCarousel = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show three testimonials at once on desktop
        slidesToScroll: 1,
        autoplay: true, // Enable auto-rotation
        autoplaySpeed: 3000, // Auto-rotation speed
        centerMode: true, // Center items
        centerPadding: '0', // Remove extra padding on the sides
        responsive: [
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show one testimonial at a time
                    slidesToScroll: 1,
                    centerMode: false, // Disable center mode on mobile
                },
            },
        ],
    };

    return (
        <Container fluid className='carousel-custom' id='testimonial'>
            <h2 className="text-center mb-4">What Our Clients Say</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <div className="d-flex align-items-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="testimonial-img"
                            />
                            <div>
                                <h5>{testimonial.name}</h5>
                                <p>"{testimonial.text}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default TestimonialCarousel;