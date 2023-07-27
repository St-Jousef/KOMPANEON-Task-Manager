import axios from "axios";

const API_BASE_URL =
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-nuuxy/endpoint/data/v1"; // Replace with your backend API URL

// Task creation API call
export const createTask = async (taskData) => {
  try {
    const config = getAuthConfig();
    const response = await axios.post(
      `${API_BASE_URL}/tasks`,
      taskData,
      config
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch all tasks API call
export const fetchTasks = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(`${API_BASE_URL}/tasks`, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update a task API call
export const updateTask = async (taskId, taskData) => {
  try {
    const config = getAuthConfig();
    const response = await axios.put(
      `${API_BASE_URL}/tasks/${taskId}`,
      taskData,
      config
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete a task API call
export const deleteTask = async (taskId) => {
  try {
    const config = getAuthConfig();
    const response = await axios.delete(
      `${API_BASE_URL}/tasks/${taskId}`,
      config
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User registration API call
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User login API call
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Helper function to set the Authorization header with the JWT token (if available)
const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }
  return {};
};

// ...
