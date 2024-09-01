// Import the 'create' function from the 'zustand' library
// Zustand is a small, fast, and scalable state management solution
import create from "zustand";

// Create and export a custom hook called useRecipeStore
// This hook will manage the global state for our recipe application
export const useRecipeStore = create((set, get) => ({
  // Initialize an empty array to store all recipes
  recipes: [],

  // Initialize an empty string to store the current search term
  searchTerm: "",

  // Initialize an empty array to store the filtered recipes
  filteredRecipes: [],

  // Initialize an empty array to store the user's favorite recipe IDs
  favorites: [],

  // Initialize an empty array to store recommended recipes
  recommendations: [],

  // Function to add a new recipe to the recipes array
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      // After adding a new recipe, update the filtered recipes
      filteredRecipes: get().filterRecipes(get().searchTerm),
    })),

  // Function to delete a recipe from the recipes array
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        // After deleting a recipe, update the filtered recipes
        filteredRecipes: get().filterRecipes(get().searchTerm, updatedRecipes),
      };
    }),

  // Function to update an existing recipe in the recipes array
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        // After updating a recipe, update the filtered recipes
        filteredRecipes: get().filterRecipes(get().searchTerm, updatedRecipes),
      };
    }),

  // Function to set the entire recipes array
  setRecipes: (recipes) =>
    set({
      recipes,
      // After setting new recipes, update the filtered recipes
      filteredRecipes: get().filterRecipes(get().searchTerm, recipes),
    }),

  // Function to set the search term and update filtered recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  // Function to filter recipes based on the search term
  filterRecipes: (term, recipeList) => {
    const recipes = recipeList || get().recipes;
    const filtered = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.description.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRecipes: filtered });
    return filtered;
  },

  // Function to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  // Function to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Function to generate recipe recommendations
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
