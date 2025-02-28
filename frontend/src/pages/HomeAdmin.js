import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAdmin.css"; // For Beautiful CSS
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
const HomeAdmin = () => {
  const navigate = useNavigate();

  const goToTickets = () => {
    navigate("/ticketsadmin");
  };

  const goToUsers = () => {
    navigate("/users");
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="admin-layout">
    <Sidebar />
    <div className="admin-content">
      <TopNavbar />
    <div className="homeadmin-container">
      {/* 🔥 Navigation Header */}
    

      {/* Welcome Message */}
      <div className="welcome-section">
        <h1>Welcome, Admin!</h1>
        <p>What would you like to manage today?</p>
        <div className="admin-buttons">
          <button onClick={goToTickets} className="btn-tickets">Manage Tickets</button>
          <button onClick={goToUsers} className="btn-users">Manage Users</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="admin-footer">
        <p>&copy; 2025 Ticketing System | Admin Panel</p>
      </footer>
    </div>
    </div>
    </div>
  );
};

export default HomeAdmin;
