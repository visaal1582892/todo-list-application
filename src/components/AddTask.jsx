import { useState } from "react";

let AddTask = (props) => {
    const [showInput,setShowInput]=useState(false);

    function handleClick(){
        setShowInput(!showInput);
    }

    function handleSubmit(event){
        event.preventDefault();
        let form=event.target;
        let todo={
            id: Date.now(),
            task: form.task.value.trim(),
            completed: false
        }
        props.addTodo(todo);
        alert("Task Added Suuccesfully");
        form.reset();
    }

    return (
        <div className="flex flex-col w-[90%] justify-around items-center mt-7 lg:w-[60%]">
            <button className="button" onClick={handleClick}>Add Task</button>
            {showInput && <section id="addTask" className="mt-7">
                <h2 className="font-semibold text-lg text-center text-slate-900">Enter your task here. </h2>
                <form onSubmit={(event)=>handleSubmit(event)} className="grid grid-cols-4 bg-slate-700/90 mt-6 text-xl p-5 space-y-6 text-orange-500 font-medium rounded-lg">
                    <p className="col-span-1 flex justify-center items-center">Task : </p>
                    <textarea id="task" name="task" className="col-span-3 border-2 rounded-lg outline-none px-2 py-1 text-lg auto-fill-none flex justify-center items-center field-sizing-content" autoComplete="off"></textarea>
                    <button className="button w-17 col-start-4">Add</button>
                </form>
            </section>}
        </div>
    );
}

export default AddTask;