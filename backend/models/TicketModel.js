const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, default: "Low" },
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", TicketSchema);
