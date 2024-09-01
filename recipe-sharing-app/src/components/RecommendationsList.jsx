// Import React and useEffect hook for side effects
import React, { useEffect } from "react";
// Import Link from react-router-dom for creating navigation links
import { Link } from "react-router-dom";
// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from "./recipeStore";

// Define the RecommendationsList component as a function
const RecommendationsList = () => {
  // Use the useRecipeStore hook to get the recommendations and generateRecommendations function
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Use useEffect to generate recommendations when the component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  // Return the JSX for our recommendations list
  return (
    <div>
      <h2>Recommended Recipes</h2>
      {/* Check if there are any recommended recipes */}
      {recommendations.length > 0 ? (
        // If there are recommendations, map over them and display each one
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            {/* Create a link to the individual recipe page */}
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            {/* Add a button to add the recipe to favorites */}
            <button
              onClick={() => useRecipeStore.getState().addFavorite(recipe.id)}
            >
              Add to Favorites
            </button>
          </div>
        ))
      ) : (
        // If there are no recommendations, display a message
        <p>No recommendations available at the moment.</p>
      )}
    </div>
  );
};

// Export the RecommendationsList component so it can be used in other files
export default RecommendationsList;
