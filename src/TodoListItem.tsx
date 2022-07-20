import React from "react";

interface Todo {

    text: string;
    complete: boolean;
}

interface Props {

    Todo: Todo;
}

export const ToDoListItem: React.FC<Props> = ({ Todo }) => {

    return (

        <li>
            <label
                style={{ textDecoration: Todo.complete ? 'line-through' : undefined }}
            >
                <input type="checkbox" checked={Todo.complete} /> {Todo.text}

            </label>
        </li>
    );
};
