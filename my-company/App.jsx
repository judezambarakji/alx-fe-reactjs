// Import necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our custom components
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

// Define the App component
function App() {
  return (
    // Router component wraps our entire app, enabling routing functionality
    <Router>
      {/* Navbar component will appear on all pages */}
      <Navbar />
      
      {/* Routes component defines our application routes */}
      <Routes>
        {/* Each Route component maps a path to a specific component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;