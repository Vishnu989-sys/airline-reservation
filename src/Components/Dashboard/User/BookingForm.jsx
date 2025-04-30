import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [flightId, setFlightId] = useState("");
  const [error, setError] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const navigate = useNavigate();

  // Handle booking submission
  const handleBooking = async (e) => {
    e.preventDefault();

    setError(""); // Clear previous errors

    if (!flightId) {
      setError("Please enter a Flight ID.");
      return;
    }

    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

    if (!token) {
      setError("Authentication token not found. Please log in again.");
      return;
    }

    const bookingData = {
      user_id: userId,
      flight_id: flightId, // Using the entered flightId
      booking_status: "pending",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/airline/bookings",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );

      console.log(response, "booking response");
      setBookingStatus("Booked Successfully");
      // Redirect to user dashboard after successful booking
      setTimeout(() => navigate("/user-dashboard"), 2000);
    } catch (err) {
      setError("Booking failed. Please try again.");
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

      {/* Booking Form */}
      <Container style={{ position: "relative", zIndex: 2, width: "580px" }}>
        <Card
          className="p-3 shadow-lg border-0"
          style={{ borderRadius: "25px" }}
        >
          <h2 className="text-center text-primary fw-bold text-uppercase mt-1">
            ✈️ Flight Booking
          </h2>

          <Form
            className="mt-0"
            style={{ width: "500px", height: "200px" }}
            onSubmit={handleBooking}
          >
            {/* Flight ID Input */}
            <Form.Group className="mb-2">
              <Form.Label style={{ marginLeft: "10px" }}>Flight ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Flight ID"
                value={flightId}
                onChange={(e) => setFlightId(e.target.value)}
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center" style={{ padding: "25px" }}>
              <Button
                variant="primary"
                type="submit"
                className="px-4 py-2 fw-bold shadow-sm"
                style={{
                  borderRadius: "8px",
                  transition: "0.3s",
                }}
              >
                ✈️ Book Flight
              </Button>
            </div>
          </Form>
          {/* Booking Confirmation Message */}
          {error && <Alert variant="danger">{error}</Alert>}
            {bookingStatus && (
              <Alert variant="success" className="text-center">
                {bookingStatus}
              </Alert>
            )}
        </Card>
      </Container>
    </div>
  );
};

export default BookingForm;
