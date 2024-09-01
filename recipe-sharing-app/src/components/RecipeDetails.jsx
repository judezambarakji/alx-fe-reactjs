// Import React from the 'react' library
import React from "react";

// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from "./recipeStore";

// Import the EditRecipeForm component
import EditRecipeForm from "./EditRecipeForm";

// Import the DeleteRecipeButton component
import DeleteRecipeButton from "./DeleteRecipeButton";

// Define the RecipeDetails component as a function
// It takes a recipeId prop to identify which recipe to display
const RecipeDetails = ({ recipeId }) => {
  // Use the useRecipeStore hook to get the recipes array from our store
  // Then use the find method to get the specific recipe we want to display
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  // If no recipe is found, display a message
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  // Return the JSX for our recipe details
  return (
    <div>
      {/* Display the recipe id */}
      <p>Recipe ID: {recipe.id}</p>
      {/* Display the recipe title */}
      <h1>{recipe.title}</h1>
      {/* Display the recipe description */}
      <p>{recipe.description}</p>
      {/* Render the EditRecipeForm component, passing the recipeId as a prop */}
      <EditRecipeForm recipeId={recipeId} />
      {/* Render the DeleteRecipeButton component, passing the recipeId as a prop */}
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

// Export the RecipeDetails component so it can be used in other files
export default RecipeDetails;
