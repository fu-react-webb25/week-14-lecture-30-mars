import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = [
        {
            task : 'Mata katten',
            done : true
        },
        {
            task : 'Rasta grisen',
            done : false
        },
        {
            task : 'Köpa glass',
            done : true
        },
        {
            task : 'Äta glass',
            done : false
        },
    ];

    return (
        <ul className="todolist">
            {
                todos.map((todo, index) => {
                    return <TodoItem 
                        todo={ todo }
                        key={ index } 
                    />
                })
            }
        </ul>
    )
}

export default TodoList;