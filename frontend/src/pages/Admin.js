import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css"; // Your Beautiful CSS

const Admin = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tickets");
      setTickets(response.data);
    } catch (err) {
      console.error("Error fetching tickets", err);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tickets/${id}`);
      setTickets(tickets.filter((ticket) => ticket._id !== id));
    } catch (err) {
      console.error("Error deleting ticket", err);
    }
  };

  return (
    <div className="admin-page">
      {/* 🔥 Header with Navigation Bar */}
      <header className="admin-header">
        <nav>
          <ul>
            <li><a href="/homeadmin">Home</a></li>
            <li><a href="/admin">Tickets</a></li>
            <li><a href="/users">User</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
      </header>

      <div className="admin-content">
        <h1>Admin Panel</h1>
        <h3>Manage Tickets Below:</h3>

        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.email}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.message}</td>
                <td>
                  <button onClick={() => deleteTicket(ticket._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 Footer Section */}
      <footer className="admin-footer">
        <p>&copy; 2025 Ticketing System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Admin;
