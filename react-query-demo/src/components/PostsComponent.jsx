import React, { useState } from "react";
import { useQuery } from "react-query";

// Function to fetch posts from the API
const fetchPosts = async (page = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const [page, setPage] = useState(1);

  // Use the useQuery hook to fetch and manage data
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    ["posts", page],
    () => fetchPosts(page),
    {
      cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
      refetchOnWindowFocus: true, // Refetch data when window regains focus
      keepPreviousData: true, // Keep previous data while fetching new data
      staleTime: 30 * 1000, // Consider data fresh for 30 seconds
    }
  );

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts (Page {page})</h2>
      <button onClick={() => refetch()}>Refresh Posts</button>
      {isFetching && <div>Fetching new data...</div>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button onClick={() => setPage((old) => old + 1)}>Next Page</button>
      </div>
      <div>
        <h3>React Query Options Used:</h3>
        <ul>
          <li>cacheTime: 5 minutes</li>
          <li>refetchOnWindowFocus: true</li>
          <li>keepPreviousData: true</li>
          <li>staleTime: 30 seconds</li>
        </ul>
      </div>
    </div>
  );
}

export default PostsComponent;

// Detailed explanation of each part of the updated code:

// import React, { useState } from 'react'
// We now import useState to manage the page state for pagination.

// const fetchPosts = async (page = 1) => { ... }
// The fetchPosts function now accepts a page parameter and uses it to fetch paginated data.

// const [page, setPage] = useState(1)
// We use useState to manage the current page number.

// const { data, isLoading, isError, error, refetch, isFetching } = useQuery( ... )
// We've added isFetching to the destructured values from useQuery. This will tell us when a background refetch is happening.

// ['posts', page]
// The query key now includes the page number. This ensures that React Query treats each page as a separate query.

// () => fetchPosts(page)
// The query function now calls fetchPosts with the current page number.

// {
//   cacheTime: 5 * 60 * 1000,
//   refetchOnWindowFocus: true,
//   keepPreviousData: true,
//   staleTime: 30 * 1000,
// }
// These are the new options we're passing to useQuery:
// - cacheTime: How long the data should remain in the cache. Here, it's 5 minutes.
// - refetchOnWindowFocus: If true, the query will refetch when the window regains focus.
// - keepPreviousData: If true, the previous data will be kept when fetching new data (useful for pagination).
// - staleTime: How long the data should be considered fresh. Here, it's 30 seconds.

// {isFetching && <div>Fetching new data...</div>}
// This displays a message when a background refetch is happening.

// <button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1}>Previous Page</button>
// <button onClick={() => setPage(old => old + 1)}>Next Page</button>
// These buttons allow the user to navigate between pages. The Previous Page button is disabled on the first page.

// <div>
//   <h3>React Query Options Used:</h3>
//   <ul>...</ul>
// </div>
// This section displays the React Query options we're using, as requested in the task.
