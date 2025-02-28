require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express(); // 🔥 This should be the FIRST LINE AFTER IMPORTS
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/college_ticketing_system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("college_ticketings", UserSchema);

// Register Endpoint
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
});

// 🔥 LOGIN ENDPOINT (Fix here)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ status: "error", message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ status: "error", message: "Invalid Password" });
    }

    res.json({ status: "success", message: "Login Successful" });
  } catch (err) {
    res.json({ status: "error", message: "Server Error" });
  }
});
const Ticket = require("./models/TicketModel");

// POST Ticket Route
app.post("/ticket", async (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newTicket = new Ticket({ title, description, priority });
    await newTicket.save();
    res.status(201).json({ message: "Ticket Submitted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

app.listen(5000, () => console.log("🔥 Server running on port 5000"));

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


app.get("/ticketsadmin", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.delete("/ticketsadmin/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});
