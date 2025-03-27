let Header = () => {
    return (
        <header className="flex justify-center items-center bg-slate-900 w-[100%] h-[14svh]">
            <img src="images/todoIcon.png" alt="todoIcon" className="w-8 h-8 mr-5 sm:w-10 sm:h-10"/>
            <h1 className="text-center text-orange-500 font-[500] tracking-wide overflow-hidden whitespace-nowrap animate-typing text-4xl sm:text-5xl">Todo Mate</h1>
        </header>
    )
}

export default Header;