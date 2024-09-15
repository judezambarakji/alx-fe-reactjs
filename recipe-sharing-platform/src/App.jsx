import React from "react";
// Import React library to use JSX and create components

import "./App.css";
// Import the CSS file for App component styling

import HomePage from "./components/HomePage";
// Import our newly created HomePage component

function App() {
  // Define the main App component
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main container for the entire app
          - min-h-screen ensures it takes at least the full height of the viewport
          - bg-gray-100 gives a light gray background */}

      <header className="bg-blue-600 text-white p-4">
        {/* Header section
            - Blue background
            - White text
            - Padding of 1rem (4 in Tailwind) */}

        <h1 className="text-2xl font-bold">Recipe Sharing Platform</h1>
        {/* App title - large, bold text */}
      </header>

      <main className="container mx-auto p-4">
        {/* Main content area
            - Centered container
            - Auto horizontal margins
            - Padding of 1rem (4 in Tailwind) */}

        <HomePage />
        {/* Render our HomePage component */}
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
  );
}

export default App;
// Export the App component as the default export
