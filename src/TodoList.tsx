import React from "react";  
import { TodoListItem } from "./TodoListItem";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

interface Props {

    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({todos,toggleTodo}) => {
return (

    <UnorderedList>

{todos.map((todo) => (

    <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
))}

    </UnorderedList>
)

}