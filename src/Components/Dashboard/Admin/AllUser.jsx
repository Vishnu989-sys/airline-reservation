import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Table, Button, Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const AllUser = () => {

  const [allUsers, setAllUsers] = useState([]);

  // Fetch all bookings from the backend
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/airline/users");
        setAllUsers(response.data); // Store the fetched data
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchAllUsers();
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

        {/* User Name */}

        <Container
          style={{ position: "relative", zIndex: 1}}
        >
          {/* Flights Table Card */}
          <Card className="shadow-lg p-4"
            style={{
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}>
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
              USERS DATA
            </div>

            {/* Flights Table */}
            <div className="table-responsive">
              <Table
                striped
                bordered
                hover
                className="text-center align-middle"
              >
                <thead className="table-primary"
                  style={{ background: "#007bff", color: "white", fontSize: "18px" }}>
                  <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "16px", fontWeight: "500" }}>
                  {allUsers.length > 0 ? (
                    allUsers.map((users, index) => (
                      <tr key={users.id}>
                        <td>{index + 1}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.phonenumber}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-danger fw-bold">
                        No Users available
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

export default AllUser;
