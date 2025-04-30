import React, { useEffect } from "react";
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token || userRole !== "user") {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <UserNavbar />
    </>
  );
};

export default UserDashboard;
