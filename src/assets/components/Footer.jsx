import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';


function FooterApp(){
    return(
        <Container fluid className='footer'>
        <Row className='first'>
            <Col sm={12} lg={6}> 
            <h3>About Us</h3>
          <h5>  Daali Microfinance Bank</h5>
<p>
    Empowering Dreams, One Loan at a Time.
    With branches across the globe, we bring innovative financial solutions to help individuals and businesses grow.
</p>

        <section>
                <h6>Connect with us</h6>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
            </section>
            </Col>
            <Col className='links' sm={12} md={6} lg={3}>
            <h3>Quick Links</h3>
            <a href='https://home.com'><li>Home</li></a>
            <a href='https://about.com'><li>About Us</li></a>
            <a href='https://services.com'><li>Services</li></a>
            <a href='https://choose.com'><li>Why Choose Us</li></a>
            <a href='https://contact.com'><li>Contact Us</li></a>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <h3>Contact Us</h3>
            <p><strong>Phone:</strong> +1 (800) 123-4567<br/>
            <strong>Email:</strong> info@daalimfb.com<br/>
           <strong> Address:</strong> 123 Finance Street, New York, NY, USA<br/>
           Branch Locator
            </p>

          
            </Col>
        </Row>


        <Row className='copyright'>
            <Col sm={12} md={6}>© 2024 Daali Microfinance Bank. All rights reserved.


</Col>
            <Col sm={12} md={6}>Privacy Policy | Terms & Conditions</Col>
        </Row>


        </Container>
    )
    
    }
    
    export default FooterApp