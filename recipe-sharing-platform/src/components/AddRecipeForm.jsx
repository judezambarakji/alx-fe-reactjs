import React, { useState } from 'react';
// Import React and the useState hook for managing component state

const AddRecipeForm = ({ onAddRecipe }) => {
  // Define the AddRecipeForm component as a functional component
  // It receives onAddRecipe as a prop, which will be a function to handle adding the new recipe

  // State for form fields
  const [title, setTitle] = useState('');
  // useState hook to manage the title input
  // title: current value of the title input
  // setTitle: function to update the title state

  const [ingredients, setIngredients] = useState('');
  // useState hook to manage the ingredients input
  // ingredients: current value of the ingredients textarea
  // setIngredients: function to update the ingredients state

  const [instructions, setInstructions] = useState('');
  // useState hook to manage the instructions input
  // instructions: current value of the instructions textarea
  // setInstructions: function to update the instructions state

  const [steps, setSteps] = useState('');
  // NEW: useState hook to manage the steps input
  // steps: current value of the steps textarea
  // setSteps: function to update the steps state

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
      newErrors.title = 'Title is required';
      // If empty, add an error message for the title
    }

    if (!ingredients.trim()) {
      // Check if the ingredients field is empty or just whitespace
      newErrors.ingredients = 'Ingredients are required';
      // If empty, add an error message for the ingredients
    } else if (ingredients.split('\n').filter(i => i.trim()).length < 2) {
      // Check if there are at least two non-empty lines in the ingredients
      newErrors.ingredients = 'Please enter at least two ingredients';
      // If less than two ingredients, add an error message
    }

    if (!instructions.trim()) {
      // Check if the instructions field is empty or just whitespace
      newErrors.instructions = 'Instructions are required';
      // If empty, add an error message for the instructions
    }

    if (!steps.trim()) {
      // NEW: Check if the steps field is empty or just whitespace
      newErrors.steps = 'Steps are required';
      // If empty, add an error message for the steps
    } else if (steps.split('\n').filter(s => s.trim()).length < 2) {
      // NEW: Check if there are at least two non-empty lines in the steps
      newErrors.steps = 'Please enter at least two steps';
      // If less than two steps, add an error message
    }

    setErrors(newErrors);
    // Update the errors state with any validation errors found

    return Object.keys(newErrors).length === 0;
    // Return true if there are no errors (form is valid), false otherwise
  };

  const handleSubmit = (e) => {
    // Function to handle form submission