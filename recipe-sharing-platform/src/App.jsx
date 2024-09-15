import React, { useState, useEffect } from "react";
// Import React and necessary hooks for managing component state and side effects

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// Import necessary components from react-router-dom for routing

import "./App.css";
// Import the CSS file for App component styling

import HomePage from "./components/HomePage";
// Import our HomePage component

import RecipeDetail from "./components/RecipeDetail";
// Import our RecipeDetail component

import AddRecipeForm from "./components/AddRecipeForm";
// Import our AddRecipeForm component

function App() {
  // Define the main App component as a functional component

  const [recipes, setRecipes] = useState([]);
  // Initialize a state variable 'recipes' as an empty array
  // setRecipes is a function that will be used to update the recipes state

  useEffect(() => {
    // useEffect hook runs after the component renders
    // It's used here to fetch recipe data when the component mounts
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/src/data.json");
        const data = await response.json();
        // Assume the data now includes a 'steps' property for each recipe
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []); // The empty array means this effect runs only once, when the component mounts

  const addRecipe = (newRecipe) => {
    // Function to add a new recipe
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
    // Add the new recipe to the recipes array, assigning it a new id
  };

  return (
    <Router>
      {/* Wrap the entire app in a Router component to enable routing */}

      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Main container for the entire app */}

        <header className="bg-blue-600 text-white p-4">
          {/* Header section */}
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <Link to="/" className="text-2xl font-bold">
              Recipe Sharing Platform
            </Link>
            <Link
              to="/add-recipe"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Add Recipe
            </Link>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4">
          {/* Main content area */}
          <Routes>
            {/* Define our routes */}
            <Route path="/" element={<HomePage recipes={recipes} />} />
            {/* Pass the recipes data to the HomePage component */}

            <Route
              path="/recipe/:id"
              element={<RecipeDetail recipes={recipes} />}
            />
            {/* Pass the recipes data to the RecipeDetail component */}

            <Route
              path="/add-recipe"
              element={<AddRecipeForm onAddRecipe={addRecipe} />}
            />
            {/* Pass the addRecipe function to the AddRecipeForm component */}
          </Routes>
        </main>

        <footer className="bg-gray-200 text-center p-4 mt-8">
          {/* Footer section */}
          <p>&copy; 2024 Recipe Sharing Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
// Export the App component as the default export
