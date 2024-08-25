// Import React and necessary hooks
import React, { useState, useEffect } from 'react';

// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from './recipeStore';

// Define the EditRecipeForm component as a function
// It takes a recipeId prop to identify which recipe to edit
const EditRecipeForm = ({ recipeId }) => {
  // Use the useRecipeStore hook to get the updateRecipe function and the recipes array from our store
  const { recipes, updateRecipe } = useRecipeStore(state => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe
  }));

  // Create state variables for the title and description inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Use useEffect to populate the form with the current recipe data when the component mounts
  useEffect(() => {
    // Find the recipe with the matching id
    const recipe = recipes.find(r => r.id === recipeId);
    // If we found a matching recipe, set the title and description state
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipeId, recipes]);

  // Define the handleSubmit function, which will be called when the form is submitted
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the updateRecipe function from our store
    // We pass an object with the id and the updated title and description
    updateRecipe({ id: recipeId, title, description });
  };

  // Return the JSX for our form
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

// Export the EditRecipeForm component so it can be used in other files
export default EditRecipeForm;