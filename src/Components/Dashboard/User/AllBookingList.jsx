import React, { useState, useEffect } from "react";
import { Container, Table, Card } from "react-bootstrap";
import axios from "axios";

const AllBookingList = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch all bookings from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/airline/allbookings");
        setBookings(response.data); // Store the fetched data
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      {/* Background Images */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))",
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
            filter: "blur(8px)", // Apply blur effect
            zIndex: -1,
          }}
        ></div>

        {/* Booking Data */}
        <Container style={{ position: "relative", zIndex: 1 }}>
          {/* Flights Table Card */}
          <Card
            className="shadow-lg p-4"
            style={{
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Title */}
            <div
              className="text-center mb-4"
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#007bff",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Booking Data
            </div>

            {/* Flights Table */}
            <div className="table-responsive">
              <Table striped bordered hover className="text-center align-middle">
                <thead
                  className="table-primary"
                  style={{ background: "#007bff", color: "white", fontSize: "18px" }}
                >
                  <tr>
                    <th>SNO</th>
                    <th>USER NAME</th>
                    <th>AIRLINE NAME</th>
                    <th>SOURCE</th>
                    <th>DESTINATION</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "16px", fontWeight: "500" }}>
                  {bookings.length > 0 ? (
                    bookings.map((booking, index) => (
                      <tr key={booking.id}>
                        <td>{index + 1}</td>
                        <td>{booking.user_name}</td>
                        <td>{booking.airline}</td>
                        <td>{booking.source}</td>
                        <td>{booking.destination}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-danger fw-bold">
                        No bookings available
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default AllBookingList;
