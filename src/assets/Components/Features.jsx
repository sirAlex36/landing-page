import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { ShieldCheck, Zap, BarChart3, Rocket, Banknote, LifeBuoy } from 'lucide-react'; // Modern icons

const Features = () => {
  const businessValues = [
    {
      title: "Agile Business Logic",
      description: "We don't just build code; we map your real-world workflows into automated software pipelines that launch in weeks, not months.",
      icon: <Zap size={32} className="text-warning" />,
      benefit: "Speed to Market",
      tag: "Rapid Deployment"
    },
    {
      title: "Zero-Trust Architecture",
      description: "In an era of data breaches, we bake security into the business logic layer with AES-256 encryption and multi-factor authentication.",
      icon: <ShieldCheck size={32} className="text-success" />,
      benefit: "Enterprise Security",
      tag: "Secure by Design"
    },
    {
      title: "Elastic Infrastructure",
      description: "Our logic scales horizontally. Whether you have 100 or 100,000 concurrent users, your system adapts automatically to the load.",
      icon: <Rocket size={32} className="text-primary" />,
      benefit: "Infinite Scalability",
      tag: "Cloud Native"
    },
    {
      title: "Revenue-First Engineering",
      description: "Every line of code is audited for ROI. We use modern stacks like Next.js and Go to slash server costs and boost conversion rates.",
      icon: <Banknote size={32} className="text-info" />,
      benefit: "Cost Optimization",
      tag: "High ROI"
    },
    {
      title: "Full-Lifecycle DevOps",
      description: "Flex Web Services provides 24/7 proactive monitoring. We identify and fix bottlenecks before your users even notice them.",
      icon: <LifeBuoy size={32} className="text-danger" />,
      benefit: "Reliability",
      tag: "24/7 Uptime"
    },
    {
      title: "Predictive Analytics",
      description: "We embed business intelligence into your core logic, providing real-time dashboards that turn raw data into actionable strategy.",
      icon: <BarChart3 size={32} className="text-secondary" />,
      benefit: "Smart Growth",
      tag: "Data-Driven"
    }
  ];

  return (
    <section className="py-5 bg-light overflow-hidden">
      <Container className="py-lg-5">
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h6 className="text-uppercase fw-bold text-primary ls-1 mb-3">Our Competitive Edge</h6>
            <h2 className="display-5 fw-bold mb-4">Engineering Success into your <span className="text-primary">Business Logic</span></h2>
            <p className="lead text-muted">
              We bridge the gap between complex business requirements and high-performance software engineering.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {businessValues.map((item, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm hover-up transition-all duration-300 rounded-4 overflow-hidden">
                <Card.Body className="p-4 p-xxl-5">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="icon-box bg-white shadow-sm rounded-3 p-3">
                      {item.icon}
                    </div>
                    <Badge bg="light" className="text-dark border rounded-pill px-3 py-2 fw-medium">
                      {item.tag}
                    </Badge>
                  </div>
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="text-muted mb-0 lh-lg">
                    {item.description}
                  </p>
                </Card.Body>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <div className="text-primary fw-bold small text-uppercase ls-1">
                    {item.benefit} &rarr;
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      {/* Optional: Simple inline CSS for the 'hover-up' effect */}
      <style>{`
        .hover-up { transition: all 0.3s ease-in-out; }
        .hover-up:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
        .ls-1 { letter-spacing: 1px; }
      `}</style>
    </section>
  );
};

export default Features;