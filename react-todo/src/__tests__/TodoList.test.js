import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./TodoList";

describe("TodoList", () => {
  const mockTodos = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Clean the house", completed: true },
  ];

  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  it("renders todos correctly", () => {
    const { getByText, getAllByRole } = render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    expect(getByText("Buy groceries")).toBeInTheDocument();
    expect(getByText("Clean the house")).toBeInTheDocument();

    const checkboxes = getAllByRole("checkbox");
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });

  it("calls toggleTodo when checkbox is clicked", () => {
    const { getAllByRole } = render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const checkboxes = getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });

  it("calls deleteTodo when delete button is clicked", () => {
    const { getAllByText } = render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const deleteButtons = getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });

  it("applies correct style to completed todos", () => {
    const { getByText } = render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const completedTodo = getByText("Clean the house");
    expect(completedTodo).toHaveStyle("text-decoration: line-through");

    const incompleteTodo = getByText("Buy groceries");
    expect(incompleteTodo).toHaveStyle("text-decoration: none");
  });
});
