import React from "react";
import './styles.css';



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

                <span onClick={() => {
                    deleteTodo(todo);
                }} role="button" style={{
                    color: 'red',
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    cursor: "pointer"

                }}>x</span>
            </label>
            
        </li>
    );
};
