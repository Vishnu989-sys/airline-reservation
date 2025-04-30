import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./Components/Auth/Register";
import LoginPage from "./Components/Auth/Login";
import AdminDashboard from "./Components/Dashboard/Admin/AdminDashboard";
import UserDashboard from "./Components/Dashboard/User/UserDashboard";
import FlightForm from "./Components/Dashboard/Admin/FlightForm";
import EditFlightForm from "./Components/Dashboard/Admin/EditFlightForm";
import AllUser from "./Components/Dashboard/Admin/AllUser";
import BookingForm from "./Components/Dashboard/User/BookingForm";
import AllBookingList from "./Components/Dashboard/User/AllBookingList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin/flights" element={<FlightForm />} />
          <Route path="/admin/flights/:id" element={<EditFlightForm />} />
          <Route path="/admin/allusers" element={<AllUser />} />
          <Route path="/user/booking" element={<BookingForm />} />
          <Route path="/user/bookinglist" element={<AllBookingList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
