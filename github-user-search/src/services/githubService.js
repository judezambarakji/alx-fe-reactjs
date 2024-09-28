import apiClient from "./apiClient";

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    // Make a GET request to the GitHub API using the apiClient
    const response = await apiClient.get(`/users/${username}`);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // If an error occurs, throw it to be handled by the caller
    throw error;
  }
};

// Detailed explanations:

// import apiClient from './apiClient';
// This line imports the apiClient we created in apiClient.js.
// We'll use this to make requests to the GitHub API.

// export const fetchUserData = async (username) => { ... }
// This function is used to fetch data for a specific GitHub user.
// It's marked as async, which means it returns a Promise and can use await inside.

// const response = await apiClient.get(`/users/${username}`);
// This line makes a GET request to the GitHub API to fetch user data.
// We use the apiClient instance to make the request, which includes our API key and other settings.
// The username is included in the URL path.

// return response.data;
// If the request is successful, we return the data from the response.
// This data will include information about the GitHub user.

// catch (error) { throw error; }
// If an error occurs during the request, we throw it to be handled by the caller of this function.
// This allows the component using this function to decide how to handle different types of errors.
