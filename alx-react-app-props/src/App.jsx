// Import the React library, which is necessary for creating React components
import React from 'react';

// Import the ProfilePage component from the ProfilePage.jsx file
import ProfilePage from './ProfilePage';

// Import the UserContext we created in UserContext.js
import UserContext from './UserContext';

// Define the App component as a function
function App() {
  // Create an object containing user data
  // This data will be shared across components using the Context API
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  // Return the JSX that represents our component's structure
  return (
    // Wrap the ProfilePage component with UserContext.Provider
    // This makes the userData available to all child components
    <UserContext.Provider value={userData}>
      {/* Render the ProfilePage component */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

// Export the App component so it can be used in other parts of our application
export default App;