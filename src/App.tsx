import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';



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

  const addTodo: AddTodo = (text:string) => {
    const newTodo = {
      text,
      complete:false};
      setTodos([...todos,newTodo]);
  };

  return(
  <>
  <TodoList todos={todos} toggleTodo={toggleTodo} />
  <AddTodoForm addTodo={addTodo}/>
  </>
  );
}




export default App;
