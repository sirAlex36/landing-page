import React, { useState, useRef } from "react";
import { Container, Form, Button, Alert, Card, Spinner } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual IDs from EmailJS Dashboard
    const SERVICE_ID = "service_4wtm873";
    const TEMPLATE_ID = "template_w9bfrak";
    const PUBLIC_KEY = "0mEwJzI1Z-WdZZdy3";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setStatus({ 
          type: "success", 
          msg: "Success! Flex Web Services has received your request. Check your inbox for a confirmation shortly." 
        });
        e.target.reset(); // Resets the form fields
      })
      .catch((error) => {
        setStatus({ 
          type: "danger", 
          msg: "Something went wrong. Please try emailing us directly at info@flexsolutions.com" 
        });
        console.error("Email Error:", error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container className="my-5 py-5">
      <Card className="shadow-lg border-0 mx-auto" style={{ maxWidth: "700px" }}>
        <Card.Body className="p-4 p-md-5">
          <div className="text-center mb-4">
            <h1 className="fw-bold text-primary">Start Your Project</h1>
            <p className="text-muted">Fill out the form below and we will be in touch within 24 hours.</p>
          </div>

          {status.msg && (
            <Alert variant={status.type} className="text-center">
              {status.msg}
            </Alert>
          )}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Full Name / Company</Form.Label>
              <Form.Control
                type="text"
                name="user_name" // This must match your EmailJS Template variable {{user_name}}
                placeholder="John Doe / TechCorp"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="user_email" // Match {{user_email}}
                placeholder="name@company.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Project Interest</Form.Label>
              <Form.Select name="project_type" required>
                <option>Full-Stack Build</option>
                <option>API Integration</option>
                <option>Cloud Migration</option>
                <option>UI/UX Redesign</option>
                <option>Custom Software Consultancy</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Project Details</Form.Label>
              <Form.Control
                as="textarea"
                name="message" // Match {{message}}
                rows={4}
                placeholder="Describe your goals and timeline..."
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 py-3 fw-bold fs-5" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                  Sending...
                </>
              ) : "Launch My Project"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

