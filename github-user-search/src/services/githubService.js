import axios from "axios";
// This line imports the axios library, which we use to make HTTP requests to the GitHub API.

const githubApi = axios.create({
  // This creates a custom instance of axios with specific configurations for our GitHub API requests.

  baseURL: "https://api.github.com",
  // This sets the base URL for all requests made with this axios instance.
  // All relative URLs used with this instance will be appended to this base URL.

  headers: {
    // This object sets default headers for all requests made with this instance.

    "Content-Type": "application/json",
    // This header tells the server that we're sending JSON data in our requests.

    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
    // This header includes the GitHub API key for authentication.
    // The key is stored in an environment variable for security.
  },
});

export const searchUsers = async (query, location, minRepos, page = 1) => {
  // This function performs the user search. It's async because it makes an API call.
  // It takes query, location, and minRepos as search parameters, and a page number for pagination.
  // The page parameter has a default value of 1 if not provided.

  try {
    // This try-catch block handles potential errors in the API call.

    let searchQuery = query;
    // Start building the search query string with the main query.

    if (location) {
      searchQuery += ` location:${location}`;
    }
    // If a location is provided, add it to the search query.

    if (minRepos) {
      searchQuery += ` repos:>=${minRepos}`;
    }
    // If a minimum number of repositories is specified, add it to the search query.

    const response = await githubApi.get("/search/users", {
      // Make a GET request to the GitHub search API.

      params: {
        // These are the query parameters for the API request.

        q: searchQuery,
        // The full search query string we built.

        per_page: 10,
        // Number of results to return per page.

        page: page,
        // The page number of results to return.
      },
    });

    return response.data;
    // If the request is successful, return the data from the response.
  } catch (error) {
    // If an error occurs during the API call, this code will run.

    if (error.response) {
      // This means the request was made and the server responded with a status code
      // that falls out of the range of 2xx (successful responses).
      throw new Error(
        error.response.data.message || "Error occurred while searching users"
      );
    } else if (error.request) {
      // This means the request was made but no response was received.
      throw new Error(
        "No response received from GitHub. Please check your internet connection."
      );
    } else {
      // This means something happened in setting up the request that triggered an Error.
      throw new Error("Error occurred while setting up the request");
    }
  }
};
