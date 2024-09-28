import axios from "axios";

// Create a base instance of axios with default configuration
const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

// Function to search for a GitHub user
export const searchUser = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
