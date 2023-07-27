const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Route for creating a new task
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // Access the user ID from the authenticated user object

    const newTask = new Task({
      title,
      description,
      userId, // Store the associated user ID with the task
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: "Task creation failed" });
  }
});

// Route for fetching tasks for the authenticated user
router.get("/", async (req, res) => {
  try {
    const userId = req.user.id; // Access the user ID from the authenticated user object

    const tasks = await Task.find({ userId });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

module.exports = router;
