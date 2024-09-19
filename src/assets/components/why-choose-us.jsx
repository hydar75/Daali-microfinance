import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSmile, faDollarSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './why-choose-us.css';

const reasons = [
    {
        icon: faGear,
        title: 'Experienced Team',
        description: 'Our team is highly experienced in delivering top-notch services and solutions.',
    },
    {
        icon: faSmile,
        title: 'Customer Satisfaction',
        description: 'We prioritize customer satisfaction with a personalized approach to every project.',
    },
    {
        icon: faDollarSign,
        title: 'Affordable Prices',
        description: 'We offer competitive pricing without compromising on quality.',
    },
    {
        icon: faCheckCircle,
        title: 'High-Quality Results',
        description: 'Our commitment to excellence ensures you get the best quality results every time.',
    },
];

const WhyChooseUsApp = () => {
    return (
        <Container fluid className='whychooseus-container' id="why-choose-us">
            <h2 className="text-center mb-4">Why Choose Us</h2>
            <Row>
                {reasons.map((reason, index) => (
                    <Col key={index} xs={12} md={6} lg={3} className="text-center mb-4">
                        <FontAwesomeIcon icon={reason.icon} size="3x" />
                        <h5>{reason.title}</h5>
                        <p>{reason.description}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WhyChooseUsApp;