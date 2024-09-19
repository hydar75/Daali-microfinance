import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImage from '../image/About_img.jpg'
import './about.css'
import { faFire} from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears';

function AboutApp(){
    return(
    <Container className="about-section" id='about'>
<Row className='row-about'>

<Col><img src={aboutImage} className='about-img' /></Col>

<Col>
<h2>Who We Are</h2>
<p>At Daali Microfinance Bank, we are committed to transforming lives by providing innovative, accessible, and sustainable financial solutions. Founded in the United States, we have expanded our reach across Africa, Asia, and Europe, ensuring that individuals, entrepreneurs, and communities have the tools they need to thrive financially.</p>



<section>
    
        
         <div>
               <h3><FontAwesomeIcon icon={faFire } /> Our Mission</h3>
                To provide accessible financial services that empower individuals and businesses, fostering economic growth and financial independence for underserved communities.
         </div>
        
            
       <div>
           
                <h3> <FontAwesomeIcon icon={faGears } />Our Vision</h3>
                To be a global leader in microfinance, ensuring financial inclusion and opportunities for all, regardless of location or background.
       </div>
       
            </section>

            </Col>
</Row>
    </Container>
        
    )
    
    
    }
    
    
    export default AboutApp