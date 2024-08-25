// Import React library. This is necessary for creating React components.
import React from 'react';

// Import Link component from react-router-dom.
// Link is used to create navigation links in our application.
import { Link } from 'react-router-dom';

// Define the Navbar component as a function.
// This is a functional component, which is a modern way to create React components.
function Navbar() {
  // The component returns JSX, which is a syntax extension for JavaScript.
  // JSX allows us to write HTML-like code in our JavaScript.
  return (
    // This nav element represents our navigation bar.
    // We're using inline styling here. The style prop takes an object where
    // CSS properties are written in camelCase.
    <nav style={{
      background: '#333',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      {/* Each Link component creates a clickable link to a different page in our app. */}
      {/* The 'to' prop specifies the route to navigate to when the link is clicked. */}
      {/* We're using inline styling for each link as well. */}
      <Link to="/" style={{ color: 'white', backgroundColor: 'black' , textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', backgroundColor: 'black', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', backgroundColor: 'black', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', backgroundColor: 'black', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

// Export the Navbar component so it can be imported and used in other files.
// This is a default export, which means it can be imported without curly braces.
export default Navbar;