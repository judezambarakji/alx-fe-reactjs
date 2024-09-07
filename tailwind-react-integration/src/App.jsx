// Import necessary dependencies and assets
import { useState } from "react";
// Import the React logo from the assets folder
import reactLogo from "./assets/react.svg";
// Import the Vite logo from the public folder
import viteLogo from "/vite.svg";
// Import the CSS file for styling
import "./App.css";
// Import the UserProfile component we'll be creating
import UserProfile from "./components/UserProfile";

// Define the main App component
function App() {
  // Use the useState hook to create a state variable 'count' and its setter function 'setCount'
  // Initialize 'count' with a value of 0
  const [count, setCount] = useState(0);

  // The component's return statement, which defines what will be rendered
  return (
    // Fragment shorthand to group multiple elements without adding an extra DOM node
    <>
      {/* Container for logo images */}
      <div>
        {/* Link to Vite's website, opening in a new tab */}
        <a href="https://vitejs.dev" target="_blank">
          {/* Vite logo image */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* Link to React's website, opening in a new tab */}
        <a href="https://react.dev" target="_blank">
          {/* React logo image */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Main heading */}
      <h1>Vite + React</h1>
      {/* Card container */}
      <div className="card">
        {/* Button that increments the count when clicked */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* Instructions for editing the file */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* Additional information */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Add the UserProfile component */}
      <UserProfile />
    </>
  );
}

// Export the App component as the default export
export default App;
