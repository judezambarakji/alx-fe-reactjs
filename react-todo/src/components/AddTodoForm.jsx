import React, { useState } from "react";

// AddTodoForm component for adding new todos
function AddTodoForm({ addTodo }) {
  // State to hold the current value of the input field
  const [value, setValue] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Trim the input value to remove whitespace
    const trimmedValue = value.trim();
    // Check if the trimmed value is not empty
    if (trimmedValue) {
      // Call the addTodo function passed as a prop with the trimmed value
      addTodo(trimmedValue);
      // Reset the input field to an empty string
      setValue("");
    }
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering new todo text */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      {/* Submit button for the form */}
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
