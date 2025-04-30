import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Col } from "react-bootstrap";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  let initialState = {
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    role: "User",
  };

  const [registerData, setRegisterData] = useState(initialState);

  // Form Change

  const registerFormChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  // Form Submit

  const registerFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Register Form Submitted: ", registerData);

    try {
      const response = await axios.post(
        "http://localhost:5000/airline/register",
        registerData
      );

      if (response.data) {
        alert("Registration Successful! Redirecting to Login...");
        navigate("/login");
      } else {
        alert("Registration failed. Try again.");
      }
    } catch (e) {
      console.error("Error Submiting the Register Form : ", e);
      alert("Error! Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/airlinereview.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="d-flex justify-content-end align-items-center">
        <Card
          className="p-4 shadow-lg"
          style={{
            width: "400px",
            backdropFilter: "blur(5px)",
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "15px",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center mb-4 ">Register</Card.Title>

            <Form onSubmit={registerFormSubmit}>
              {/* Name */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                  value={registerData.name}
                  onChange={registerFormChange}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  value={registerData.email}
                  onChange={registerFormChange}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  value={registerData.password}
                  onChange={registerFormChange}
                />
              </Form.Group>

              {/* Phone Number */}
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phonenumber"
                  placeholder="Enter Phone Number"
                  required
                  value={registerData.phonenumber}
                  onChange={registerFormChange}
                />
              </Form.Group>

              {/* Role */}
              <Form.Group as={Col} className="mb-3" controlId="formGridState">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  defaultValue="User"
                  name="role"
                  value={registerData.role}
                  onChange={registerFormChange}
                >
                  <option>User</option>
                  <option>Admin</option>
                </Form.Select>
              </Form.Group>

              {/* Register Button */}
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RegisterPage;
