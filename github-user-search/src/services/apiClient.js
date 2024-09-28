import axios from "axios";

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

// This file remains largely unchanged from the previous version.
// It provides a configured axios instance for making API calls to GitHub,
// and includes a searchUser function that fetches data for a specific user.

// Export the apiClient for use in other parts of the application
export default apiClient;

// Detailed explanations:

// import axios from "axios";
// This line imports the axios library, which is used to make HTTP requests to the GitHub API.

// const apiClient = axios.create({ ... });
// This creates a custom instance of axios with predefined configuration.
// It allows us to set default settings for all requests made with this instance.

// baseURL: "https://api.github.com",
// This sets the base URL for all requests. Any relative URL used with this instance will be appended to this base URL.

// headers: { ... }
// This sets default headers for all requests made with this instance.

// "Content-Type": "application/json",
// This header tells the server that we're sending JSON data in our requests.

// Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
// This header includes the GitHub API key for authentication.
// The key is stored in an environment variable for security.

// export const searchUser = async (username) => { ... }
// This function is used to search for a GitHub user.
// It's marked as async, which means it returns a Promise and can use await inside.

// const response = await apiClient.get(`/users/${username}`);
// This line makes a GET request to the GitHub API to fetch user data.
// The username is included in the URL path.

// return response.data;
// If the request is successful, we return the data from the response.

// catch (error) { throw error; }
// If an error occurs during the request, we throw it to be handled by the caller of this function.

// export default apiClient;
// This exports the apiClient instance so it can be used in other parts of the application.
