import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./PostsComponent";
import "./App.css";

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the entire app with QueryClientProvider to enable React Query
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo</h1>
        {/* Render the PostsComponent which will fetch and display data */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

// Detailed explanation of each part of the code:

// import React from 'react'
// This line imports the React library, which is necessary for creating React components.

// import { QueryClient, QueryClientProvider } from 'react-query'
// This imports the necessary components from react-query to set up and use React Query in our application.

// import PostsComponent from './PostsComponent'
// This imports the PostsComponent that we'll create to fetch and display data using React Query.

// import './App.css'
// This imports the CSS file for styling our App component.

// const queryClient = new QueryClient()
// This creates a new instance of QueryClient, which is the core of React Query.
// It manages caching, refetching, and everything related to data fetching in our app.

// function App() { ... }
// This is our main App component function.

// <QueryClientProvider client={queryClient}>
// This wraps our entire application with the QueryClientProvider.
// It makes the queryClient available to all child components, enabling them to use React Query hooks.

// <div className="App">
// This is the main container for our app, with a CSS class for styling.

// <h1>React Query Demo</h1>
// This displays a title for our application.

// <PostsComponent />
// This renders our PostsComponent, which will handle fetching and displaying data.

// export default App
// This exports the App component so it can be imported and used in other parts of our application.
