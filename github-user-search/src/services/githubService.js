import axios from "axios";

// Create a base instance of axios with default configuration
const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(
        error.response.data.message || "Error occurred while fetching user data"
      );
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error(
        "No response received from GitHub. Please check your internet connection."
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error("Error occurred while setting up the request");
    }
  }
};

// Detailed explanations:

// import axios from 'axios';
// This line imports the axios library, which we'll use to make HTTP requests to the GitHub API.

// const githubApi = axios.create({ ... });
// This creates a custom instance of axios with predefined configuration for GitHub API requests.

// baseURL: 'https://api.github.com',
// This sets the base URL for all requests made with this axios instance.

// headers: { ... }
// This sets default headers for all requests made with this instance.

// 'Content-Type': 'application/json',
// This header tells the server that we're sending JSON data in our requests.

// 'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
// This header includes the GitHub API key for authentication.
// The key is stored in an environment variable for security.

// export const fetchUserData = async (username) => { ... }
// This function is used to fetch data for a specific GitHub user.

// const response = await githubApi.get(`/users/${username}`);
// This line makes a GET request to the GitHub API to fetch user data.

// return response.data;
// If the request is successful, we return the data from the response.

// The catch block includes more detailed error handling:
// - It checks if the error has a response (server responded with an error)
// - It checks if the error has a request (request was made but no response was received)
// - It handles any other types of errors that might occur

// In each error case, we throw a new Error with a descriptive message.
// This allows the component using this function to catch and handle these errors appropriately.
