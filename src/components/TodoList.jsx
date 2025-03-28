import { useState } from "react";
import TodoHead from "./TodoHead";

let TodoList = (props) => {
    return (
        <div className="flex flex-col justify-start items-center h-[68svh] w-[85%] rounded-xl my-7 border-2 border-dashed border-orange-600 overflow-y-auto space-y-3 p-2 overflow-x-hidden max-w-3xl">

            {/* Using map fun to display all the tasks in todos in params */}
            {props.todos.length!=0?props.todos.map(todo=>(
                <TodoHead key={todo.id} todo={todo} markAsComplete={props.markAsComplete} deleteTodo={props.deleteTodo} editTodo={props.editTodo} />
            )):(<div className="flex w-[90%] h-[90%] justify-center items-center text-3xl text-center text-slate-500 font-medium flex-wrap">
                <img src="/images/emptyIcon.webp" alt="emptyIcon" className="h-[50%] min-w-max" />
                <p>No Tasks added yet. Click add task to some tasks</p> </div>)}
        </div>
    );
}

export default TodoList;