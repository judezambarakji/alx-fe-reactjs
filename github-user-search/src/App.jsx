import React, { useState } from "react";
import { searchUser } from "./services/apiClient";
import Search from "./components/Search";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setResults(null);

    try {
      const userData = await searchUser(query);
      setResults(userData);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
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
          setError(
            "No response received from GitHub. Please check your internet connection."
          );
        } else {
          setError(`An error occurred: ${err.message}`);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} query={query} setQuery={setQuery} />
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

// This updated App.jsx combines the previous error handling and results display
// with the new Search component. The handleSearch function remains in App.jsx
// to maintain the existing error handling logic, while the Search component
// is responsible for rendering the search input and button.
