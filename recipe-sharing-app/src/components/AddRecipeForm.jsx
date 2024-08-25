// Import the useState hook from React
// useState allows us to add state to functional components
import { useState } from 'react';

// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from './recipeStore';

// Define the AddRecipeForm component as a function
const AddRecipeForm = () => {
  // Use the useRecipeStore hook to get the addRecipe function from our store
  // This function will allow us to add new recipes to our global state
  const addRecipe = useRecipeStore(state => state.addRecipe);

  // Create state variables for the title and description inputs
  // useState returns an array with two elements: the current state value and a function to update it
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Define the handleSubmit function, which will be called when the form is submitted
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    // This stops the page from refreshing when the form is submitted
    event.preventDefault();

    // Call the addRecipe function from our store
    // We create a new recipe object with a unique id (using the current timestamp),
    // and the title and description from our state
    addRecipe({ id: Date.now(), title, description });

    // Clear the input fields after submitting
    setTitle('');
    setDescription('');
  };

  // Return the JSX for our form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the recipe title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {/* Textarea for the recipe description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      {/* Submit button for the form */}
      <button type="submit">Add Recipe</button>
    </form>
  );
};

// Export the AddRecipeForm component so it can be used in other files
export default AddRecipeForm;