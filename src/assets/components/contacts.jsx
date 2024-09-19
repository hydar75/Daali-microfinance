import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [40.7092563, -74.0161855];

const ContactUs = () => {
    return (
        <div>
            <Container className="contact-container py-5" id='contact'>
                <Row>
                    {/* Left Column: Form */}
                    <Col md={6}>
                        <h3>Contact Us</h3>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Enter subject" />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">
                                Send Message
                            </Button>
                        </Form>
                    </Col>

                    {/* Right Column: Contact Information */}
                    <Col md={6}>
                        <h3>Our Contact Information</h3>
                        <ul className="list-unstyled contact-info">
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Head Office: 123 Main St, Lagos, Nigeria
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Branch: 456 Second Ave, Abuja, Nigeria
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Branch: 789 Third Blvd, Port Harcourt, Nigeria
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> Phone: +234 123 456 7890
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} /> Email: info@example.com
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Full Width Map */}
            <div style={{ height: '400px', width: '100%' }}>
                        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    We are here.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    </div>
    );
};

export default ContactUs;