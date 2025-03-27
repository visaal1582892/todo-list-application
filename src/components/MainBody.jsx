import AddTask from './AddTask.jsx';
import TodoList from './TodoList.jsx';
import { useState } from 'react';

let MainBody = () => {

    const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('todolist')) || []);
    
    let deleteTodo = (id) => {
        let updatedTodos=todos.filter(todo => todo.id!=id);
        setTodos(updatedTodos);
    }

    let addTodo = (todo) => {
        let updatedTodos=[...todos, todo];
        setTodos(updatedTodos);
        localStorage.setItem('todolist',JSON.stringify(updatedTodos));
    }

    return (
        <main className="bg-radial from-orange-100 from-[50%] to-orange-300 w-[100%] flex flex-col md:from-orange-200 md:to-orange-400 justify-start items-center">
            <AddTask addTodo={addTodo} />
            <TodoList todos={todos} />
        </main>
    )
}

export default MainBody;