import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(null);
    setResults(null);
    setIsLoading(true);

    try {
      const userData = await fetchUserData(query);
      setResults(userData);
    } catch (err) {
      setError("Looks like we cant find the user"); // Specific error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
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

export default Search;

// Detailed explanations:

// import React, { useState } from "react";
// This line imports React and the useState hook for managing component state.

// import { fetchUserData } from "../services/githubService";
// This imports the fetchUserData function from our githubService to make API calls.

// const [query, setQuery] = useState("");
// const [results, setResults] = useState(null);
// const [error, setError] = useState(null);
// const [isLoading, setIsLoading] = useState(false);
// These lines set up state variables for the search query, results, error message, and loading status.

// const handleSearch = async (e) => { ... }
// This function is called when the search form is submitted.

// e.preventDefault();
// This prevents the default form submission behavior, which would refresh the page.

// setError(null); setResults(null); setIsLoading(true);
// These lines reset the error and results states, and set isLoading to true before starting the search.

// const userData = await fetchUserData(query);
// This calls the fetchUserData function with the current query to get user data from the GitHub API.

// setResults(userData);
// If the fetch is successful, this sets the results state with the user data.

// catch (err) { setError("Looks like we cant find the user"); }
// If an error occurs during the fetch, this sets the error state with the specific message.
// This is the line that has been modified to include the requested error message.

// finally { setIsLoading(false); }
// This sets isLoading back to false, whether the fetch was successful or not.

// The return statement renders the search form, loading indicator, error message (if any), and search results (if any).

// {error && <p className="error">{error}</p>}
// This line displays the error message if there is one, which will now be "Looks like we cant find the user" when a user is not found.

// export default Search;
// This exports the Search component so it can be used in other parts of the application.
