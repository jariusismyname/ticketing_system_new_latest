import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TicketsAdmin.css";

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedStatus, setEditedStatus] = useState("");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/ticketsadmin");
      setTickets(response.data);
    } catch (err) {
      console.error("Error fetching tickets", err);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/ticketsadmin/${id}`);
      setTickets(tickets.filter((ticket) => ticket._id !== id));
    } catch (err) {
      console.error("Error deleting ticket", err);
    }
  };

  const startEdit = (ticket) => {
    setEditMode(ticket._id);
    setEditedStatus(ticket.status);
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/ticketsadmin/${id}`, {
        status: editedStatus,
      });
      fetchTickets();
      setEditMode(null);
    } catch (err) {
      console.error("Error updating ticket", err);
    }
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        <nav>
          <ul>
            <li><a href="/homeadmin">Home</a></li>
            <li><a href="/ticketsadmin">Tickets</a></li>
            <li><a href="/users">User</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
      </header>

      <div className="admin-content">
        <h1>Tickets Admin</h1>
        <h3>Manage Tickets Below:</h3>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.priority}</td>
                <td>
                  {editMode === ticket._id ? (
                    <select
                      value={editedStatus}
                      onChange={(e) => setEditedStatus(e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Closed">Closed</option>
                    </select>
                  ) : (
                    ticket.status
                  )}
                </td>
                <td>
                  {editMode === ticket._id ? (
                    <>
                      <button className="save-btn" onClick={() => saveEdit(ticket._id)}>Save</button><br/>
                      <br></br>
                      <button className="cancel-btn" onClick={() => setEditMode(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="edit-btn" onClick={() => startEdit(ticket)}>Edit</button><br/>
                      <br></br>
                      <button className="delete-btn" onClick={() => deleteTicket(ticket._id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="admin-footer">
        <p>&copy; 2025 Ticketing System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Admin;
