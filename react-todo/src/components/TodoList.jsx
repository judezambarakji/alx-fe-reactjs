import React from "react";

// TodoList component for rendering the list of todos
function TodoList({ todos, toggleTodo, deleteTodo }) {
  // Render the list of todos
  return (
    <ul>
      {/* Map through the todos array and render each todo item */}
      {todos.map((todo) => (
        <li key={todo.id}>
          {/* Checkbox for toggling todo completion status */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {/* Todo text with strike-through style if completed */}
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          {/* Button to delete the todo */}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
