// Import React, which is necessary for creating React components
import React from 'react';

// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from './recipeStore';

// Define the DeleteRecipeButton component as a function
// It takes a recipeId prop to identify which recipe to delete
const DeleteRecipeButton = ({ recipeId }) => {
  // Use the useRecipeStore hook to get the deleteRecipe function from our store
  // This function will allow us to delete recipes from our global state
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  // Define the handleDelete function, which will be called when the button is clicked
  const handleDelete = () => {
    // Call the deleteRecipe function from our store
    // We pass the recipeId to identify which recipe to delete
    deleteRecipe(recipeId);
  };

  // Return the JSX for our delete button
  return (
    // When the button is clicked, it will call the handleDelete function
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

// Export the DeleteRecipeButton component so it can be used in other files
export default DeleteRecipeButton;