// Import the React library
import React from 'react';

// Import the UserInfo component from the UserInfo.jsx file
import UserInfo from './UserInfo';

// Define the ProfilePage component as a function
// Note that we no longer need to accept userData as a prop
function ProfilePage() {
  // Return the JSX that represents our component's structure
  return (
    // Render the UserInfo component
    // We no longer need to pass userData as a prop
    <UserInfo />
  );
}

// Export the ProfilePage component so it can be used in other parts of our application
export default ProfilePage;