// Import React for creating the component
import React from "react";
// Import Link from react-router-dom for creating navigation links
import { Link } from "react-router-dom";
// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from "./recipeStore";

// Define the FavoritesList component as a function
const FavoritesList = () => {
  // Use the useRecipeStore hook to get the favorites and recipes from our store
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Filter the recipes to get only the favorite ones
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  // Return the JSX for our favorites list
  return (
    <div>
      <h2>My Favorites</h2>
      {/* Check if there are any favorite recipes */}
      {favoriteRecipes.length > 0 ? (
        // If there are favorites, map over them and display each one
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            {/* Create a link to the individual recipe page */}
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            {/* Add a button to remove the recipe from favorites */}
            <button
              onClick={() =>
                useRecipeStore.getState().removeFavorite(recipe.id)
              }
            >
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        // If there are no favorites, display a message
        <p>You haven't added any favorites yet.</p>
      )}
    </div>
  );
};

// Export the FavoritesList component so it can be used in other files
export default FavoritesList;
