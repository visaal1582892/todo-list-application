import { useState } from "react";
import TodoHead from "./TodoHead";

let TodoList = (props) => {
    return (
        <div className="flex flex-col justify-start items-center h-[68svh] w-[85%] rounded-xl my-7 border-2 border-dashed border-orange-600 overflow-y-auto space-y-3 p-2 overflow-x-hidden">
            {props.todos.map(todo=>(
                <TodoHead key={todo.id} todo={todo} markAsComplete={props.markAsComplete} deleteTodo={props.deleteTodo} editTodo={props.editTodo} />
            ))}
        </div>
    );
}

export default TodoList;