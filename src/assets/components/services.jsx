import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./services.css";


const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      
    </div>
  );
};

const ServicesApp = () => {
  const services = [
    {
      title: "Micro-Loans",
      description:
        "Access small, flexible loans designed for individuals and small businesses. Whether you need to cover personal expenses or grow your business, our micro-loans offer quick, hassle-free financing with flexible repayment options.",
    },
    {
      title: "Savings Accounts",
      description:
        "Our savings accounts are designed to help you grow your wealth with competitive interest rates. Whether you're saving for short-term goals or long-term financial security, our accounts provide safety and growth potential.",
    },
    {
      title: "Business Loans",
      description:
        "Fuel your business growth with our tailored business loan solutions. From startup capital to expansion funding, our business loans come with flexible terms and competitive interest rates to meet your enterprise needs.",
    },
    {
      title: "Financial Education",
      description:
        "Enhance your financial knowledge with our educational programs. We provide workshops, online resources, and personalized advice to help you manage your finances better and make smarter financial decisions.",
    },
    {
      title: "Insurance Services",
      description:
        "Safeguard your future with our comprehensive insurance plans. We offer life, health, and business insurance options designed to protect you and your assets from unexpected risks.",
    },
    {
      title: "Mobile & Online Banking",
      description:
        "Enjoy the convenience of banking from anywhere with our secure mobile and online banking platforms. Check your balances, transfer funds, pay bills, and access your financial information at your fingertips—anytime, anywhere.",
    },
  ];

  return (
    <section className="services-section" id="service">
      <Container>
        <h2 className="text-center">Daali Microfinance Bank Services</h2>
        <p className="text-center sub-tit">At Daali Microfinance Bank, we are dedicated to providing a broad range of financial services that cater to individuals, entrepreneurs, and small businesses. Our goal is to help you achieve financial success with innovative and accessible solutions.</p>
        <Row className="mt-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <ServiceCard
                title={service.title}
                description={service.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesApp;
