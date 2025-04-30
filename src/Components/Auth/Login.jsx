import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Col } from "react-bootstrap";

import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  let initialState = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);

  // Form Change

  const loginFormChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Form Submit

  const loginFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Form Submitted: ", loginData);
    try {
      const response = await axios.post(
        "http://localhost:5000/airline/login",
        loginData
      );

      console.log(response.data, "login response data");

      if (response.data) {
        const { token } = response.data;

        const { role } = response.data.user;

        const { name } = response.data.user;

        const { id } = response.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        localStorage.setItem("user_id", id);

        alert("Login Successful!");

        if (role === "admin") {
          navigate("/admin-dashboard"); // Redirect Admin
        } else {
          navigate("/user-dashboard"); // Redirect User
        }
      } else {
        alert("Invalid Email or Password!");
      }
    } catch (e) {
      console.error("Error Submiting the Login Form : ", e);
      alert("Invalid Email or Password!");
    }
  };

  return (
    <>
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
              <Card.Title className="text-center mb-4">Login</Card.Title>

              <Form onSubmit={loginFormSubmit}>
                {/* Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                    value={loginData.email}
                    onChange={loginFormChange}
                  />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                    value={loginData.password}
                    onChange={loginFormChange}
                  />
                </Form.Group>

                {/* Register Button */}
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
