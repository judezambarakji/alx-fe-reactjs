// Import React and the useState hook from the 'react' library.
// useState is a Hook that lets you add React state to function components.
import React, { useState } from 'react';

// Define the Contact component as a function.
// This is a functional component, which is a modern way to create React components.
function Contact() {
  // Define state for the form data using the useState hook.
  // formData is an object containing the current state values.
  // setFormData is a function that allows us to update the state.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // This function handles changes in the form inputs.
  // It's called every time a user types in an input field.
  const handleChange = (e) => {
    // Update the formData state.
    // We spread the existing formData and update only the changed field.
    // e.target.name refers to the 'name' attribute of the input that triggered the event.
    // e.target.value is the current value of that input.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This function handles the form submission.
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior.
    // This stops the page from refreshing when the form is submitted.
    e.preventDefault();
    // Show an alert to indicate that the form was submitted.
    // In a real application, you would typically send this data to a server here.
    alert('Form submitted!');
  };

  // The component returns JSX, which is a syntax extension for JavaScript.
  // JSX allows us to write HTML-like code in our JavaScript.
  return (
    // This div wraps all the content of our Contact page.
    // We're using inline styling here. The style prop takes an object where
    // CSS properties are written in camelCase.
    <div style={{ padding: '20px' }}>
      {/* This is the main heading of our Contact page */}
      <h1>Contact Us</h1>
      
      {/* This form handles user input for contacting the company */}
      {/* The onSubmit prop specifies what happens when the form is submitted */}
      <form onSubmit={handleSubmit}>
        {/* Input field for the user's name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        {/* Input field for the user's email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        {/* Textarea for the user's message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        {/* Submit button for the form */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

// Export the Contact component so it can be imported and used in other files.
// This is a default export, which means it can be imported without curly braces.
export default Contact;