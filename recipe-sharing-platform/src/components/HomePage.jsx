import React, { useState, useEffect } from "react";
// Import React and the necessary hooks:
// - useState: to manage the state of our component
// - useEffect: to perform side effects (like data fetching) in our component

const HomePage = () => {
  // Define a state variable 'recipes' and a function to update it 'setRecipes'
  // Initialize it as an empty array
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // The useEffect hook runs after the component is rendered
    // We use it here to fetch our recipe data when the component mounts

    const fetchRecipes = async () => {
      // Define an async function to fetch our recipes
      try {
        // Use the fetch API to get the data from our JSON file
        const response = await fetch("/src/data.json");
        // Parse the JSON response
        const data = await response.json();
        // Update our recipes state with the fetched data
        setRecipes(data);
      } catch (error) {
        // If there's an error, log it to the console
        console.error("Error fetching recipes:", error);
      }
    };

    // Call our fetchRecipes function
    fetchRecipes();
  }, []); // The empty array means this effect runs only once, when the component mounts

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Container for our entire page, centered with auto margins and some padding */}
      <h1 className="text-3xl font-bold mb-6 text-center">Our Recipes</h1>
      {/* Page title, large text, bold, with bottom margin and centered */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Grid container for our recipes
            - 1 column on small screens
            - 2 columns on medium screens
            - 3 columns on large screens
            - Gap of 1.5rem (6 in Tailwind) between grid items */}

        {recipes.map((recipe) => (
          // Map over our recipes array and create a card for each recipe
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Recipe card container
                - White background
                - Rounded corners
                - Shadow for depth
                - Hidden overflow (for image)
                - Hover effect: larger shadow
                - Smooth transition for the shadow change */}

            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            {/* Recipe image
                - Full width
                - Fixed height of 12rem (48 in Tailwind)
                - Object-cover to maintain aspect ratio while filling the space */}

            <div className="p-4">
              {/* Content container with padding */}
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              {/* Recipe title - large text, semi-bold, with bottom margin */}

              <p className="text-gray-600">{recipe.summary}</p>
              {/* Recipe summary - slightly muted color for contrast */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
// Export the HomePage component so it can be imported and used in other parts of our app
