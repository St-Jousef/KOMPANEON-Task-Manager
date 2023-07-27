const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // You can use cors to handle Cross-Origin Resource Sharing

const app = express();
const port = 5000; // Set the desired port number

// Import routes
const authRoutes = require("./routes/auth");
// Add other route imports here if you have additional routes.

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://joe2icez:OZH4VMVIpBVUP87t@cluster0.bnjladj.mongodb.net/Task-Management-System",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the application if unable to connect to the database
  });

// Routes
app.use("/auth", authRoutes); // Register the auth routes at /auth. For example, /auth/register and /auth/login.

// Add other routes here if you have additional routes.

// Start the server
app.listen(port, () => {
  console.log(`Server is running on remote server ${port}`);
});
