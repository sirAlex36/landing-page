import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Layers, 
  Cpu, 
  Globe 
} from 'lucide-react'; 

const Features = () => {
  const fullStackExpertise = [
    {
      title: "Full-Stack Integration",
      description: "We bridge the gap between stunning React/Vite frontends and robust Node.js/Go backends. Every component is designed to communicate via high-speed, type-safe APIs.",
      icon: <Layers size={32} className="text-primary" />,
      benefit: "Seamless Connectivity",
      tag: "End-to-End"
    },
    {
      title: "Database Architecture",
      description: "Data is the heart of your business. We design optimized SQL/NoSQL schemas that ensure data integrity, lightning-fast queries, and effortless scaling as you grow.",
      icon: <Cpu size={32} className="text-info" />,
      benefit: "Data Integrity",
      tag: "Robust Storage"
    },
    {
      title: "API-First Development",
      description: "We build secure, documented REST and GraphQL APIs that allow your web app to interact with mobile apps and third-party services like M-Pesa with ease.",
      icon: <Globe size={32} className="text-success" />,
      benefit: "Interoperability",
      tag: "Scalable APIs"
    },
    {
      title: "Secure Business Logic",
      description: "Security isn't an afterthought. We implement JWT authentication, OAuth2, and Zero-Trust principles to protect your sensitive user data and financial transactions.",
      icon: <ShieldCheck size={32} className="text-danger" />,
      benefit: "Maximum Protection",
      tag: "Secure Coding"
    },
    {
      title: "Performance Optimization",
      description: "Using modern build tools like Vite and Rolldown, we achieve near-instant load times and high Core Web Vitals scores to boost your SEO and user retention.",
      icon: <Zap size={32} className="text-warning" />,
      benefit: "Blazing Speed",
      tag: "Vite Optimized"
    },
    {
      title: "Real-Time Systems",
      description: "Leverage WebSockets and Server-Sent Events (SSE) for real-time notifications, live dashboards, and collaborative features that keep users engaged.",
      icon: <BarChart3 size={32} className="text-secondary" />,
      benefit: "Live Experience",
      tag: "Instant Sync"
    }
  ];

  return (
    <section className="py-5 bg-light overflow-hidden" id="features">
      <Container className="py-lg-5">
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h6 className="text-uppercase fw-bold text-primary ls-1 mb-3">Technical Capabilities</h6>
            <h2 className="display-5 fw-bold mb-4">
              Comprehensive <span className="text-primary">Full-Stack</span> Engineering
            </h2>
            <p className="lead text-muted">
              From pixel-perfect UI components to high-concurrency server architectures, we deliver 
              complete digital solutions built for the modern web.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {fullStackExpertise.map((item, index) => (
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
      
      <style>{`
        .hover-up { transition: all 0.3s ease-in-out; }
        .hover-up:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
        .ls-1 { letter-spacing: 1px; }
        .icon-box { display: flex; align-items: center; justify-content: center; width: fit-content; }
      `}</style>
    </section>
  );
};

export default Features;