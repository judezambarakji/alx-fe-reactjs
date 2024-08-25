// Import the React library
import React from 'react';

// Import the UserDetails component from the UserDetails.jsx file
import UserDetails from './UserDetails';

// Define the UserInfo component as a function
// Note that we no longer need to accept userData as a prop
function UserInfo() {
  // Return the JSX that represents our component's structure
  return (
    // Render the UserDetails component
    // We no longer need to pass userData as a prop
    <UserDetails />
  );
}

// Export the UserInfo component so it can be used in other parts of our application
export default UserInfo;