import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];


function App() {
  const [todos, setTodos] = useState(initialTodos); // returns the current stae and a function to set the state. 

  const toggleTodo = (selectedTodo: Todo) => { //function toggletodo, takes in a Todo of type Selected Todo??
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


return (
  <>
    <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </ul>

  </>
);
}




export default App;
