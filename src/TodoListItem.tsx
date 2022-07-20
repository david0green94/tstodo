import React from "react";



interface Props { 
    todo: Todo; //(local?)prop todo  is of Type Todo? 
    toggleTodo: ToggleTodo; // (local?)prop toggleTodo is of type Toggletodo? 
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
// Dont really understand the interface and <Props> part, but it sure looks like C# Types. 
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

            </label>
        </li>
    );
};
