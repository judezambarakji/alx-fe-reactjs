import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

// The main App component that serves as the container for our Todo application
function App() {
  // Initialize the todos state with an empty array
  // useState is a React Hook that lets us add state to functional components
  const [todos, setTodos] = useState([]);

  // Function to add a new todo item
  const addTodo = (text) => {
    // Create a new todo object with a unique id, the given text, and completed status as false
    const newTodo = { id: Date.now(), text, completed: false };
    // Update the todos state by adding the new todo to the existing array
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the completed status of a todo item
  const toggleTodo = (id) => {
    // Map through the todos array and toggle the completed status of the matching todo
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteTodo = (id) => {
    // Filter out the todo with the matching id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Render the main application structure
  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* Render the AddTodoForm component and pass the addTodo function as a prop */}
      <AddTodoForm addTodo={addTodo} />
      {/* Render the TodoList component and pass todos, toggleTodo, and deleteTodo as props */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
