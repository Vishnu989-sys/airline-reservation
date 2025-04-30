import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Table, Button, Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const [flights, setFlights] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Fetch Flights From Backend

  const fetchAllFlights = async () => {
    try {
      const response = await axios.get("http://localhost:5000/airline/flights");
      setFlights(response.data);
    } catch (e) {
      console.error("Error Fetching the Flights : ", e);
    }
  };

  useEffect(() => {
    fetchAllFlights();
  }, []);

  // Delete the Flights Data

  const handleDelete = async (flightId) => {
    if (!window.confirm("Are you sure you want to delete this flight?")) return;

    try {
      const response = await axios.delete(
        `http://localhost:5000/airline/flights/${flightId}`
      );
      alert(response.data.message);

      // Update the flights state after successful deletion
      setFlights((prevFlights) =>
        prevFlights.filter((flight) => flight.id !== flightId)
      );
    } catch (error) {
      console.error("Error deleting flight:", error);
      alert("Failed to delete flight. Please try again.");
    }
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

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navbar Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link
                  className="nav-link-custom"
                  as={Link}
                  to="/admin/flights"
                >
                  Flights
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="nav-link-custom"
                  as={Link}
                  to="/admin/allusers"
                >
                  Users
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link-custom" onClick={handleLogout}>
                  Logout
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

      {/* Background Images */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image with Blur */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/airlinereview.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)", // Apply blur effect
            zIndex: -1,
          }}
        ></div>

        {/* Content Container */}
        <Container
          style={{ position: "relative", zIndex: 1, marginTop: "50px" }}
        >
          {/* Flights Table Card */}
          <Card className="shadow-lg p-4">
            {/* Title and Add Button */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-center text-primary fw-bold mb-0">
                ✈️ FLIGHTS CREATION
              </h2>
              <Button
                as={Link}
                to="/admin/flights"
                className="btn btn-primary fw-bold px-4 py-2 shadow-sm text-uppercase"
              >
                ➕ Add Flight
              </Button>
            </div>

            {/* Flights Table */}
            <div className="table-responsive">
              <Table
                striped
                bordered
                hover
                className="text-center align-middle"
              >
                <thead className="table-dark">
                  <tr>
                    <th>SNO</th>
                    <th>Airline Names</th>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Price (₹)</th>
                    <th>Seats Available</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through the flights array and display each flight */}
                  {flights.map((flight, index) => (
                    <tr key={flight.id}>
                      <td>{index + 1}</td>
                      <td>{flight.airline}</td>
                      <td>{flight.source}</td>
                      <td>{flight.destination}</td>
                      <td>
                        {new Date(flight.departure_time).toLocaleString()}
                      </td>
                      <td>{new Date(flight.arrival_time).toLocaleString()}</td>
                      <td>₹{flight.price}</td>
                      <td>{flight.seats_available}</td>
                      <td>
                        <Link
                          to={`/admin/flights/${flight.id}`} // Dynamic ID
                          className="btn btn-primary text-white text-center"
                          style={{
                            borderRadius: "7px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            textDecoration: "none",
                          }}
                        >
                          Edit
                        </Link>{" "}
                        <button
                          className="btn btn-danger text-white text-center"
                          style={{
                            borderRadius: "7px",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={() => handleDelete(flight.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default AdminNavbar;
