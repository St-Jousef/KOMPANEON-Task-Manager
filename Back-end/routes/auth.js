const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // You'll need to install bcrypt using npm or yarn
const User = require("../models/user");
const { authenticateToken } = require("../config/config"); // You'll need to install jwt using npm or yarn

// Route for user registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username or email already exists in the database
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "Username or email already exists" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: "User registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // At this point, the user is authenticated.
    // You can generate a JWT token here and include it in the response for authentication purposes.

    res.json({
      message: "Login successful",
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Protected route that requires authentication
router.get("/protected", authenticateToken, (req, res) => {
  // The request has been authenticated, and the user object from the token is available in req.user
  res.json({ message: "You have accessed a protected route.", user: req.user });
});

module.exports = router;
