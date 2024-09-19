import Carousel from 'react-bootstrap/Carousel';
/*import ExampleCarouselImage from 'components/ExampleCarouselImage';*/
import slideImg1 from '../image/Slider1.jpg'
import slideImg2 from '../image/Slider2.jpg'
import slideImg3 from '../image/slide3.jpg' 
import slideImg4 from '../image/slide4.jpg'
import slideImg5 from '../image/slide5.jpg'
import './hero.css'


function HeroApp() {
    return (
        <Carousel className='hero'>
            <Carousel.Item>
                <img src={slideImg1} alt='slide 1'  />
                {/*<ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption className='one'>
                    <h3>Empowering Dreams with Accessible Financing</h3>
                    <p>At Daali Microfinance Bank, we are dedicated to turning your aspirations into reality. With flexible microloans and personalized financial solutions, we empower individuals and businesses to take control of their financial futures. Whether you’re launching a startup or expanding an established business, we’re here to help you succeed.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img src={slideImg2} alt='slide 2'  />
               {/*<ExampleCarouselImage text="Second slide" /> */}
                <Carousel.Caption className='two'>
                    <h3>Inclusive Banking for All</h3>
                    <p>Our mission is to provide accessible and affordable financial services to underserved communities. At Daali Microfinance Bank, we believe that everyone deserves the opportunity to grow, save, and succeed. From rural entrepreneurs to urban professionals, our products are designed to fit your unique needs.</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <img src={slideImg3} alt='slide 3'  />
        {/*<ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption className='three'>
          <h3>Grow Your Wealth with Secure Savings</h3>
          <p>Secure your financial future with our high-interest savings accounts. Whether you’re saving for your children’s education, a new home, or an emergency fund, Daali Microfinance Bank offers safe, convenient, and flexible savings plans that help you build a stronger tomorrow.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img src={slideImg4} alt='slide 4'  />
        {/*<ExampleCarouselImage text="Fourth slide" /> */}
        <Carousel.Caption className='four'>
          <h3>Supporting Small Businesses, Building Strong Communities</h3>
          <p>We know that small businesses are the backbone of local economies. That’s why Daali Microfinance Bank provides tailored business loans designed to help entrepreneurs thrive. Together, we can create jobs, stimulate economic growth, and build resilient communities.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={slideImg5} alt='slide 5'  />
        {/*<ExampleCarouselImage text="Fifth slide" /> */}
        <Carousel.Caption className='five'>
          <h3>Fast, Simple, and Secure Banking at Your Fingertips</h3>
          <p>Experience the future of banking with Daali Microfinance Bank’s digital services. From mobile banking to easy online loan applications, we offer fast and secure financial solutions that fit your busy lifestyle. Access your accounts and manage your finances anytime, anywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
 </Carousel>
    )
}
            export default HeroApp
