// Import React library. This is necessary for creating React components.
import React from 'react';

// Define the About component as a function.
// This is a functional component, which is a modern way to create React components.
function About() {
  // The component returns JSX, which is a syntax extension for JavaScript.
  // JSX allows us to write HTML-like code in our JavaScript.
  return (
    // This div wraps all the content of our About page.
    // We're using inline styling here. The style prop takes an object where
    // CSS properties are written in camelCase.
    <div style={{ padding: '20px' }}>
      {/* This is the main heading of our About page */}
      <h1>About Us</h1>
      
      {/* This paragraph provides information about the company */}
      <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
    </div>
  );
}

// Export the About component so it can be imported and used in other files.
// This is a default export, which means it can be imported without curly braces.
export default About;