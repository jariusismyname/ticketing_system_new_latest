import React from "react";
import { FaHome, FaTicketAlt, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => navigate("/homeadmin")}>
          <FaHome /> Home
        </li>
        <li  onClick={() => navigate("/ticketsadmin")}>
          <FaTicketAlt /> Tickets
        </li>
        <li onClick={() => navigate("/users")}>
          <FaUsers /> Users
        </li>
        <li onClick={() => navigate("/")}>
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
