import React, { useState, useEffect } from "react";
// Import React and necessary hooks for managing component state and side effects

import { useParams, Link } from "react-router-dom";
// Import useParams to access URL parameters and Link for navigation

const RecipeDetail = () => {
  // Define the RecipeDetail component as a functional component

  const [recipe, setRecipe] = useState(null);
  // Initialize a state variable 'recipe' as null
  // setRecipe is a function that will be used to update the recipe state

  const { id } = useParams();
  // Extract the 'id' parameter from the URL using useParams hook

  useEffect(() => {
    // useEffect hook runs after the component renders
    // It's used here to fetch recipe data when the component mounts or when the id changes

    const fetchRecipe = async () => {
      // Define an asynchronous function to fetch the specific recipe
      try {
        // Use a try-catch block to handle potential errors during the fetch operation
        const response = await fetch("/src/data.json");
        // Fetch data from the local JSON file
        // 'await' is used to wait for the fetch operation to complete

        const data = await response.json();
        // Parse the JSON response into a JavaScript object
        // 'await' is used because response.json() returns a promise

        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        // Find the recipe in the data array that matches the ID from the URL
        // parseInt is used to convert the string ID to a number for comparison

        setRecipe(selectedRecipe);
        // Update the 'recipe' state with the found recipe
      } catch (error) {
        // If an error occurs during the fetch or parsing process
        console.error("Error fetching recipe:", error);
        // Log the error to the console for debugging purposes
      }
    };

    fetchRecipe();
    // Call the fetchRecipe function to initiate the data fetching
  }, [id]); // The effect depends on 'id', so it will run whenever 'id' changes

  if (!recipe) {
    // If the recipe hasn't been loaded yet
    return <div className="text-center mt-8">Loading...</div>;
    // Display a loading message centered on the page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main container for the RecipeDetail
          - centered with auto horizontal margins
          - horizontal padding of 1rem (4 in Tailwind)
          - vertical padding of 2rem (8 in Tailwind) */}

      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Recipes
      </Link>
      {/* Back link to the home page
          - Blue text color
          - Underline on hover
          - Bottom margin of 1rem (4 in Tailwind)
          - Displayed as an inline-block */}

      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      {/* Recipe title
          - Large text (3xl in Tailwind)
          - Bold font weight
          - Bottom margin of 1.5rem (6 in Tailwind) */}

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      {/* Recipe image
          - Full width
          - Fixed height of 16rem (64 in Tailwind)
          - Maintain aspect ratio with object-cover
          - Rounded corners
          - Bottom margin of 1.5rem (6 in Tailwind) */}

      <p className="text-gray-700 mb-6">{recipe.summary}</p>
      {/* Recipe summary
          - Slightly muted color for readability
          - Bottom margin of 1.5rem (6 in Tailwind) */}

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Container for ingredients
            - White background
            - Shadow for depth
            - Rounded corners
            - Padding of 1.5rem (6 in Tailwind)
            - Bottom margin of 1.5rem (6 in Tailwind) */}

        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        {/* Section title for ingredients */}

        <ul className="list-disc pl-5">
          {/* Unordered list with disc-style bullets and left padding */}
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2">
              {ingredient}
            </li>
            // List each ingredient with bottom margin for spacing
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Container for instructions
            - White background
            - Shadow for depth
            - Rounded corners
            - Padding of 1.5rem (6 in Tailwind) */}

        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        {/* Section title for instructions */}

        <ol className="list-decimal pl-5">
          {/* Ordered list with decimal numbering and left padding */}
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-3">
              {step}
            </li>
            // List each instruction step with bottom margin for spacing
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
// Export the RecipeDetail component so it can be imported and used in other parts of the app
