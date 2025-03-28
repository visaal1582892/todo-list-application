// body part

import AddTask from './AddTask.jsx';
import TodoList from './TodoList.jsx';
import { useState } from 'react';

let MainBody = () => {

    // Created todos state here from which we can pass them to any element
    const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('todolist')) || []);
    
    // Fun for deleting task
    let deleteTodo = (id) => {
        let updatedTodos=todos.filter(todo => todo.id!=id);
        setTodos(updatedTodos);
        localStorage.setItem('todolist',JSON.stringify(updatedTodos));
        alert("task deleted successfully");
    }

    // Fun for editing task
    let editTodo = (updatedTodo, input) => {
        let updatedTodos=[...todos];
        let index=updatedTodos.findIndex(todo => todo.id==updatedTodo.id);
        updatedTodos[index].task=input;
        setTodos(updatedTodos);
        localStorage.setItem('todolist',JSON.stringify(updatedTodos));
        alert("task edited successfully");
    }

    // Fun for adding a new task
    let addTodo = (todo) => {
        let updatedTodos=[...todos, todo];
        setTodos(updatedTodos);
        localStorage.setItem('todolist',JSON.stringify(updatedTodos));
    }

    // Fun for marking as complete
    let markAsComplete = (todo) => {
        let updatedTodos=[...todos];
        let index=updatedTodos.findIndex((currtodo)=>currtodo.id==todo.id);
        let task=updatedTodos[index];
        task.completed=true;
        updatedTodos.splice(index,1);
        updatedTodos.push(task);
        setTodos(updatedTodos);
        localStorage.setItem('todolist',JSON.stringify(updatedTodos));
    }

    return (
        <main className="bg-radial from-orange-100 from-[50%] to-orange-300 w-[100%] flex flex-col md:from-orange-200 md:to-orange-400 justify-start items-center">

            {/* Added input element */}
            <AddTask addTodo={addTodo} />

            {/* List Display */}
            <TodoList todos={todos} markAsComplete={markAsComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </main>
    )
}

export default MainBody;