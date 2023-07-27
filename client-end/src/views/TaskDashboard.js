import React from "react";
import TaskList from "../components/Task/TaskList";

const TaskDashboard = () => {
  // Dummy data for demonstration, you should make an API call to fetch the user's tasks
  const tasks = [
    { _id: 1, title: "Task 1", description: "This is task 1" },
    { _id: 2, title: "Task 2", description: "This is task 2" },
    { _id: 3, title: "Task 3", description: "This is task 3" },
  ];

  return (
    <div>
      <h1>Task Dashboard</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskDashboard;
