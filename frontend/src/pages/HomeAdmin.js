import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAdmin.css"; // For Beautiful CSS

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
    <div className="homeadmin-container">
      {/* 🔥 Navigation Header */}
      <header className="homeadmin-header">
        <nav>
          <ul>
            <li><a href="/homeadmin" className="active">Home</a></li>
            <li><a href="/ticketsadmin">Tickets</a></li>
            <li><a href="/users">Users</a></li>
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </ul>
        </nav>
      </header>

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
  );
};

export default HomeAdmin;
