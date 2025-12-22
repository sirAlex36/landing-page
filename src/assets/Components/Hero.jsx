import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Stack, Badge } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden bg-white py-5">
      {/* Dynamic Background Elements */}
      <div 
        className="position-absolute top-0 end-0 translate-middle-y opacity-10 bg-primary rounded-circle" 
        style={{ width: '800px', height: '800px', filter: 'blur(120px)', zIndex: 0, marginTop: '-200px' }}
      ></div>
      <div 
        className="position-absolute bottom-0 start-0 opacity-5 bg-info rounded-circle" 
        style={{ width: '400px', height: '400px', filter: 'blur(80px)', zIndex: 0 }}
      ></div>

      <Container className="position-relative py-lg-5" style={{ zIndex: 1 }}>
        <Row className="align-items-center min-vh-75 g-5">
          {/* Text Content */}
          <Col lg={7} className="text-center text-lg-start">
            <Badge pill bg="primary" className="mb-4 px-3 py-2 fw-bold shadow-sm" style={{ letterSpacing: '1px' }}>
              FLEX SOLUTIONS
            </Badge>
            
            <h1 className="display-2 fw-bold mb-4 text-dark" style={{ letterSpacing: '-2px', lineHeight: '1.1' }}>
              Turning Complex Ideas Into <br />
              <span className="text-primary">Digital Excellence.</span>
            </h1>
            
            <p className="lead text-muted mb-5 fs-4 fw-normal pe-lg-5">
              <span className="fw-bold text-dark">Flex Solutions</span> specializes in high-performance engineering. We bridge the gap between technical complexity and business growth through custom software architecture.
            </p>

            {/* Feature Grid with refined icons */}
            <Row className="mb-5 g-4 justify-content-center justify-content-lg-start">
              {[
                { title: "Architecture", desc: "Solid Foundations", icon: "🏗️" },
                { title: "Scalability", desc: "Growth Ready", icon: "🚀" },
                { title: "Security", desc: "Bank-Grade Tech", icon: "🛡️" },
                { title: "Strategy", desc: "Business First", icon: "🎯" }
              ].map((item, idx) => (
                <Col xs={6} md={3} key={idx}>
                  <div className="h-100 p-3 bg-light rounded-3 border-bottom border-primary border-3 shadow-sm transition-up">
                    <div className="fs-3 mb-1">{item.icon}</div>
                    <div className="fw-bold text-dark small">{item.title}</div>
                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>{item.desc}</div>
                  </div>
                </Col>
              ))}
            </Row>

            <Stack direction="horizontal" gap={3} className="justify-content-center justify-content-lg-start">
              <Button as={Link} to="/Contact" variant="primary" size="lg" className="px-5 py-3 shadow fw-bold border-0 rounded-pill">
                Start Your Project
              </Button>
              <Button as={Link} to="/features" variant="outline-dark" size="lg" className="px-5 py-3 fw-bold rounded-pill">
                Explore Services
              </Button>
            </Stack>
          </Col>

          {/* Visual Content with Glassmorphism */}
          <Col lg={5} className="mt-5 mt-lg-0">
            <div className="position-relative p-4">
              {/* Floating Stat Card */}
              <div className="position-absolute top-0 end-0 bg-white p-3 rounded-4 shadow-lg border-start border-primary border-4 z-2 d-none d-md-block" style={{ marginTop: '-20px' }}>
                <h6 className="mb-0 fw-bold">99.9% Uptime</h6>
                <small className="text-muted">Enterprise Reliability</small>
              </div>

              <div className="bg-white p-2 shadow-2xl rounded-5 overflow-hidden border border-light">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10169/10169724.png"
                  alt="Business Software Solutions"
                  className="img-fluid rounded-4 transition-zoom"
                  style={{ backgroundColor: '#f8f9fa' }}
                />
              </div>

              {/* Decorative floating icon */}
              <div className="position-absolute bottom-0 start-0 bg-primary p-3 rounded-circle shadow-lg z-2 mb-n3 ms-n3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6z"/>
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;