import axios from "axios";

// Function to search for GitHub users using the full URL
export const searchUsers = async (query, location, minRepos, page = 1) => {
  try {
    // Construct the search query string
    let searchQuery = query;
    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    // Construct the full URL with query parameters
    const fullUrl = `https://api.github.com/search/users?q=${encodeURIComponent(
      searchQuery
    )}&per_page=10&page=${page}`;

    // Make a GET request to the GitHub search API using the full URL
    const response = await axios.get(fullUrl, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    return response.data;
  } catch (error) {
    // Error handling
    if (error.response) {
      throw new Error(
        error.response.data.message || "Error occurred while searching users"
      );
    } else if (error.request) {
      throw new Error(
        "No response received from GitHub. Please check your internet connection."
      );
    } else {
      throw new Error("Error occurred while setting up the request");
    }
  }
};

// Detailed explanations:

// import axios from 'axios';
// This imports the axios library for making HTTP requests.

// export const searchUsers = async (query, location, minRepos, page = 1) => { ... }
// This function performs the user search. It takes several parameters:
// - query: The main search term
// - location: Optional location filter
// - minRepos: Optional minimum number of repositories filter
// - page: The page number of results (default is 1)

// let searchQuery = query;
// This starts building the search query string with the main query.

// if (location) { searchQuery += `+location:${location}`; }
// if (minRepos) { searchQuery += `+repos:>=${minRepos}`; }
// These lines add location and minimum repositories filters to the query if provided.
// Note the use of '+' instead of spaces to separate query parts.

// const fullUrl = `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}&per_page=10&page=${page}`;
// This constructs the full URL for the API call, including:
// - The base URL and endpoint: https://api.github.com/search/users
// - The search query: ?q=${encodeURIComponent(searchQuery)}
// - Additional parameters: &per_page=10&page=${page}
// encodeURIComponent() is used to properly encode the search query for use in a URL.

// const response = await axios.get(fullUrl, { ... });
// This makes a GET request to the GitHub search API using the full URL.
// The second argument is an options object that includes headers:
// - 'Authorization': Includes the GitHub API key for authentication
// - 'Accept': Specifies the GitHub API version we want to use

// return response.data;
// If the request is successful, this returns the data from the response.

// The catch block handles different types of errors that might occur during the API request.
// It provides specific error messages for different scenarios.
