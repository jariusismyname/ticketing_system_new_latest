require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express(); // 🔥 This should be the FIRST LINE AFTER IMPORTS
app.use(express.json());
app.use(cors());
const express = require("express");
const router = express.Router();

let tickets = [];

router.post("/ticket", (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const ticket = {
    id: tickets.length + 1,
    title,
    description,
    priority,
    status: "Pending",
    date: new Date(),
  };

  tickets.push(ticket);

  res.json({ message: "Ticket Submitted Successfully!" });
});

module.exports = router;

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

const User = mongoose.model("college_ticketing", UserSchema);

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

app.listen(5000, () => console.log("🔥 Server running on port 5000"));
