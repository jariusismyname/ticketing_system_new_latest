import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };
  

  return (
    <div className="users-page">
      {/* 🔥 Header Navigation Bar */}
      <header className="users-header">
        <nav>
          <ul>            
            <li><a href="/homeadmin">Home</a></li>
            <li><a href="/ticketsadmin">Tickets</a></li>
            <li><a href="/users" className="active">Users</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
      </header>

      <div className="users-content">
        <h1>Users Management</h1>
        <h3>Registered Users List:</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => deleteUser(user._id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 Footer Section */}
      <footer className="users-footer">
        <p>&copy; 2025 Ticketing System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Users;
