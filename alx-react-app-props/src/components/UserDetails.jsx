// Import React and the useContext hook from the 'react' library
// useContext allows us to access the context value
import React, { useContext } from 'react';

// Import the UserContext we created in UserContext.js
import UserContext from './UserContext';

// Define the UserDetails component as a function
// Note that we no longer need to accept userData as a prop
function UserDetails() {
  // Use the useContext hook to access the userData from UserContext
  // This replaces the need for prop drilling
  const userData = useContext(UserContext);

  // Return the JSX that represents our component's structure
  return (
    <div>
      {/* Display the user's name, accessing it from the context */}
      <p>Name: {userData.name}</p>
      {/* Display the user's email, accessing it from the context */}
      <p>Email: {userData.email}</p>
    </div>
  );
}

// Export the UserDetails component so it can be used in other parts of our application
export default UserDetails;