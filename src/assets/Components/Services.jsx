import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Using standard emojis for now to avoid the react-icons error
// You can switch back to icons once the library is installed

const Services = () => {
  const serviceOfferings = [
    {
      title: "Custom Web Applications",
      description: "End-to-end development of scalable web apps using React, Node.js, and modern frameworks.",
      icon: "🌐",
      category: "Full-Stack"
    },
    {
      title: "API Design & Integration",
      description: "Building robust RESTful and GraphQL APIs to connect your software with third-party services.",
      icon: "🔌",
      category: "Backend"
    },
    {
      title: "Database Architecture",
      description: "Designing efficient SQL and NoSQL data models for speed, security, and scalability.",
      icon: "🗄️",
      category: "Architecture"
    },
    {
      title: "Mobile-First Design",
      description: "Creating responsive user interfaces that provide a seamless experience across all device sizes.",
      icon: "📱",
      category: "Frontend"
    },
    {
      title: "Cloud Deployment",
      description: "Automated CI/CD pipelines and hosting solutions on AWS, Azure, or Vercel.",
      icon: "☁️",
      category: "DevOps"
    },
    {
      title: "E-commerce Solutions",
      description: "Secure payment gateway integration and custom storefronts for digital businesses.",
      icon: "🛒",
      category: "Business"
    }
  ];

  return (
    <section className="py-5 bg-white" id="services">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">What We Offer</h6>

        </div>

        <Row>
          {serviceOfferings.map((service, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm p-3 service-card">
                <Card.Body>
                  <div className="fs-1 mb-3">{service.icon}</div>
                  <div className="text-primary small fw-bold mb-2">{service.category}</div>
                  <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;