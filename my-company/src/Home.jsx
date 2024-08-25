// Import React library. This is necessary for creating React components.
import React from 'react';

// Define the Home component as a function.
// This is a functional component, which is a modern way to create React components.
function Home() {
  // The component returns JSX, which is a syntax extension for JavaScript.
  // JSX allows us to write HTML-like code in our JavaScript.
  return (
    // This div wraps all the content of our Home page.
    // We're using inline styling here. The style prop takes an object where
    // CSS properties are written in camelCase.
    <div style={{ padding: '20px' }}>
      {/* This is the main heading of our Home page */}
      <h1>Welcome to Our Company</h1>
      
      {/* This paragraph provides a brief introduction */}
      <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

// Export the Home component so it can be imported and used in other files.
// This is a default export, which means it can be imported without curly braces.
export default Home;