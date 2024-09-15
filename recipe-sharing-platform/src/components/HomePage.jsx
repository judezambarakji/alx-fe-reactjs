import React, { useState, useEffect } from "react";
// Import React and necessary hooks for managing component state and side effects

import { Link } from "react-router-dom";
// Import the Link component from react-router-dom for creating navigation links

const HomePage = () => {
  // Define the HomePage component as a functional component

  const [recipes, setRecipes] = useState([]);
  // Initialize a state variable 'recipes' as an empty array
  // setRecipes is a function that will be used to update the recipes state

  useEffect(() => {
    // useEffect hook runs after the component renders
    // It's used here to fetch recipe data when the component mounts

    const fetchRecipes = async () => {
      // Define an asynchronous function to fetch recipes
      try {
        // Use a try-catch block to handle potential errors during the fetch operation
        const response = await fetch("/src/data.json");
        // Fetch data from the local JSON file
        // 'await' is used to wait for the fetch operation to complete

        const data = await response.json();
        // Parse the JSON response into a JavaScript object
        // 'await' is used because response.json() returns a promise

        setRecipes(data);
        // Update the 'recipes' state with the fetched data
      } catch (error) {
        // If an error occurs during the fetch or parsing process
        console.error("Error fetching recipes:", error);
        // Log the error to the console for debugging purposes
      }
    };

    fetchRecipes();
    // Call the fetchRecipes function to initiate the data fetching
  }, []); // The empty array means this effect runs only once, when the component mounts

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main container for the HomePage
          - centered with auto horizontal margins
          - horizontal padding of 1rem (4 in Tailwind)
          - vertical padding of 2rem (8 in Tailwind) */}

      <h1 className="text-3xl font-bold mb-6 text-center">Our Recipes</h1>
      {/* Page title
          - large text (3xl in Tailwind)
          - bold font weight
          - bottom margin of 1.5rem (6 in Tailwind)
          - centered text */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Grid container for recipe cards
            - 1 column on small screens
            - 2 columns on medium screens
            - 3 columns on large screens
            - Gap of 1.5rem (6 in Tailwind) between grid items */}

        {recipes.map((recipe) => (
          // Map over the recipes array and create a card for each recipe
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
            {/* Create a link to the recipe detail page
                - The 'to' prop specifies the URL path
                - 'key' prop is required for list rendering in React
                - 'block' class makes the link behave like a block element */}

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Recipe card container
                  - White background
                  - Rounded corners (rounded-lg)
                  - Shadow for depth (shadow-md)
                  - Hidden overflow to contain the image
                  - Hover effect: larger shadow (hover:shadow-xl)
                  - Smooth transition for the shadow change */}

              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              {/* Recipe image
                  - Full width (w-full)
                  - Fixed height of 12rem (h-48 in Tailwind)
                  - object-cover to maintain aspect ratio while filling the space */}

              <div className="p-4">
                {/* Content container with padding */}
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                {/* Recipe title
                    - Large text (text-xl)
                    - Semi-bold font (font-semibold)
                    - Bottom margin of 0.5rem (mb-2) */}

                <p className="text-gray-600">{recipe.summary}</p>
                {/* Recipe summary
                    - Slightly muted color (text-gray-600) for visual hierarchy */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
// Export the HomePage component so it can be imported and used in other parts of the app
