const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// GET All Tickets
router.get("/tickets", async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

// DELETE Ticket
router.delete("/tickets/:id", async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: "Ticket Deleted" });
});

module.exports = router;
