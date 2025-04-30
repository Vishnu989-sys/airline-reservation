import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token || userRole !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <AdminNavbar />
    </>
  );
};

export default AdminDashboard;
