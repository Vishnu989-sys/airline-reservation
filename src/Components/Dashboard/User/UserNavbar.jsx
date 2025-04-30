import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  Row,
  Col,
  Figure,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Function to fetch flight data
    const fetchFlights = () => {
      // Get user data from localStorage
      const userData = localStorage.getItem("name");
      if (userData) {
        setUserName(userData);
      }

      axios
        .get("http://localhost:5000/airline/flights")
        .then((response) => {
          setFlights(response.data); // Store flights in state
        })
        .catch((error) => {
          console.error("Error fetching flights:", error);
        });
    };

    // Fetch flights immediately when component mounts
    fetchFlights();

    // Set up polling every 5 seconds
    const interval = setInterval(fetchFlights, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
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

          {/* Navbar Links */}
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link className="nav-link-custom" as={Link} to="/user/bookinglist">
                  BookingList
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link-custom" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Nav.Item>
              {userName && (
                <Nav.Item className="ms-3 p-2">
                  <span className="fw-bold text-primary">👤 {userName}</span>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Display Flights */}
      <Container className="mt-5">
        <h2
          className="text-center mb-4"
          style={{ marginTop: "120px", fontWeight: "bold" }}
        >
          Available Flights
        </h2>
        <Row>
          {flights.length > 0 ? (
            flights.map((flight) => (
              <Col md={4} key={flight.id} className="mb-4">
                <Card className="flight-card shadow-lg border-0 rounded-lg overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={flight.image || "./images/flightimage.jpg"}
                    className="card-img-top"
                  />
                  <Card.Body className="p-4">
                    <Card.Title className="text-uppercase font-weight-bold mb-3 text-center">
                      <strong>Airlines Name : </strong>
                      {flight.airline}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="text-muted mb-3">
                        <strong>Flight Id:</strong> {flight.id}
                      </Card.Text>
                      <Card.Text className="text-muted mb-3">
                        <strong>Price:</strong> ${flight.price}
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Card.Text>
                        <strong>From:</strong> {flight.source}
                      </Card.Text>
                      <Card.Text>
                        <strong>To:</strong> {flight.destination}
                      </Card.Text>
                    </div>
                    <Button
                      variant="primary"
                      className="w-100 mt-3"
                      as={Link}
                      to={{
                        pathname: "/user/booking",
                        state: { flightId: flight.id },
                      }}
                    >
                      Book Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No flights available</p>
          )}
        </Row>
      </Container>

      {/* Custom CSS for Styling */}
      <style>
        {`
          .flight-card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border-radius: 15px;
          }
          .flight-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            cursor:pointer;
          }
          .card-img-top {
            height: 200px;
            object-fit: cover;
          }
          .nav-link-custom {
            font-size: 1.1rem;
            font-weight: 500;
            color: #555;
            transition: all 0.3s ease-in-out;
          }
          .nav-link-custom:hover {
            color: #007bff;
            transform: translateY(-2px);
            cursor:pointer;
          }
          h2 {
            font-size: 2.5rem;
            font-weight: 600;
            color: #333;
          }
        `}
      </style>
    </>
  );
};

export default UserNavbar;
