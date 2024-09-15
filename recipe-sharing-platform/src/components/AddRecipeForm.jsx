import React, { useState } from "react";
// Import React and the useState hook for managing component state

const AddRecipeForm = ({ onAddRecipe }) => {
  // Define the AddRecipeForm component as a functional component
  // It receives onAddRecipe as a prop, which will be a function to handle adding the new recipe

  // State for form fields
  const [title, setTitle] = useState("");
  // useState hook to manage the title input
  // title: current value of the title input
  // setTitle: function to update the title state

  const [ingredients, setIngredients] = useState("");
  // useState hook to manage the ingredients input
  // ingredients: current value of the ingredients textarea
  // setIngredients: function to update the ingredients state

  const [instructions, setInstructions] = useState("");
  // useState hook to manage the instructions input
  // instructions: current value of the instructions textarea
  // setInstructions: function to update the instructions state

  // State for form validation
  const [errors, setErrors] = useState({});
  // useState hook to manage form validation errors
  // errors: object containing error messages for each field
  // setErrors: function to update the errors state

  const validateForm = () => {
    // Function to validate the form inputs
    const newErrors = {};
    // Object to store any validation errors

    if (!title.trim()) {
      // Check if the title is empty or just whitespace
      newErrors.title = "Title is required";
      // If empty, add an error message for the title
    }

    if (!ingredients.trim()) {
      // Check if the ingredients field is empty or just whitespace
      newErrors.ingredients = "Ingredients are required";
      // If empty, add an error message for the ingredients
    } else if (ingredients.split("\n").filter((i) => i.trim()).length < 2) {
      // Check if there are at least two non-empty lines in the ingredients
      newErrors.ingredients = "Please enter at least two ingredients";
      // If less than two ingredients, add an error message
    }

    if (!instructions.trim()) {
      // Check if the instructions field is empty or just whitespace
      newErrors.instructions = "Instructions are required";
      // If empty, add an error message for the instructions
    }

    setErrors(newErrors);
    // Update the errors state with any validation errors found

    return Object.keys(newErrors).length === 0;
    // Return true if there are no errors (form is valid), false otherwise
  };

  const handleSubmit = (e) => {
    // Function to handle form submission
    e.preventDefault();
    // Prevent the default form submission behavior

    if (validateForm()) {
      // If the form is valid (validateForm returns true)
      const newRecipe = {
        // Create a new recipe object with the form data
        title,
        ingredients: ingredients.split("\n").filter((i) => i.trim()),
        // Split ingredients by newline and remove empty lines
        instructions: instructions.split("\n").filter((i) => i.trim()),
        // Split instructions by newline and remove empty lines
      };

      onAddRecipe(newRecipe);
      // Call the onAddRecipe function passed as a prop with the new recipe

      // Reset form fields
      setTitle("");
      setIngredients("");
      setInstructions("");
      // Clear all input fields after successful submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      {/* Form element with onSubmit handler and Tailwind classes for styling */}

      <div className="mb-4">
        {/* Container for the title input field */}
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Recipe Title
        </label>
        {/* Label for the title input */}
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {/* Title input field with value, onChange handler, and dynamic styling based on error state */}
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
        {/* Display error message for title if it exists */}
      </div>

      <div className="mb-4">
        {/* Container for the ingredients textarea */}
        <label
          htmlFor="ingredients"
          className="block text-gray-700 font-bold mb-2"
        >
          Ingredients (one per line)
        </label>
        {/* Label for the ingredients textarea */}
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="5"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.ingredients ? "border-red-500" : "border-gray-300"
          }`}
        />
        {/* Ingredients textarea with value, onChange handler, and dynamic styling based on error state */}
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
        {/* Display error message for ingredients if it exists */}
      </div>

      <div className="mb-4">
        {/* Container for the instructions textarea */}
        <label
          htmlFor="instructions"
          className="block text-gray-700 font-bold mb-2"
        >
          Instructions (one step per line)
        </label>
        {/* Label for the instructions textarea */}
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows="5"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.instructions ? "border-red-500" : "border-gray-300"
          }`}
        />
        {/* Instructions textarea with value, onChange handler, and dynamic styling based on error state */}
        {errors.instructions && (
          <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
        )}
        {/* Display error message for instructions if it exists */}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Recipe
      </button>
      {/* Submit button for the form */}
    </form>
  );
};

export default AddRecipeForm;
// Export the AddRecipeForm component so it can be imported and used in other parts of the app
