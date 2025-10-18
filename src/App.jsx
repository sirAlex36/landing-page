import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Hero from './assets/Components/Hero';
import Services from './assets/Components/Services';
import Footer from './assets/Components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#">MyLanding</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main className="flex-grow-1">
        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;

