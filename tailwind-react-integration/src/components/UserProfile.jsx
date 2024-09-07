// Define the UserProfile functional component
function UserProfile() {
  // Return JSX that describes the structure and styling of the component
  return (
    // Main container div with Tailwind CSS classes for styling
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      {/* User profile image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto"
      />
      {/* User's name */}
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      {/* User's description */}
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

// Export the UserProfile component as the default export
export default UserProfile;
