// Define the UserProfile functional component
function UserProfile() {
  // Return JSX that describes the structure and styling of the component
  return (
    // Main container div with Tailwind CSS classes for responsive styling and hover effects
    // Added hover:shadow-xl for enhanced shadow on hover
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-8 sm:my-12 md:my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* User profile image with responsive sizing and hover effect */}
      {/* Added hover:scale-110 and transition properties for smooth scaling on hover */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      {/* User's name with responsive typography and hover effect */}
      {/* Added hover:text-blue-500 for color change on hover */}
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 hover:text-blue-500 my-3 sm:my-4 md:my-5 text-center transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      {/* User's description with responsive typography */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

// Export the UserProfile component as the default export
export default UserProfile;
