import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  // Use the useQuery hook to fetch and manage data
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 60000, // Consider data fresh for 1 minute
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
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refresh Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

// Detailed explanation of each part of the code:

// import React from 'react'
// This imports the React library, necessary for creating React components.

// import { useQuery } from 'react-query'
// This imports the useQuery hook from react-query, which we'll use for data fetching.

// const fetchPosts = async () => { ... }
// This is an asynchronous function that fetches posts from the JSONPlaceholder API.
// It uses the fetch API to make a GET request and returns the parsed JSON response.
// If the response is not ok, it throws an error.

// function PostsComponent() { ... }
// This is our main component function for fetching and displaying posts.

// const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, { ... })
// This line uses the useQuery hook to manage the data fetching process.
// - 'posts' is a unique key for this query
// - fetchPosts is the function that will be called to fetch data
// - The options object includes staleTime, which keeps the data fresh for 1 minute
// The hook returns several values:
// - data: the fetched data
// - isLoading: a boolean indicating if the data is currently being fetched
// - isError: a boolean indicating if an error occurred
// - error: the error object if an error occurred
// - refetch: a function to manually trigger a refetch of the data

// if (isLoading) { ... }
// This checks if the data is still loading and displays a loading message if true.

// if (isError) { ... }
// This checks if an error occurred during fetching and displays the error message if true.

// return ( ... )
// This is the main return statement of our component, rendering the fetched data.

// <h2>Posts</h2>
// This displays a title for our list of posts.

// <button onClick={() => refetch()}>Refresh Posts</button>
// This button, when clicked, will trigger a manual refetch of the posts data.

// <ul>{ data.map(post => ( ... )) }</ul>
// This creates an unordered list and maps over the fetched posts data.
// For each post, it creates a list item displaying the post's title.

// <li key={post.id}>{post.title}</li>
// This creates a list item for each post, using the post's id as the key (important for React's reconciliation process)
// and displaying the post's title.

// export default PostsComponent
// This exports the PostsComponent so it can be imported and used in other parts of the application, such as in App.jsx.
