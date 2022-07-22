import React from "react";  
import { TodoListItem } from "./TodoListItem";
import './styles.css';

interface Props {

    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteTodo:DeleteTodo;
}

export const TodoList: React.FC<Props> = ({todos,toggleTodo,deleteTodo}) => {

   
    
    
    console.log(todos);
return (
<div className="todolist-container">
    <ul>

{todos.map((todo) => (

    <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
))}

    </ul>
    </div>
)

}