import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
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
    <div className="admin-layout">
          <Sidebar />
          <div className="admin-content">
            <TopNavbar />
    <div className="users-page">
      {/* 🔥 Header Navigation Bar */}
     

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
    </div></div>
  );
};

export default Users;
