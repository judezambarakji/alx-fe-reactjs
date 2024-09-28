import React, { useState } from "react";
// This line imports React and the useState hook from the React library.
// React is the core library for building user interfaces in React.
// useState is a hook that allows us to add state to functional components.

import { searchUsers } from "../services/githubService";
// This line imports the searchUsers function from our custom githubService.
// This function will be used to make API calls to GitHub for searching users.

function Search() {
  // This defines our Search component as a functional component.

  const [query, setQuery] = useState("");
  // This line creates a state variable 'query' and a function to update it 'setQuery'.
  // 'query' will store the main search term entered by the user.
  // The initial value of 'query' is an empty string.

  const [location, setLocation] = useState("");
  // Similar to above, this creates a state for the location search term.

  const [minRepos, setMinRepos] = useState("");
  // This creates a state for the minimum number of repositories filter.

  const [results, setResults] = useState(null);
  // This state will store the search results returned from the GitHub API.

  const [error, setError] = useState(null);
  // This state will store any error messages that occur during the search process.

  const [isLoading, setIsLoading] = useState(false);
  // This state tracks whether a search is currently in progress.

  const [page, setPage] = useState(1);
  // This state keeps track of the current page of results for pagination.

  const handleSearch = async (e) => {
    // This function is called when the search form is submitted.
    // It's asynchronous because it makes an API call.

    e.preventDefault();
    // This prevents the default form submission behavior, which would refresh the page.

    setError(null);
    // Reset any previous error messages.

    setResults(null);
    // Clear any previous search results.

    setIsLoading(true);
    // Set the loading state to true as we're about to start a search.

    setPage(1);
    // Reset the page number to 1 for a new search.

    try {
      // This try-catch block handles potential errors in the API call.

      const searchResults = await searchUsers(query, location, minRepos, 1);
      // Call the searchUsers function with our search parameters.
      // The 'await' keyword means we'll wait for this to complete before moving on.

      setResults(searchResults);
      // Store the returned search results in our state.
    } catch (err) {
      // If an error occurs during the search, this code will run.

      setError("Looks like we cant find any users matching your criteria");
      // Set an error message to display to the user.
    } finally {
      // This code will run whether the try block succeeds or fails.

      setIsLoading(false);
      // Set the loading state back to false as our search is complete.
    }
  };

  const loadMore = async () => {
    // This function is called when the user wants to load more results.

    setIsLoading(true);
    // Set loading to true as we're about to fetch more data.

    try {
      const nextPage = page + 1;
      // Calculate the next page number.

      const moreResults = await searchUsers(
        query,
        location,
        minRepos,
        nextPage
      );
      // Fetch the next page of results using the same search criteria.

      setResults((prevResults) => ({
        // Update the results state. We use a function here to safely update based on the previous state.
        ...moreResults,
        // Spread the new results into our state.
        items: [...prevResults.items, ...moreResults.items],
        // Concatenate the new items with the existing items.
      }));

      setPage(nextPage);
      // Update the page state to the new page number.
    } catch (err) {
      setError("Error loading more results");
      // If an error occurs while loading more results, set an error message.
    } finally {
      setIsLoading(false);
      // Set loading back to false whether the operation succeeded or failed.
    }
  };

  return (
    // The component's JSX starts here. This is what will be rendered to the DOM.

    <div className="Search max-w-2xl mx-auto p-4">
      {/* This div wraps the entire component. It's styled with Tailwind CSS classes for width, margin, and padding. */}

      <form onSubmit={handleSearch} className="space-y-4">
        {/* This form will call handleSearch when submitted. It has vertical spacing between child elements. */}

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a GitHub username"
          className="w-full p-2 border rounded"
        />
        {/* This input is for the main search query. It updates the 'query' state as the user types. */}

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
        />
        {/* This input is for the location filter. It updates the 'location' state as the user types. */}

        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="w-full p-2 border rounded"
        />
        {/* This input is for the minimum repositories filter. It updates the 'minRepos' state as the user types. */}

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
        {/* This button submits the form, triggering the handleSearch function. */}
      </form>

      {isLoading && <p className="text-center mt-4">Loading...</p>}
      {/* This paragraph is shown when isLoading is true, indicating that a search is in progress. */}

      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      {/* This paragraph is shown when there's an error, displaying the error message. */}

      {results && (
        // This block is rendered when we have search results.

        <div className="results mt-8">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <ul className="space-y-4">
            {results.items.map((user) => (
              // This maps over each user in the results and renders a list item for each.

              <li key={user.id} className="border p-4 rounded">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full mb-2"
                />
                <h3 className="font-bold">{user.login}</h3>
                <p>Repositories: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
          {results.items.length < results.total_count && (
            // This button is shown if there are more results to load.

            <button
              onClick={loadMore}
              className="w-full mt-4 p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
// This exports the Search component so it can be used in other parts of our application.
