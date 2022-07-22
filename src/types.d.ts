interface Todo {

    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type DeleteTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
//type DeleteTodo = (e: ChangeEvent<HTMLButtonElement>) => void;
