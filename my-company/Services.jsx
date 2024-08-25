// Import React library. This is necessary for creating React components.
import React from 'react';

// Define the Services component as a function.
// This is a functional component, which is a modern way to create React components.
function Services() {
  // The component returns JSX, which is a syntax extension for JavaScript.
  // JSX allows us to write HTML-like code in our JavaScript.
  return (
    // This div wraps all the content of our Services page.
    // We're using inline styling here. The style prop takes an object where
    // CSS properties are written in camelCase.
    <div style={{ padding: '20px' }}>
      {/* This is the main heading of our Services page */}
      <h1>Our Services</h1>
      
      {/* This unordered list contains the services offered by the company */}
      <ul>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

// Export the Services component so it can be imported and used in other files.
// This is a default export, which means it can be imported without curly braces.
export default Services;