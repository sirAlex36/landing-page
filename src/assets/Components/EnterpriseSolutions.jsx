import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// 1. IMPORTANT: Import Link from react-router-dom
import { Link } from 'react-router-dom'; 

const EnterpriseSolutions = () => {
  const solutions = [
    {
      title: "Custom CRM/ERP",
      description: "Replace messy spreadsheets with a central nervous system for your business operations.",
      benefit: "Efficiency Boost",
      color: "#0d6efd"
    },
    {
      title: "API Ecosystems",
      description: "Seamlessly connect M-Pesa, SMS, and KRA data to your existing software.",
      benefit: "Automation",
      color: "#198754"
    },
    {
      title: "CTO as a Service",
      description: "Fractional technical leadership to guide your digital strategy and engineering team.",
      benefit: "Expert Leadership",
      color: "#6f42c1"
    }
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Row className="mb-5 text-center">
          <Col lg={8} className="mx-auto">
            <h2 className="fw-bold">High-Impact Corporate Solutions</h2>
            <p className="text-light opacity-75">We build the heavy-duty tech that powers Kenyan industry leaders.</p>
          </Col>
        </Row>
        <Row className="g-4">
          {solutions.map((s, i) => (
            <Col md={4} key={i}>
              <Card className="h-100 bg-transparent border-secondary text-white p-3">
                <Card.Body className="d-flex flex-column">
                  <div className="badge mb-3 align-self-start" style={{backgroundColor: s.color}}>{s.benefit}</div>
                  <Card.Title className="h4 fw-bold">{s.title}</Card.Title>
                  <Card.Text className="opacity-75 small flex-grow-1">{s.description}</Card.Text>
                  
                  {/* 2. THE FIX: Add 'as={Link}' and 'to="/Contact"' */}
                  <Button 
                    as={Link} 
                    to="/Contact" 
                    variant="outline-light" 
                    className="mt-3 btn-sm fw-bold"
                  >
                    Enquire for Specs
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EnterpriseSolutions;