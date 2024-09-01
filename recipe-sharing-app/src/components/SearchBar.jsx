// Import React and the useState hook for managing local state
import React, { useState, useCallback } from "react";
// Import the useRecipeStore hook from our custom store file
import { useRecipeStore } from "./recipeStore";

// Define the SearchBar component as a function
const SearchBar = () => {
  // Use the useState hook to manage the local state of the input field
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  // Use the useRecipeStore hook to get the setSearchTerm function from our store
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  // Create a debounced version of setSearchTerm using useCallback
  const debouncedSetSearchTerm = useCallback(
    debounce((term) => setSearchTerm(term), 300),
    [setSearchTerm]
  );

  // Define the onChange handler for the input field
  const handleChange = (e) => {
    const newTerm = e.target.value;
    setLocalSearchTerm(newTerm);
    debouncedSetSearchTerm(newTerm);
  };

  // Return the JSX for our search bar
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={localSearchTerm}
      onChange={handleChange}
    />
  );
};

// Helper function to debounce the search term update
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export the SearchBar component so it can be used in other files
export default SearchBar;
