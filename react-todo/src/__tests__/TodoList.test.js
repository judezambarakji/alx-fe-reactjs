import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

// Test suite for the TodoList component
describe("TodoList", () => {
  // Sample todos for testing
  const todos = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Clean the house", completed: true },
  ];

  // Mock functions for toggleTodo and deleteTodo
  const toggleTodo = jest.fn();
  const deleteTodo = jest.fn();

  // Test case: TodoList renders correctly
  test("renders todos correctly", () => {
    const { getByText, getAllByRole } = render(
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    // Check if both todo items are rendered
    expect(getByText("Buy groceries")).toBeInTheDocument();
    expect(getByText("Clean the house")).toBeInTheDocument();

    // Check if checkboxes are rendered with correct checked state
    const checkboxes = getAllByRole("checkbox");
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });

  // Test case: toggleTodo is called when checkbox is clicked
  test("calls toggleTodo when checkbox is clicked", () => {
    const { getAllByRole } = render(
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    const checkboxes = getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    expect(toggleTodo).toHaveBeenCalledWith(1);
  });

  // Test case: deleteTodo is called when delete button is clicked
  test("calls deleteTodo when delete button is clicked", () => {
    const { getAllByText } = render(
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    const deleteButtons = getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(deleteTodo).toHaveBeenCalledWith(1);
  });
});
