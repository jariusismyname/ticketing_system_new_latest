import React, { useState } from "react";
import axios from "axios";
import "./Tickets.css"; // For the design
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Ticket = () => {
  const [ticketData, setTicketData] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ticketData.title === "" || ticketData.description === "") {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/ticket", ticketData);
      toast.success(response.data.message);
      setTicketData({
        title: "",
        description: "",
        priority: "Low",
      });
      navigate("/home"); // Redirect after submit
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit ticket");
    }
  };

  return (
    
    <div className="ticket-container">
      <div className="ticket-card">
        <h2>Submit Ticket</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Ticket Title"
            value={ticketData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Describe your issue"
            value={ticketData.description}
            onChange={handleChange}
            required
          />

          <select name="priority" value={ticketData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>

          <button type="submit">Submit Ticket</button>
        </form>

        <p>
          Need help?{" "}
          <span className="back-home" onClick={() => navigate("/home")}>
            Go Back to Home
          </span>
        </p>
      </div>
    </div>
  );
};

export default Ticket;
