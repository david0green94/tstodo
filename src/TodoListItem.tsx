import React from "react";
import {TodoList} from './TodoList'



interface Props {

    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {

    
    

    return (

        <li>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo);
                    }}
                />{' '}

                {todo.text}
                
                <button 
                className="DeleteTodo" 
                onClick={() => {
                    deleteTodo(todo);
                }}
                />
                 X
                
                    

            </label>
        </li>
    );
};
