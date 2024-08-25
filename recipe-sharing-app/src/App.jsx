// Import React and necessary components from react-router-dom for routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import the AddRecipeForm component from its file
import AddRecipeForm from './AddRecipeForm';

// Import the RecipeList component from its file
import RecipeList from './RecipeList';

// Import the RecipeDetails component from its file
import RecipeDetails from './RecipeDetails';

// Define the main App component as a function
function App() {
  // The component returns JSX, which is a syntax extension for JavaScript
  return (
    // Wrap the entire app in a Router component to enable routing
    <Router>
      {/* This div wraps all the content of our application */}
      <div className="App">
        {/* This is the main heading of our application */}
        <h1>Recipe Sharing App</h1>

        {/* Render the AddRecipeForm component */}
        {/* This component will allow users to add new recipes */}
        <AddRecipeForm />

        {/* Use Switch to render only one route at a time */}
        <Switch>
          {/* Route for the main page, showing the list of recipes */}
          <Route exact path="/">
            <RecipeList />
          </Route>
          {/* Route for individual recipe details */}
          {/* The :id in the path is a parameter that will be passed to the component */}
          <Route path="/recipe/:id">
            {/* Use render prop to pass the id parameter to RecipeDetails */}
            {({ match }) => (
              <RecipeDetails recipeId={parseInt(match.params.id)} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Export the App component so it can be imported and used in other files
export default App;