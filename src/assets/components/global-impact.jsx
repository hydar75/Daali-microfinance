import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./global-impact.css";
import GlobalImpact from '../image/global-img.jpg'

function ImpactApp() {
    return (
        <Container className="about-section" id="global impact">
            <Row className='row-about'>
                <Col>
                    <h2>Our Global Presence</h2>
                    <p>
                        Daali Microfinance Bank proudly serves communities worldwide, with branches in key cities across the United States, Nigeria, Kenya, India, the United Kingdom, and beyond. Our expansive international network allows us to bring innovative financial services to regions where traditional banking is often limited or unavailable. By combining global expertise with local insights, we tailor our services to meet the unique needs of each market, empowering individuals, entrepreneurs, and businesses to thrive.
                    </p>
                    <p>
                        With a strong presence on the ground and through our digital platforms, we are committed to making financial inclusion a reality for all. Whether you are in a bustling city or a remote village, Daali Microfinance Bank is dedicated to providing the financial tools and support needed to fuel economic growth and personal success. Wherever you are, we are here to help you achieve your financial goals.
                    </p>

                </Col>

                <Col><img src={GlobalImpact} className='about-img' /></Col>
            </Row>
        </Container>

    )

}


export default ImpactApp