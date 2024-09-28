import React, { useState } from "react";
// This line imports React and the useState hook from the React library.
// React is the core library for building user interfaces in React.
// useState is a hook that allows us to add state to functional components.

import axios from "axios";
// This imports the axios library, which we use to make HTTP requests to the GitHub API.

import Search from "./components/Search";
// This imports the Search component that we created in Search.jsx.
// This component will handle the search form and display of results.

import "./App.css";
// This imports the CSS file for our App component.

function App() {
  // This defines our main App component as a functional component.

  const [query, setQuery] = useState("");
  // This creates a state variable 'query' and a function to update it 'setQuery'.
  // 'query' will store the main search term entered by the user.

  const [results, setResults] = useState(null);
  // This state will store the search results returned from the GitHub API.

  const [error, setError] = useState(null);
  // This state will store any error messages that occur during the search process.

  const handleSearch = async (e) => {
    // This function is called when the search form is submitted.
    // It's asynchronous because it makes an API call.

    e.preventDefault();
    // This prevents the default form submission behavior, which would refresh the page.

    setError(null);
    // Reset any previous error messages.

    setResults(null);
    // Clear any previous search results.

    try {
      // This try-catch block handles potential errors in the API call.

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`,
        {
          // Make a GET request to the GitHub search API.
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
            // Include the GitHub API key for authentication.
          },
        }
      );

      setResults(response.data);
      // Store the returned search results in our state.
    } catch (err) {
      // If an error occurs during the search, this code will run.

      if (axios.isAxiosError(err)) {
        // Check if the error is an Axios error (related to the HTTP request)
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (err.response.status === 404) {
            setError(
              "User not found. Please check the username and try again."
            );
          } else if (err.response.status === 403) {
            setError(
              "API rate limit exceeded. Please try again later or check your API key."
            );
          } else {
            setError(`An error occurred: ${err.response.data.message}`);
          }
        } else if (err.request) {
          // The request was made but no response was received
          setError(
            "No response received from GitHub. Please check your internet connection."
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`An error occurred: ${err.message}`);
        }
      } else {
        // For non-Axios errors
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    // The return statement defines what this component will render.

    <div className="App">
      <h1 className="text-3xl font-bold text-center my-8">
        GitHub User Search
      </h1>
      {/* This is the main heading for our application. */}

      <Search onSearch={handleSearch} query={query} setQuery={setQuery} />
      {/* This renders our Search component, passing necessary props:
          - onSearch: The function to call when the form is submitted
          - query: The current search query
          - setQuery: The function to update the search query */}

      {error && <p className="error">{error}</p>}
      {/* This paragraph is shown when there's an error, displaying the error message. */}

      {results && (
        // This block is rendered when we have search results.
        <div className="results">
          <h2>Search Results</h2>
          <ul>
            {results.items.map((user) => (
              // This maps over each user in the results and renders a list item for each.
              <li key={user.id}>
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                <h3>{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
// This exports the App component so it can be used as the root component of our application.
