import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import ContactPage from './assets/Components/Contact';
import Hero from './assets/Components/Hero';
import Services from './assets/Components/Services';
import Footer from './assets/Components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Pricing from './assets/Components/Pricing';
import Reviews from './assets/Components/Reviews';
import EnterpriseSolutions from './assets/Components/EnterpriseSolutions';
import Features from './assets/Components/Features';
import './App.css'; 

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">Flex Solutions</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
                <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                {/* Unified styling using Nav.Link with 'as={Link}' */}
                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main className="flex-grow-1">
        <Routes>
          {/* Define what displays at the root path */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <EnterpriseSolutions />
              <Reviews />
            </>
          } />
          
          {/* Define what displays at the /contact path */}
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>

      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
