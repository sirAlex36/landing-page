import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      title: "Startup Pack",
      price: "KES 45,000",
      period: "per project",
      description: "Ideal for small businesses and professional portfolios.",
      features: [
        "Professional UI Design",
        "Up to 5 Pages (React)",
        "Mobile Responsive",
        "Contact Form Integration",
        "Google Maps/Social Media",
        "1 Month Free Support"
      ],
      buttonVariant: "outline-primary",
      featured: false
    },
    {
      title: "Full-Stack Build",
      price: "KES 150,000",
      period: "per project",
      description: "Custom software for growing Kenyan enterprises.",
      features: [
        "Everything in Startup Pack",
        "User Auth & Dashboard",
        "M-Pesa / STK Push Integration",
        "Database Setup (MySQL/Postgres)",
        "Inventory or Lead Management",
        "3 Months Maintenance"
      ],
      buttonVariant: "primary",
      featured: true
    },
    {
      title: "Retainer / Dev-Ops",
      price: "KES 60,000",
      period: "per month",
      description: "Ongoing engineering and server management.",
      features: [
        "24/7 Server Monitoring",
        "Security Updates & Patches",
        "Dedicated Dev Hours",
        "Cloud Management (AWS/Azure)",
        "Priority Feature Requests",
        "Monthly Technical Report"
      ],
      buttonVariant: "outline-primary",
      featured: false
    }
  ];

  return (
    <Container className="my-5 py-5" id="pricing">
      <div className="text-center mb-5">
        <Badge bg="success" className="mb-2 px-3 py-2 rounded-pill shadow-sm">
          KENYAN MARKET RATES
        </Badge>
        <h1 className="fw-bold display-5">Affordable Engineering Excellence</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
          Flexible pricing built for the Kenyan business ecosystem. We accept bank transfers and M-Pesa.
        </p>
      </div>

      <Row className="justify-content-center align-items-stretch">
        {plans.map((plan, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <Card className={`h-100 shadow border-0 rounded-4 ${plan.featured ? 'border-top border-success border-5 mt-lg-n3' : ''}`}>
              <Card.Body className="p-4 d-flex flex-column">
                <h3 className="fw-bold text-dark">{plan.title}</h3>
                <p className="text-muted small mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="fs-2 fw-bold text-success">{plan.price}</span>
                  <span className="text-muted ms-1">/{plan.period}</span>
                </div>

                <hr className="my-4 opacity-10" />

                <ul className="list-unstyled mb-5 flex-grow-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-3 d-flex align-items-center">
                      <span className="text-success me-2 fw-bold">✓</span>
                      <span className="text-secondary small">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  as={Link} 
                  to="/Contact" 
                  variant={plan.buttonVariant} 
                  className="py-3 fw-bold shadow-sm rounded-pill"
                >
                  Request Quotation
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;