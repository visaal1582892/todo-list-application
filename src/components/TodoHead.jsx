let TodoHead = (props) => {
    return (
        <div className="flex justify-between items-center bg-slate-800 w-[100%] rounded-lg min-h-[10vh] p-3">
            <input type="checkbox" className="appearence-none accent-orange-500 w-6 h-6 col-span-1 shrink-0 grow-0 mr-3"/>
            <p className="text-orange-500 text-xl break-words w-[100%] h-[100%] text-center col-span-7 flex items-center overflow-x-auto px-1">{props.todo.task}</p>
            <button className="bg-transparent col-span-2 h-12 w-17 flex justify-center items-center shrink-0 grow-0"><img src="/images/menuIcon.png" alt="menuIcon" className="h-[100%] w-[100%]"/></button>
        </div>
    )
}

export default TodoHead;