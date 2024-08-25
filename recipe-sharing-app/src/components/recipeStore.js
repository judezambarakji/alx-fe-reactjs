// Import the create function from Zustand
// This function allows us to create a custom hook that manages state
import create from 'zustand'

// Create and export our custom hook, useRecipeStore
export const useRecipeStore = create(set => ({
  // Initialize our recipes state as an empty array
  recipes: [],

  // Define an addRecipe function that adds a new recipe to the recipes array
  // This function takes a newRecipe object as an argument
  addRecipe: (newRecipe) => set(state => ({ 
    // Create a new array with all existing recipes plus the new recipe
    recipes: [...state.recipes, newRecipe] 
  })),

  // Define a setRecipes function that replaces the entire recipes array
  // This could be useful for initializing the state with data from an API
  setRecipes: (recipes) => set({ recipes })
}));