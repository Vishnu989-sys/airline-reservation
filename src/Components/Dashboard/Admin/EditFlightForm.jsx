import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditFlightForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const initialFlightData = {
    airline: "",
    source: "",
    destination: "",
    departure_time: "",
    arrival_time: "",
    price: "",
    seats_available: "",
  };

  const [flightData, setFlightData] = useState(initialFlightData);

  const [loading, setLoading] = useState(false);

  // Fetch Flight Data for Editing
  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/airline/flights/${id}`
        );
        let flight = response.data;

        // Format departure and arrival time
        const formatDateTime = (dateTimeString) => {
          if (!dateTimeString) return "";
          return new Date(dateTimeString).toISOString().slice(0, 16); // Converts to YYYY-MM-DDTHH:MM format
        };

        setFlightData({
          ...flight,
          departure_time: formatDateTime(flight.departure_time),
          arrival_time: formatDateTime(flight.arrival_time),
        });
      } catch (error) {
        console.error("Error fetching flight details:", error);
        alert("Error fetching flight details. Please try again.");
      }
    };

    fetchFlightDetails();
  }, [id]);

  // Handle Input Change
  const flightFormChange = (event) => {
    const { name, value } = event.target;
    setFlightData({ ...flightData, [name]: value });
  };

  // Handle Form Submission
  const flightFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Flight Created:", flightData);

    try {
      const response = await axios.put(
        `http://localhost:5000/airline/flights/${id}`,
        flightData
      );

      console.log(response, "response data updated");

      if (response.data) {
        alert("Flight Updated Successfully!");
        navigate("/admin-dashboard");
      } else {
        alert("Failed to Update Flight. Try again.");
      }
    } catch (error) {
      console.error("Error Updating Flight:", error);
      alert("Error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "url('/images/airlinereview.jpg') center/cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)", // Glassmorphism Effect
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2, width: "680px" }}>
        <Card
          className="p-3 shadow-lg border-0"
          style={{ borderRadius: "25px" }}
        >
          <h2 className="text-center text-primary fw-bold text-uppercase mt-1">
            ✈️ Flight Updation
          </h2>
          <Form
            onSubmit={flightFormSubmit}
            className="mt-0"
            style={{ width: "600px", height: "600px" }}
          >
            {/* Airline Name */}
            <Form.Group className="mb-2">
              <Form.Label>Airline Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Airline Name"
                name="airline"
                required
                value={flightData.airline}
                onChange={flightFormChange}
              />
            </Form.Group>

            {/* Source */}
            <Form.Group className="mb-2">
              <Form.Label>Source</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Source"
                name="source"
                required
                value={flightData.source}
                onChange={flightFormChange}
              />
            </Form.Group>

            {/* Destination */}
            <Form.Group className="mb-2">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Destination"
                name="destination"
                required
                value={flightData.destination}
                onChange={flightFormChange}
              />
            </Form.Group>

            {/* Departure Time */}
            <Form.Group className="mb-2">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="departure_time"
                required
                value={flightData.departure_time}
                onChange={flightFormChange}
              />
            </Form.Group>

            {/* Arrival Time */}
            <Form.Group className="mb-2">
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="arrival_time"
                required
                value={flightData.arrival_time}
                onChange={flightFormChange}
              />
            </Form.Group>

            {/* Price */}
            <Form.Group className="mb-2">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                required
                placeholder="Enter Price in ₹"
                value={flightData.price}
                onChange={flightFormChange}
              />
            </Form.Group>

            {/* Seats Available */}
            <Form.Group className="mb-4">
              <Form.Label>Seats Available</Form.Label>
              <Form.Control
                type="number"
                name="seats_available"
                required
                placeholder="Enter Available Seats"
                value={flightData.seats_available}
                onChange={flightFormChange}
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="px-4 py-2 fw-bold shadow-sm"
                style={{ borderRadius: "8px", transition: "0.3s" }}
                disabled={loading}
              >
                {loading ? "Updating..." : "✈️ Update"}
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default EditFlightForm;
