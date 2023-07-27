// src/views/TaskManager.js
import React, { useState, useEffect } from "react";
import { createTask, fetchTasks } from "../api/api";
import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const tasks = await fetchTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleTaskSubmit = async (taskData) => {
    try {
      // Make the API call to create the task
      const newTask = await createTask(taskData);

      // Update the tasks state with the new task
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Task creation error:", error);
      // Handle task creation error
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskManager;
