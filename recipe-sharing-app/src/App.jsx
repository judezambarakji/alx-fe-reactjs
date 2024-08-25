// Import React, which is necessary for creating React components
import React from 'react';

// Import the AddRecipeForm component from its file
import AddRecipeForm from './AddRecipeForm';

// Import the RecipeList component from its file
import RecipeList from './RecipeList';

// Define the main App component as a function
function App() {
  // The component returns JSX, which is a syntax extension for JavaScript
  // JSX allows us to write HTML-like code in our JavaScript
  return (
    // This div wraps all the content of our application
    <div className="App">
      {/* This is the main heading of our application */}
      <h1>Recipe Sharing App</h1>

      {/* Render the AddRecipeForm component */}
      {/* This component will allow users to add new recipes */}
      <AddRecipeForm />

      {/* Render the RecipeList component */}
      {/* This component will display all the recipes */}
      <RecipeList />
    </div>
  );
}

// Export the App component so it can be imported and used in other files
export default App;