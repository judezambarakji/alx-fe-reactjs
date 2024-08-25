// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from './recipeStore';

// Define the RecipeList component as a function
const RecipeList = () => {
  // Use the useRecipeStore hook to get the recipes array from our store
  // This will give us access to all the recipes in our global state
  const recipes = useRecipeStore(state => state.recipes);

  // Return the JSX for our recipe list
  return (
    <div>
      {/* Use the map function to iterate over each recipe in the recipes array */}
      {recipes.map(recipe => (
        // For each recipe, create a div element
        // The key prop is important for React to efficiently update the list
        <div key={recipe.id}>
          {/* Display the recipe title in an h3 tag */}
          <h3>{recipe.title}</h3>
          {/* Display the recipe description in a p tag */}
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

// Export the RecipeList component so it can be used in other files
export default RecipeList;