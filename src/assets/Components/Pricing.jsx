import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      title: "Startup Pack",
      price: "KES 45,000",
      period: "per project",
      description: "Ideal for small businesses, SACCOs, and professional portfolios.",
      features: [
        "Professional UI Design",
        "Up to 5 Pages (React/Vite)",
        "Mobile Responsive",
        "Contact Form Integration",
        "SEO Setup & Google Maps",
        "1 Month Free Support"
      ],
      buttonVariant: "outline-primary",
      featured: false
    },
    {
      title: "E-Commerce Suite",
      price: "KES 120,000",
      period: "per project",
      description: "Turnkey digital shop for local retailers and wholesalers.",
      features: [
        "Product Catalog & Cart",
        "M-Pesa STK Push Integration",
        "Inventory Management",
        "Admin Sales Dashboard",
        "Customer Account Portal",
        "Training for Staff"
      ],
      buttonVariant: "outline-primary",
      featured: false
    },
    {
      title: "Full-Stack Build",
      price: "KES 250,000",
      period: "per project",
      description: "Custom software for growing Kenyan enterprises and FinTechs.",
      features: [
        "Everything in E-Commerce",
        "Advanced User Auth & Roles",
        "API Third-party Integration",
        "Database Architecture",
        "Custom Workflow Automation",
        "6 Months Maintenance"
      ],
      buttonVariant: "primary",
      featured: true
    },
    {
      title: "Retainer / Dev-Ops",
      price: "KES 60,000",
      period: "per month",
      description: "Ongoing engineering, hosting, and server management.",
      features: [
        "24/7 Server Monitoring",
        "Security Updates & Patches",
        "Dedicated Dev Hours",
        "Cloud Management (Vercel/AWS)",
        "Priority Feature Requests",
        "Monthly Technical Audit"
      ],
      buttonVariant: "outline-primary",
      featured: false
    }
  ];

  return (
    <Container className="my-5 py-5" id="pricing">
      <div className="text-center mb-5">
        <Badge bg="success" className="mb-2 px-3 py-2 rounded-pill shadow-sm">
          FLEX SOLUTIONS • 2025 RATES
        </Badge>
        <h1 className="fw-bold display-5">Affordable Engineering Excellence</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
          Flexible pricing built for the Kenyan business ecosystem. We support M-Pesa, Binance, and Bank Transfers.
        </p>
      </div>

      <Row className="justify-content-center align-items-stretch">
        {plans.map((plan, index) => (
          <Col key={index} xl={3} lg={6} md={6} className="mb-4">
            <Card className={`h-100 shadow-sm border-0 rounded-4 transition-hover ${plan.featured ? 'border-top border-success border-5 mt-lg-n3 shadow' : ''}`}>
              <Card.Body className="p-4 d-flex flex-column">
                <h4 className="fw-bold text-dark">{plan.title}</h4>
                <p className="text-muted small mb-4" style={{ height: '40px' }}>{plan.description}</p>
                
                <div className="mb-4">
                  <span className="fs-3 fw-bold text-success">{plan.price}</span>
                  <span className="text-muted ms-1 small">/{plan.period}</span>
                </div>

                <hr className="my-4 opacity-10" />

                <ul className="list-unstyled mb-5 flex-grow-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-3 d-flex align-items-start">
                      <span className="text-success me-2 fw-bold">✓</span>
                      <span className="text-secondary small">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  as={Link} 
                  to="/Contact" 
                  variant={plan.buttonVariant} 
                  className="py-3 fw-bold shadow-sm rounded-pill mt-auto"
                >
                  Request Quotation
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Trust Banner for Local Integration */}
      <div className="text-center mt-5 pt-4">
        <p className="text-uppercase tracking-widest small fw-bold text-muted">Specialized Integrations</p>
        <div className="d-flex justify-content-center gap-4 align-items-center flex-wrap opacity-75">
          <span className="fw-bold h5 text-muted">M-PESA DARAJA</span>
          <span className="fw-bold h5 text-muted">KRA iTAX</span>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;