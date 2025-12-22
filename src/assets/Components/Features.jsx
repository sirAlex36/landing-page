import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  const businessValues = [
    {
      title: "Fast Time-to-Market",
      description: "Our agile development process ensures that your MVP or feature updates are deployed quickly without sacrificing code quality.",
      icon: "⚡",
      benefit: "Launch Faster"
    },
    {
      title: "Enterprise-Grade Security",
      description: "We implement industry-standard encryption and security protocols to protect your business data and user privacy.",
      icon: "🛡️",
      benefit: "Stay Protected"
    },
    {
      title: "Seamless Scalability",
      description: "Your software grows with you. We build architectures that handle 100 or 100,000 users without breaking a sweat.",
      icon: "📈",
      benefit: "Grow Effortlessly"
    },
    {
      title: "Cost-Effective Solutions",
      description: "By using modern full-stack frameworks, we reduce development hours and hosting costs, maximizing your ROI.",
      icon: "💰",
      benefit: "Save More"
    },
    {
      title: "24/7 Technical Support",
      description: "We don't just build and leave. Flex Web Services provides ongoing maintenance to keep your systems running 24/7.",
      icon: "🛠️",
      benefit: "Total Peace of Mind"
    },
    {
      title: "Data-Driven Insights",
      description: "We integrate advanced analytics into your software so you can make business decisions based on real user data.",
      icon: "📊",
      benefit: "Decide Smarter"
    }
  ];

  return (
    <Container className="my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold text-primary">Why Choose Us?</h2>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
          We don't just write code; we build the digital foundation for your company's success.
        </p>
      </div>
      
      <Row>
        {businessValues.map((item, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm p-2 hover-shadow transition">
              <Card.Body>
                <div className="mb-3 p-3 bg-light rounded-circle d-inline-block fs-2">
                  {item.icon}
                </div>
                <div className="badge bg-primary-subtle text-primary mb-2">{item.benefit}</div>
                <Card.Title className="fw-bold mb-3">{item.title}</Card.Title>
                <Card.Text className="text-muted">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;