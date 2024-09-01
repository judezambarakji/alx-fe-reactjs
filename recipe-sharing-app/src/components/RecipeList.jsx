// Import React and necessary hooks
import React, { useEffect } from "react";
// Import the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";
// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from "./recipeStore";

// Define the RecipeList component as a function
const RecipeList = () => {
  // Use the useRecipeStore hook to get the filtered recipes and search term from our store
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Use the useEffect hook to filter recipes when the component mounts or when the search term changes
  useEffect(() => {
    filterRecipes(searchTerm);
  }, [searchTerm, filterRecipes]);

  // Return the JSX for our recipe list
  return (
    <div>
      {/* Display the number of recipes found */}
      <h2>Recipes Found: {filteredRecipes.length}</h2>

      {/* Use the map function to iterate over each recipe in the filteredRecipes array */}
      {filteredRecipes.map((recipe) => (
        // For each recipe, create a div element
        // The key prop is important for React to efficiently update the list
        <div key={recipe.id}>
          {/* Create a link to the individual recipe page */}
          <Link to={`/recipe/${recipe.id}`}>
            {/* Display the recipe title in an h3 tag */}
            <h3>{recipe.title}</h3>
          </Link>
          {/* Display the recipe description in a p tag */}
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

// Export the RecipeList component so it can be used in other files
export default RecipeList;
