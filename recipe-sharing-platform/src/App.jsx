import React from "react";
// Import React library to use JSX and create components

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// Import necessary components from react-router-dom for routing
// BrowserRouter: Provides routing functionality
// Route: Defines a route and the component to render for that route
// Routes: Wraps multiple Route components
// Link: Creates navigation links

import "./App.css";
// Import the CSS file for App component styling

import HomePage from "./components/HomePage";
// Import our HomePage component

import RecipeDetail from "./components/RecipeDetail";
// Import our RecipeDetail component

import AddRecipeForm from "./components/AddRecipeForm";
// Import our new AddRecipeForm component

function App() {
  // Define the main App component as a functional component
  return (
    <Router>
      {/* Wrap the entire app in a Router component to enable routing */}

      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Main container for the entire app
            - min-h-screen ensures it takes at least the full height of the viewport
            - bg-gray-100 gives a light gray background
            - flex and flex-col create a flexible column layout */}

        <header className="bg-blue-600 text-white p-4">
          {/* Header section
              - Blue background
              - White text
              - Padding of 1rem (4 in Tailwind) */}

          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            {/* Navigation container
                - flex layout with space-between alignment
                - items-center vertically centers the items
                - max-w-6xl sets a maximum width
                - mx-auto centers the nav horizontally */}

            <Link to="/" className="text-2xl font-bold">
              Recipe Sharing Platform
            </Link>
            {/* App title as a link to the home page
                - Large text (2xl in Tailwind)
                - Bold font weight */}

            <Link
              to="/add-recipe"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Add Recipe
            </Link>
            {/* Add Recipe button/link
                - White background
                - Blue text
                - Padding (px-4 for horizontal, py-2 for vertical)
                - Rounded corners (rounded-lg)
                - Hover effect with color change
                - Smooth transition for hover effect */}
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4">
          {/* Main content area
              - flex-grow allows this section to expand and fill available space
              - Centered container
              - Auto horizontal margins
              - Padding of 1rem (4 in Tailwind) */}

          <Routes>
            {/* Define our routes */}
            <Route path="/" element={<HomePage />} />
            {/* When the path is exactly "/", render the HomePage component */}

            <Route path="/recipe/:id" element={<RecipeDetail />} />
            {/* When the path matches "/recipe/:id", render the RecipeDetail component
                The :id is a URL parameter that will be passed to the RecipeDetail component */}

            <Route path="/add-recipe" element={<AddRecipeForm />} />
            {/* When the path is "/add-recipe", render the AddRecipeForm component */}
          </Routes>
        </main>

        <footer className="bg-gray-200 text-center p-4 mt-8">
          {/* Footer section
              - Light gray background
              - Centered text
              - Padding of 1rem (4 in Tailwind)
              - Top margin of 2rem (8 in Tailwind) */}

          <p>&copy; 2024 Recipe Sharing Platform. All rights reserved.</p>
          {/* Copyright notice */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
// Export the App component as the default export so it can be imported in other files
