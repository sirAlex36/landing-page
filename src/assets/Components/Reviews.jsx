import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechLaunch Systems",
      text: "Flex Web Services transformed our legacy platform into a high-speed SaaS machine. Their full-stack expertise saved us months of development time.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager, Global Retail",
      text: "The API integrations provided by the team are seamless. Our inventory now syncs perfectly across three different platforms. Highly recommended.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
      name: "David Mwangi",
      role: "Founder, FinHub Africa",
      text: "Reliable, secure, and professional. They handled our complex database architecture with ease. Truly a top-tier engineering partner.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <section className="py-5 bg-white" id="reviews">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">Testimonials</h6>
          <h2 className="display-5 fw-bold text-dark">Trusted by Industry Leaders</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            See how Flex Web Services helps businesses scale with robust engineering.
          </p>
        </div>

        <Row>
          {testimonials.map((review, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm p-3">
                <Card.Body>
                  <div className="text-warning mb-3">
                    {"★".repeat(review.rating)}
                  </div>
                  <Card.Text className="fst-italic text-secondary mb-4">
                    "{review.text}"
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="rounded-circle me-3" 
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-bold mb-0">{review.name}</h6>
                      <small className="text-muted">{review.role}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;