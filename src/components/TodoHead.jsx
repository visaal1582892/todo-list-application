import { useState } from "react";

let TodoHead = (props) => {
    let todo=props.todo;

    // state to track showing options or not
    const [showOptions,setShowOptions]=useState(false);

    // State to track edit btton is clicked or not
    const [edit,setEdit]=useState(false);

    // state to track any change in input
    const [input,setInput]=useState(props.todo.task);

    // Fun to handle options click
    let handleOptionsClick = () => {
        setShowOptions(!showOptions);
    }

    // Fun to handle edit click
    let handleEditClick = () => {
        setShowOptions(false);
        setEdit(!edit);
    }

    // Fun to handle confirm click
    let handleConfirmEdit = () => {
        props.editTodo(props.todo,input.trim());
        setEdit(!edit);
    }

    // Fun to handle chnges in text area
    let handleTextareaChange = (event) => {
        setInput(event.target.value);
    }
 
    return (
        <div className="flex justify-between items-center bg-slate-800 w-[100%] rounded-lg min-h-[10vh] p-3 relative">

            {/* shows check box which tracks whether task is completed or not */}
            {!edit && <input type="checkbox" className="appearence-none accent-orange-500 w-6 h-6 col-span-1 shrink-0 grow-0 mr-3 cursor-pointer" onChange={todo.completed?null:() => props.markAsComplete(todo)} checked={todo.completed} />}

            {/* Shows task name or input according to the edit state */}
            {!edit?<p className={`text-orange-500 text-xl break-words w-[100%] h-[100%] text-center col-span-7 flex items-center overflow-x-auto px-1 ${todo.completed && "line-through decoration-3 decoration-white"}`}>{props.todo.task}</p>:
            <textarea className="col-span-3 border-2 rounded-lg outline-none px-2 py-1 text-lg auto-fill-none flex justify-center items-center field-sizing-content text-orange-500 font-medium w-[100%]" autoComplete="off" value={input} onChange={(event)=>handleTextareaChange(event)}></textarea>}

            {/* Button to handle show options and confirm edit */}
            <button className="bg-transparent col-span-2 h-12 w-17 flex justify-center items-center shrink-0 grow-0 hover:outline-2 hover:outline-orange-500" onClick={edit?handleConfirmEdit:handleOptionsClick}><img src={edit?"/images/okIcon.png":"/images/menuIcon.png"} alt="menuIcon" className="h-[100%] w-[100%]"/></button>

            {/* shows options or hides options accoding to state */}
            {showOptions && <section id="options" className="absolute bg-orange-500 rounded-lg flex justify-around items-center w-40 h-[100%] right-0 animate-sliding">
                <img src="/images/rightIcon.png" alt="rightIcon" className="cursor-pointer h-[30%]" onClick={handleOptionsClick} />
                {!todo.completed && <img src="/images/editIcon.png" alt="editIcon" className="cursor-pointer h-[50%]" onClick={handleEditClick}/>}
                <img src="/images/deleteIcon.png" alt="deleteIcon" className="h-[50%] cursor-pointer" onClick={() => props.deleteTodo(todo.id)}/>
            </section>}
        </div>
    )
}

export default TodoHead;