require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const challengeRoutes = require("./routes/challengeRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Routes
app.use("/challenges", challengeRoutes);
app.use("/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});