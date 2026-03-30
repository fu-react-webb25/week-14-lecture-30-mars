import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleTodoClick }) => {
    return (
        <ul className="todolist">
            {
                todos.map((todo, index) => {
                    return <TodoItem 
                        todo={ todo }
                        key={ index } 
                        handleTodoClick={ handleTodoClick } 
                    />
                })
            }
        </ul>
    )
}

export default TodoList;