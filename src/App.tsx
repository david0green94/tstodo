import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
//import './App.css';

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos); // returns the current stae and a function to set the state.

  const deleteTodo = (selectedTodo: Todo) => {
    //function toggletodo, takes in a Todo of type Selected Todo??
    const newTodos = todos.filter((x) => x !== selectedTodo);
    console.log("Delete Todo");
    console.log("todo:");
    console.log("Selectedtodo", selectedTodo);
    console.log("newTodos", newTodos);

    setTodos(newTodos);
  };

  const toggleTodo = (selectedTodo: Todo) => {
    //function toggletodo, takes in a Todo of type Selected Todo??
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="todolist-container">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </>
  );
}
