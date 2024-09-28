import React from "react";

function Search({ onSearch, query, setQuery }) {
  return (
    <div className="Search">
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a GitHub username"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;

// This updated Search component is now a controlled component,
// with its state (query) and event handlers (onSearch, setQuery) passed as props from App.jsx.
// This allows App.jsx to maintain control over the search process and error handling,
// while Search.jsx focuses on rendering the search input and button.
