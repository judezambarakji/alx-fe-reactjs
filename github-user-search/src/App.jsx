import React, { useState } from "react";
import { searchUser } from "./apiClient";
import "./App.css";

function App() {
  // State to store the search query
  const [query, setQuery] = useState("");
  // State to store the search results
  const [results, setResults] = useState(null);
  // State to store any error messages
  const [error, setError] = useState(null);

  // Function to handle the search
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    setError(null); // Reset any previous errors
    setResults(null); // Reset any previous results

    try {
      const userData = await searchUser(query);
      setResults(userData);
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (err.response.status === 404) {
          setError("User not found. Please check the username and try again.");
        } else if (err.response.status === 403) {
          setError(
            "API rate limit exceeded. Please try again later or use an API key."
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
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {results && (
        <div className="results">
          <img src={results.avatar_url} alt={`${results.login}'s avatar`} />
          <h2>{results.name}</h2>
          <p>{results.bio}</p>
          <a href={results.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
