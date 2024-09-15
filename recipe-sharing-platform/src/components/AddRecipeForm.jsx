import React, { useState } from "react";
// Import React and the useState hook for managing component state

const AddRecipeForm = ({ onAddRecipe }) => {
  // Define the AddRecipeForm component as a functional component
  // It receives onAddRecipe as a prop, which will be a function to handle adding the new recipe

  // State for form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [steps, setSteps] = useState("");
  // Initialize state variables for each form field using useState hook

  // State for form validation
  const [errors, setErrors] = useState({});
  // Initialize state for form validation errors

  const validateForm = () => {
    // Function to validate the form inputs
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").filter((i) => i.trim()).length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients";
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Instructions are required";
    }

    if (!steps.trim()) {
      newErrors.steps = "Steps are required";
    } else if (steps.split("\n").filter((s) => s.trim()).length < 2) {
      newErrors.steps = "Please enter at least two steps";
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
        instructions: instructions.split("\n").filter((i) => i.trim()),
        steps: steps.split("\n").filter((s) => s.trim()),
      };

      onAddRecipe(newRecipe);
      // Call the onAddRecipe function passed as a prop with the new recipe

      // Reset form fields
      setTitle("");
      setIngredients("");
      setInstructions("");
      setSteps("");
      // Clear all input fields after successful submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
    >
      {/* Form element with onSubmit handler and Tailwind classes for styling
          - max-w-lg: Set maximum width
          - mx-auto: Center horizontally
          - mt-8: Add top margin
          - p-6: Add padding
          - bg-white: Set background color to white
          - rounded-lg: Add rounded corners
          - shadow-md: Add medium shadow for elevation effect */}

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="ingredients"
          className="block text-gray-700 font-bold mb-2"
        >
          Ingredients (one per line)
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="5"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.ingredients ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="instructions"
          className="block text-gray-700 font-bold mb-2"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows="5"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.instructions ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.instructions && (
          <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
          Steps (one step per line)
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="5"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.steps ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
