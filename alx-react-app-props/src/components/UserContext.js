// Import the createContext function from the 'react' library
// This function allows us to create a new Context object
import { createContext } from 'react';

// Create a new Context object called UserContext
// The default value is set to null, which will be used if a component
// tries to use this context without a matching Provider above it in the tree
const UserContext = createContext(null);

// Export the UserContext so it can be imported and used in other files
export default UserContext;