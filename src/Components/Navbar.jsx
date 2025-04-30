import { Navbar, Nav, Container } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Figure className="mb-0 me-2">
            <Figure.Image
              width={50}
              height={50}
              alt="Airline Logo"
              src="/images/arlogo.png"
            />
          </Figure>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/register" className="nav-link-custom">
                Register
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login" className="nav-link-custom">
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS for Hover Effects */}
      <style>
        {`
          .nav-link-custom {
            font-size: 1rem;
            font-weight: 500;
            color: #333;
            transition: all 0.3s ease-in-out;
          }
          .nav-link-custom:hover {
            color: #007bff;
            transform: translateY(-2px);
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavbarPage;
