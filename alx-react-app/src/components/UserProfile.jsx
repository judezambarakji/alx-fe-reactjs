// Import React and the useContext hook from the 'react' library
import React, { useContext } from 'react';

// Import the UserContext we created in UserContext.js
import UserContext from './UserContext';

// Define the UserProfile component as a function
const UserProfile = () => {
  // Use the useContext hook to access the userData from UserContext
  const userData = useContext(UserContext);

  // Return the JSX that represents our component's structure
  return (
    <div>
      {/* Display the user's name, accessing it from the context */}
      <h2>{userData.name}</h2>
      {/* Display the user's age, accessing it from the context */}
      <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>
      {/* Display the user's bio, accessing it from the context */}
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

// Export the UserProfile component so it can be used in other parts of our application
export default UserProfile;